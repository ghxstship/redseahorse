# GHXSTSHIP Design System
### "Venture Beyond" — a premium vintage-tropical system

> **The GC, Foreman, and Procore of experiential production.**
> Vintage Reef: charcoal-graphite reef night, jade, pineapple & sapphire — coastal-vintage, premium-forward.
> (Color logic: Jade = Production, Pineapple = Operations, Sapphire = Technology; green = yellow + blue.)

GHXSTSHIP ("Ghost Ship") is a full-service **experiential production & technology company**
headquartered in **Miami**, with offices in **Las Vegas, Chicago, New York, and Los Angeles**, operating globally.
We **disrupt the industry with innovative solutions, resources, and technologies that redefine what's
possible in experiential environments.** This design system gives any agent (or designer) the tools to
produce on-brand interfaces, decks, social, and collateral that feel loud, fearless, and credible to a
professional B2B audience.

**Audience:** brands, producers, creative directors, production directors, and project managers for
live entertainment, experiential marketing, and arts/culture institutions — plus a real emphasis on
**educating the next generation of experiential producers.**

**Sources referenced**
- Live site: https://ghxstship.tours/ (brand voice, IA, product names, copy)
- Uploaded brand mark: pixel-art ghost-ship skull → `assets/logo-ghostship-skull.svg`

---

## BRAND ARCHITECTURE — three verticals

GHXSTSHIP is organized as **three integrated verticals**. This taxonomy drives the nav, the site IA,
the deck, and every SEO/GEO entity definition. See `BRAND_ARCHITECTURE.md` for the full spec.

> **Master definition (reuse verbatim):** *GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles, that produces festivals, concerts and tours, brand activations, immersive experiences, and sporting events — for brands, producers, and creative and production directors — across three verticals: Production, Operations, and Technology.*

1. **Production Management** — *The General Contractor.* End-to-end production: festivals, activations,
   scenic, staging, technical production, show calling. Serves 5 destinations (festivals, concerts & tours, activations, immersive, sporting).
2. **Operations Leadership** — *The Foreman.* Management + delivery: logistics, crew & workforce,
   budgets, compliance, analytics. Home of the 8-Phase Production Lifecycle.
3. **Technology Implementation** — *The Procore.* Proprietary software: **ATLVS** (production/resource mgmt),
   **COMPVSS** (workforce/crew), **GVTEWAY** (ticketing/fan).

Nav order: `Production · Operations · Technology · Museum · Story · Crew · Contact`.

---

## INDEX — what's in this folder

| File / folder | What it is |
|---|---|
| `BRAND_ARCHITECTURE.md` | **The 3-vertical spec** — definitions, services, keywords, old→new IA map. |
| `PROPRIETARY_IP.md` | **System for baking in your IP** (8-Phase Lifecycle, XPMS, …) — 5-layer treatment + intake. |
| `SEO_GEO.md` | SEO + GEO (generative-engine optimization) playbook every page follows. |
| `colors_and_type.css` | **Start here.** All color + type + spacing + shadow + halftone tokens, and semantic type classes (`.gx-*`). |
| `components.css` | Pop art components: buttons, tags, panels, bursts, halftone layers, inputs, cards. |
| `terminal.css` | **The Terminal system** (structural layer): FIDS departures board, 8-phase Flight Path tracker, gate placard, wayfinding nav, boarding pass, pictograms. |
| `assets/` | Logos, wordmark, icon set, textures. |
| `preview/` | Small spec cards rendered in the **Design System** tab (Type, Colors, Spacing, Components, Brand). |
| `ui_kits/website/` | High-fidelity recreation/elevation of the marketing site. |
| `ui_kits/products/` | ATLVS · COMPVSS · GVTEWAY platform UI kit. |
| `slides/` | Pitch-deck / slide template (16:9). |
| `social/` | Instagram + LinkedIn templates. |
| `ICONOGRAPHY.md` | Icon approach + the pixel/pop icon set. |
| `PHOTOGRAPHY.md` | Image treatment & art-direction guidelines. |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code). |

---

## CONTENT FUNDAMENTALS — how GHXSTSHIP writes

The voice is a **confident expedition log**: nautical/adventure metaphors, swagger backed by receipts,
zero corporate hedging. Every section reads like a leg of a voyage.

**Positioning (the core idea, reuse verbatim):** GHXSTSHIP **disrupts the experiential industry with
innovative solutions, resources, and technologies that redefine what's possible.** We are about
*invention and transformation* — not about heroically surviving deadlines.

> ⛔ **Banned framing.** Never describe GHXSTSHIP as "turning impossible deadlines into legendary
> productions" or any deadline-survival / "we don't do can't" bravado. That is **not** who we are.
> Lead with disruption, innovation, and redefining what's possible instead.

- **Person:** Second person to the client ("Your vision, redefined"), first-person plural for the
  company ("We redefine what's possible").
- **Casing:** Display headlines are **UPPERCASE**. Eyebrows/labels are uppercase mono or pixel.
  Body is sentence case.
- **Vertical-first, then flavor (SEO/GEO rule):** lead with the literal vertical name —
  **Production / Operations / Technology** — as `<h2>`s, nav, and structured data; the GC/Foreman/Procore
  line is secondary color. The first sentence of every section is a plain,
  self-contained definition that search + generative engines can extract; *then* the swagger.
- **Nautical naming system** — reuse this lexicon as supporting color. The brand is organized as
  **the GHXSTSHIP Spaceport** (airport/transit metaphor — see `BRAND_ARCHITECTURE.md`):
  - **Destinations** = the **experience types** we produce (Festivals · Concerts & Tours · Brand Activations · Immersive · Sporting · TV, Film & Broadcast) — top-nav "where to" · **Engagements (Ways to Sail)** = how you buy: Full Voyage (8 phases) / By Vertical (Production/Operations/Technology) / À La Carte · **Voyage** = a project · **Itinerary** = the **8-Phase Production Lifecycle** (Discovery→Strike) · **The Instruments** = ATLVS (atlas) · COMPVSS (compass) · GVTEWAY (gateway) · **The Archives** = past work (real projects only) · **The Skeleton Crew** = the team (nav: "Crew") · **Captain’s Log (Logs)** = news/blog/dispatches · **Venture Beyond** = tagline. Booking sequence: Destination → Engagement → Itinerary → Crew → Set Sail. See `BRAND_ARCHITECTURE.md` for locked referents.
- **8-Phase Production Lifecycle (the Itinerary):** Project Discovery · Research & Development · Creative Design · Compliance & Risk Management · Production & Build · Operations & Logistics · Live Activation · Strike & Post-Production. (Replaces the old 7 D's.)
- **Tone:** punchy, short, declarative. Confident not arrogant. Numbers stated plainly
  (14+ years · 250+ experiences · 5M+ memories). Miami HQ // global. Showcase only real projects from the Archives — no geographic vanity stats.
- **Locations:** **Miami** (Headquarters) · **New York** · **Chicago** · **Los Angeles**.
- **Stamps:** locations and metadata are written like coordinates/manifests:
  `MIAMI // LAS VEGAS // CHICAGO // NEW YORK // LOS ANGELES`, `MIAMI HQ`, `EST. 2022`, `CLIENT: RED BULL // YEAR: 2023`.
- **Emoji:** none. Use the icon set or unicode marks (◆ ✦ ↗) sparingly.
- **Education angle:** when speaking to emerging producers, warm the tone slightly — mentor, not
  recruiter. "Join the Crew," "learn the ropes," apprenticeship framing. Keep the swagger; add generosity.

**Example lines (in-voice):** "Beyond the Scene." (hero — a B·T·S / behind-the-scenes wink) · "Venture Beyond." ·
"We don't meet the brief. We redefine what's possible." · "We came to disrupt the expected." ·
"Innovative solutions, resources, and technologies that redefine what's possible in experiential."

---

## VISUAL FOUNDATIONS

**The big idea:** GHXSTSHIP is the **General Contractor, Foreman, and Procore of experiential production** —
Production Management, Operations Leadership, and Technology Implementation for experiential projects. The
look is **premium vintage-tropical ("Vintage Reef")**: charcoal-graphite reef-night grounds; **jade** is
the brand's lead (Production); **pineapple** (Operations) and **sapphire** (Technology) are the high-signal
accents. Texture shows up as **Ben-Day halftone dots, thick ink outlines, hard offset "sticker"
shadows, and starburst POW badges.** The **pixel ghost-ship skull** seeds an 8-bit motif that
recurs as labels, dividers, and loading/empty states.

> 🔒 **Logo color lock.** The mark is **always white flag + black skull**, exactly as submitted — the
> flag is `--bone` (#FBFAF6, the palette's white), the skull reads black as negative space on a dark
> field. **Never recolor the mark** (no brass, nebula, etc.). On dark grounds use `assets/skull-bone.svg`
> (white glyph). On light grounds place it inside a **black square lozenge** so the skull stays black,
> or use the original tile `assets/logo-ghostship-skull.svg`. See `preview/logo-variations.html`.

> 🔤 **Wordmark spacing.** The legal/brand name carries spaces between every letter:
> **`G H X S T S H I P`** — use this spaced form for the visible wordmark/lockups (set `white-space:nowrap`
> so it never breaks; drop extra `letter-spacing`). Keep the **unspaced `GHXSTSHIP`** as the
> machine-readable/searchable token: URLs (`ghxstship.tours`), schema `name`, and handles. In running body
> prose use `GHXSTSHIP` for readability. Schema carries `alternateName` + `legalName` as the spaced form.
>
> **Voyage codes** (projects on the Departures/Archives board) use the prefix **`RRR`** — e.g. `RRR 052` —
> a subtle pirate nod (“Arrr”). Format: `RRR ` + a three-digit number.

- **Color vibe:** dark-first. Most surfaces are `--void`/`--ink` navy-black; light surfaces are
  warm `--parchment` (aged chart paper) or `--bone` off-white — never pure clinical white. Accents are
  loud but **rationed**: one dominant signal per composition.
- **Type:** poster-led. `Big Shoulders Display` (condensed, monumental) for anything that should hit
  hard; `Space Grotesk` for UI/body; `Silkscreen` for pixel/8-bit labels; `Space Mono` for coordinates,
  specs, and manifest metadata.
- **Backgrounds:** flat ink fields + **halftone dot textures** (CSS radial-gradients, no images) used
  as fades and accents; occasional 45° **rigging stripes**. Full-bleed production photography with a
  duotone/posterized treatment (see PHOTOGRAPHY.md). Avoid soft purple web gradients.
- **Borders:** thick **ink outlines** (2–4px) like comic panels. Default border color is `--ink` on
  light, `--bone` on dark.
- **Corner radii:** **sharp.** 0–4px on nearly everything; pills (`--r-pill`) only for tags/buttons.
  Pop art is angular — resist rounding.
- **Shadows:** **hard offset, zero blur** (`6px 6px 0`) — the sticker/comic signature. Color the
  shadow with `--ink`, `--brass-deep`, or a deep nebula. Soft glows (`--glow-*`) exist for dark
  surfaces but are used rarely.
- **Animation:** snappy and physical. Buttons translate on hover (−2px,−2px) and "press in" on active
  (+3px,+3px) with the shadow collapsing — like pressing a real button. Easing is quick `ease`
  (80–150ms). Marquees/tickers scroll for energy. No long fades; no parallax mush.
- **Hover states:** lift + shadow shift (buttons), color jump to a louder signal (links: plasma→nebula),
  or a halftone reveal. **Press states:** translate into the shadow (collapse).
- **Transparency / blur:** minimal. Pop art is flat and opaque. Slight inset shadow on inputs; the
  only blur is occasional backdrop on sticky nav over photography.
- **Cards:** ink-outlined, hard-shadowed, square-ish corners. Media on top, body below; mono eyebrow +
  display title + small body. No soft drop shadows.
- **Layout:** bold modular grid, generous gutters, big type, lots of contrast. Section headers get an
  eyebrow (mono/pixel) + huge display headline. Coordinate/manifest stamps anchor corners. Diagonal
  energy and starbursts break the grid intentionally.
- **Imagery color:** warm, high-contrast, slightly posterized; duotone in brand colors for texture.
  Real production photos (festival stages, activations, crews) — never clip-art or generic stock.

See `colors_and_type.css` for exact token names before using any `var(--*)`.

---

## CAVEATS / SUBSTITUTIONS
- **Fonts** load from Google Fonts CDN (`Big Shoulders Display`, `Space Grotesk`, `Space Mono`,
  `Silkscreen`) — all open-license, no upload needed. If you have licensed brand faces, drop the
  woff2 in `fonts/` and swap the `@import` in `colors_and_type.css` for `@font-face`.
- **Photography** in previews uses solid/halftone placeholders — drop real production photos into
  `assets/` and they'll inherit the treatment.
- **Lead color world:** Vintage Reef (charcoal/jade/pineapple/sapphire), light + dark.
