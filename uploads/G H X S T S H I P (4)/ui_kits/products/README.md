# UI Kit — GHXSTSHIP Products ("The Tools")

A single working dashboard that switches between all three proprietary platforms. **Open `index.html`**
and use the product switcher in the sidebar.

This kit shows the system applied to **product UI** — more restrained than the marketing site (less
halftone maximalism, dark cosmic chrome, brass/plasma/nebula as functional accents) while still
unmistakably GHXSTSHIP. "Bold but credible."

## Products
- **ATLVS** — internal, producer &amp; executive — *Dashboard* dashboard with stat strip and a 8-phase
  production **kanban** (Discover → Deliver) with priority-coded task cards.
- **COMPVSS** — crew, vendor &amp; talent — *Crew Roster* with a weekly **shift-schedule grid**
  (day/evening/off pills, roles, avatars, certification compliance).
- **GVTEWAY** — guest &amp; client — *Sales* with live-event sell-through bars and a
  real-time **community feed**.

## Reusable components
Sidebar w/ product switcher + data-driven nav · sticky topbar (breadcrumb, icon buttons, primary
action) · stat cards · kanban column + task card · schedule grid + shift pill · event row w/ progress
bar · activity feed · avatars · pixel product chips.

## Notes
- Nav is rendered from a `NAVS` config object — swapping products updates nav, title, breadcrumb, and CTA.
- Pulls tokens from `../../colors_and_type.css`; icons from Phosphor CDN; skull mark from `../../assets/`.
- Cosmetic prototype — interactions are illustrative, not production logic.
