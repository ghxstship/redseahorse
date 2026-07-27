# Glossary: optimise and enrich

A plan, not a change. Nothing here is implemented yet.

## Where it stands

The glossary holds **10 terms** across eight letters (A, B, E, I, L, P, R, S).
It already carries `DefinedTermSet` JSON-LD, which is the right schema and more
than most competitors bother with. What it does not have:

- **no per-term anchors** — you cannot link a colleague, a proposal, or an
  answer engine to a single definition
- **no jump navigation** — the A–Z rail is half empty and there is no way to
  move around the page
- **no cross-links** — not one definition points at the page that owns the
  concept, so the glossary is a dead end rather than a hub
- **hand-maintained** — every other content surface on this site is generated
  from a data file; this one can drift from XPMS and nothing would catch it

## What XPMS 2.6 already gives us, unglossed

The standard is a vocabulary and we are barely using it. Counted from
`course.html`:

| already named on the site | count | glossed |
|---|---|---|
| gated phases | 9 | 1 (Production Lifecycle, generically) |
| acts (Plan, Build, Show) | 3 | 0 |
| gates, each with an exit condition | 9 | 0 |
| named deliverables and artifacts | 41 | 2 (Load-In, Strike) |
| ATLVS Coordinate Matrix concepts | 4 | 0 |

Forty-one deliverables are already written down, phase by phase, with gate-exit
conditions attached. That is a finished taxonomy sitting in one page and
appearing nowhere else.

## The blocker, and the biggest opportunity

**The ten department classes are cited constantly and named nowhere.**

The site says "ten department classes across the nine phases" and "90
coordinates" on fifteen pages. It gives a worked example, `3000xAMP` for
Marketing × Amplify, so we know the format is `<class>x<PHASE>` and that
Marketing is class 3000. The technology page names three more in passing:
Technology, Experience, Creative.

That is four of ten, and one number. A reader cannot reconstruct the matrix,
which means the central proprietary artifact is unusable as a reference and
uncitable as a fact.

`PROPRIETARY_IP.md` argues that named, ownable methodologies are exactly what
search and answer engines reward. It is right, and this is the one place we
name a framework without defining it. **Enumerating the ten classes with their
numbers is the highest-value single change available to the glossary**, and it
needs the XPMS kit or a decision, not a writing pass.

## The plan

### 1. Resolve the taxonomy

Name all ten department classes and their numbers. Everything else waits on
this, because six of the ten Tier-1 terms cannot be written without it.

### 2. Move the glossary to a data file

`data/glossary.json` → `scripts/build-glossary.py` → `resources/glossary.html`,
wired into the prebuild chain beside the case studies. Terms then carry
structured fields rather than prose:

```
term · aliases · definition · tier · xpmsPhase · relatedTerms · sourcePage
```

This makes drift impossible: if a phase is renamed in XPMS 2.7, the glossary
moves with it or the build fails.

### 3. Write in three tiers

**Tier 1 — XPMS canon (~25 terms).** The nine phases, the three acts, Gate,
Gate Exit Condition, ATLVS Coordinate Matrix, Coordinate, Department Class,
the ten classes. This tier is proprietary and therefore the most defensible
thing we can publish: nobody else can rank for our own taxonomy.

**Tier 2 — deliverables worth defining (~15 of the 41).** Curated, not
exhaustive. A term earns a definition if it is XPMS-specific (PO Baseline,
Punch Closure, Shop QC, Commissioning, Archive Handover), ambiguous across the
industry (Advance as a noun versus a verb, Submittals, Rate-Card Lock), or
genuinely searched. Deposits and Contracts do not need us to explain them, and
glossing them would dilute the page.

**Tier 3 — industry terms (the current 10, plus gaps).** Keep, and fill the
missing letters so the rail is not mostly dead: Advance, Bump-In, Call Time,
Dark Day, Front of House, Gate, Hold, Rider, Settlement, Site Survey, Tech
Rehearsal, Wrap.

Target is roughly **50 terms**, not 60-plus. Every one has to earn its line.

### 4. Make each term individually addressable

- `id` on every term, so `/resources/glossary/#coordinate-matrix` resolves
- `DefinedTerm` nodes with `@id` inside the existing `DefinedTermSet`
- a jump rail across the letters actually in use
- each definition cross-links to the page that owns it: phases to The Course,
  deliverables to the service that carries them, industry terms to the
  relevant industry page

The anchors are the GEO play. Answer engines quote definitional content, and a
definition they can cite by fragment is worth more than one buried in a wall.

### 5. Deliberately not doing

**Per-term pages.** Fifty pages of two-sentence definitions is thin content and
would compete with itself. One anchored, schema'd page ranks and cites better
at this size. Revisit only if a specific term proves it deserves a page, and
then only that term.

## Decisions needed

1. **The ten department classes and their numbers.** Blocking Tier 1.
2. **Confirm the class-number format.** `3000xAMP` implies thousands and a
   three-letter phase code. Are all nine phase codes defined?
3. **Tier 2 scope.** My cut is ~15 of the 41. Worth a look before I write.
4. **Does the glossary stay at `/resources/glossary/`,** or move up now that it
   would be one of the larger content assets on the site?
