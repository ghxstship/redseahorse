# XPMS 2.6 Alignment + Industries Rename — Sweep Brief

Two sitewide corrections. Apply BOTH to every file you are assigned. The
REBUILD_GUIDE.md conventions still apply; do not restructure pages beyond
what these corrections require.

## 1 · XPMS 2.6 — nine gated phases (supersedes every 8-phase reference)

The canonical lifecycle is the **XPMS 2.6** standard (GHXSTSHIP's
Experiential Production Management Standard, effective July 2026). NINE
gated phases, verb-consistent names, in this exact order:

| Gate | Code | Phase | Act |
|---|---|---|---|
| 1 | DIS | Discover | Plan |
| 2 | DSN | Design | Plan |
| 3 | ADV | Advance | Plan |
| 4 | PRC | Procure | Build |
| 5 | BLD | Build | Build |
| 6 | INS | Install | Build |
| 7 | OPR | Operate | Show |
| 8 | AMP | Amplify | Show |
| 9 | CLS | Close | Show |

- **Amplify is new** (gate 8, before Close): content capture, media and
  press, broadcast and livestream delivery, social amplification,
  post-event campaigns.
- **Strike lives inside Operate** — never a phase of its own.
- Old names are retired in copy: "Discovery" → "Discover",
  "Procurement" → "Procure". Never "eight phases" / "8-phase" — always
  "nine phases" / "9-phase" / "the nine-phase XPMS lifecycle".
- Phase strips (the `.phases` / `.phase` component): add the ninth stop
  `Amplify` between Operate and Close and rename per the table. Keep the
  homepage convention of the first four marked `done`.
- Where a page walks phase-by-phase involvement (services verticals,
  course), Amplify's one-liner for a service page: capture, media,
  broadcast, and post-event campaign delivery relevant to that discipline.
- "XPMS" citations: the standard is cited as **XPMS 2.6**. If a page
  explains XPMS, it may also mention the ATLVS Coordinate Matrix: every
  work item resolves to one of 90 coordinates, ten department classes
  across nine phases.
- JSON-LD carrying phase lists must match the nine names.

## 2 · Markets → Industries (label change only; slugs unchanged)

"Market" implies a region — the section is about INDUSTRIES. URLs stay
`/destinations/...`; only the words change:

- Kickers/headings/labels: "Markets" → "Industries", "All Markets" →
  "All Industries", "More Markets" → "More Industries", "Pick Your
  Market." → "Pick Your Industry.", "View market" → "View industry",
  meta labels like "Market · Immersive Experiences" → "Industry · …".
- Body copy: "markets we serve", "across markets", "market" (meaning a
  vertical like festivals) → industry/industries. Do NOT change uses
  where "market" genuinely means commerce (e.g. "experiences marketplace",
  "market rate") — read the sentence.
- Nav chrome copy in source pages: the header link labeled "Markets"
  becomes "Industries" (href unchanged: destinations/index.html). Footer
  column link "Markets" → "Industries" likewise.
- Titles/descriptions/keywords/JSON-LD on destinations pages: prefer
  "industries" phrasing where "markets" appeared.

After editing, re-validate: balanced tags, one h1, no stray "8 phases",
"Discovery"/"Procurement", or section-label "Market" left in your files.
