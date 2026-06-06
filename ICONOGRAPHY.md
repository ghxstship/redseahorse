# ICONOGRAPHY — GHXSTSHIP

Two registers, used deliberately.

## 1. System icons — Phosphor Icons (bold weight)
The thick, even strokes of **Phosphor "bold"** read as comic-panel ink and sit naturally next to the
display type. Use **fill** weight only inside solid badges. Load from CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css">
<!-- usage -->
<i class="ph-bold ph-anchor"></i>
<i class="ph-fill ph-lightning"></i>
```

**Rules**
- Default: `ph-bold`, color `--ink` on light / `--bone` on dark, size 20–28px in UI, larger for feature glyphs.
- **Badge treatment:** drop an icon in a circle or square with a thick ink border + hard offset shadow
  and a brass/nebula fill — the icon becomes a "sticker." This is the signature GHXSTSHIP icon look.
- One accent color per icon cluster. Don't rainbow.
- Stroke matching: never mix Phosphor with thin-line sets (Lucide/Feather). Bold only.

**Brand-relevant glyphs** (nautical / production lexicon):
`ph-anchor` `ph-compass` `ph-boat` `ph-map-trifold` `ph-path` `ph-lightning` `ph-megaphone-simple`
`ph-ticket` `ph-calendar-blank` `ph-users-three` `ph-wrench` `ph-broadcast` `ph-globe-hemisphere-west`
`ph-shooting-star` `ph-flag-banner` `ph-binoculars` `ph-stack` `ph-waveform` `ph-sparkle`.

## 2. Brand glyph — the pixel ghost-ship skull
The 8-bit skull is the hero mark, **not** a UI icon. Use it for loaders, empty states, favicons,
watermark stamps, section punctuation, and the logo lockup.

> 🔒 **Color lock:** the mark is **always white flag + black skull**. Use `assets/skull-bone.svg`
> (white glyph) on dark grounds; on light grounds, set it in a **black square lozenge** or use the
> original tile `assets/logo-ghostship-skull.svg`. Keep it pixel-crisp (`image-rendering: pixelated`).
> **Never** recolor the mark or alter its proportions or add gradients.

## Emoji & unicode
- **No emoji**, anywhere.
- A small set of unicode marks is allowed as typographic punctuation in mono/eyebrow text:
  `◆` (coordinate stamp bullet), `✦ / ★` (rating / lead marker), `↗` (outbound / "go"), `//` (manifest separator).

## Substitution note
Phosphor is an open-license CDN set chosen to match the aesthetic — flag if you have a licensed
brand icon library and I'll swap it in.
