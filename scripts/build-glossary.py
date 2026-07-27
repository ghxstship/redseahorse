#!/usr/bin/env python3
"""Render ui_kits/website/resources/glossary.html from data/glossary.json.

    python3 scripts/build-glossary.py

Why generated: the glossary is the only place the XPMS vocabulary is defined
outside the standard itself, and a hand-maintained copy drifts from the kit
silently. Tier 1 definitions are transcribed from the dim_phase seed and the
catalog URIDs, so they have to move when XPMS moves.

Every term gets a stable anchor and a DefinedTerm node with an @id. That is
the whole point: an answer engine can cite a definition by fragment, and a
proposal can link one line instead of a page.
"""

import html
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "data/glossary.json").read_text())
OUT = ROOT / "ui_kits/website/resources/glossary.html"
SITE = "https://ghxstship.tours"
URL = f"{SITE}/resources/glossary"

REF = (ROOT / "ui_kits/website/resources/index.html").read_text()
HEADER = re.search(r'<header class="nav">.*?</header>', REF, re.S).group(0)
FOOTER = re.search(r'<footer class="site-foot">.*?</footer>', REF, re.S).group(0)

esc = lambda s: html.escape(str(s), quote=True)
slug = lambda s: re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")

terms = sorted(DATA["terms"], key=lambda t: t["term"].lower())
letters = sorted({t["term"][0].upper() for t in terms})
by_letter: dict[str, list] = {L: [] for L in letters}
for t in terms:
    by_letter[t["term"][0].upper()].append(t)

TIER_LABEL = {1: "XPMS canon", 2: "XPMS deliverable", 3: None}

sections = []
for L in letters:
    rows = []
    for t in by_letter[L]:
        sid = slug(t["term"])
        tier = TIER_LABEL.get(t.get("tier", 3))
        badge = f'<span class="gl-tier">{esc(tier)}</span>' if tier else ""
        aka = ""
        if t.get("aliases"):
            aka = f'<span class="gl-aka">Also: {esc(", ".join(t["aliases"]))}</span>'
        note = f'<p class="gl-note">{t["note"]}</p>' if t.get("note") else ""
        see = ""
        if t.get("see"):
            # data/glossary.json stores routes, which is the portable form, but
            # the generator only rewrites RELATIVE .html hrefs — an absolute
            # route is dropped on the floor. Convert here, from resources/.
            r = t["see"].strip("/")
            rel = f"../{r}.html" if r else "../../index.html"
            see = f'<a class="gl-see" href="{esc(rel)}">Where this is used →</a>'
        rows.append(
            f'      <div class="gl-term" id="{sid}">\n'
            f'        <dt>{esc(t["term"])}{badge}</dt>\n'
            f'        <dd>{t["definition"]}{aka}{note}{see}</dd>\n'
            f"      </div>"
        )
    sections.append(
        f'  <div class="gl-sec">\n'
        f'    <h2 class="gl-letter" id="{L.lower()}">{L}</h2>\n'
        f'    <dl class="gl-terms">\n' + "\n".join(rows) + "\n    </dl>\n  </div>"
    )

jump = "".join(f'<a href="#{L.lower()}">{L}</a>' for L in letters)

defined = []
for t in terms:
    node = {
        "@type": "DefinedTerm",
        "@id": f"{URL}#{slug(t['term'])}",
        "name": t["term"],
        "description": re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", t["definition"])).strip(),
        "inDefinedTermSet": URL,
    }
    if t.get("aliases"):
        node["alternateName"] = t["aliases"]
    defined.append(node)

ld = json.dumps({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": URL,
    "name": "GHXSTSHIP Glossary",
    "description": (
        "The vocabulary of experiential production, including the XPMS 2.6 standard: "
        "nine gated phases, three acts, ten department classes and the ATLVS Coordinate Matrix."
    ),
    "url": URL,
    "hasDefinedTerm": defined,
}, ensure_ascii=False)

crumbs = json.dumps({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
        {"@type": "ListItem", "position": 2, "name": "Resources", "item": SITE + "/resources"},
        {"@type": "ListItem", "position": 3, "name": "Glossary", "item": URL},
    ],
}, ensure_ascii=False)

n1 = sum(1 for t in terms if t.get("tier") == 1)

PAGE = f"""<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The vocabulary of experiential production, defined plainly: the nine gated phases of XPMS 2.6, the three acts, the ten department classes, the ATLVS Coordinate Matrix, and the industry terms around them.">
<meta name="keywords" content="experiential production glossary, XPMS 2.6, production lifecycle phases, ATLVS Coordinate Matrix, department classes, event production terms, run of show, load-in, strike">
<meta property="og:title" content="The vocabulary of experiential production, defined">
<link rel="canonical" href="{URL}">
<title>Glossary | GHXSTSHIP</title>
<link rel="stylesheet" href="../../../modernist.css">
<script type="application/ld+json">{ld}</script>
<script type="application/ld+json">{crumbs}</script>
<style>
  /* page-specific layout only; every component comes from modernist.css */
  .gl-jump {{ display: flex; flex-wrap: wrap; gap: 2px; margin-top: clamp(20px, 3vw, 28px); }}
  .gl-jump a {{ display: inline-flex; align-items: center; justify-content: center; min-width: 34px; min-height: 34px; padding: 0 6px; font-family: var(--font-heading); font-weight: 600; font-size: 0.867rem; text-decoration: none; color: var(--color-text); border: 1px solid var(--color-divider); }}
  .gl-jump a:hover {{ background: var(--color-accent); color: var(--color-on-accent); border-color: var(--color-accent); }}
  .gl-sec {{ margin-top: clamp(28px, 4vw, 44px); }}
  .gl-letter {{ font-size: 1.6rem; color: var(--color-accent-700); border-bottom: 2px solid var(--color-divider); padding-bottom: 6px; scroll-margin-top: 90px; }}
  .gl-terms {{ margin: 0; }}
  .gl-term {{ padding: 18px 0; border-bottom: 1px solid var(--color-divider); scroll-margin-top: 90px; }}
  .gl-term dt {{ font-family: var(--font-heading); font-weight: 800; font-size: 1.2rem; text-transform: uppercase; letter-spacing: -0.01em; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }}
  .gl-term dd {{ margin: 8px 0 0; font-size: 1rem; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 80%, transparent); max-width: 72ch; }}
  .gl-term dd strong, .gl-term dd code {{ color: var(--color-text); }}
  .gl-term dd code {{ font-size: 0.9em; background: var(--color-surface); padding: 1px 5px; }}
  .gl-tier {{ font-family: var(--font-body); font-weight: 600; font-size: 0.667rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-accent-700); }}
  .gl-aka, .gl-note, .gl-see {{ display: block; margin-top: 8px; font-size: 0.867rem; }}
  .gl-aka {{ color: color-mix(in srgb, var(--color-text) 58%, transparent); }}
  .gl-note {{ color: color-mix(in srgb, var(--color-text) 66%, transparent); border-left: 2px solid var(--color-divider); padding-left: 12px; margin-bottom: 0; }}
  .gl-see {{ font-family: var(--font-heading); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-accent-700); text-decoration: none; }}
</style>
</head>
<body>
{HEADER}

<main id="main">

<section class="wrap" style="padding-block:clamp(36px,5vw,64px) 0;">
  <p class="kicker">Resources · Glossary</p>
  <h1 class="page-h1">The Words for the Work.</h1>
  <p class="lede">The vocabulary of experiential production, defined plainly by the people who produce it. {n1} of these terms are XPMS 2.6 canon: the nine gated phases, the three acts, the ten department classes and the coordinate system that ties them together.</p>
  <nav class="gl-jump" aria-label="Jump to letter">{jump}</nav>
  <hr class="hr" style="margin-top:clamp(24px,4vw,40px);">
</section>

<section class="wrap sec-pad-sm">
{chr(10).join(sections)}
</section>

<section class="band-dark close-cta"><div class="wrap">
  <p class="kicker">Keep Learning</p>
  <h2>Learn the <span class="a">Ropes.</span></h2>
  <p class="lede" style="margin-inline:auto;">We train the next generation of experiential producers on real builds. Chart the nine-phase course or join the crew.</p>
  <div class="cta-row" style="margin-top:22px;">
    <a class="btn btn-primary btn-lg" href="../careers/index.html">Join the Crew</a>
    <a class="btn btn-secondary btn-lg" href="../course.html">Chart the Course</a>
  </div>
</div></section>

</main>

{FOOTER}
</body></html>
"""

OUT.write_text(PAGE)
tiers = {n: sum(1 for t in terms if t.get("tier") == n) for n in (1, 2, 3)}
print(f"  wrote resources/glossary.html  {len(terms)} terms "
      f"(tier 1: {tiers[1]} · tier 2: {tiers[2]} · tier 3: {tiers[3]}) "
      f"across {len(letters)} letters")
