# Handoff: GHXSTSHIP Marketing Site (Kit A) → Claude Code

## Overview
GHXSTSHIP is the **General Contractor, Foreman & Procore of experiential project management** — a full-service experiential production, operations, and technology company (Miami HQ; Las Vegas, Chicago, New York, Los Angeles). This bundle is the **brand + marketing site (Kit A)**: a complete, interlinked marketing/landing-page system plus the brand system, pitch deck, social, email, documents, and collateral.

> **These HTML files are design references**, not production code to ship as-is. The task is to **recreate them in the target codebase's environment** (Next.js/Astro/etc.) using its patterns — or pick the best framework if none exists. Fidelity is **high (hi-fi)**: final colors, type, spacing, copy, and interactions. Recreate pixel-accurately, reading exact values from the stylesheets/tokens below.

## Design system — source of truth
- **`tokens.json`** — machine-readable colors, type scale, spacing, radii, shadows, product colors, locked rules. **Port these first.**
- **`colors_and_type.css`** — all `--*` tokens + semantic type classes (`.gx-*`). Never invent values; read token names here.
- **`components.css`** — buttons (`.gx-btn` + `--nebula/--plasma/--ink/--ghost/--sm/--lg`), tags, chips, panels, cards, inputs, halftone.
- **`terminal.css`** — legacy structural layer; still used for the 8-phase **Course** strip-map (`.gx-smap`). Metaphor retired; components fine.
- **`polish.css`** — refinements.
- Fonts (Google CDN): Big Shoulders Display (display), Space Grotesk (body/UI), Space Mono (mono/labels), Silkscreen (pixel). Phosphor Icons (bold) via CDN.
- Assets: `assets/skull-bone.svg` (white mark for dark grounds), `assets/logo-ghostship-skull.svg` (tile). **Logo lock: white flag + black skull, never recolored.** Wordmark is spaced `G H X S T S H I P` with `white-space:nowrap`.

## Information architecture (FINAL — authoritative)
Top nav on **every** page (identical), `phase-detail.js` enhances the Course where present:

`Destinations · Fleet · Crew · Logs · Museum · Gallery · Archives · [Start a Project]`

| Nav term | Means | Page |
|---|---|---|
| **Destinations** | Industries / experience types we serve | `index.html#journey` + `destinations/*` (6 vertical SEO pages) |
| **Fleet** | The 3 verticals (Production / Operations / Technology) | `solutions.html` |
| **Crew** | The team (4-tier org) | `team.html` |
| **Logs** | News / articles / blog | `resources/blog.html` (+ article `resources/the-experiential-gc.html`) |
| **Museum** | Digital storefront / ecommerce | `store.html` |
| **Gallery** | Photo & video media | `gallery.html` |
| **Archives** | Case studies / featured past projects | `work/index.html` (+ detail `work/salvage-city-supper-club.html`) |
| **Course** | 8-phase production lifecycle (footer only) | `index.html#course` |
| Start a Project | Primary CTA | `contact.html` |

Careers / ATS (applicant side): `careers/index.html` (open roles board) · `careers/role.html` (job description + JobPosting schema) · `careers/apply.html` (application form). Linked from the footer **Company → Careers** and the Crew page.

Other: `about.html` (The Story), `locations.html` (Home Ports), `resources/glossary.html`, `404.html`, `sitemap.xml`, `robots.txt`.

## Page templates & layout (recreate these)
1. **Homepage** (`index.html`) — sticky nav; hero (eyebrow = 3 verticals, display H1, porthole image carousel); numbers band; **scrolling logo ticker** (infinite marquee, pauses on hover, reduced-motion safe); positioning ("The General Contractor, Foreman, and Procore…"); **journey rail** (sticky 6-step: Destination→Ship→Course→Crew→Manifest→Launch); capability stack (GC/Foreman/Procore); **The Course** interactive 8-phase strip-map; **The Archives** (case-study cards); closing CTA; full-sitemap footer with social.
2. **Destination pages ×6** — answer-first hero (definition + framed media), capabilities grid, Course strip-map, audience tags, "The Difference", Archives teaser, FAQ (FAQPage schema), CTA. Per-page Service + Breadcrumb + FAQ JSON-LD.
3. **Fleet / Solutions** — 3 disciplines, "Who We Build For" (GCs / venue operators / brands), FAQ; Service×3 + FAQ schema (targets GCs, venue ops, tech installs).
4. **Crew** — 4 tiers × 3 roles (Command / Direction / Management / On Deck), avatar slots, Join-the-Crew block.
5. **Museum (store)** — product grid, cart counter (JS), GVTEWAY checkout note, Store schema.
6. **Gallery** — masonry media grid, category filters, video badges, ImageGallery schema.
7. **Archives** — case-study grid (Salvage links to detail) + detail template.
8. **Logs** — post grid + article template (Article schema).
9. **Careers** — job board (rows), job description (JobPosting schema), application form (file upload, EEO, "what happens next").
10. **Contact / About / Locations / Glossary / 404** — standard hero + content.

## Eyebrow strategy
Section eyebrows = the clean nav term only (no "· Applied / · Festivals / GHXSTSHIPs We've Built" suffixes).

## Interactions
- Buttons: translate −2px on hover, press-in on active, hard offset shadows (`6px 6px 0`, zero blur). 80–150ms ease.
- `phase-detail.js`: hover/click/keyboard a Course phase → detail panel updates (homepage + destinations).
- Logo ticker: CSS keyframe marquee, `animation-play-state:paused` on hover, `prefers-reduced-motion` fallback.
- Porthole: JS image cross-fade carousel. Store: cart increment. Gallery: filter buttons (visual).
- Forms (contact, apply): static UI; wire to backend/ATS on build.

## Voice & content rules
- Positioning: **disruption / innovation / "redefine what's possible."** ⛔ Never deadline-survival ("impossible deadlines / legendary productions / we don't do can't").
- Voice: Yacht Builder + Expedition Leader — confident, plain-first then flavor. Answer-first first sentence on every page (SEO/GEO extractable). UPPERCASE display headlines; mono/pixel eyebrows; sentence-case body. No emoji. No parentheses in marketing copy.
- **Surface Register**: voyage/nautical metaphor = marketing only; apps/docs/transactional use plain terms (Project, Dashboard, Crew Roster, Sign in). Project IDs: `RRR` + 3 digits.

## SEO / GEO (keep the pattern)
Per-page JSON-LD already implemented: Organization (+ `sameAs` socials, audience), Service ×N, HowTo (8-phase lifecycle), FAQPage, BreadcrumbList, JobPosting, Store, ImageGallery, Blog/Article, LocalBusiness. Answer-first copy, one H1, semantic landmarks, `sitemap.xml` + `robots.txt`. Keep canonical URLs and meta descriptions.

## Build order
1. Port `tokens.json` → CSS vars / Tailwind theme. 2. Component library (`.gx-*`). 3. Shared layout (nav + sitemap footer + social) — identical on all pages. 4. Homepage + 6 destination pages. 5. Fleet / Crew / Archives / Logs / Gallery / Museum / Careers. 6. Contact/About/Locations/Glossary/404. 7. Wire forms (contact, apply) + cart + ticker + Course interactivity.

## Still needed from client (open items)
Real photography/video (porthole, Archives, Gallery), team headshots + bios, real metrics → Review/AggregateRating schema, office addresses, ATS backend, XPMS module spec, font-license confirmation, favicon/OG sizes, legal docs.

## Files
Brand/system: `tokens.json`, `colors_and_type.css`, `components.css`, `terminal.css`, `polish.css`, `phase-detail.js`, `assets/`. Site: `ui_kits/website/**` (24 pages + sitemap/robots). Also: `slides/` (pitch deck), `social/`, `ui_kits/email/`, `ui_kits/brand/`, `ui_kits/documents/`. Docs: `README.md`, `BRAND_ARCHITECTURE.md`, `SEO_GEO.md`, `VOICE_SAMPLE.md`, `PROPRIETARY_IP.md`, `ICONOGRAPHY.md`, `PHOTOGRAPHY.md`, `HANDOFF.md`, this file.


---
## FINAL STATE (build-ready) — supersedes any earlier nav/term notes above

**Top nav (identical on every page):** Destinations · Fleet · Crew · Logs · Museum · Gallery · Archives · [Start a Project]. **Course** is footer-only. Footer = full sitemap (Explore / Company / Platforms) + social row + tri-color GC·Foreman·Procore tagline; Home Ports city list never wraps (stacks on mobile).

**Verticals (canonical, exact):** Production Management · Operations Leadership · Technology Innovations.

**Term locks:** always "experiential **project management**" (never bare "experiential projects"). Logo = white flag + transparent skull, no ring, no shadow. Wordmark spaced `G H X S T S H I P`, color only --bone (dark) / --ink (light).

**Pages (26) + template each uses:**
- Home `index.html` (journey×GC) · Destinations overview `destinations/index.html` + 6 detail pages (per-vertical SEO template)
- Fleet `solutions.html` · Crew `team.html` (4-tier org) · Logs `resources/blog.html` + article `resources/the-experiential-gc.html` · Glossary `resources/glossary.html`
- Archives `work/index.html` (bento, case studies only) + case-study detail `work/salvage-city-supper-club.html`
- Gallery `gallery.html` (bento media + working filter pills) · Museum `store.html` (storefront, cart, aligned to Retail Kit lines)
- Careers ATS: `careers/index.html` (board + working filters) · `careers/role.html` (JobPosting schema) · `careers/apply.html` (application form)
- About `about.html` · Contact `contact.html` · Locations `locations.html` · `404.html` (noindex)
- Brand: `ui_kits/brand/retail-kit.html` (Sitewear™ / Streetwear / Athletic-wear product-image templates: Apparel · Equipment · Accessories; SKU `GX-[LINE]-[CAT]-NNN`) · `stationery.html`

**SEO/GEO (all pages):** title · meta description · canonical · one H1 · Open Graph + Twitter card · JSON-LD (Organization+sameAs / Service / FAQPage / HowTo / BreadcrumbList / JobPosting / Store / ImageGallery / Blog / Article / CollectionPage). `sitemap.xml` + `robots.txt` current. Answer-first first sentence on every page.

**Design tokens (canonical = `colors_and_type.css`, mirror = `tokens.json`):** every UI prop references tokens — `--stroke-1..4`, `--r-0..3/pill`, `--shadow-hard*` (signature) / `--shadow-pop*` (soft), `--dur-1..4` + `--ease-pop/-snap`, `--sp-*`, color + type tokens. Governance + literal→token map in `ALIGNMENT.md`.

**Wire up during build:** contact + careers/apply forms → backend/ATS · store cart → GVTEWAY checkout · gallery + careers filter pills (JS reference included) · `phase-detail.js` (interactive 8-phase Course) · homepage logo ticker + porthole carousel. Everything else is static and build-ready.