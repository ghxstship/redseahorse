#!/usr/bin/env python3
"""Render every case-study page in ui_kits/website/work/ from one template.

    python3 scripts/build-case-studies.py

Inputs:
    data/case-studies.json      the copy and the verified facts
    data/press/inventory.json   the coverage, already ranked

Why a generator rather than nine hand-written files: the pages are supposed to
be the same shape, and nine hand-maintained files are nine files that drift.
The chrome, the section order, the JSON-LD and the press block all come from
here, so "normalise the formatting" is a property of the build rather than a
task someone has to keep redoing.

The press block only ever renders items the inventory marks usable. Anything
flagged usable:false — the politically framed Polymarket pieces, the Yelp
reviews — stays in the inventory for awareness and never reaches a page.
"""

import json
import pathlib
import re
import html

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "ui_kits/website/work"
SITE = "https://ghxstship.tours"

studies = json.loads((ROOT / "data/case-studies.json").read_text())["studies"]
press = json.loads((ROOT / "data/press/inventory.json").read_text())["entries"]

# Chrome is copied verbatim from the reference page so the previews match
# production exactly; the generator drops it from the built pages anyway.
REF = (ROOT / "ui_kits/website/work/salvage-city-supper-club.html").read_text()
HEADER = re.search(r'<header class="nav">.*?</header>', REF, re.S).group(0)
FOOTER = re.search(r'<footer class="site-foot">.*?</footer>', REF, re.S).group(0)

# Coverage we will not put on a public page even though it is in the
# inventory: forums, review sites and our own partners' ticketing pages carry
# no editorial weight, and a case study that cites them looks thinner than one
# that cites nothing.
PRESS_TIER_FLOOR = {"blog", "reviews", "listing", "student-press"}
PRESS_MAX = 6


def esc(s):
    return html.escape(str(s), quote=True)


def paras(block, cls=""):
    c = f' class="{cls}"' if cls else ""
    return "\n  ".join(f"<p{c}>{p}</p>" for p in block.split("\n") if p.strip())


def press_items(slug, cap=PRESS_MAX):
    bucket = press.get(slug)
    if not bucket:
        return []
    out = []
    for i in bucket["items"]:
        if i.get("usable") is False:
            continue
        if i["tier"] in PRESS_TIER_FLOOR:
            continue
        if i["sentiment"] in ("negative", "mixed"):
            continue
        # `why` is an internal note written for us, not a headline. An item
        # without a real headline does not go on a public page.
        if not i.get("headline"):
            continue
        out.append(i)
    out.sort(key=lambda i: -i.get("score", 0))
    return out[:cap] if cap else out


def press_block(s):
    items = [] if s.get("noPress") else press_items(s["slug"])
    if not items:
        return ""
    rows = []
    for i in items:
        sub = i["outlet"]
        if i["attribution"] in ("partner-primary", "project-primary"):
            sub += " · primary source"
        rows.append(
            f'    <a class="row-line" href="{esc(i["url"])}" target="_blank" rel="noopener">'
            f'<span class="row-title">{esc(i["headline"])}</span>'
            f'<span class="row-sub">{esc(sub)}</span>'
            f'<span class="row-sub">{esc(i.get("date") or "")}</span></a>'
        )
    return f"""
<section class="band"><div class="wrap sec-pad">
  <p class="kicker">Press &amp; Media</p>
  <h2 class="sec-h2-sm">What Was Written.</h2>
  <p class="lede" style="max-width:64ch;">Independent coverage of the project — the public record of what was built.</p>
  <div class="press-rows">
{chr(10).join(rows)}
  </div>
</div></section>
"""


def related(s):
    others = [o for o in studies if o["slug"] != s["slug"]][:3]
    cards = []
    for o in others:
        cards.append(
            f'''    <a class="wcard" href="{o['slug']}.html">
      <figure class="media grayscale"><img src="{o['image']}?w=800&amp;q=80&amp;auto=format&amp;fit=crop" alt="{esc(o['alt'])}" loading="lazy" width="800" height="600"></figure>
      <div class="body"><h3>{esc(o['title'])}</h3><p class="meta">{esc(o['tag'])} · {esc(o['venue'])} · {esc(o['year'])}</p></div>
    </a>'''
        )
    return "\n".join(cards)


PAGE = """<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="{description}">
<meta name="keywords" content="{keywords}">
<link rel="canonical" href="{site}/work/{slug}">
<title>{title} — Case Study — GHXSTSHIP</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="../../../modernist.css">
<script type="application/ld+json">{ld}</script>
<script type="application/ld+json">{crumbs}</script>
<style>
  /* page-specific layout only — every component comes from modernist.css */
  .meta-tags {{ display: flex; gap: 8px; flex-wrap: wrap; margin: 18px 0 0; }}
  .hero-fig {{ aspect-ratio: 16 / 9; overflow: hidden; border: 1px solid var(--color-divider); margin-top: clamp(24px, 4vw, 40px); }}
  .hero-fig img {{ width: 100%; height: 100%; object-fit: cover; }}
  .facts-in {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px 32px; padding-block: clamp(28px, 4vw, 44px); }}
  @media (max-width: 720px) {{ .facts-in {{ grid-template-columns: repeat(2, 1fr); }} }}
  @media (max-width: 480px) {{ .facts-in {{ grid-template-columns: 1fr; }} }}
  .cs-body {{ max-width: 55rem; }}
  .cs-body h2 {{ font-size: clamp(24px, 3vw, 34px); margin-top: clamp(32px, 5vw, 56px); }}
  .cs-body p {{ font-size: 1.067rem; line-height: 1.7; color: color-mix(in srgb, var(--color-text) 78%, transparent); max-width: 68ch; }}
  .cs-body strong {{ color: var(--color-text); }}
  .pull {{ border-left: 4px solid var(--color-accent); padding-left: 20px; margin: clamp(24px, 4vw, 36px) 0; }}
  .pull p {{ font-family: var(--font-heading); font-weight: 800; font-size: clamp(19px, 2.4vw, 26px); line-height: 1.2; text-transform: uppercase; color: var(--color-text); margin: 0; max-width: 34ch; }}
  .press-rows {{ margin-top: clamp(20px, 3vw, 28px); }}
  .press-rows .row-line {{ text-decoration: none; color: inherit; }}
  .press-rows .row-line:hover .row-title {{ color: var(--color-accent-700); }}
  .more-grid {{ margin-top: clamp(24px, 4vw, 36px); }}
</style>
</head>
<body>
{header}

<main id="main">

<section class="wrap" style="padding-block:clamp(36px,5vw,64px) 0;">
  <p class="kicker">Case Study · {tag}</p>
  <h1 class="page-h1">{title}.</h1>
  <p class="lede">{lede}</p>
  <div class="meta-tags">
    <span class="tag tag-neutral">Client · {partner}</span>
    <span class="tag tag-neutral">Venue · {venue}</span>
    <span class="tag tag-neutral">{city}</span>
    <span class="tag tag-neutral">{year}</span>
    <span class="tag tag-outline">{services}</span>
  </div>
  <figure class="hero-fig grayscale">
    <img src="{image}?w=1600&amp;q=80&amp;auto=format&amp;fit=crop" alt="{alt}" width="1600" height="900">
  </figure>
</section>

<div class="band" style="margin-top:clamp(32px,5vw,56px);"><div class="wrap facts-in">
{facts}
</div></div>

<section class="wrap sec-pad"><div class="cs-body">

  <h2>The Challenge</h2>
  {challenge}

  <h2>The Approach</h2>
  {approach}
  <div class="pull"><p>{pull}</p></div>

  <h2>The Result</h2>
  {result}

  <h2>The Credits</h2>
  <p><strong>Client</strong> {partner} · <strong>Venue</strong> {venue_detail} · <strong>Year</strong> {year} · <strong>Services</strong> {services}.</p>

</div></section>
{press}
<section class="band"><div class="wrap sec-pad">
  <p class="kicker">More Work</p>
  <h2 class="sec-h2-sm">From the Archives.</h2>
  <div class="grid3 more-grid">
{related}
  </div>
  <p style="margin-top:24px;"><a class="btn btn-ghost" href="index.html">See all the work →</a></p>
</div></section>

<section class="band-dark close-cta"><div class="wrap">
  <p class="kicker">Ready When You Are</p>
  <h2>Build Yours <span class="a">Next.</span></h2>
  <p class="lede" style="margin-inline:auto;">Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div class="cta-row" style="margin-top:22px;">
    <a class="btn btn-primary btn-lg" href="../contact.html">Start a Project</a>
    <a class="btn btn-secondary btn-lg" href="index.html">See the Work</a>
  </div>
</div></section>

</main>

{footer}
</body></html>
"""

for s in studies:
    services = ", ".join(s["services"])
    ld = json.dumps({
        "@context": "https://schema.org", "@type": "CreativeWork",
        "name": s["title"], "creator": {"@type": "Organization", "name": "GHXSTSHIP", "url": SITE + "/"},
        "about": s["tag"],
        "locationCreated": {"@type": "Place", "name": s["venue"], "address": s["venueDetail"] + ", " + s["city"]},
        "genre": s["tag"], "keywords": s["keywords"],
        "url": f"{SITE}/work/{s['slug']}",
    }, ensure_ascii=False)
    crumbs = json.dumps({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Work", "item": SITE + "/work"},
            {"@type": "ListItem", "position": 3, "name": s["title"], "item": f"{SITE}/work/{s['slug']}"},
        ],
    }, ensure_ascii=False)
    facts = "\n".join(
        f'  <div class="stat"><div class="v" style="font-size:clamp(19px,2vw,24px);">{esc(v)}</div>'
        f'<div class="k">{esc(k)}</div></div>'
        for k, v in s["facts"]
    )
    page = PAGE.format(
        site=SITE, slug=s["slug"], title=esc(s["title"]), tag=esc(s["tag"]),
        description=esc(s["description"]), keywords=esc(s["keywords"]),
        lede=esc(s["lede"]), partner=esc(s["partner"]), venue=esc(s["venue"]),
        venue_detail=esc(s["venueDetail"]), city=esc(s["city"]), year=esc(s["year"]),
        services=esc(services), image=s["image"], alt=esc(s["alt"]),
        ld=ld, crumbs=crumbs, facts=facts,
        challenge=paras(s["challenge"]), approach=paras(s["approach"]),
        pull=esc(s["pull"]), result=paras(s["result"]),
        press=press_block(s), related=related(s),
        header=HEADER, footer=FOOTER,
    )
    (OUT / f"{s['slug']}.html").write_text(page)
    n = 0 if s.get("noPress") else len(press_items(s["slug"]))
    print(f"  wrote work/{s['slug']}.html  ({n} press items)")


# ── the public press index ────────────────────────────────────────────────
# Same filter as the case-study blocks, no cap: every usable, headlined item
# with an outlet worth naming, grouped by the project it covers. Anything the
# inventory marks unusable never appears here either.
def press_page():
    groups = []
    total = 0
    for s in studies:
        if s.get("noPress"):
            continue
        items = sorted(
            [i for i in press_items(s["slug"], cap=None)], key=lambda i: -i.get("score", 0)
        )
        if not items:
            continue
        total += len(items)
        rows = "\n".join(
            f'    <a class="row-line" href="{esc(i["url"])}" target="_blank" rel="noopener">'
            f'<span class="row-title">{esc(i["headline"])}</span>'
            f'<span class="row-sub">{esc(i["outlet"])}</span>'
            f'<span class="row-sub">{esc(i.get("date") or "")}</span></a>'
            for i in items
        )
        groups.append(f"""
<section class="wrap sec-pad-sm">
  <p class="kicker">{esc(s['tag'])}</p>
  <h2 class="sec-h2-sm">{esc(s['title'])}.</h2>
  <p class="lede" style="max-width:62ch;">{esc(s['venue'])} · {esc(s['city'])} · {esc(s['year'])} — <a href="work/{s['slug']}.html">read the case study →</a></p>
  <div class="press-rows">
{rows}
  </div>
</section>""")

    body = "\n".join(groups)
    page = f"""<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Press and media coverage of GHXSTSHIP projects — {total} articles, galleries and features across festival production, brand activations, venue operations and event technology, catalogued by project.">
<meta name="keywords" content="GHXSTSHIP press, event production press coverage, experiential production media, case study coverage, festival production press">
<link rel="canonical" href="{SITE}/press">
<title>Press &amp; Media — GHXSTSHIP</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="../../modernist.css">
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"CollectionPage","name":"Press & Media","description":"Coverage of GHXSTSHIP projects, catalogued by project.","url":"{SITE}/press","isPartOf":{{"@type":"WebSite","name":"GHXSTSHIP","url":"{SITE}/"}}}}</script>
<style>
  .press-rows {{ margin-top: clamp(16px, 2vw, 22px); }}
  .press-rows .row-line {{ text-decoration: none; color: inherit; }}
  .press-rows .row-line:hover .row-title {{ color: var(--color-accent-700); }}
  .note {{ max-width: 66ch; }}
</style>
</head>
<body>
{HEADER.replace('href="../', 'href="').replace('src="../', 'src="')}

<main id="main">

<section class="wrap" style="padding-block:clamp(36px,5vw,64px) 0;">
  <p class="kicker">Press &amp; Media</p>
  <h1 class="page-h1">What Was Written.</h1>
  <p class="lede">Independent coverage of the projects we have worked on — {total} articles, features and galleries, catalogued by project. The public record of what was built.</p>
  <hr class="hr" style="margin-top:clamp(24px,4vw,40px);">
</section>
{body}

<section class="wrap sec-pad-sm"><div class="note">
  <p class="kicker">Working Press</p>
  <h2 class="sec-h2-sm">For Editors.</h2>
  <p class="lede">Writing about a project on this page and need detail, imagery or a name to quote? Reach the studio directly and we will come back the same day.</p>
  <p style="margin-top:14px;"><a class="btn btn-secondary" href="contact.html">Contact the Studio</a></p>
</div></section>

<section class="band-dark close-cta"><div class="wrap">
  <p class="kicker">Ready When You Are</p>
  <h2>Build Yours <span class="a">Next.</span></h2>
  <p class="lede" style="margin-inline:auto;">Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div class="cta-row" style="margin-top:22px;">
    <a class="btn btn-primary btn-lg" href="contact.html">Start a Project</a>
    <a class="btn btn-secondary btn-lg" href="work/index.html">See the Work</a>
  </div>
</div></section>

</main>

{FOOTER.replace('href="../', 'href="').replace('src="../', 'src="')}
</body></html>
"""
    (ROOT / "ui_kits/website/press.html").write_text(page)
    print(f"  wrote press.html  ({total} items across {len(groups)} projects)")


press_page()
print(f"Done — {len(studies)} case studies + the press index.")
