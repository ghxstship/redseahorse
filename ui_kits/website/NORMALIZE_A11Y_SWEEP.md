# DS Normalization + WCAG 2.2 AA Sweep — Per-Page Spec

Apply ALL sections to every assigned file in ui_kits/website/. The design
system source of truth is /Users/julianclarkson/claude-code/redseahorse/modernist.css —
read it first; the reference page ui_kits/website/index.html is already
normalized and shows the target shape.

## 1 · Normalization (dedupe against modernist.css)

These components are now GLOBAL in modernist.css — delete any per-page
<style> rules that redefine them (identical or near-identical copies):
`.svc-card` (+.bar/.role/.more), `.phases`/`.phase` (incl. its 720px media
query), `.wcard` (+.media/.body/.meta), `.close-cta`, `.cta-row`,
`.res-card`-style clones of svc-card (rename markup to svc-card if it is
one). Keep rules that genuinely differ (e.g. a different aspect-ratio) as
small overrides only.

Heading scale: replace inline `style="font-size:clamp(30px,4.2vw,48px);"`
(any spacing variant) with `class="sec-h2"`, and
`style="font-size:clamp(28px,3.6vw,44px);…"` with `class="sec-h2-sm"`
(keep any extra inline props like max-width). A `<h2 class="sec-h2">` may
merge with existing classes.

Tokens: any hard-coded hex the tokens carry → var():
`#2edb3a`→`var(--color-accent)`, `#1f8425` or `#1b7c21`→`var(--color-accent-700)`,
`#00ca22`→`var(--color-accent-600)`, `#001800`→`var(--color-on-accent)`,
`#fcfcfc`→`var(--color-bg)`, `#efefef`→`var(--color-surface)`,
`#000`/`#000000` as a color → `var(--color-text)` (NOT inside color-mix
with --color-text, and NOT in mask/gradient utility values).

## 2 · Accessibility (WCAG 2.2 AA)

- Exactly one `<h1>`; heading levels never skip (h2 then h3 …). Fix by
  re-leveling, not restyling — visual size comes from classes.
- Images: meaningful images keep descriptive alt; purely decorative images
  get `alt=""`. No alt text that starts "image of"/"photo of".
- Tables: `<th>` gets `scope="col"` (or `scope="row"` for row headers).
- All external links (http…) carry `target="_blank" rel="noopener"` —
  add `rel` if missing; do NOT add target to internal links.
- Small accent-colored text must use `var(--color-accent-700)`; base green
  `var(--color-accent)` only as fill or on the dark band. Fix violations.
- Forms: every control has a visible `<label for>`; required fields keep
  `required`. Do not rename ids/names (site-form.js contract).
- No positive `tabindex`, no `autofocus`.
- Any per-page animation must sit behind the global reduced-motion kill
  (it does automatically via modernist.css) — but remove page-level
  `@media (prefers-reduced-motion)` blocks ONLY if redundant.
- Language: `<html lang="en">` present (already standard).

## 3 · Footer legal row (compliance link)

In each page's source footer, the legal-row links become:
`<a href="privacy.html">Privacy</a> <a href="terms.html">Terms</a> <a href="accessibility.html">Accessibility</a> <a href="contact.html">Start a Project</a>`
(prefix `../` for subdirectory pages). Add the Accessibility link; keep the
rest as-is.

## 4 · Validate after editing

Balanced tags · one h1 · no heading-level skips · alt on every img ·
no dropped-component CSS left in the page <style> · page still links only
existing routes (accessibility.html now exists at root). Do not run the
generator or build.
