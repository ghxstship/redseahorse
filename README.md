# GHXSTSHIP

The marketing site for GHXSTSHIP, a professional services firm for live and
experiential projects. Static Next.js export, deployed on Vercel at
[ghxstship.tours](https://ghxstship.tours).

## How the site is built

Pages are **authored as plain HTML** in `ui_kits/website/` and **generated**
into `app/**/page.tsx` on every build. The HTML files are the source; the
`app/` tree is output and gets overwritten every time.

```
ui_kits/website/*.html      author here
scripts/generate-pages.py   → app/**/page.tsx
modernist.css               every token and component, one file
app/_components/            shared chrome: Nav, Footer, BrandMark, ThemeToggle
```

Read **`ui_kits/website/REBUILD_GUIDE.md`** before authoring a page. It is the
contract: components, breakpoints, accent discipline, theming, voice.

### The build chain

`prebuild` and `predev` run six steps. Three are checks that fail the build
rather than fixing anything silently.

```
check-assets.py            assets/ and public/assets/ must match
normalize-copy.py --check  copy must match data/copy-canon.json
build-case-studies.py      data/case-studies.json → work/*.html + press.html
build-glossary.py          data/glossary.json → resources/glossary.html
test-ratelimit.js          the contact limiter must still limit
render-emails.js           api/contact.js → ui_kits/email/*.html
generate-pages.py          ui_kits/website/*.html → app/**/page.tsx
```

```bash
pnpm install
pnpm dev      # localhost:3000
pnpm build    # → out/
```

## Data is the source of truth

Four files drive generated content. Edit these, never the output.

| file | drives |
|---|---|
| `data/copy-canon.json` | the identity sentence and the one contact address, enforced across every industry page |
| `data/case-studies.json` | the nine case-study pages |
| `data/glossary.json` | the 62-term glossary, 29 of them XPMS canon |
| `data/press/inventory.json` | press blocks on case studies, and `/press/` |
| `data/press/entries.json` | what the press scanner searches for |

## The design system

**Modernist**, recoloured to GHXSTSHIP: pure-grayscale neutrals on a `#fcfcfc`
ground, GHXSTSHIP Green `#2edb3a` as the only accent, Archivo 400/600/800,
Bebas Neue for the wordmark, radius 0, structure drawn with 2px rules and 1px
borders. No shadows, no gradients, no second hue.

It all lives in `modernist.css`. **Never write a colour literal.** A theme is
a token swap on `:root`, and one hex in a page style block is one thing that
will be wrong in the other theme.

Light, dark and system themes are all supported, and contrast is measured
across every route in both themes rather than eyeballed.

## The four services

1. **Experiential Design & Production** — "The Experiential Producer"
2. **Venue & Site Operations** — "The Operations Director"
3. **Tour & Talent Management** — "The Tour Manager"
4. **Technology & Systems Engineering** — "The Production OS"

Never the retired set: Experiential Production, Site Operations, Venue
Management, Immersive Technologies. Never the retired construction framing
either. GHXSTSHIP is not a general contractor, a foreman, or a Procore.

## Locations

Headquarters **Miami**. Regional **Los Angeles · Chicago · New York City**.
Satellite **Nashville · Denver · Las Vegas · Phoenix**. Eight in total, and
the tiers matter: Las Vegas is a satellite, not a primary office.

## XPMS 2.6

Every engagement runs the same **nine gated phases** in three acts:

| act | phases |
|---|---|
| **Plan** | Discover · Design · Advance |
| **Build** | Procure · Build · Install |
| **Show** | Operate · Amplify · Close |

Strike lives inside Operate; it is never a phase of its own. Every work item
resolves to one of **90 coordinates** on the ATLVS Coordinate Matrix: ten
department classes across the nine phases.

## The platforms

ATLVS the operator console, COMPVSS site and venue operations, GVTEWAY the
public interface and marketplace, LEG3ND the knowledge layer. State their real
status, which is in `ui_kits/website/ATLVS_CANON.md` and changes as they ship.

## Voice

Confident and plainspoken. Full rules in `VOICE_SAMPLE.md`. The ones broken
most often:

- **No em dashes.** Use the punctuation the dash was standing in for.
- **Nautical language only when it also works on land.** "Chart the course"
  passes because charting a course is ordinary business English. "Walk the
  course" is the wrong verb and was replaced everywhere.
- **"Complimentary"**, never "free" or "no charge".
- No parentheses in body copy. No emoji.
- Section labels are literal: Services, Work, Team.

## The forms

`api/contact.js` is a Vercel function that emails through Resend. One mailbox,
`sos@ghxstship.pro`. The sender is `ghxstship@atlvs.pro` deliberately: atlvs.pro
is the domain verified in Resend and ghxstship.tours is not, so a "correction"
to a .tours sender breaks every send.

It is rate limited: 5 sends per IP per 15 minutes, 40 per instance per hour.
The budget is **checked on arrival but spent on a send**, so a mistyped email
costs the sender nothing while a honeypot trip costs a bot its whole budget.
The counters are per warm instance, which bounds a flood but does not stop a
distributed one. See `BACKLOG.md`.

`scripts/test-ratelimit.js` stubs the provider, runs in the build chain, and
costs nothing. `scripts/test-contact.mjs` delivers real mail and bills the
account, so it refuses to run without `CONFIRM_LIVE_SEND=yes`.

## Caching

Vercel only applies immutable caching to its own hashed `_next/static` output.
Everything served from `public/` defaults to `max-age=0, must-revalidate`, so
the rules in `vercel.json` set it explicitly. Fonts are `immutable` for a year
and their filenames are **not** content-hashed, which means **you must rename a
font file when you regenerate it** or returning visitors keep the old one.

## Reference

| doc | what it holds |
|---|---|
| `ui_kits/website/REBUILD_GUIDE.md` | page authoring contract |
| `ui_kits/website/ATLVS_CANON.md` | what the four platforms are, and their real status |
| `data/press/README.md` | the press inventory, its ranking model, its scanner |
| `BACKLOG.md` | measured work not done yet, and why |
| `OPTIMIZATION_PLAN.md` | architecture decisions log |
| `BRAND_ARCHITECTURE.md` | the verticals and how they relate |
| `VOICE_SAMPLE.md` · `PHOTOGRAPHY.md` · `ICONOGRAPHY.md` | brand reference |
| `SEO_GEO.md` · `COMPETITIVE.md` · `PROPRIETARY_IP.md` | positioning and search |
