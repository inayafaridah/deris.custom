# DERIS — Custom Apparel Website PRD

## Original Problem Statement
Build a UMKM business website for **DERIS** — vendor jaket custom (kemeja, kaos, topi) di Bandung & Jakarta.

## User Choices (cumulative)
- Interactive canvas designer for "Make a Design"
- Indonesian language
- WhatsApp only — no database
- All 7 pages initially, then revised: replaced Contact with Join the Story
- DERIS logo provided (and 5 client logos), foto utama1, size1-4 images uploaded
- Use Gemini Nano Banana for missing images (infrastructure in place — `generate_images.py`)
- Simple dark/light theme toggle

## Architecture
- **Frontend only** — React + React Router + TailwindCSS + Shadcn/UI + Phosphor Icons
- No DB. WhatsApp deeplink for all orders.
- Gemini Nano Banana script `/app/backend/generate_images.py` available (uses EMERGENT_LLM_KEY)

## Pages (current)
- Home: hero, logo marquee (5 clients), values, products preview, Our Services (4 packages), Designer CTA, Kata Mereka reviews carousel
- About: logo display, foto utama1, story cards, 3-step process, CountUp stats
- Products: 10 products (incl. Lanyard, Harrington, Coach, Windbreaker), no prices, materials list, 4 visual size charts + zoom, Drive link
- Make a Design: 3-step flow — category select → have-design-or-create → upload OR interactive editor with align toggle and 8 fonts
- Portfolio: 6 client galleries with Lightbox (keyboard navigation)
- FAQ: 8 questions (incl. size chart)
- Join the Story: hero, auto-rotating quotes (5), form (name/org/rating/text/photo), success state, featured reviews

## Components
- Sticky header with logo, theme toggle (dark/light), Order via WA, mobile menu
- Footer with massive brand text, navigation, contacts
- LogoMarquee, ReviewsCarousel, CountUp, Lightbox, ThemeContext

## Theme System
- CSS variables in `:root` and `html.light-mode`
- Light mode: bg #FAFAFA, surface #FFFFFF, text dark, gold accent unchanged
- Persists via localStorage `deris-theme`
- Hero text uses `text-[#FFFFFF]` arbitrary class to stay white over dark image

## Testing
- Iteration 1: 100% pass (initial 7-page MVP)
- Iteration 2: 100% pass (10+ feature major revision)

## Backlog
### P0
- Generate AI product/portfolio images via Gemini Nano Banana script (infrastructure ready, just run `python generate_images.py` — uses LLM credits)

### P1
- Floating WhatsApp button (sticky on all pages)
- Designer: "Download Mockup" feature (html2canvas export)
- Differentiate back-view jacket SVG more visibly

### P2
- Split Designer.jsx (442 lines) into separate component files
- SEO meta tags per page
- Google Reviews integration
- Order tracking system (requires backend)
