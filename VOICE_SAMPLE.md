# VOICE & COPY SAMPLE — for approval

## Positioning (what we are — literal, for SEO/GEO + sales)
GHXSTSHIP is the **General Contractor, Foreman, and Procore of experiential project management** —
**Production Management, Operations Leadership, and Technology Innovations.**

## Brand voice & client journey (how it feels)
**Yacht Builder + Expedition Creator.** Two registers, fused — used as light texture, never forced:
- **Yacht Builder** → *commissioned craftsmanship.* Used sparingly: build, hull, customize, fit-out, launch, the yard.
- **Expedition Creator** → *charting the journey to a destination.* Used sparingly: destination, charter, the crew, chart the course, the log.

**Tone rule:** confident and crafted, never loud, **never corny.** Plain capability sentence first; the
craft/voyage language is occasional seasoning, not every line. The core verb is **“build/charter a
GHXSTSHIP”** — the client's project is a GHXSTSHIP they build and launch with us. No parentheses. No
emoji. If a metaphor has to stretch to fit, drop it.

---

## Section-by-section sample copy

### Hero
**Eyebrow:** Production Management · Operations Leadership · Technology Innovations
**Headline:** Beyond the Scene.
**Sub:** GHXSTSHIP is the general contractor, foreman, and Procore of experiential project management. Tell us
where you want to take people — the festival, the activation, the world worth stepping into — and we
build the GHXSTSHIP that gets them there. Production, operations, and the technology that runs it.
**CTAs:** Build a GHXSTSHIP · See the Log

### The category claim (positioning band)
We are the general contractor, foreman, and Procore of experiential project management — the accountable yard
that manages the build, leads the crew, and implements the technology. One destination, one ship, one
crew, start to launch.

### The three verticals
- **Production Management — The General Contractor.** We build the ship. Scope, schedule, budget,
  fabrication, staging, and the finish — owned end to end, the way a master yard owns a build.
- **Operations Leadership — The Foreman.** We crew it and run it. Logistics, staffing, safety, and the
  day-of call — the foreman who makes a 50,000-person undertaking run like clockwork.
- **Technology Innovations — The Procore.** We give the yard its instruments. ATLVS, COMPVSS, and
  GVTEWAY — the platform that charts the course, points the crew, and opens the gate.

### The client journey (the booking sequence — re-voiced, in order)
1. **The Destination** *(the vision)* — “Start with where you’re taking people: the project goal, the
   experience worth building. That’s the destination.”
2. **The Ship** *(was: Charters / scope)* — “Choose the hull and the fit-out — full build, a single
   discipline, or by the phase — sized to reach it.”
3. **The Crew** — “Meet the people who get you there: the producers, leads, and technologists on your build.”
4. **The Course** *(was: Itinerary / 8-phase lifecycle)* — “Chart the course: eight phases from first
   line to launch. The route we build to.”
5. **Know Before You Go** *(pre-launch checklist / onboarding / FAQs)* — “The pre-launch checklist —
   everything settled before we go live.”
6. **Launch** — “We launch. The experience goes live.”

*(The Log / Archives remain throughout: case studies, past work, and articles — the record of GHXSTSHIPs built.)*

### The 8-phase lifecycle (keep plain phase names; route framing only, light touch)
01 Discovery · 02 R&D · 03 Creative Design · 04 Compliance & Risk · 05 Production & Build ·
06 Operations & Logistics · 07 Live Activation · 08 Strike & Post — framed as **“the course: eight
phases from first line to launch.”** Don’t rename the phases; let the route framing carry it.

### Selected Work
**Eyebrow:** The Log · GHXSTSHIPs We’ve Built
**Framing:** Every entry is a destination reached — the brief, the build, the launch. The record of
GHXSTSHIPs we’ve built and the people they moved.

### Trust band
Trusted by the brands behind the moments. 14+ years · 250+ experiences · five home ports · in-house
technology. The yard you call for the builds no one else will take.

### CTA (close)
**Headline:** Build a GHXSTSHIP.
**Sub:** Tell us the destination. We build the ship, crew it, chart the course, and launch — on time,
on budget, beyond the scene.
**Buttons:** Build a GHXSTSHIP · See the Log

---

## Microcopy swaps (apply kit-wide on approval)
| Now | New voice |
|---|---|
| Book Now / Book Your Voyage | **Build a GHXSTSHIP** |
| Destinations (nav) | **Destinations** — the project goal / experience |
| Charters / Ways to Sail | **The Ship** — hull + fit-out / scope |
| Itinerary | **The Course** — 8-phase lifecycle |
| — new step | **Know Before You Go** — pre-launch checklist / FAQs |
| Set Sail / Launch | **Launch** |
| The Archives / Logs | **The Log** — case studies, past work, articles |
| The Crew | **The Crew** |

---

## Build rule (#2): zero inline design code
On approval, the rebuild moves **all** styling to kit tokens/classes — no inline `style="…"` design
values. New utility layer to add to the kit so markup stays clean: `gx-section`, `gx-wrap`,
`gx-eyebrow`, `gx-stack`, `gx-grid-2/3/4`, `gx-rail` (sticky journey rail), plus the existing `.gx-*`
components. Every color/space/shadow/radius/border reads a `var(--*)`.
