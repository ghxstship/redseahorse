# PROPRIETARY IP — how GHXSTSHIP bakes frameworks into the brand kit

GHXSTSHIP's proprietary frameworks (the **8-Phase Production Lifecycle**, **XPMS**, and others) are a
competitive moat *and* a major SEO/GEO asset — named, ownable methodologies are exactly what search and
generative engines cite. This file is the **system for turning that IP into branded, reusable assets.**
It currently holds **placeholders** — paste the real content (or share the source Claude artifacts) and
each framework gets promoted from placeholder to full treatment.

---

## The 5 layers every IP framework gets

When we "bake in" a framework, it shows up consistently across five layers:

1. **Canonical definition** — one locked sentence (what it is + why it matters), reused verbatim
   everywhere (here, site, deck, structured data). Plus a locked term + ™/® treatment and a one-line gloss.
2. **Visual treatment** — a signature diagram in the pop art system (numbered ink-outlined step cards,
   orbit/lifecycle ring, or matrix) with locked colors and order. One reusable component per framework.
3. **Where it lives in the IA** — mapped to a vertical (e.g. lifecycle → **Operations**; XPMS →
   **Technology**), with a section on the site, a slide in the deck, and a one-pager/social card.
4. **SEO/GEO instrumentation** — a dedicated definition block, an FAQ entry ("What is XPMS?"), and
   structured data (`DefinedTerm` / `HowTo` for processes, `SoftwareApplication` for systems). This is
   how you get *cited* as the originator of the term.
5. **Governance** — naming, casing, abbreviation, and "don't paraphrase the definition" rules so the IP
   stays consistent across the org.

---

## Intake — what I need from you (per framework)
For each IP, paste or share:
- **Name** + preferred casing/abbreviation (e.g. "XPMS" — and what it expands to).
- **One-sentence definition.**
- **The components** in order (the 8 phases; XPMS modules) with a ~1-line description each.
- **Where it belongs** (which vertical) and **audience** (internal / B2B / B2C).
- Any **trademark status** (™ / ® / pending) and claims we can/can't make.

Drop them under each framework below; I'll then build the diagram component, the site section, the deck
slide, the FAQ + JSON-LD, and a Design System preview card.

---

## Framework 1 — The 8-Phase Production Lifecycle  *(LOCKED · the "Flight Path")*
> **Status:** active. **Home:** Operations (methodology) — visualized brand-wide as the **Flight Path /
> Itinerary** in the Terminal system. **Replaces** the old 7-D methodology entirely.

**Canonical definition (reuse verbatim):** *The GHXSTSHIP Production Lifecycle is our eight-phase
methodology for delivering live experiences — every project is a flight from Discovery to Strike,
moving through Research & Development, Creative Design, Compliance & Risk Management, Production &
Build, Operations & Logistics, Live Activation, and Strike & Post-Production.*

**The 8 phases (in order) — each is a leg of the Flight Path:**
| # | Phase | Short | One-liner |
|---|---|---|---|
| 01 | Project Discovery (Consultation) | DISCOVERY | Goals, scope, vision — the consult that sets the route. |
| 02 | Research & Development | R&D | Feasibility, concepts, technology and partner exploration. |
| 03 | Creative Design | DESIGN | Creative direction, design, and experiential storytelling. |
| 04 | Compliance & Risk Management *(incl. engineering)* | COMPLIANCE | Engineering, permits, safety, insurance, risk planning. |
| 05 | Production & Build | BUILD | Fabrication, staging, technical production, pre-build. |
| 06 | Operations & Logistics | OPERATIONS | Logistics, crew, vendors, scheduling, load-in. |
| 07 | Live Activation | ACTIVATION | Show calling and live execution — the experience itself. |
| 08 | Strike & Post-Production | STRIKE | Load-out, reconciliation, analytics, and the debrief. |

**Flight-path metaphor:** Discovery = *Check-in* · Activation = *In-flight* · Strike = *Arrival*. On the
departures board, each project displays the phase it's currently in. Use the abbreviation set (DISCOVERY,
R&D, DESIGN, COMPLIANCE, BUILD, OPERATIONS, ACTIVATION, STRIKE) for compact UI; full names in headings.

## Framework 2 — XPMS  *(PLACEHOLDER)*
> **Status:** awaiting content. **Likely home:** Technology. **Likely expansion:** "Experiential
> Production Management System" — confirm.
- Canonical definition: _<paste one sentence>_
- Modules / capabilities: _<paste list>_
- **Relationship to ATLVS / COMPVSS / GVTEWAY:** is XPMS the umbrella platform the three apps sit
  inside, the methodology they implement, or a fourth product? This determines how Technology is
  structured on the site and in the product UI kit.

## Framework 3+ — _<name>_  *(PLACEHOLDER)*
- Definition / components / home / audience: _<paste>_

---

## Where baked-in IP will surface (once content lands)
| Asset | What gets added |
|---|---|
| `ui_kits/website/` | A framework section (definition + diagram), an FAQ entry, and `DefinedTerm`/`HowTo` JSON-LD. |
| `slides/` | One slide per framework (lifecycle ring / module grid). |
| `social/` | A "What is XPMS?" explainer card + a lifecycle carousel. |
| `preview/` | A Design System card per framework (locked diagram + colors). |
| `README.md` / `SKILL.md` | The canonical definition + governance rules. |

> **Note on sourcing:** I can't read your other Claude artifacts directly. Paste the content here (or
> into chat), or attach the artifacts/exports, and I'll promote each placeholder into the full 5-layer
> treatment.
