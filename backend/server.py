from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ===== Status (legacy) =====
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "DERIS API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    items = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for c in items:
        if isinstance(c.get('timestamp'), str):
            c['timestamp'] = datetime.fromisoformat(c['timestamp'])
    return items


# ===== Reviews / Join the Story =====
class ReviewIn(BaseModel):
    name: str
    org: str
    rating: int = Field(ge=1, le=5)
    text: str
    photo_data_url: Optional[str] = None  # base64 data URL, optional


class Review(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    org: str
    rating: int
    text: str
    photo_data_url: Optional[str] = None
    status: Literal["pending", "approved", "rejected"] = "pending"
    date: str  # display date in id-ID style "12 Jan 2025"
    created_at: str  # ISO timestamp


def _fmt_date_id(dt: datetime) -> str:
    months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
    return f"{dt.day} {months[dt.month - 1]} {dt.year}"


@api_router.post("/reviews", response_model=Review)
async def create_review(payload: ReviewIn):
    now = datetime.now(timezone.utc)
    review = Review(
        **payload.model_dump(),
        date=_fmt_date_id(now),
        created_at=now.isoformat(),
    )
    await db.reviews.insert_one(review.model_dump())
    return review


@api_router.get("/reviews", response_model=List[Review])
async def list_reviews(status: Literal["pending", "approved", "rejected", "all"] = "approved"):
    query = {} if status == "all" else {"status": status}
    items = await db.reviews.find(query, {"_id": 0}).sort("created_at", -1).to_list(200)
    return items


class ReviewAction(BaseModel):
    status: Literal["approved", "rejected"]


@api_router.patch("/reviews/{review_id}", response_model=Review)
async def update_review(review_id: str, action: ReviewAction):
    result = await db.reviews.find_one_and_update(
        {"id": review_id},
        {"$set": {"status": action.status}},
        return_document=True,
        projection={"_id": 0},
    )
    if not result:
        raise HTTPException(status_code=404, detail="Review not found")
    return result


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
