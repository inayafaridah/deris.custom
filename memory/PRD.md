# DERIS — Custom Apparel Website PRD

## Original Problem Statement
Build a UMKM business website for **DERIS** — vendor jaket custom (kemeja, kaos, topi) di Bandung & Jakarta.
- Tagline: *Jaket Custom untuk Cerita dan Solidaritas*
- Target: Mahasiswa, organisasi kampus, himpunan, komunitas
- Warna brand: Hitam, Putih, Emas
- Mood: Modern, kekinian, rapi, profesional, premium
- Referensi visual: Mimikri Supply & CustomVarsity
- Fitur khusus: Make a Custom Design (interactive canvas designer)
- Kontak: WA 08312345343, IG @deris.custom

## User Choices (confirmed)
1. Designer: **Interactive canvas** (drag/drop logo + text on jacket mockup, front/back, real-time preview)
2. Images: **Stock/placeholder** (varsity jackets, kaos, hoodie, topi)
3. Pages: **All 7** — Home, About, Products, Make a Design, Portfolio, FAQ, Contact
4. Backend: **No database** — orders go directly to WhatsApp
5. Language: **Bahasa Indonesia only**
6. Added later: real logo image, real Telkom University client portfolio, Size Chart Google Drive link

## Architecture
- **Frontend only** — React + React Router + TailwindCSS + Shadcn/UI
- No backend logic, no database, no third-party API integration
- WhatsApp deeplink (wa.me/6283123453430) for all orders
- Hosting: standard Emergent preview

## User Personas
- **Ketua Himpunan / BEM** — mencari vendor amanah untuk produksi jaket angkatan
- **Ketua Komunitas** — butuh merchandise (kaos, topi, jaket) seragam
- **Mahasiswa Mandiri** — order individu desain custom

## Core Requirements (static)
- Premium dark theme: #0A0A0A black, #D4AF37 gold, white
- Cabinet Grotesk (heading) + Manrope (body) typography
- Mobile-responsive, fully Indonesian copy
- All interactive elements have data-testid attributes

## What's Been Implemented (Feb 2026)
### Pages
- **Home**: hero (jacket image + tagline), 4 value props, brand marquee, 6-product preview, designer CTA, testimonial
- **About**: brand logo display, 3-step process, 4 stats, story cards
- **Products**: 6 products, category filter (Jaket/Hoodie/Kaos/Kemeja/Headwear), Size Chart link, per-product WhatsApp button
- **Make a Design**: SVG jacket mockup (depan/belakang), 6 color presets + custom color pickers, add text/upload logo, drag-drop, edit font/color/size, send to WhatsApp
- **Portfolio**: 6 real client projects (HIMA Teknik Telekomunikasi Telkom Univ, IEEE Telkom Univ, TELCO 2025, etc.)
- **FAQ**: 8 questions in Shadcn accordion (incl. size chart info)
- **Contact**: 3 contact cards (WA, IG, location) + form that sends structured message to WhatsApp

### Components
- Sticky glassmorphism header with DERIS logo + mobile menu
- Footer with massive brand-text, contact cards, navigation

### Integrations
- DERIS logo image (provided by user) used in header, footer, about
- Size Chart link to Google Drive (jaket, kaos, kemeja, sampai 8XL)
- Favicon updated to DERIS logo

## Testing
- Iteration 1: **100% pass** on frontend (all 7 routes, designer drag-drop, WA links, filters, accordion)

## Prioritized Backlog (P0/P1/P2)
### P0 (deferred to user request)
- Real product photos from Instagram (currently stock images)

### P1 (nice to have)
- Add "Download Mockup" feature in Designer (export canvas as image via html2canvas)
- Add WhatsApp floating button (sticky on all pages)
- Add visible back-view differentiation in jacket SVG (currently nearly identical to front)
- Add Surabaya & Aceh to cities (visible in IG bio)

### P2 (future)
- Google Reviews integration for testimonials
- Order tracking system (would require backend)
- Live chat widget
- SEO meta tags per page, sitemap.xml
- Blog/journal section for community stories
