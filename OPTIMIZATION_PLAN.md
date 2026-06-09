# GHXSTSHIP Site — Full Codebase Audit & Optimization Plan

**Date:** 2026-06-09 · **Scope:** every line of the production surface — `app/**` (27 pages), `scripts/generate-pages.py`, `public/*.js` (5 enhancers), `api/contact.js`, the 4 kit CSS files, configs (`next.config.mjs`, `vercel.json`, `tsconfig.json`, deploy workflow), `robots.txt`/`sitemap.xml` — plus live-site probes of `ghxstship.tours`.

**Status: PLAN FOR APPROVAL — no code has been changed.**

---

## Architecture (as found, verified)

- Next.js 16 static export (`output: 'export'`). `scripts/generate-pages.py` converts `ui_kits/website/*.html` (the design source of truth) into `app/**/page.tsx` on every `prebuild`/`predev`, **wiping everything in `app/` except `layout.tsx` and `_components/`**.
- Production hosting is **Vercel** (`www.ghxstship.tours`; apex 308s → www). `api/contact.js` is a Vercel serverless function using Resend — **verified live and working** (`POST /api/contact/` → `200 {"ok":true}`; the non-slash path 308s first).
- A GitHub Actions workflow also deploys the static `out/` to **GitHub Pages** (mirror; no API there — the form's mailto fallback covers it by design).
- Client JS (`site-form.js`, `motion.js`, `journey.js`, `hscroll.js`, `phase-detail.js`) is progressive enhancement, loaded via `<script defer>` in the root layout.

This architecture is sound for a marketing site. Nothing below proposes changing it.

---

## P0 — Decisions (resolved 2026-06-09)

| # | Decision | Status |
|---|---|---|
| D1 | **Canonical domain** → apex is canonical. | **Approved — needs one dashboard action:** Vercel → Project → Settings → Domains → set `ghxstship.tours` as the primary domain (www then 308s → apex). No code change; all code already points at the apex. |
| D2 | **Résumé uploads** → real Resend attachments. | **Done.** `site-form.js` validates (PDF/Word, ≤3 MB), base64-encodes, and sends `attachments`; `api/contact.js` re-validates (type, size, filename, base64, max 2) and forwards to Resend on the studio notification. Apply form shows a "PDF or Word · up to 3 MB" hint. Also fixed a pre-existing validation deadlock: stale `setCustomValidity` errors blocked all resubmission; custom validity now clears on input/change. Verified: mocked-handler tests (valid/bogus/oversize/traversal) + in-browser end-to-end on /careers/apply/ and regression on /contact/. |
| D3 | **GitHub Pages mirror** → killed. | **Done.** `.github/workflows/deploy.yml` removed (mirror added no value over Vercel). Optionally also disable Pages in the GitHub repo settings. |

---

## P1 — User-facing fixes (high impact, low risk)

1. **Form failure handling swallows real errors** — `public/site-form.js:198-211` treats *any* non-OK response (including a 400 "valid email required" from our own API) as "server missing" and dumps the user into their mail client. Fix: parse the JSON error body; show the server's message inline for 4xx; reserve the mailto fallback for network errors / 404 / 5xx (the static-mirror case it was built for).
2. **POST endpoint hits a 308 first** — `trailingSlash: true` redirects `POST /api/contact` → `/api/contact/` on every submit. Change `DEFAULT_ENDPOINT` to `/api/contact/` (verified working live). One line.
3. **No favicon, no OG/Twitter cards** — `public/` has no icon files; `metadata` has no `icons`, `openGraph`, or `twitter`. Links shared in Slack/iMessage/LinkedIn render bare. Add: favicon.ico + SVG icon + apple-touch-icon (from `assets/skull-bone.svg`), a 1200×630 OG image on brand, and `openGraph`/`twitter` defaults in `app/layout.tsx` (+ generator support so per-page pages inherit). *(HANDOFF.md lists this as a known open item.)*
4. **Native form validation missing** — kit inputs have no `required` attributes; validation is entirely JS heuristics (`site-form.js` guesses email/textarea/first-text-input are required, while the server only requires email). Add `required` to the actual required fields in `ui_kits/website/contact.html` + `careers/apply.html` (flows through the generator), keeping client, server, and no-JS behavior consistent.
5. **Form status invisible to screen readers** — the injected status `<p>` (`site-form.js:127`) isn't a live region; "Sent. We'll be in touch." is never announced. Add `role="status"` / `aria-live="polite"`.
6. **Porthole carousel ignores reduced motion** — the inline rotation script in `app/page.tsx:376-382` (source: `ui_kits/website/index.html`) cross-fades every 4 s even under `prefers-reduced-motion`. Gate it.
7. **Skip-to-content link** — none exists; keyboard users tab through the full nav on every page. Add one in `layout.tsx` + a `#main` target.

## P2 — Performance (biggest wins first)

8. **Replace Phosphor icon fonts with inline SVGs.** `app/layout.tsx` loads **two complete icon-font stylesheets from unpkg's unminified `/src/` paths** (render-blocking, third-party SPOF, no SRI) to use ~25 distinct glyphs; the `fill` weight exists for a single page. Plan: emit inline SVGs (Phosphor's MIT-licensed paths) for the ~25 used icons via the generator + a small map; drop both unpkg links. Removes ~hundreds of KB and the outage/security exposure in one move.
9. **Self-host fonts.** `colors_and_type.css:12` pulls 4 Google-font families / 14 weights via `@import` — a serial render-blocking chain (HTML → CSS → import → CSS → font). Subset to the weights actually used, self-host woff2 with `@font-face` + `font-display: swap`, preload the display + body faces. (README already plans this path.)
10. **Self-host the 31 Unsplash hotlinks (9 pages).** External resizing service = reliability + privacy dependency; images also lack `width`/`height` → CLS. Download current picks into `assets/photos/`, serve as optimized WebP with explicit dimensions, `loading="lazy"` below the fold (the 4 porthole images currently all load eagerly). Interim until real photography lands (known open item).
11. **Deduplicate per-page chrome CSS.** Every generated page embeds the same `/*__nf__*/` nav/footer style block (visible duplicated even within `app/page.tsx`, lines 25-35 vs 148-176). Move the shared chrome block into one global CSS file loaded from the layout; teach the generator to strip it from per-page `<style>` blocks. Cuts ~3-5 KB/page of HTML and removes a drift hazard (three competing `header.nav` definitions today).
12. **Consolidate the four route-change pollers.** `site-form.js`, `journey.js`, `motion.js`, `hscroll.js` each run a `setInterval` (300-400 ms, forever) watching `location.pathname`, plus staggered re-bind timeouts. Replace with one shared watcher that dispatches a `gx:navigate` event the four scripts listen to. Less timer churn, one re-bind path, identical behavior.

## P3 — Hardening

13. **Security headers** via `vercel.json` `headers` (works for static deploys): `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, a conservative `Permissions-Policy`. (Vercel already sends HSTS.) Full CSP deferred — the generated pages rely on inline scripts/styles; revisit after #8/#9 remove third-party origins, possibly as Report-Only first.
14. **`api/contact.js` abuse caps.** Today: honeypot only. Add: cap field count (~40) and total payload (~50 KB after #D2's attachment carve-out), and stop echoing Resend's raw error body to the client (`detail` at line 291 — return a generic message, `console.error` the detail for Vercel logs). Optional later: Turnstile if spam appears.
15. **CI safety net.** The workflow only builds on push to `main`; `next lint` is scripted but ESLint isn't installed, and nothing typechecks. Add a PR/push job: `pnpm install`, generator run, `tsc --noEmit`, `next build`. Add `eslint` + `eslint-config-next` (or drop the dead `lint` script — recommend adding).
16. **Mark generated files as generated.** `app/**/page.tsx` are committed but wiped/regenerated by every `pnpm dev`/`build` — a hand-edit there is silently destroyed. Have the generator emit a `/* GENERATED from ui_kits/website/X.html — edit the source, not this file. */` banner. (Keep them committed — Vercel builds fine either way, and diffs are useful review artifacts.)
17. **Generator cleanup.** Dead expression in `attr_value_jsx` (`scripts/generate-pages.py:297` — `if False else` branch); harmless but confusing.

## P4 — SEO / structured data correctness

18. **HTML entities baked into JSON-LD.** 14 occurrences on the homepage alone (e.g. `"Concert &amp; Tour Production"` in Service/Offer schemas) — inside `<script>` these are *not* decoded, so crawlers ingest the literal `&amp;`. Fix in the generator: `html.unescape()` JSON-LD block contents (validate as JSON; warn on failure).
19. **Generate `sitemap.xml` instead of hand-copying it.** Current file is missing `/course/`, mixes trailing-slash styles (everything 308s to the slash form), and carries stale hand-set `lastmod`s. Emit it in `generate-pages.py` from `VALID_ROUTES` with consistent trailing slashes, the canonical host (per D1), and `lastmod` from each source file's git/mtime.

## P5 — Accessibility deep pass

20. **Mobile drawer focus management** (`app/_components/Nav.tsx`) — Escape + scroll-lock exist; add focus-into-drawer on open, focus-return on close, and trap Tab inside while open.
21. **Decorative icon `<i>` elements** — add `aria-hidden="true"` (moot for the social row once #8 replaces them with SVGs carrying `aria-hidden`).
22. Headings/landmarks spot-fixes surfaced by a post-change pass with the preview tools (e.g. footer `h5` columns, single `h1` per page is already correct).

---

## Explicitly *not* recommended

- **No framework/architecture change** — the HTML-kit → generator → static-export pipeline is unusual but coherent, documented, and working; replacing it is risk without user benefit.
- **No strict CSP yet** (see #13). No service worker / PWA (marketing site; cache invalidation risk outweighs gain). No analytics additions (not requested).

## Sequencing & verification

Suggested order: **P0 decisions → P1 (one PR) → P2 #8-#11 (one PR each for 8/9/10) → P3 → P4 → P5.** Most items change the *kit source or generator*, then regenerate — keeping `ui_kits/website/` authoritative.

Each PR verified by: `python3 scripts/generate-pages.py && pnpm build` clean; preview-server screenshots at 320/768/1280 px; form happy-path + error-path against the live API contract (`scripts/test-contact.mjs` for email rendering); structured-data validation (Rich Results test) for #18; Lighthouse before/after for P2 (expect the largest gains from #8/#9: removal of all render-blocking third-party requests).
