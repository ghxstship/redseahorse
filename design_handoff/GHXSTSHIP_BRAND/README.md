# Handoff 1: GHXSTSHIP Brand & Marketing Site

**Build target:** the public marketing website + brand collateral. Cosmic pop-art system.
These HTML files are **high-fidelity design references**, recreate them in the target stack
(Next.js recommended for SEO), porting tokens to its styling layer. Do not ship raw HTML.

## Stack recommendation
Next.js (App Router) + a CSS layer that mirrors the tokens (CSS vars or Tailwind theme). SSR/SSG
is important here, this build lives or dies on SEO/GEO, so server-render every page and keep the
JSON-LD per route.

## Read in order
1. `../../tokens.json`, colors, type scale, spacing, radii, shadows, **locked rules**.
2. `../../BRAND_ARCHITECTURE.md`, 3 verticals, the spaceport metaphor, the **Surface Register**.
3. `../../README.md`, voice, visual foundations, content rules.
4. `../../SEO_GEO.md`, the playbook + per-vertical page template (preserve all schema patterns).
5. `../../ICONOGRAPHY.md`, `../../PHOTOGRAPHY.md`.

## Stylesheets to port
`colors_and_type.css` · `components.css` · `terminal.css` · `polish.css`
(motion: keep the `.reveal.is-in{opacity:1!important}` + JS class-strip fail-safe so content can never stay hidden).

## Screens / routes
| Route | Reference file |
|---|---|
| `/` (home) | `ui_kits/website/index.html` |
| `/destinations/<slug>` ×6 | `ui_kits/website/destinations/*.html` |
| `/work/<slug>` (case study) | `ui_kits/website/work/salvage-city-supper-club.html` |
| `/resources/glossary` | `ui_kits/website/resources/glossary.html` |
| `/locations` | `ui_kits/website/locations.html` |
| `sitemap.xml` / `robots.txt` | `ui_kits/website/{sitemap.xml,robots.txt}` |
| Pitch deck · social · email · stationery | `slides/` · `social/` · `ui_kits/email/` · `ui_kits/brand/` |

## SEO/GEO requirements (non-negotiable)
Per-route JSON-LD: `Organization` (+audience), `Service`×N, `HowTo` (8-phase lifecycle), `FAQPage`,
`BreadcrumbList`, `DefinedTermSet` (glossary), `CreativeWork` (case studies), `LocalBusiness` (locations).
Answer-first copy, one `<h1>`, semantic landmarks, font preconnect, lazy/responsive images when real
photos land. Welcome AI crawlers (robots.txt already does).

## Brand locks
White-flag/black-skull logo (never recolor) · spaced `G H X S T S H I P` wordmark (nowrap) ·
RRR project IDs · no parentheses in copy · no emoji · cosmic palette only on marketing.

## Client-supplied (drop into ready structures)
Real photography/video (duotone per PHOTOGRAPHY.md) · case-study metrics · team bios (E-E-A-T) ·
host logo + favicon/OG · set live domain in canonical/JSON-LD.
