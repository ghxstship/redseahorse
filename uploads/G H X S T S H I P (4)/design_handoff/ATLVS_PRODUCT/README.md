# Handoff 2 — ATLVS Technologies Product Apps

**Build target:** the SaaS products — ATLVS (producer/internal), COMPVSS (crew/vendor/talent),
GVTEWAY (guest/client). Neutral light/dark UI with a single sub-brand accent per app. These HTML
files are **high-fidelity design references** — recreate in the app stack, porting the theme to its
styling layer. Do not ship raw HTML.

## Logo
- **ATLVS product mark = the Waypoint** (8-point navigational star): `assets/atlvs-mark.svg` (ink), `assets/atlvs-mark-white.svg` (dark grounds), and per-product app-icons `assets/atlvs-icon-{atlvs,compvss,gvteway}.svg` (white rose on the accent tile) + `atlvs-icon-ink.svg`. Full spec: `ui_kits/atlvs/logo-kit.html`.
- The **GHXSTSHIP ghost-ship skull is the parent-company mark only** (endorsement: "an ATLVS Technologies, a GHXSTSHIP Industries company") — do not use the skull as the ATLVS/COMPVSS/GVTEWAY product icon.

## Stack recommendation
React + a component library (or Tailwind) themed from `product-theme.css`. Implement theming as
**two switchable axes**: product (atlvs|compvss|gvteway) and mode (light|dark) — exactly the
`data-ui="saas" data-product=… data-mode=…` model in the references. Map every value to design tokens.

## Read in order
1. `../../product-theme.css` — **the theme**: neutral light/dark surface tokens + per-product accent + primitives (`.ps-btn`, `.ps-card`, `.ps-input`, `.ps-chip`, `.ps-tag`). Port these tokens first.
2. `../../tokens.json` — shared brand tokens + product-color identity + audiences.
3. `../../BRAND_ARCHITECTURE.md` — the **Surface Register**: apps use plain ERP language (Project, Dashboard, Timeline, Crew Roster, Sign in), never the marketing metaphor.

## Screens
| Screen | Reference file |
|---|---|
| Product hub | `ui_kits/atlvs/index.html` |
| Dashboard (shell, stats, table) | `ui_kits/atlvs/dashboard.html` |
| Gantt · Certifications · Checkout | `ui_kits/atlvs/screens.html` |
| Enterprise templates (detail, list, directory, scanning/QR, wallet/NFT, settings/billing, onboarding) | `ui_kits/atlvs/templates.html` |
| Full atomic component library | `ui_kits/products/components.html` + `components-atomic.html` + `components-complete.html` |
| Mobile patterns | `ui_kits/atlvs/mobile.html` (SaaS-themed) · `ui_kits/products/mobile.html` (cosmic reference) |

> The component libraries were authored in the cosmic skin but are **structurally** the source of
> truth for atoms/molecules/data-views/charts. Re-theme them with `product-theme.css` tokens — same
> structure, SaaS surfaces. (Cosmic product mocks in `ui_kits/products/` are reference only.)

## Theming rules
- Product accent: **ATLVS = pink #FF2E88 · COMPVSS = amber #E9A23B · GVTEWAY = cyan #21D4D4** (tuned per mode in `product-theme.css`).
- **Single token source of truth = `--p-*`.** Legacy `--org-*`/`--color-*` on the atlvs-product skin must alias `--p-*`/semantic tokens — never independent hex. **No raw Tailwind color-scale literals** in components (e.g. `bg-emerald-500`/`bg-amber-500`) — all color via CSS vars. Badge dots: use `var(--color-success)`/`var(--color-warning)`.
- **Ratified ATLVS-skin overrides** (see `tokens.json#saasThemeHouseRules`): **A** Title Case (not UPPERCASE) for headings/labels/buttons/eyebrows/table headers, body = sentence case; **B** SaaS headings use the body family (Space Grotesk/Inter) — Big Shoulders is cosmic `/ghxstship`-only; **C** eyebrows = Space Mono (Silkscreen retired for product).
- Accents are tuned for AA in both modes (deepened for text in light, brightened in dark).
- **Never transition a var-backed `background`** across a theme switch (Chromium strands it) — transition `filter`/`opacity` or recolor instantly. See `.ps-btn` for the pattern.
- Logo carries across (white skull in an accent tile); product UI font is Space Grotesk.

## Functional specs still needed from client
Per app: data model, user roles/permissions, MVP screen list, auth provider. The references show the
**look**; engineering needs the **behavior**. Plus the **XPMS** spec (PROPRIETARY_IP.md placeholder).
