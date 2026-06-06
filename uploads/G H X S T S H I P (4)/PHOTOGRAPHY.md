# PHOTOGRAPHY & IMAGE TREATMENT — GHXSTSHIP

Photography is the proof. The Museum is built on real production imagery — festival mainstages,
activations mid-build, crews on headset, packed crowds at golden hour. Treat it boldly so it sits
inside the pop art world instead of fighting it.

## Subject & art direction
- **Real productions only.** No generic stock, no clip art, no AI-obvious composites. The work is the
  flex — show the scale, the rigging, the crowd, the crew.
- **Energy + scale.** Wide shots that show ambition (50,000-cap stages); tight shots that show craft
  (hands on a console, a scenic detail). Motion blur and crowd energy are welcome.
- **People at work.** The crew is a character. Show competence under pressure.

## Color & grade
- **Warm, high-contrast, slightly posterized.** Crush blacks toward `--ink`, push highlights warm.
  Think concert-poster, not flat documentary.
- **Duotone for texture / backgrounds.** Map shadows→`--ink`, highlights→`--brass` (or →`--nebula`
  / →`--plasma` for variety). Use duotone where photography is decorative or behind type; keep one or
  two "hero" images full-color for impact.
- Avoid cool, clinical, desaturated grades. Avoid heavy purple/teal Instagram filters.

## Framing in layout
- **Full-bleed** for hero and section breaks; **ink-outlined + hard-shadow** when a photo sits as a
  card (3–4px `--ink` border, `6px 6px 0` shadow, sharp corners).
- A **pixel chip** (client/event) or **coordinate stamp** anchors a corner of most production images.
- Let type overlap the image edge; add a halftone-fade or ink protection gradient behind text on
  busy photos so it stays legible.
- **Grain/halftone overlay** at low opacity ties photos to the comic texture.

## CSS recipes (drop real `<img>`s in and apply)
```css
/* Duotone: ink shadows → brass highlights */
.gx-duotone{ position:relative; filter:grayscale(1) contrast(1.15) brightness(1.05); }
.gx-duotone::after{ content:""; position:absolute; inset:0;
  background:linear-gradient(var(--brass), var(--ink)); mix-blend-mode:lighten; }
/* or wrap the img and use background-blend on a colored layer */

/* Posterize-ish punch without duotone */
.gx-graded{ filter:contrast(1.18) saturate(1.15) brightness(0.96); }

/* Halftone overlay on a photo */
.gx-photo-dots::before{ content:""; position:absolute; inset:0;
  background:var(--halftone-ink); background-size:6px 6px; opacity:.18; mix-blend-mode:multiply; }

/* Text protection on busy imagery */
.gx-photo-scrim{ background:linear-gradient(0deg, rgba(6,8,21,.9), transparent 70%); }
```

## Don'ts
- Don't drop full-color photos onto a busy halftone background — pick one texture source.
- Don't round photo corners heavily (max `--r-2`).
- Don't desaturate into greige. GHXSTSHIP imagery is warm and loud.

> Placeholders in the kits use CSS halftone/stripe fills. Replace with real production photos in
> `assets/` and apply the recipes above.
