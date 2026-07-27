---
name: ghxstship-design
description: Use this skill to generate well-branded interfaces and assets for GHXSTSHIP ("Ghost Ship"), a B2B experiential production & technology company organized into four services. Production, Operations, and Technology (ATLVS/COMPVSS/GVTEWAY). For production work or throwaway prototypes/mocks/decks/social. Contains the "Venture Beyond" retro-futurist nautical pop art system plus an SEO/GEO playbook: colors, type, fonts, the pixel ghost-ship logo, icons, brand architecture, and UI kit components.
user-invocable: true
---

# GHXSTSHIP, "Modernist" Design System

Read `README.md` first, it carries the brand context, content voice, and full visual foundations.
Then explore the other files.

## Quick start
- **Brand architecture:** read `BRAND_ARCHITECTURE.md`. GHXSTSHIP is presented as **the Spaceport** (a transit terminal). **Destinations**
  = the experiences we produce (festivals, tours, activations, immersive, sporting). **Itinerary** = the nine-phase
  Production Lifecycle (Discovery→Strike, in `PROPRIETARY_IP.md`). **What’s Aboard** = the 3 verticals
  (Production/Operations/Technology). Use this in nav, headings, and copy.
- **Terminal system:** link `modernist.css` for the departures board, Flight Path tracker, gate header,
  wayfinding nav, boarding pass, and pictograms, the structural layer. Pop art stays expressive.
- **SEO/GEO:** follow `SEO_GEO.md`, answer-first writing, semantic HTML, JSON-LD (Organization +
  SoftwareApplication + FAQPage), and a consistent entity definition. The website kit is the reference.
- **Tokens:** link `modernist.css` (colors, type, spacing, shadows, halftone) + `modernist.css`.
- **Icons:** inline SVG (bold) via CDN, see `ICONOGRAPHY.md`.
- **Logo:** `assets/skull-*.svg` (recolored marks), never restyle the pixel proportions.
- **Photography:** `PHOTOGRAPHY.md`, duotone/graded recipes; drop real production photos in `assets/`.

## The look in one breath
Charcoal-graphite reef grounds · jade (Production) / pineapple (Operations) / sapphire (Technology)
signals · Big Shoulders display caps + Space Grotesk body + Space Mono metadata · hairline borders ·
soft refined elevation (no hard offsets) · gently rounded corners · white-flag/transparent-skull mark.
**Positioning:** the lead producer and accountable management team of experiential project management. **Voice:** Yacht
Builder + Expedition Creator, light texture, never corny. **Client journey:** The Destination →
The Ship → The Course → The Crew → The Manifest → Launch. **Lifecycle (XPMS):** Discovery · Design ·
Advance · Procurement · Build · Install · Operate · Close. The *structural* layer is the journey rail; voice
is the *expressive* layer. Voice: confident expedition log; **lead with the literal name (Destinations,
Flight Path, Production/Operations/Technology), terminal/nautical flavor second**; disruption &
innovation, never deadline-survival; no emoji.

## Color
**Master:** Modernist, premium vintage-tropical. Charcoal-graphite reef night + jade (Production) + pineapple (Operations) + sapphire (Technology). Runs in light + dark.

## When building
- Visual artifacts (slides, mocks, social, prototypes): copy assets out and produce static HTML for the
  user to view. Fork the kits in `ui_kits/`, `ui_kits/website/`, `social/` as starting points.
- Production code: read the rules here and lift exact token values.
- If the user invokes this skill with no brief, ask what they want to build, ask a few sharp questions,
  then act as an expert GHXSTSHIP designer.

## File map
`BRAND_ARCHITECTURE.md` · `PROPRIETARY_IP.md` · `SEO_GEO.md` · `modernist.css` · `modernist.css` ·
`modernist.css` · `README.md` ·
`ICONOGRAPHY.md` · `PHOTOGRAPHY.md` · `assets/` (logo + skull marks) · `preview/` (spec cards) ·
`ui_kits/website/` · `ui_kits/products/` · `ui_kits/website/` · `social/`.
