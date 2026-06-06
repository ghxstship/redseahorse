# DUAL KIT — split into two sessions

This project holds **two fully independent brand systems** that share only the project folder. Each is
ready to be lifted into its own session for further refinement before the Claude Code export.

---

## KIT A — GHXSTSHIP (brand & marketing) · "Vintage Reef"
**Positioning:** the General Contractor, Foreman & Procore of experiential projects.
**Files:**
- `colors_and_type.css`, `components.css`, `terminal.css`, `polish.css`  *(GHXSTSHIP-only stylesheets)*
- `ui_kits/website/**`  (homepage, 6 destination pages, resources/glossary, work/, locations, sitemap, robots)
- `slides/**`, `social/**`, `ui_kits/email/**`, `ui_kits/brand/**`, `ui_kits/documents/**`
- `ui_kits/products/**`  *(cosmic-era product mocks — legacy; superseded by Kit B; safe to delete)*
- Assets: `assets/skull-bone.svg`, `assets/logo-ghostship-skull.svg`
- Docs: `README.md`, `BRAND_ARCHITECTURE.md`, `SEO_GEO.md`, `COMPETITIVE.md`, `VOICE_SAMPLE.md`,
  `PROPRIETARY_IP.md`, `ICONOGRAPHY.md`, `PHOTOGRAPHY.md`, `SKILL.md`, `ui_kits/website/README.md`

**Open refinement items (Kit A):**
1. Refactor the **pitch deck** (`slides/index.html`) to the journey×GC layout + voice (still terminal-era).
2. Rebuild the **6 destination pages** on the journey×GC layout (colors/phases/voice already updated; layout still booking-era).
3. Finish doc cleanup: remaining spaceport/Skeleton-Crew/Set-Sail references in `README.md`, `BRAND_ARCHITECTURE.md` (lexicon table), `slides/README.md`.
4. Swap porthole + Selected Work to real photography/video when available.

---

## KIT B — ATLVS Technologies (SaaS product) · neutral light/dark
**Positioning:** the product platform — ATLVS (producer/internal), COMPVSS (crew/vendor/talent),
GVTEWAY (guest/client). Self-contained; **no GHXSTSHIP dependencies.**
**Files:**
- `product-theme.css`  *(self-contained: own fonts + tokens)*
- `ui_kits/atlvs/**`  (index hub, dashboard, screens, mobile, templates, logo-kit, logo-exploration)
- Assets: `assets/atlvs-mark*.svg`, `assets/atlvs-icon-*.svg`
- Docs: `tokens.json` (shared brand tokens + product colors), `design_handoff/ATLVS_PRODUCT/README.md`

**Open refinement items (Kit B):** none structural — kit is clean, independent, and verified. Optional:
expand component coverage; wire real data models (needs client spec); XPMS phase names already aligned.

---

## Independence — verified
- ATLVS files import **only** `product-theme.css` (+ Phosphor CDN); zero GHXSTSHIP stylesheet/asset
  dependencies. The only cross-reference is the GHXSTSHIP skull in the ATLVS logo-kit's *parent-company
  endorsement* lockup (intentional, not a build dependency).
- To split: copy Kit A files → GHXSTSHIP session; Kit B files → ATLVS session. `tokens.json` and
  `design_handoff/` are shared references; duplicate into both.

## Shared / handoff
`tokens.json`, `HANDOFF.md`, `TEMPLATES.md`, `design_handoff/**`, `index.html` (demo hub).
