"""Backend tests for DERIS reviews API."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://jaket-komunitas.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def created_ids():
    return []


# === Health ===
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()


# === POST /api/reviews ===
class TestCreateReview:
    def test_create_review_returns_pending_with_id(self, session, created_ids):
        payload = {"name": "Test Reviewer A", "org": "Test Org", "rating": 5, "text": "Great service"}
        r = session.post(f"{API}/reviews", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["status"] == "pending"
        assert data["name"] == "Test Reviewer A"
        assert data["org"] == "Test Org"
        assert data["rating"] == 5
        assert data["text"] == "Great service"
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        assert "date" in data and "created_at" in data
        created_ids.append(data["id"])

    def test_create_with_photo(self, session, created_ids):
        payload = {"name": "Test Reviewer B", "org": "Org B", "rating": 4, "text": "Nice!",
                   "photo_data_url": "data:image/png;base64,AAAA"}
        r = session.post(f"{API}/reviews", json=payload)
        assert r.status_code == 200
        d = r.json()
        assert d["photo_data_url"] == "data:image/png;base64,AAAA"
        created_ids.append(d["id"])

    def test_rating_too_high(self, session):
        r = session.post(f"{API}/reviews", json={"name": "Test X", "org": "X", "rating": 6, "text": "x"})
        assert r.status_code == 422

    def test_rating_too_low(self, session):
        r = session.post(f"{API}/reviews", json={"name": "Test X", "org": "X", "rating": 0, "text": "x"})
        assert r.status_code == 422

    def test_missing_field(self, session):
        r = session.post(f"{API}/reviews", json={"name": "Test X", "rating": 3, "text": "x"})
        assert r.status_code == 422


# === GET /api/reviews ===
class TestListReviews:
    def test_list_pending_includes_created(self, session, created_ids):
        r = session.get(f"{API}/reviews?status=pending")
        assert r.status_code == 200
        ids = [x["id"] for x in r.json()]
        for cid in created_ids:
            assert cid in ids
        for x in r.json():
            assert x["status"] == "pending"

    def test_list_approved_default(self, session):
        r = session.get(f"{API}/reviews")
        assert r.status_code == 200
        for x in r.json():
            assert x["status"] == "approved"

    def test_list_approved_explicit(self, session):
        r = session.get(f"{API}/reviews?status=approved")
        assert r.status_code == 200
        for x in r.json():
            assert x["status"] == "approved"


# === PATCH /api/reviews/{id} ===
class TestPatchReview:
    def test_approve_review(self, session, created_ids):
        rid = created_ids[0]
        r = session.patch(f"{API}/reviews/{rid}", json={"status": "approved"})
        assert r.status_code == 200, r.text
        assert r.json()["status"] == "approved"
        # Verify it now appears in approved list
        r2 = session.get(f"{API}/reviews?status=approved")
        assert rid in [x["id"] for x in r2.json()]

    def test_reject_review(self, session, created_ids):
        rid = created_ids[1]
        r = session.patch(f"{API}/reviews/{rid}", json={"status": "rejected"})
        assert r.status_code == 200
        assert r.json()["status"] == "rejected"

    def test_patch_nonexistent(self, session):
        r = session.patch(f"{API}/reviews/nonexistent-id-xxx", json={"status": "approved"})
        assert r.status_code == 404

    def test_patch_invalid_status(self, session, created_ids):
        rid = created_ids[0]
        r = session.patch(f"{API}/reviews/{rid}", json={"status": "garbage"})
        assert r.status_code == 422


# === Cleanup ===
def test_zz_cleanup(session, created_ids):
    """Cleanup: remove all TEST_ reviews directly via mongo."""
    from pymongo import MongoClient
    mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
    db_name = os.environ.get('DB_NAME', 'test_database')
    c = MongoClient(mongo_url)
    res = c[db_name].reviews.delete_many({"name": {"$regex": "^Test"}})
    print(f"Cleaned up {res.deleted_count} test reviews")
