# GHXSTSHIP — Brand Kit (Vintage Reef)

The GHXSTSHIP brand & marketing system. **Positioning:** the General Contractor, Foreman & Procore of
experiential project management — Production Management, Operations Leadership, Technology Innovations.
**Aesthetic:** "Vintage Reef" — premium vintage-tropical (charcoal-graphite reef grounds; jade =
Production, pineapple = Operations, sapphire = Technology). **Voice:** Yacht Builder + Expedition
Creator (light texture, never corny).

This kit is **independent of the ATLVS product kit** — no shared stylesheets. (See `../atlvs/` for the
SaaS product system, which is self-contained on `product-theme.css`.)

## Stylesheets (source of truth)
- `colors_and_type.css` — tokens (Vintage Reef colors, type, spacing, soft elevation) + `.gx-*` type classes.
- `components.css` — premium components: buttons, tags, panels, cards, inputs, links.
- `terminal.css` — structural parts (strip-map, departures, gate, boarding pass) — legacy support; the
  live homepage uses the journey×GC layout.
- `polish.css` — motion (scroll-reveal with visibility fail-safe), focus rings, density.

## Pages
- `index.html` — **the homepage**: journey×GC layout. Sticky journey rail
  (The Destination → The Ship → The Course → The Crew → The Manifest → Launch), numbers band,
  positioning band, capability stack (GC/Foreman/Procore), the Course (8-phase XPMS strip-map),
  Selected Work (The Log), CTA, footer. Cycling porthole media player in the hero.
- `destinations/*.html` — 6 vertical SEO/GEO pages (festival, concert-tour, brand-activations,
  immersive, sporting, tv-film-broadcast).
- `resources/glossary.html` · `work/salvage-city-supper-club.html` · `locations.html` ·
  `sitemap.xml` · `robots.txt`.

## Client journey (copy model)
1. **The Destination** — Share Your Vision (the project goal / experience).
2. **The Ship** — Build Your Vessel (scope: full build / single discipline / by phase).
3. **The Course** — Chart the Course (the 8-phase XPMS lifecycle).
4. **The Crew** — Meet the Team (assigned to the charted route).
5. **The Manifest** — Pack Your Bags (pre-launch checklist / onboarding / FAQs).
6. **Launch** — Anchors Away.

## Lifecycle (XPMS, 8 phases)
Discovery · Design · Advance · Procurement · Build · Install · Operate · Close.

## SEO / GEO
Per-route JSON-LD (Organization +audience, Service ×N, HowTo lifecycle, FAQPage, BreadcrumbList,
DefinedTermSet, CreativeWork, LocalBusiness). GC + venue-operations + project-management keywords.
Answer-first copy, one `<h1>`, semantic landmarks.

## Brand locks
White-flag/transparent-skull logo (never recolor) · spaced `G H X S T S H I P` wordmark (nowrap) ·
RRR project IDs · no parentheses in copy · no emoji · five home ports (Miami HQ · Las Vegas · Chicago ·
New York · Los Angeles).
