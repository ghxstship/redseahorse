#!/usr/bin/env python3
"""Generate dedicated pages (course + 3 product pages) by cloning the
solutions.html chrome (nav, footer, styles) so they're consistent with the
kit rather than ad-hoc. Run once; output committed as normal source HTML."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "ui_kits" / "website"
base = (SRC / "solutions.html").read_text(encoding="utf-8")

# Split the template into head-up-to-main, and footer-from-</main>.
pre = base[: base.index("<main>")]
# Drop the template's own breadcrumb line — each page adds its own.
pre = re.sub(r'<div class="wrap"><p class="crumbs">.*?</p></div>\s*', "", pre, flags=re.S)
post = base[base.index("</main>") + len("</main>") :]  # includes footer + </html>

def head_swap(html, title, desc, canon):
    html = re.sub(r"<title>.*?</title>", "<title>" + title + "</title>", html, flags=re.S)
    html = re.sub(r'(<meta name="description" content=")[^"]*(">)', r"\1" + desc + r"\2", html, count=1)
    html = re.sub(r'(<link rel="canonical" href=")[^"]*(">)', r"\1" + canon + r"\2", html, count=1)
    html = re.sub(r'(<meta property="og:title" content=")[^"]*(">)', r"\1" + title + r"\2", html)
    html = re.sub(r'(<meta property="og:description" content=")[^"]*(">)', r"\1" + desc + r"\2", html)
    return html

def crumb(label):
    return ('<div class="wrap"><p class="crumbs"><a href="index.html">Home</a> / '
            '<span style="color:var(--brass)">' + label + '</span></p></div>\n')

def product_main(crumb_label, eyebrow, h1, answer, color, grid_h2, cards, faqs):
    cardhtml = "".join(
        '<div class="scard"><i class="ph-bold ' + i + '"></i><h3>' + t + "</h3><p>" + p + "</p></div>"
        for i, t, p in cards
    )
    faqhtml = "".join(
        ("<details" + (" open" if k == 0 else "") + "><summary>" + q +
         '<span class="ic">+</span></summary><p class="a">' + a + "</p></details>")
        for k, (q, a) in enumerate(faqs)
    )
    return (crumb(crumb_label) + """<main>
<section class="hero"><div class="wrap">
  <p class="eyebrow">""" + eyebrow + """</p>
  <h1>""" + h1 + """</h1>
  <p class="answer">""" + answer + """</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:26px"><a class="gx-btn" href="contact.html">Start a Project</a><a class="gx-btn gx-btn--ghost" href="solutions.html">The Fleet</a></div>
</div></section>
<section class="pad"><div class="wrap">
  <p class="eyebrow">What It Does</p>
  <h2 class="sec">""" + grid_h2 + """</h2>
  <div class="sgrid">""" + cardhtml + """</div>
</div></section>
<section class="pad alt"><div class="wrap">
  <p class="eyebrow">Answers</p>
  <h2 class="sec">FAQ.</h2>
  <div class="faq">""" + faqhtml + """</div>
</div></section>
<section class="cta"><div class="wrap"><h2>Run It on<br>""" + crumb_label + """.</h2>
  <div class="row"><a class="gx-btn gx-btn--lg" href="contact.html">Start a Project</a><a class="gx-btn gx-btn--ghost gx-btn--lg" href="solutions.html">See the Fleet</a></div>
</div></section>
</main>""")

PAGES = {}

# --- COURSE ---------------------------------------------------------------
course_phases = [
    ("01", "Project Discovery", "Goals, scope, budget, and vision — the consultation that sets the route and sizes the build."),
    ("02", "Research & Development", "Feasibility, concepts, and technology and partner exploration. The idea gets pressure-tested."),
    ("03", "Creative Design", "Creative direction, experiential design, and storytelling — the look, the feel, the narrative."),
    ("04", "Compliance & Risk", "Engineering, permits, safety, insurance, and risk planning. The build is made real and safe."),
    ("05", "Production & Build", "Fabrication, scenic, staging, and technical production — pre-built and tested off-site."),
    ("06", "Operations & Logistics", "Logistics, crew, vendors, scheduling, and load-in. Crew on the ground, systems up."),
    ("07", "Live Activation", "Show calling and live execution — the experience itself. We run the show and hold the standard."),
    ("08", "Strike & Post", "Load-out, reconciliation, analytics, and the debrief. Struck clean, logged in the Archives."),
]
phase_cards = "".join(
    '<div class="scard"><span style="font-family:var(--font-display);font-weight:800;font-size:34px;color:var(--brass);display:block;line-height:1">' + n +
    "</span><h3>" + t + "</h3><p>" + d + "</p></div>" for n, t, d in course_phases
)
PAGES["course.html"] = head_swap(pre, "The Course — The 8-Phase Production Lifecycle — GHXSTSHIP",
    "The GHXSTSHIP Course is an eight-phase experiential production lifecycle — Project Discovery, R&amp;D, Creative Design, Compliance &amp; Risk, Production &amp; Build, Operations &amp; Logistics, Live Activation, and Strike &amp; Post — the route every build follows from first line to launch.",
    "https://ghxstship.tours/course") + crumb("The Course") + """<main>
<section class="hero"><div class="wrap">
  <p class="eyebrow">The Course &middot; The Production Lifecycle</p>
  <h1>Eight Phases,<br>First Line to <span class="pop">Launch.</span></h1>
  <p class="answer">The Course is the GHXSTSHIP production lifecycle — eight phases that take an experiential or entertainment project from first consultation to strike. Every build follows the same charted route, with clear deliverables and an accountable owner at each stop, so scope, schedule, and budget stay on course from discovery to close.</p>
  <div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:26px"><a class="gx-btn" href="contact.html">Start a Project</a><a class="gx-btn gx-btn--ghost" href="work/index.html">See the Archives</a></div>
</div></section>
<section class="pad"><div class="wrap">
  <p class="eyebrow">The Route</p>
  <h2 class="sec">The 8-Phase Lifecycle.</h2>
  <p class="lede">Discovery to Close — one methodology across festivals, tours, activations, immersive, sporting, and broadcast.</p>
  <div class="sgrid">""" + phase_cards + """</div>
</div></section>
<section class="cta"><div class="wrap"><h2>Chart Your<br>Course.</h2>
  <div class="row"><a class="gx-btn gx-btn--lg" href="contact.html">Start a Project</a><a class="gx-btn gx-btn--ghost gx-btn--lg" href="solutions.html">Meet the Fleet</a></div>
</div></section>
</main>"""

# --- ATLVS ----------------------------------------------------------------
PAGES["atlvs.html"] = head_swap(pre, "ATLVS — Production & Resource Management — GHXSTSHIP",
    "ATLVS is GHXSTSHIP's production and resource management platform for experiential teams — the atlas that charts scope, schedule, budgets, assets, and the eight-phase production lifecycle in one place.",
    "https://ghxstship.tours/atlvs") + product_main(
    "ATLVS", "The Instruments &middot; ATLVS &middot; The Atlas",
    'ATLVS<br>The <span class="pop">Atlas.</span>',
    "ATLVS is the production and resource management platform at the center of the GHXSTSHIP fleet — the atlas every build is charted on. Scope, schedule, budgets, assets, and the eight-phase lifecycle live in one system, so producers and clients always know where the project stands.",
    "brass", "Chart the Whole Build.",
    [("ph-blueprint", "Production &amp; Scope", "Scope, deliverables, and the eight-phase Course tracked end to end, with owners and dates at every stop."),
     ("ph-calendar-check", "Schedule &amp; Budget", "Live schedules and budgets that stay in sync as the build moves from discovery to strike."),
     ("ph-stack", "Assets &amp; Resources", "Crew, vendors, inventory, and gear — resourced against the plan and visible to the whole team.")],
    [("What is ATLVS?", "ATLVS is GHXSTSHIP's production and resource management platform — the atlas that charts scope, schedule, budget, assets, and the eight-phase production lifecycle for experiential and entertainment projects."),
     ("Who is it for?", "Producers, production directors, and clients who need a single source of truth for an experiential build — from a single activation to a multi-stage festival."),
     ("How does it fit the fleet?", "ATLVS charts the course, COMPVSS points the crew, and GVTEWAY opens the gate — three platforms, one yard, coordinating the whole build.")])

# --- COMPVSS --------------------------------------------------------------
PAGES["compvss.html"] = head_swap(pre, "COMPVSS — Workforce & Crew Management — GHXSTSHIP",
    "COMPVSS is GHXSTSHIP's workforce and crew management platform for live event production — the compass that points crew, certifications, scheduling, and on-site call to the right place at the right time.",
    "https://ghxstship.tours/compvss") + product_main(
    "COMPVSS", "The Instruments &middot; COMPVSS &middot; The Compass",
    'COMPVSS<br>The <span class="pop">Compass.</span>',
    "COMPVSS is the workforce and crew management platform for live event production — the compass that points every crew member to the right place at the right time. Rosters, certifications, scheduling, and on-site call, managed as one accountable system across every date.",
    "brass", "Point the Crew.",
    [("ph-users-three", "Crew &amp; Rosters", "Build, schedule, and deploy crews across dates and venues — the right people on the right call."),
     ("ph-seal-check", "Certifications", "Track certifications, credentials, and compliance so every crew member is cleared for the gig."),
     ("ph-clock-countdown", "Day-of Call", "On-site call sheets, check-in, and time tracking that keep the floor running to standard.")],
    [("What is COMPVSS?", "COMPVSS is GHXSTSHIP's enterprise workforce and crew management platform for live event production — rosters, certifications, scheduling, and day-of operations in one place."),
     ("Who is it for?", "Operations leads, production managers, and venue operators responsible for crewing and running live events safely and on schedule."),
     ("How does it fit the fleet?", "COMPVSS points the crew while ATLVS charts the course and GVTEWAY opens the gate — one coordinated system for the whole build.")])

# --- GVTEWAY --------------------------------------------------------------
PAGES["gvteway.html"] = head_swap(pre, "GVTEWAY — Ticketing & Fan Engagement — GHXSTSHIP",
    "GVTEWAY is GHXSTSHIP's ticketing, access, and fan-engagement platform — the gateway between the audience and the experience, from on-sale to entry to community.",
    "https://ghxstship.tours/gvteway") + product_main(
    "GVTEWAY", "The Instruments &middot; GVTEWAY &middot; The Gateway",
    'GVTEWAY<br>The <span class="pop">Gateway.</span>',
    "GVTEWAY is the ticketing, access, and fan-engagement platform — the gateway between your audience and the experience. On-sale, access control, and community, run on the same system that builds the show, so the fan journey is part of the build, not an afterthought.",
    "brass", "Open the Gate.",
    [("ph-ticket", "Ticketing &amp; On-Sale", "On-sale, allocations, and pricing for festivals, tours, and activations — built into the production."),
     ("ph-scan", "Access &amp; Entry", "Access control and entry that move crowds cleanly and keep the gate secure on game day."),
     ("ph-megaphone", "Fan Engagement", "Audience data and engagement that turn one event into a returning community.")],
    [("What is GVTEWAY?", "GVTEWAY is GHXSTSHIP's event ticketing, access, and fan-engagement platform — the gateway from on-sale to entry to community."),
     ("Who is it for?", "Promoters, venues, and brands who want ticketing and fan engagement coordinated with the rest of the production, not bolted on."),
     ("How does it fit the fleet?", "GVTEWAY opens the gate while ATLVS charts the course and COMPVSS points the crew — three instruments, one yard.")])

for name, html in PAGES.items():
    (SRC / name).write_text(html + post, encoding="utf-8")
    print("wrote", name)
print("done")
