# Backlog

Known work that is understood, scoped, and deliberately not done yet. Anything
here has been measured, not guessed. When one ships, move it out and record the
decision in `OPTIMIZATION_PLAN.md`.

Opened 2026-07-27 from a full frontend and backend sweep.

---

## 1. 81 hot-linked Unsplash stock photos

**The site breaks a rule we wrote ourselves.** `PHOTOGRAPHY.md` opens with
"Real productions only. No generic stock." Every page ships stock, hot-linked
from a third party, including the homepage LCP element, which we also
`preload`.

Three problems wearing one coat:

- **Credibility.** A portfolio site selling production work is illustrating
  that work with photographs of other people's events. A prospect who reverse
  image searches one hero finds it on a hundred other sites.
- **Privacy.** We self-hosted the fonts specifically so no third party sees
  visitor IPs. Images are the larger leak, 81 requests a session against 12
  font files, and they reopen the GDPR question the font work closed.
- **Performance.** LCP belongs to a CDN we do not control, behind an extra DNS
  lookup and TLS handshake to a third origin.

**Split it in two.** The technical half is available today and is the same work
either way: pull what we intend to keep, self-host under `/assets/`, generate
AVIF with WebP fallback, then tighten the CSP to `img-src 'self' data:` and
delete the `https://images.unsplash.com` exception in `vercel.json`. The
content half is a shoot list and needs real photography.

Do the technical half first. It is not wasted when the real photos arrive.

---

## 2. 187KB gzipped of React to run a theme toggle

The site is static HTML authored by hand. There is exactly one client
component, `app/_components/Nav.tsx`, 196 lines, driving a burger menu and a
theme button. For that we ship 760KB raw / 187KB gzipped across 8 chunks, plus
350 `.txt` RSC payload files.

The pipeline is `ui_kits/website/*.html` → `generate-pages.py` →
`app/**/page.tsx` → Next → static HTML. Next is a pass-through that gives us
routing, metadata, and hydration for two widgets.

**Two options, smallest first.**

1. **Make Nav a progressive-enhancement script** rather than a client
   component. The rest of the tree then renders with no client bundle at all.
   Contained, reversible, most of the win.
2. **Drop the framework.** Serve the authored HTML directly with roughly 40
   lines of inline script. Deletes the bundle entirely, and also the `app/`
   generation step, but it touches the deploy and the metadata handling, which
   is currently doing real work.

Start with 1. Only consider 2 if 1 proves the framework is carrying nothing
else.

---

## 3. Page weight on the two generated indexes

`/resources/glossary/` is 164KB raw, `/press/` is 84KB. Both compress under
30KB so this is not urgent, but the glossary is one page carrying 62 terms and
it grows every time XPMS does. Revisit when it passes roughly 100 terms; the
answer then is pagination by letter or per-tier pages, not a smaller page.

---

## 4. Content-hash the font and asset filenames

Follows from the caching work shipped 2026-07-27. `/fonts/*.woff2` now carries
`max-age=31536000, immutable`, which is correct for a subsetted font but the
filenames are **not** content-hashed. A regenerated subset will never reach a
returning visitor.

**Until this is done, the discipline is: rename the file when you regenerate
it.** `modernist.css` and `render-emails.js` both reference these paths, so the
real fix is hashing at build time in the generator, which is the thing already
writing the links.

---

## 5. Durable rate limiting on `/api/contact`

The limiter shipped 2026-07-27 is per warm instance, because serverless
instances do not share memory. It bounds the common flood and caps the bill.
It does not stop a distributed or slow-drip attack.

The durable fix is a **Vercel Firewall rate-limit rule** at the edge, which
never invokes the function and therefore never bills. That is dashboard
configuration, not code, and it needs a plan that includes the WAF. A KV-backed
counter is the alternative if the edge rule is not available, at the cost of a
round trip on every submit and a new dependency.
