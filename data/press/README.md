# Press inventory

A ranked, backend-only record of media coverage for every case study and
portfolio entry. Nothing here is published — it is source material for
proposals, decks, the About page, and future case studies.

```
data/press/entries.json     what we scan for      (edit this by hand)
data/press/inventory.json   what we found         (scanner writes, you correct)
scripts/press-scan.mjs      the scanner
.github/workflows/press-scan.yml   monthly + on-new-entry + manual
```

## The finding that shapes everything else

**No third-party article names GHXSTSHIP.** A search for the brand returns
our own site and a handful of unrelated music acts spelled similarly. Every
item in the inventory is coverage *of the work*, not of us.

That is not a failure of the scan, it is the actual state of the record, and
it changes how the inventory can be used. So each item carries an
`attribution` tier, and it is the first thing to read:

| tier | meaning | what it proves |
|---|---|---|
| `named` | the article says GHXSTSHIP | we did this |
| `partner-primary` | the client's own page for the project | the project is sanctioned and real |
| `project-primary` | the project's own site | format, menu, dates |
| `project-only` | covers the project, does not name us | the project happened and was notable |
| `context-only` | covers the event around the project | the event was notable |
| `adjacent` | same partner, different moment | nothing — verify before use |

Only `named` is a citation. Everything else is evidence the work exists, which
is worth having, and is not the same claim.

## Ranking

`score` is 0–100, recomputed on every scan:

```
outlet tier      0–40   national/trade at the top, reviews and listings at the bottom
attribution      3–25   named beats a national that does not name us
sentiment        0–20   positive → negative
recency          2–10   under a year → over four
```

`sentiment: "negative"` forces the score to 0 and sets `usable: false`. Those
items stay in the file deliberately — knowing a hostile piece exists is worth
more than a clean-looking list — and must never be cited.

Set `"locked": true` on an item to freeze a hand-written verdict; the scanner
will re-rank everything else around it and leave that one alone.

## Running it

Needs a search API. Search engines block unkeyed automated queries and
scraping their results pages breaks their terms, so there is no keyless path.

```bash
export PRESS_SEARCH_PROVIDER=brave      # or serper
export PRESS_SEARCH_KEY=...
node scripts/press-scan.mjs --dry-run    # look first
node scripts/press-scan.mjs
node scripts/press-scan.mjs --entry=patron-cristalino-becky-g
```

Brave's free tier is 2,000 queries/month. The scan uses about three per
entry, so a full monthly sweep of nine entries costs roughly 27 — about 1.5%
of the free allowance. <https://brave.com/search/api/>

`ANTHROPIC_API_KEY` is optional but worth setting. Without it, sentiment is a
keyword heuristic that only ever downgrades an item to `review` — it never
promotes anything to `positive`, because a piece can be entirely negative
without using a negative word about the product. With it, each new item gets
read and classified properly.

## Automation

`.github/workflows/press-scan.yml` runs on the 1st of each month, on any push
that touches `ui_kits/website/work/**` or `entries.json` — which is what
"scan whenever a new entry is added" means in practice — and on demand.

It opens a **pull request** rather than committing. New coverage is editorial
input, and the sentiment call on anything the classifier was unsure about
should be made by a person before it is quotable.

Set-up, once:

1. Settings → Secrets and variables → Actions → **Secrets**: `PRESS_SEARCH_KEY`
   (and `ANTHROPIC_API_KEY` if you want the good classifier)
2. **Variables**: `PRESS_SEARCH_PROVIDER` = `brave` or `serper`

Until `PRESS_SEARCH_KEY` exists the job skips with a note instead of failing,
so the schedule does not turn into a monthly red X.

## Adding an entry

Add it to `entries.json`. Write `queries` the way a journalist would name the
thing, not the way we do — include the partner brand, the venue and the year,
because that is what actually lands in a headline. `aliases` catch the names
the press uses that we do not; `Red Bull Unforeseen Motel` is filed by us
under that name and by the press as *Red Bull Unforeseen Full Moon Motel*,
and without the alias the sweep misses its one real feature.

Pushing that change to `main` triggers a scan of everything.

## Write the queries in their words, not ours

The first sweep reported three entries with no coverage. Two of them were
well covered; the queries were just wrong, and wrong in the same way both
times — written from our internal vocabulary instead of the vocabulary of the
people who publish.

| entry | we filed it as | the press calls it |
|---|---|---|
| Black Coffee at the Race Track | Club Space, Miami | **Hialeah Park racetrack**, presented by Club Space |
| L-Acoustics DJ | a sound-system implementation at III Points | **L-Acoustics DJ**, spatial audio, the **S3QU3NC3 stage** |

Corrected, those two went from zero items to nine each, including FOH and Mix
— the two live-sound trades that matter most for the Technology vertical.

So when adding an entry: search the venue's real name, the product's real
name, and the stage's real name. Search what a journalist would type. If a
sweep comes back empty, assume the query is wrong before assuming the
coverage does not exist.

## Where the gaps are

One entry still returns nothing: `fifa-world-cup-brazil-base-camp`. It may
not have happened yet.

The wider gap is the one at the top of this file: nine projects, **zero**
attributed mentions. It is worth seeing how close some of them get. The
L-Acoustics case study describes the exact deployment on the exact stage and
credits nobody but L-Acoustics and III Points. The EDM Identity feature on
Red Bull Unforeseen credits the festival's co-founder and its creative
director. The work is being written about; the name just is not in the copy.

The fix is not a better scanner — it is a line in the release when the next
one ships.
