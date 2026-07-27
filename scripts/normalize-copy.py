#!/usr/bin/env python3
"""Enforce data/copy-canon.json across the source pages.

    python3 scripts/normalize-copy.py [--check]

Two things it holds still:

1. WHO WE ARE. Every industry page opens by naming the company. Left to hand
   editing they named eight different companies — an agency, a studio, five
   production companies, and two pages that said "sporting event production
   company" on a cruise ship page and an amusement park page. The identity
   clause is now one string from the canon; only the delivery clause after it
   is tailored to the industry.

2. WHERE TO WRITE. One mailbox, sos@ghxstship.pro. The city addresses and
   hello@ghxstship.tours were published in 38 places and none of them exist.

--check exits non-zero without writing, for CI.
"""

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
CANON = json.loads((ROOT / "data/copy-canon.json").read_text())
CHECK = "--check" in sys.argv

IDENTITY = CANON["identity"]["long"].replace("&", "&amp;")
SHORT = CANON["identity"]["short"]
MAIL = CANON["contact"]["primary"]

# Everything that used to be an address. Anything matching goes to sos@.
DEAD_MAIL = re.compile(
    r"\b(?:hello|info|contact)@ghxstship\.tours\b"
    r"|\b(?:miami|chicago|losangeles|newyork|nyc|la)@ghxstship\.pro\b",
    re.I,
)

# The identity clause: from "GHXSTSHIP is a/an …" through the satellite list.
IDENT_RE = re.compile(
    r"GHXSTSHIP is an? [^.]*?satellite offices in Nashville, Denver, Las Vegas, and Phoenix\."
)

changed, findings = set(), []


def edit(path, fn):
    s = path.read_text()
    out = fn(s)
    if out != s:
        findings.append(str(path.relative_to(ROOT)))
        if not CHECK:
            path.write_text(out)
        changed.add(str(path))


# ── industry pages: identity + meta description ──────────────────────────
for slug, ind in CANON["industries"].items():
    p = ROOT / f"ui_kits/website/destinations/{slug}.html"
    if not p.exists():
        print(f"  ! missing {p.name}")
        continue

    verb = ind.get("verb", "deliver")
    tail = (
        f"For {ind['label'].replace('&', '&amp;')}, we {verb} {ind['delivers'].replace('&', '&amp;')} "
        f"— for {ind['audiences']} — through our nine-phase XPMS 2.6 production lifecycle"
        f"{ind.get('tailPlus', '')}."
    )
    lede = f"{IDENTITY} {tail}"
    meta = (
        f"{ind['metaLead']}. From {SHORT}, running the nine-phase XPMS 2.6 "
        f"production lifecycle."
    ).replace("&", "&amp;")

    def fix(s, lede=lede, meta=meta):
        s2 = re.sub(
            r'(<p class="lede">)(.*?)(</p>)',
            lambda m: m.group(1) + lede + m.group(3),
            s, count=1, flags=re.S,
        )
        s2 = re.sub(
            r'(<meta name="description" content=")([^"]*)(")',
            lambda m: m.group(1) + meta + m.group(3),
            s2, count=1,
        )
        return s2

    edit(p, fix)

# ── every page: one mailbox ──────────────────────────────────────────────
for p in sorted(ROOT.glob("ui_kits/website/**/*.html")):
    edit(p, lambda s: DEAD_MAIL.sub(MAIL, s))
for rel in ["public/site-form.js", "app/_components/Footer.tsx"]:
    p = ROOT / rel
    if p.exists():
        edit(p, lambda s: DEAD_MAIL.sub(MAIL, s))

print(f"{'would change' if CHECK else 'changed'}: {len(set(findings))} files")
for f in sorted(set(findings)):
    print("   ", f)

if CHECK and findings:
    print("\ncopy is out of sync with data/copy-canon.json — run without --check")
    sys.exit(1)
