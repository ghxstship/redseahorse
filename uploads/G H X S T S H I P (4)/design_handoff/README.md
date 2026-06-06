# GHXSTSHIP — Claude Code Handoff Package (Dual)

Two separate engineering builds share this design system. **Pick your track:**

- **`GHXSTSHIP_BRAND/README.md`** → the public **marketing site** + brand collateral (cosmic pop-art, SEO/GEO-critical, Next.js recommended).
- **`ATLVS_PRODUCT/README.md`** → the **SaaS product apps** ATLVS/COMPVSS/GVTEWAY (neutral light/dark + per-product accent, React recommended).

Both pull from the shared token + doc files at the project root (paths in each sub-README). One logo,
one company — two purpose-built skins.

**Verified state (final sweep):** 82 files scanned, zero stale terms; all JSON-LD validates
(homepage 6/6 + Service/FAQ/Breadcrumb/DefinedTerm/CreativeWork/LocalBusiness across sub-pages);
`tokens.json` + `product-theme.css` (3-step elevation) confirmed; ATLVS UI font = Inter, cosmic =
Big Shoulders/Space Grotesk. Open client inputs (photography, video, case-study metrics, team bios,
XPMS spec) are documented per track.

---

This bundle is the complete **GHXSTSHIP brand & product design system**. The HTML/CSS files are
**design references** — high-fidelity prototypes showing the intended look, behavior, and content.
The task for Claude Code is to **recreate these designs in the target codebase** (React/Next, Vue,
SwiftUI, etc.) using its established patterns — or, if greenfield, to pick the best framework and
implement them. Do not ship the raw HTML as production.

**Fidelity: High.** Final colors, typography, spacing, motion, and copy are all locked. Recreate
pixel-faithfully, porting tokens to the codebase's styling layer.

## Two kits — same logo, two skins
- **GHXSTSHIP brand kit** (cosmic pop-art marketing): `ui_kits/website`, `slides`, `social`, `email`, `brand`, and cosmic product mocks in `ui_kits/products`. Driven by `colors_and_type.css` + `components.css` + `terminal.css` + `polish.css`.
- **ATLVS Technologies product kit** (neutral SaaS, light/dark, per-product accent): `ui_kits/atlvs/` (`index.html` hub · `dashboard.html` · `screens.html` · `templates.html` · `mobile.html`). Driven by **`product-theme.css`** via `data-ui="saas" data-product="atlvs|compvss|gvteway" data-mode="light|dark"`. **Use this skin for the actual apps; the cosmic skin is marketing only.**

## Ratified SaaS-skin house rules (2026-06-03 — kit ⇄ flyingbluewhale lockstep)
These are **ATLVS-skin overrides of the cosmic defaults**, now canonical in `tokens.json` (`saasThemeHouseRules`, `tokenSourceOfTruth`) and `product-theme.css`:
- **A · Casing** — Title Case (not UPPERCASE) for headings, labels, buttons, eyebrows, table headers; body = sentence case. UPPERCASE is **retired on the SaaS skin** (it renders brand names as "Atlvs/Compvss/Gvteway" and fights the wordmarks) — valid **only** on the cosmic ghxstship skin.
- **B · Headings** — the SaaS skin (incl. ATLVS marketing) uses the **body family (Space Grotesk/Inter)** for headings, not a display face. **Big Shoulders is cosmic-skin-only** (the `/ghxstship` parent-company surface).
- **C · Eyebrows** — **Space Mono** on the SaaS skin; Silkscreen pixel retired for product (cosmic only).
- **Single token source of truth = `--p-*`.** Legacy `--org-*`/`--color-*` on the atlvs-product skin must alias `--p-*`/semantic tokens — never independent hex. **No raw Tailwind color-scale literals** (`bg-emerald-500`, `bg-amber-500`, …) in components. Known build fix: `Badge.tsx` `DOT_BG` `success`/`warning` → `var(--color-success)`/`var(--color-warning)`.

---

## START HERE — read in this order
1. **`tokens.json`** — machine-readable design tokens (colors, type scale, spacing, radii, shadows, product colors, locked rules). Port these first.
2. **`HANDOFF.md`** — component→file map, non-negotiable rules, SEO/GEO pattern, recommended build order, and the open client-input list.
3. **`BRAND_ARCHITECTURE.md`** — the three verticals, the spaceport metaphor, the **Surface Register** (when to use metaphor vs. plain ERP language), and locked term mappings.
4. **`README.md`** — brand voice, visual foundations, content rules.
5. **`SEO_GEO.md`** — the SEO/GEO playbook + per-vertical page template (Service/FAQ/Breadcrumb/DefinedTerm/LocalBusiness schema patterns to preserve).

## Supporting docs
`ICONOGRAPHY.md` · `PHOTOGRAPHY.md` · `PROPRIETARY_IP.md` (8-phase lifecycle locked; **XPMS pending client spec**) · `COMPETITIVE.md` · `TEMPLATES.md` · `SKILL.md`.

## Stylesheets (the implementation source of truth)
- `colors_and_type.css` — tokens + semantic type classes (`.gx-*`).
- `components.css` — pop-art components (buttons, tags, panels, cards, halftone).
- `terminal.css` — the structural system (FIDS departures board, 8-phase strip-map, gate header, wayfinding, boarding pass, pictograms).
- `polish.css` — motion (scroll-reveal, split-flap), `:focus-visible` grammar, density + empty/loading states. **Note:** scroll-reveal must guarantee end-state visibility (see `.reveal.is-in{opacity:1!important}` + the JS class-strip fail-safe in `ui_kits/website/index.html`).

## Preview the whole kit
Open **`index.html`** (root) — the demo hub links every asset.

---

## Asset map
| Area | Files |
|---|---|
| Marketing site | `ui_kits/website/index.html` (homepage) · `ui_kits/website/destinations/*.html` (6 vertical SEO pages) · `resources/glossary.html` · `work/salvage-city-supper-club.html` (case-study template) · `locations.html` · `sitemap.xml` · `robots.txt` |
| Product UI (ATLVS/COMPVSS/GVTEWAY) | `ui_kits/products/index.html` (app shell) · `components.html` + `components-atomic.html` + `components-complete.html` (full atomic library) · `atlvs-gantt.html` · `compvss-certifications.html` · `gvteway-checkout.html` · `mobile.html` |
| Documents | `ui_kits/documents/{proposal,run-of-show,recap}.html` |
| Email / Social / Stationery / Deck | `ui_kits/email/index.html` · `social/index.html` · `ui_kits/brand/stationery.html` · `slides/index.html` |
| Logo + marks | `assets/skull-bone.svg` (white glyph, dark grounds) · `assets/logo-ghostship-skull.svg` (black tile, light grounds) |

## Non-negotiable rules (full detail in tokens.json + BRAND_ARCHITECTURE.md)
- **Logo:** white flag + black skull only — never recolor.
- **Wordmark:** display `G H X S T S H I P` (spaced, `white-space:nowrap`); unspaced `GHXSTSHIP` for URLs/handles/schema/IDs.
- **Product colors:** ATLVS = nebula/pink (internal/producer) · COMPVSS = brass/yellow (crew/vendor/talent) · GVTEWAY = plasma/cyan (guest/client).
- **Project IDs:** `RRR` + three digits.
- **Voice:** disruption/innovation; never "impossible deadlines." **No parentheses in copy. No emoji.**
- **Surface Register:** voyage/spaceport metaphor = marketing only; apps/documents use plain ERP terms (Project, Dashboard, Timeline, Crew Roster, Sign in).
- **SEO/GEO:** keep per-page JSON-LD (Organization+audience, Service×N, HowTo lifecycle, FAQPage, BreadcrumbList, DefinedTermSet, LocalBusiness), answer-first copy, semantic landmarks, one H1.

## Open items requiring client input (build structures exist; drop content in)
1. Real photography + video (apply duotone per `PHOTOGRAPHY.md`).
2. Real case-study metrics (templates ready in `work/`).
3. Team bios for E-E-A-T.
4. **XPMS** spec — what it expands to + modules.
5. Host the logo + favicon/app-icon/OG images; update JSON-LD `logo`/`url` to the live domain.

A developer who wasn't in this project should be able to build from this README + the five START-HERE files alone.
