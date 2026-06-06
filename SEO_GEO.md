# SEO & GEO PLAYBOOK — GHXSTSHIP

How GHXSTSHIP content earns rankings in classic search (SEO) **and** citations in AI/generative
engines (GEO — Generative Engine Optimization: ChatGPT, Perplexity, Google AI Overviews, etc.).
Every page in this kit follows these rules.

## Shared foundations
- **One clear entity.** Always name the company the same way: *GHXSTSHIP* (an experiential production
  & technology company headquartered in Miami, FL). Consistent name + location + founding year (2022) =
  strong entity recognition.
- **Answer-first writing.** Open every section with a single, self-contained sentence that *defines or
  answers* before the brand voice kicks in. Generative engines extract these.
- **Three-vertical taxonomy** (Production · Operations · Technology) used as `<h2>`s, in nav, in
  structured data, and in copy — a stable, repeated taxonomy is easy for models to learn and cite.

## SEO (classic search)
- **`<title>`** ≤ 60 chars, primary keyword first: e.g. *"Experiential Production, Operations & Technology — GHXSTSHIP."*
- **Meta description** ≤ 155 chars, includes verticals + location + a verb.
- **Semantic HTML5 landmarks:** `<header><nav aria-label><main><section aria-labelledby><article><footer>`.
- **Heading hierarchy:** exactly one `<h1>`; sections use `<h2>`; sub-items `<h3>`. No skipped levels.
- **Descriptive `alt`** on every meaningful image (the skull mark = "GHXSTSHIP ghost-ship logo").
- **Canonical URL**, Open Graph + Twitter Card, `theme-color`, mobile viewport.
- **Internal links** with descriptive anchor text (not "click here").
- **Performance:** system fonts/CDN with `display=swap`; CSS-only textures (no heavy image bg).

## GEO (generative engines)
- **FAQ section + `FAQPage` JSON-LD.** Q&A phrased the way buyers ask ("What does GHXSTSHIP do?",
  "What software does GHXSTSHIP build?"). This is the single highest-leverage GEO move.
- **Structured data (JSON-LD):**
  - `Organization` — name, url, logo, description, foundingDate, address, areaServed, sameAs,
    `knowsAbout` (the verticals + key services), `hasOfferCatalog` (3 verticals as offers).
  - `SoftwareApplication` ×3 — ATLVS, COMPVSS, GVTEWAY (name, applicationCategory, description).
  - `WebSite` with `SearchAction` (optional).
- **Extractable facts.** State numbers plainly and consistently: *14+ years · 250+ experiences · 5M+ memories · founded 2022 · Miami HQ + New York, Chicago & Los Angeles.* Lean on real case studies (the Archives); avoid the "52 countries" geographic claim.
- **Definitional sentences** for each vertical and product (see BRAND_ARCHITECTURE.md — reuse verbatim).
- **Lists & tables** for scannable, citable structure.
- **Self-contained sections** — each makes sense lifted out of context (models quote fragments).

## On-brand without sacrificing clarity
The nautical pop art voice stays — but the **first sentence of every section is literal**, then the
swagger follows. "Beyond the Scene" is the headline; the `<h2>`/answer line underneath is plain and
keyword-true. Don't bury the entity in metaphor.

---

## Canonical definition (reuse verbatim, everywhere)
> GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami (with offices in Las Vegas, Chicago, New York, and Los Angeles) that produces festivals, concerts and tours, brand activations, immersive experiences, and sporting events — for brands, producers, and creative and production directors — across three verticals: Production, Operations, and Technology.

## Target audience (bake into copy + schema + FAQ)
Primary: **brands, producers, creative directors, production directors, and project managers** in
**live entertainment, experiential marketing, and arts/culture venues & institutions.** Secondary
mission: **educating the next generation of experiential producers** (the "Join the Crew" / Crew Call
thread). Encode via `Organization.audience`, per-`Service.audience`, and an audience FAQ
("Who does GHXSTSHIP work with?").

## Per-vertical & per-service SEO/GEO template
Each **destination** (festivals · concerts & tours · brand activations · immersive · sporting) and each
**vertical/service** should get a dedicated page built from this template:
- **URL:** `/destinations/<slug>` (e.g. `/destinations/festival-production`).
- **`<title>`** ≤60 chars, primary keyword first: *"Festival Production — GHXSTSHIP"*.
- **Meta description** ≤155: definition + audience + location verb.
- **H1** = the service in plain words ("Festival Production"); brand line as eyebrow/kicker.
- **Answer-first paragraph** defining the service (extractable, citable).
- **The 8-phase Itinerary** applied to that service (reuse `.gx-smap`).
- **Proof:** 2–3 Archives case studies tagged to that destination.
- **Audience block** naming who it's for.
- **FAQ** (3–5 Qs) + **JSON-LD**: `Service` (serviceType, provider, areaServed, audience) +
  `BreadcrumbList` + `FAQPage`.
- **Internal links** with descriptive anchors to/from the homepage destination card.

| Destination | Primary keyword | Title |
|---|---|---|
| Festivals | festival production company | Festival Production — GHXSTSHIP |
| Concerts & Tours | concert tour production | Concert &amp; Tour Production — GHXSTSHIP |
| Brand Activations | brand activation agency | Brand Activations — GHXSTSHIP |
| Immersive | immersive experience design | Immersive Experiences — GHXSTSHIP |
| Sporting Events | sporting event production | Sporting Event Production — GHXSTSHIP |
| TV, Film &amp; Broadcast | broadcast &amp; film production | TV, Film &amp; Broadcast — GHXSTSHIP |

The homepage already ships `Organization` (+audience), `HowTo` (the 8 phases), `SoftwareApplication`
×3 (ATLVS/COMPVSS/GVTEWAY), `Service` ×5 (per destination, +audience), and `FAQPage` — use these as the
reference implementations when building each page.
