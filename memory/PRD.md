# DERIS — Custom Apparel Website PRD

## Original Problem Statement
Build a UMKM business website for **DERIS** — vendor jaket custom (kemeja, kaos, topi) di Bandung & Jakarta.

## User Choices (cumulative)
- Interactive canvas designer for "Make a Design"
- Indonesian language only
- WhatsApp ordering; backend ONLY for reviews moderation
- Pages: Home, About, Product, Make a Design, Portfolio, FAQ, Join the Story
- DERIS logo, 5 client logos (KMTB, BEM UTB, IEEE Telkom, Tel-U, HMT Telekomunikasi), foto utama1, 4 size-charts uploaded
- AI image generation via Gemini Nano Banana (10 product images generated)
- Simple dark/light theme toggle
- WhatsApp number: 081213167737

## Architecture
- React (CRA) + React Router + Tailwind + Shadcn/UI + Phosphor Icons + framer-motion + html-to-image
- FastAPI backend with MongoDB (reviews collection only)
- Gemini Nano Banana via `emergentintegrations` (used by `/app/backend/generate_images.py`)
- All 10 product PNGs in `/app/frontend/public/generated/`

## Pages (current)
- **Home**: hero · client logo marquee (logo-only) · Designer CTA · 4 values · 6 products · Our Services 4 packages · Kata Mereka reviews carousel (merges API approved + static)
- **About**: logo display · foto utama1 hero · story+mission cards · 3-step process · CountUp stats
- **Products**: 10 products in 3 categories (Jaket, Pakaian, Aksesoris), no prices · materials list · 4 visual size charts + zoom + Drive link
- **Make a Design**: Step 1 category select → Step 2 have/create → Step 3a upload (JPG/PNG/PDF/AI/CDR) OR Step 3b interactive editor with double-click inline text edit + Download Mockup PNG export
- **Portfolio**: 6 client galleries with keyboard-navigable Lightbox
- **FAQ**: 8 questions
- **Join the Story**: hero · 5 auto-rotating quotes · form (name/org/star-rating/text/photo) → POST /api/reviews → success animation → WA admin notification · Featured Reviews grid

## Backend Endpoints
- `GET /api/` health check
- `POST /api/reviews` create review (status="pending")
- `GET /api/reviews?status={pending|approved|rejected|all}` list
- `PATCH /api/reviews/{id}` `{status: "approved"|"rejected"}` moderate

## Theme System
- CSS variables in `:root` and `html.light-mode`
- Persists via localStorage `deris-theme`
- Hero/portfolio overlay text uses arbitrary `text-[#FFFFFF]` to stay white over dark images

## Test History
- Iteration 1: 100% (7-page MVP)
- Iteration 2: 100% (10+ feature revision)
- Iteration 3: 100% (14/14 backend + 18/18 frontend — auto-publish reviews, AI images, Download Mockup, double-click edit, category restructure, foto utama1, WA number change)

## Backlog
### P0
- Build simple `/admin/reviews` page for moderator UI (currently must PATCH manually via API)

### P1
- Rate-limit POST /api/reviews to prevent spam
- Cap photo_data_url size on backend (e.g. compress > 1MB)
- Floating WhatsApp button (sticky on all pages)

### P2
- SEO meta tags per page, sitemap.xml
- Differentiate jacket back-view SVG
- Order tracking system

## Key Files
- Frontend: `App.js`, `lib/constants.js`, `contexts/ThemeContext.jsx`, `components/{Header,Footer,Layout,LogoMarquee,ReviewsCarousel,CountUp,Lightbox}.jsx`, `pages/{Home,About,Products,Designer,Portfolio,FAQ,JoinStory}.jsx`
- Backend: `server.py` (reviews API), `generate_images.py` (Gemini Nano Banana batch gen)
- Generated: `/app/frontend/public/generated/*.png` (10 product images)
- Test: `/app/backend/tests/test_reviews.py`
