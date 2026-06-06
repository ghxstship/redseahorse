# ALIGNMENT — canonical primitives & governance

**Single source of truth: `colors_and_type.css` `:root`** (machine mirror: `tokens.json`).
Every UI element — borders, radii, shadows, transitions, animations, spacing, color, type — **must reference a token**. No raw literals (`2px`, `6px`, `.12s`, `#…`, hard-coded shadows) in any page or component. If a value is needed that has no token, add the token to the canonical source first, then use it.

## Primitive tables (canonical values)

### Spacing — 4px grid
`--sp-1:4 · --sp-2:8 · --sp-3:12 · --sp-4:16 · --sp-5:24 · --sp-6:32 · --sp-7:48 · --sp-8:64 · --sp-9:96 · --sp-10:128`

### Radii
`--r-0:0 · --r-1:4 · --r-2:8 · --r-3:12 · --r-pill:999`
Cards/media/inputs → **`--r-2`** (8px). Tags/buttons pills → `--r-pill`. Sharp panels → `--r-0`/`--r-1`. (Retire stray `5px`/`6px`.)

### Stroke widths (now a real scale)
`--stroke-1:1 · --stroke-2:2 · --stroke-3:3 · --stroke-4:4`
Hairline dividers → `--stroke-1`. Card/comic outlines → `--stroke-2`. Emphasis/section rules → `--stroke-3`. Heavy brand frames (footer top, deck) → `--stroke-4`.

### Shadows — dual elevation
- **Hard offset (signature, zero blur):** `--shadow-hard-sm:3px 3px 0 ink · --shadow-hard:6px 6px 0 ink · --shadow-hard-lg:8px 8px 0 ink · --shadow-hard-brass:6px 6px 0 brass-deep`. Use on cards, buttons, stickers, mockups.
- **Soft (dark surfaces, rare):** `--shadow-pop-sm / --shadow-pop / --shadow-pop-lg / --shadow-pop-brass / --shadow-pop-nebula`.
- **Glow (very rare):** `--glow-plasma / --glow-nebula`.
- **Logo marks carry NO shadow** (logo lock — clean white-flag/black-skull only).

### Motion — durations + easings (new)
`--dur-1:80ms · --dur-2:120ms · --dur-3:160ms · --dur-4:240ms` · `--ease-pop:cubic-bezier(.2,.7,.2,1)` · `--ease-snap:ease`.
Hover/press → `--dur-2 --ease-pop`. Small color shifts → `--dur-1`. Panels/reveals → `--dur-3/4`. No long fades, no parallax, no infinite decorative loops on content. Honor `prefers-reduced-motion`.

## Literal → token mapping (apply everywhere)
| Found literal | Replace with |
|---|---|
| `border:2px solid` | `border:var(--stroke-2) solid` |
| `border:3px / 4px solid` | `--stroke-3` / `--stroke-4` |
| `border-radius:5px / 6px` | `var(--r-2)` |
| `box-shadow:3px 3px 0 …ink` | `var(--shadow-hard-sm)` |
| `box-shadow:6px/7px 6px/7px 0 …ink` | `var(--shadow-hard)` |
| `box-shadow:8px 8px 0 …ink` | `var(--shadow-hard-lg)` |
| `…0 …brass-deep` (hard) | `var(--shadow-hard-brass)` |
| `transition … .08s/.12s/.16s/.24s` | `var(--dur-1/2/3/4)` |
| easing `ease` / cubic-bezier | `var(--ease-snap)` / `var(--ease-pop)` |
| any `#hex` / `rgb()` | the matching color token (`--void/--ink/--brass/--nebula/--plasma/--bone/--fg-*`) |

## Locks (non-negotiable)
- **Logo:** white flag + black skull, never recolored, no drop shadow on the mark.
- **Wordmark:** spaced `G H X S T S H I P`, `white-space:nowrap`, color only `--bone` (dark ground) or `--ink` (light ground) — never an accent. (Anchors wrapping the wordmark need `color:inherit`/explicit bone, or they fall back to link-blue.)
- **Corners sharp, borders thick, shadows hard** = the pop-art signature; soft shadows are the exception, used only on dark surfaces.

## Audit status
- ✅ Canonical source completed: real `--stroke-2/3/4`, `--shadow-hard*`, `--dur-*`, `--ease-*` added to `colors_and_type.css`.
- ✅ Logo-mark shadow removed (demo hub); wordmark color locked to bone.
- ✅ **Rollout done:** swept 35 files (site, retail/gallery/store/careers, deck, email, social, documents, `components.css`/`terminal.css`/`polish.css`) — borders→`--stroke-*`, hard shadows→`--shadow-hard*`, transitions→`--dur-*`, radii→`--r-*`. Off-scale deck frames (5–8px) intentionally left as deliberate display weights.
- ✅ **`tokens.json` synced** to the live CSS: corrected `radius` scale, added `stroke`, `shadowHard`, `shadowSoft`, and `motion`.
