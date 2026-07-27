# GHXSTSHIP Site Rebuild — Page Authoring Guide (Modernist · greyscale + green)

Read this fully before authoring any page. The reference implementation is
`ui_kits/website/index.html` — open it and mirror its conventions exactly.

## What this is
The site is being rebuilt in the **Modernist** design system, recolored to
GHXSTSHIP: pure-grayscale neutrals on a `#fcfcfc` ground, **GHXSTSHIP Green
`#2edb3a` as the ONLY accent**, Archivo 400/600/800 everywhere, radius 0,
structure drawn with 2px rules and 1px borders — no shadows, no gradients,
no other hues. All tokens/components live in `modernist.css` at repo root.

## The four services (updated verticals — use these names everywhere)
1. **Experiential Design & Production** — `services/experiential-design-production.html` — "The Experiential Producer"
2. **Venue & Site Operations** — `services/venue-site-operations.html` — "The Operations Director"
3. **Tour & Talent Management** — `services/tour-talent-management.html` — "The Tour Manager"
4. **Technology & Systems Engineering** — `services/technology-systems-engineering.html` — "The Production OS"

Never reference the old vertical set (Experiential Production / Site
Operations / Venue Management / Immersive Technologies) as the service names.
Platforms are ATLVS, COMPVSS, GVTEWAY, LEG3ND (all four, always).

## File anatomy (copy from index.html)
1. `<!DOCTYPE html><html lang="en"><head>` with: charset, viewport,
   description, keywords, canonical (`https://ghxstship.tours/<route>`),
   title (`Page Name — GHXSTSHIP`), the two font preconnects, and the
   stylesheet link. **Depth matters**:
   - root pages (`about.html`): `../../modernist.css`
   - subdir pages (`services/x.html`): `../../../modernist.css`
2. One or more `<script type="application/ld+json">` blocks (port/adapt the
   old page's JSON-LD; update service names; plain JSON, no HTML entities).
3. A `<style>` block with **page-specific layout only** — components
   (buttons, cards, chips, grids, forms, faq, stats, chrome) come from
   modernist.css. Keep it small. Never redefine chrome (nav/footer) styles.
4. `<body>` = chrome header + `<main id="main">` + chrome footer.

## Canonical chrome (copy VERBATIM, adjust ../ for subdirs)
Header (root-level hrefs shown; from `services/`, `work/`, `careers/`,
`resources/`, `destinations/` prefix `../`). The brand mark is **inline SVG**,
not an `<img>` — it takes `currentColor`, which is what lets one asset be
white in the black header and page ink in the footer. Copy the `<svg
class="brand-mark">` and the `.theme-toggle` button verbatim from
`index.html`; they are long but they are literal.

```html
<header class="nav"><div class="wrap nav-inner">
  <a class="brand" href="index.html" aria-label="GHXSTSHIP home"><svg class="brand-mark" viewBox="40 54 120 92" fill="currentColor" aria-hidden="true" focusable="false"><path d="…"></path></svg><b>GHXSTSHIP</b></a>
  <nav class="desk-nav" aria-label="Primary">
    …links…
    <a class="btn btn-primary nav-cta" href="contact.html">Start a Project</a>
  </nav>
  <button class="theme-toggle btn btn-icon btn-secondary" type="button" data-theme-toggle aria-label="Theme">…three glyphs…</button>
</div></header>
```

The theme control sits **outside** `.desk-nav` so collapsing the links at
1080 does not take it with them. In the standalone previews it is inert —
`public/theme.js` is only loaded by the production layout — but the page
still follows the OS theme, which is the part that matters.

Footer: copy the entire `<footer class="site-foot">…</footer>` block from
index.html verbatim (again adjusting `../`). The generator DROPS both
`header.nav` and `footer.site-foot` from generated pages (React chrome in
the layout replaces them) — they exist in source only so the file previews
standalone. Do not invent variant chrome.

## Page opener pattern (every non-home page)
```html
<section class="wrap" style="padding-block:clamp(36px,5vw,64px) 0;">
  <p class="kicker">Section Name</p>
  <h1 class="page-h1">Page Title.</h1>
  <p class="lede">One-to-two sentence dek.</p>
  <hr class="hr" style="margin-top:clamp(24px,4vw,40px);">
</section>
```

## Component vocabulary (all in modernist.css — use these, don't reinvent)
- Layout: `.wrap` (fluid to 1440px max — never pin a page to a narrower
  container or re-declare wrap widths), `.sec-pad`, `.sec-pad-sm`, `.grid2/.grid3/.grid4`,
  `.split2` (+`.sticky-fig`), `.band` (gray section), `.band-dark`
  (black section, for the closing CTA only).
- Type: `.kicker`, `.page-h1`, `.display-h1`, `.lede`, `.text-muted`,
  `.sec-h2` / `.sec-h2-sm` (section heading sizes — never inline clamps).
  ALL text sizes are rem-based (the root font-size is fluid:
  15px mobile → 16.5px wide desktop, so every rem scales with viewport).
  NEVER declare `font-size` in px except inside a clamp() for display
  headings; width caps on text containers use ch or rem, never px.
  Headings auto-uppercase via CSS — write Title Case in source. The
  GHXSTSHIP wordmark in chrome renders in `--font-wordmark` (Bebas Neue)
  via the `.brand` / `.foot-brand-name` classes — never restyle it per page.
- Global page components (never redefine per page): `.svc-card`, `.phases`
  9-stop strip, `.wcard`, `.close-cta`, `.cta-row`. Page CSS holds only
  genuine overrides.
- **Breakpoint scale is closed: 1080 · 960 · 720 · 480.** 1080 = nav
  collapses to the burger; 960 = two-col splits stack; 720 = grids halve;
  480 = grids single-column and display headings compress. Do not invent
  intermediate breakpoints — the scale is closed and the whole site now
  uses only these values.
- **Tap targets: 24×24 minimum** for anything not inline in a sentence
  (WCAG 2.2 SC 2.5.8). A clickable chip must BE the anchor, not a span
  wrapping one.
- **One closing CTA per page.** The canonical closer is
  `<section class="band-dark close-cta">` with kicker + h2 + centered
  `.cta-row` of two `.btn-lg`. Never place another CTA section
  immediately before it — a content section may lead into it, but it
  carries no buttons. Exceptions that legitimately have no closer: forms
  (contact, careers/apply), 404, and the legal pages, which end quiet.
- Footer legal row includes the Accessibility link (accessibility.html)
  after Terms.
- Actions: `.btn.btn-primary` (green fill — ONE per viewport-ish, the primary
  action), `.btn-secondary` (outlined), `.btn-ghost` (green text link).
  Size scale is closed: `.btn-sm` 7×14 · `.btn` 10×18 (36px min-height,
  matches `.input`) · `.btn-lg` 14×26 · `.btn-icon` 36×36 · `.btn-block`.
  NEVER override button padding or font-size inline or per page.
- Card atoms: `.more` (arrow link) and `.role` (card kicker) are global —
  never redefine their typography per page. Card alignment contract: card
  internals are top-anchored in source order; ONLY the trailing action pins
  to the card bottom via `margin-top: auto`. Nothing else may `flex: 1`
  inside a card. Card title scale: 21px feature (svc/mcard) · 18px compact
  (wcard/xlink/tm) · 17px dense (card/prod).
- Bits: `.tag(-accent/-neutral/-outline)`, `.chip` (+`.on`) for filters,
  `.stat` (`.v`/`.k`), `.card` family, `.row-line` (+`.row-title`/`.row-sub`)
  for list rows, `.faq-item > .faq-q + .faq-a` accordions, `.table`,
  `.progress`, `.field > label` + `.input` for forms.
- Images: ALWAYS wrap in a `.grayscale` figure with a fixed `aspect-ratio`
  (via a small page class), `width`/`height` attrs, `loading="lazy"` below
  the fold. Keep existing Unsplash URLs from the old pages when porting.

## Theme (light · dark · system) — hard rules
- **Never write a colour literal.** Not a hex, not `rgb()`, not a named
  colour. Every colour comes from a token, and a theme is nothing but a token
  swap on `:root`. One literal in a page style block is one thing that will be
  wrong in the other theme. (`#000` inside a `mask` gradient is fine — masks
  carry alpha, not colour.)
- Three states: no `data-theme` follows the OS, `data-theme="light"` and
  `data-theme="dark"` pin it. `public/theme.js` writes that attribute and
  nothing else; a blocking inline snippet in `app/layout.tsx` applies the
  stored choice before first paint.
- The dark token block is declared **twice** in `modernist.css` — once under
  `prefers-color-scheme`, once under `[data-theme="dark"]`. CSS cannot share
  one body between a media query and a selector. Change both or neither.
- `header.nav`, `.band-dark` and `.nav-drawer-panel` are **black in every
  theme**. They get there by re-declaring the ground tokens in their own
  scope, so everything nested in them is correct with zero component
  overrides. Never add a `.band-dark .thing { color: … }` rule — if something
  looks wrong in there, the token is wrong.
- A scope that re-declares `--color-text` **must also declare `color`**.
  Descendants inherit the computed colour from `<body>`, not the declaration,
  so `color: inherit` would otherwise keep page ink. This is exactly how the
  desktop nav links once ended up black on black.
- Images: wrap in `.grayscale`, which reads `--img-filter` — dark mode pulls
  the whites back. Where a placeholder mark stands in for a photo, use
  `.ph-mark` with a `<use href="#gx-flag">`, never a coloured asset.
- Contrast is verified, not assumed. Both themes clear WCAG AA on every route.

## Accent discipline (hard rules)
- Green is spent sparingly: primary button, kickers, stat figures, small
  emphasis spans, one accent moment per section.
- Small green text uses `var(--color-accent-700)` (#1b7c21) — never the base
  green. Base green `var(--color-accent)` only as a FILL (buttons, bars, dots)
  with `var(--color-on-accent)` ink, or large display spans on dark.
- Everything else is grayscale. No other hues anywhere.

## Voice + content
- Port the existing page's copy — it passed a voice audit. Adapt terminology
  to the four new verticals; don't invent new facts, clients, or numbers.
- No parentheses in copy. No emoji. Em-dash sparingly. Confident, plainspoken.
- Premium register for cost language: "Complimentary", never "free", "no charge", or "no cost".
- Nav/section labels are literal (Services, Work, Team), not nautical.
- Keep every internal link pointing at a real page (see route list below).
  Relative `.html` hrefs — the generator rewrites them to routes.

## Routes that will exist (link only to these)
index, about, team, locations, contact, platforms, pricing, store, gallery,
course, privacy, terms, accessibility, 404, services/{index, experiential-design-production,
venue-site-operations, tour-talent-management, technology-systems-engineering},
destinations/{index, festival-production, concert-tour-production,
brand-activations, immersive-experiences, cruise-ships, amusement-parks,
sporting-events, tv-film-broadcast},
press, work/{index, salvage-city-supper-club, l-acoustics-dj, black-coffee-race-track, polymarket-free-grocery-store, factory-town, heineken-turn-4-nightclub, red-bull-unforeseen-motel, patron-cristalino-becky-g, fifa-world-cup-brazil-base-camp},
careers/{index, role, apply},
resources/{index, blog, glossary, the-experiential-producer}.

## Generated pages — do NOT hand-edit
`work/*.html` (every case study) and `press.html` are written by
`scripts/build-case-studies.py` from `data/case-studies.json` and
`data/press/inventory.json`. Editing them by hand is editing build output:
the next run overwrites it. Change the data, run the script.

That generator is also what keeps the case studies normalised — one template,
one section order, one JSON-LD shape, one press block — so the formatting
cannot drift page by page. The press block only renders items the inventory
marks usable, above the tier floor, positive, and carrying a real headline;
anything else stays backend.

## Forms (contact + careers/apply only)
Keep the existing form field names/structure from the old page; add
`required` on genuinely required fields; keep `<form>` markup compatible
with `/public/site-form.js` (it binds any `<form>` and posts to
`/api/contact/`). Inputs use `.field > label` + `.input`.

## Generator constraints
- `<main id="main">` wraps all content.
- No `<script>` in the body except JSON-LD in head (behavior JS is global).
  EXCEPTION: tiny inline widgets (FAQ toggle) — instead author FAQs with
  `<details class="faq-item"><summary class="faq-q">…</summary><div class="faq-a">…</div></details>`
  so they work with zero JS (style `details.faq-item summary` in page CSS if
  needed).
- Self-closed void elements not required (generator handles), but keep valid
  HTML: no unclosed tags, no duplicate ids, alt text on every img.
- JSON-LD: plain decoded text (write `&` not `&amp;` inside the JSON).
