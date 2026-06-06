# HANDOFF — GHXSTSHIP → Claude Code

Source of truth for engineering. Read this + `tokens.json` + `BRAND_ARCHITECTURE.md` first.
**Preview the whole kit:** open `index.html` (root) — the demo hub links every asset.

## Tokens
- `tokens.json` — machine-readable colors, type, spacing, radii, shadows, **product colors**, semantic, and rules.
- `colors_and_type.css` / `components.css` / `terminal.css` — the live CSS implementations to port.

## Component → file map (reference implementations)
| Need | File |
|---|---|
| Brand system / tokens | `colors_and_type.css`, `components.css`, `terminal.css`, `tokens.json` |
| Marketing site (homepage) | `ui_kits/website/index.html` |
| Per-vertical SEO/GEO pages (6) | `ui_kits/website/destinations/*.html` |
| Product app shell + ATLVS/COMPVSS/GVTEWAY | `ui_kits/products/index.html` |
| Brand system / tokens | `colors_and_type.css`, `components.css`, `terminal.css`, `polish.css`, `tokens.json` |
| Demo hub (preview all) | `index.html` (root) |
| Shared UI component library | `ui_kits/products/components.html` + `components-atomic.html` + `components-complete.html` |
| App screens | `atlvs-gantt.html`, `compvss-certifications.html`, `gvteway-checkout.html`, `mobile.html` |
| Documents | `ui_kits/documents/{proposal,run-of-show,recap}.html` |
| Email (brand + app trio) | `ui_kits/email/index.html` |
| Social | `social/index.html` |
| Stationery | `ui_kits/brand/stationery.html` |

## Non-negotiable rules
Logo lock · spaced wordmark + nowrap · RRR Project IDs · Surface Register (metaphor vs. plain) ·
no parentheses · no emoji · product colors (ATLVS pink / COMPVSS yellow / GVTEWAY cyan). Details in `tokens.json` + `BRAND_ARCHITECTURE.md`.

## SEO/GEO (already implemented on the site — keep the pattern)
Per-page JSON-LD: Organization (+audience), Service ×6, HowTo (8-phase lifecycle), FAQPage, BreadcrumbList.
Per-vertical page template + keyword table in `SEO_GEO.md`. Answer-first copy.

## STILL NEEDED FROM CLIENT before/at build (open items)
1. **Fonts + assets:** confirm font licenses; host the logo (JSON-LD `logo` is a placeholder URL); supply favicon / app-icon / OG-image sizes.
2. **Real content:** case-study photos + outcomes (Archives, vertical pages, recap), office addresses, contact email, real metrics → then add `Review`/`AggregateRating` schema.
3. **XPMS spec:** what it expands to + its modules (still a placeholder in `PROPRIETARY_IP.md`); confirm 8-phase lifecycle is final.
4. **Functional specs per app:** data model, user roles/permissions, MVP screen list. UI kit shows *look*, not *behavior*.
5. **a11y baseline:** enforce focus states + AA contrast (mostly present); document breakpoints.
6. **Domains/handles + legal:** confirm ghxstship.tours, social handles, legal entity name (G H X S T S H I P Industries LLC), MSA/Privacy/Confidentiality docs the SOW links to.

## Recommended build order
1. Port tokens → Tailwind/CSS-vars. 2. Component library (web + product). 3. Marketing site + 6 vertical pages.
4. App shells (ATLVS/COMPVSS/GVTEWAY) once functional specs land. 5. Documents/email/social as templates.
