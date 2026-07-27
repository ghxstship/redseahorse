import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Course",
  description: "The GHXSTSHIP Course is the nine-phase XPMS 2.6 experiential production lifecycle: Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close, the same nine gated phases every build runs, from the first conversation to archive handover.",
  keywords: ["production lifecycle", "XPMS 2.6", "nine-phase production lifecycle", "event production process", "experiential production phases", "production management methodology", "live event production planning"],
  alternates: { canonical: "https://ghxstship.tours/course" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout, components come from modernist.css */
  .ph { border-top: 2px solid var(--color-divider); padding: clamp(24px, 4vw, 44px) 0; display: grid; grid-template-columns: 110px 1fr; gap: clamp(16px, 3vw, 48px); align-items: start; }
  .ph:last-of-type { border-bottom: 2px solid var(--color-divider); }
  .ph .num { font-family: var(--font-heading); font-weight: 800; font-size: clamp(34px, 4vw, 56px); line-height: 1; letter-spacing: -0.02em; color: var(--color-accent-700); }
  .ph h3 { font-size: clamp(22px, 2.6vw, 32px); line-height: 1.05; margin: 0 0 8px; }
  .ph p { max-width: 62ch; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 78%, transparent); margin: 0; }
  .ph .phmeta { display: flex; gap: 10px; flex-wrap: wrap; margin: 0 0 10px; font-size: 0.733rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); }
  .ph .phmeta b { color: var(--color-accent-700); }
  .ph .exit { margin-top: 12px; font-size: 0.867rem; line-height: 1.6; max-width: 62ch; color: color-mix(in srgb, var(--color-text) 65%, transparent); }
  .ph .exit b { font-size: 0.733rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text); }
  .ph .dels { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
  @media (max-width: 720px) { .ph { grid-template-columns: 1fr; gap: 8px; } }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Course · The Production Lifecycle</p>
  <h1 className="page-h1">9 Phases, from First Call to Close.</h1>
  <p className="lede">The Course is the GHXSTSHIP production lifecycle, the nine gated phases of the XPMS 2.6 standard that take an experiential or entertainment project from the first consultation to archive handover. Every build runs the same nine phases in three acts: Plan, Build, Show, with clear deliverables, a gate to clear, and one accountable owner at each, so the budget and the schedule never go quiet on you between Discover and Close.</p>
  <div className="cta-row" style={{marginTop: '24px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">The Route</p>
  <h2 className="sec-h2">The 9-Phase Lifecycle.</h2>
  <p className="lede">Discover to Close, the XPMS 2.6 standard, one way of working across festivals, tours, activations, immersive, cruise, parks, sporting, and broadcast. Nine gates in three acts: Plan runs gates 1–3, Build runs 4–6, Show runs 7–9.</p>
  <div className="phases">
    <a className="phase done" href="#phase-1"><div className="dot">1</div><div className="nm">Discover</div></a>
    <a className="phase done" href="#phase-2"><div className="dot">2</div><div className="nm">Design</div></a>
    <a className="phase done" href="#phase-3"><div className="dot">3</div><div className="nm">Advance</div></a>
    <a className="phase done" href="#phase-4"><div className="dot">4</div><div className="nm">Procure</div></a>
    <a className="phase done" href="#phase-5"><div className="dot">5</div><div className="nm">Build</div></a>
    <a className="phase done" href="#phase-6"><div className="dot">6</div><div className="nm">Install</div></a>
    <a className="phase done" href="#phase-7"><div className="dot">7</div><div className="nm">Operate</div></a>
    <a className="phase done" href="#phase-8"><div className="dot">8</div><div className="nm">Amplify</div></a>
    <a className="phase done" href="#phase-9"><div className="dot">9</div><div className="nm">Close</div></a>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Phase by Phase</p>
  <h2 className="sec-h2">Every Build Walks the Same Course.</h2>
  <div style={{marginTop: '28px'}}>
    <article className="ph" id="phase-1">
      <div className="num">01</div>
      <div>
        <h3>Discover</h3>
        <p className="phmeta"><span>Act I</span><b>Plan</b><span>Gate 1</span></p>
        <p>Brief intake, feasibility, budget envelope, and stakeholder alignment. The consultation that figures out what we're building, how big it really is, and who has to agree before anything gets drawn.</p>
        <p className="exit"><b>Gate exits when</b> the brief is taken in, feasibility is read, the budget envelope is set, and stakeholders are aligned.</p>
        <div className="dels"><span className="tag tag-neutral">Brief Intake</span><span className="tag tag-neutral">Feasibility</span><span className="tag tag-neutral">Budget Envelope</span><span className="tag tag-neutral">Stakeholder Alignment</span></div>
      </div>
    </article>
    <article className="ph" id="phase-2">
      <div className="num">02</div>
      <div>
        <h3>Design</h3>
        <p className="phmeta"><span>Act I</span><b>Plan</b><span>Gate 2</span></p>
        <p>Concept, development, and engineering, one phase that absorbs Concept, Develop, and Engineering. The idea gets pressure-tested: creative direction, experiential design, and storytelling on one side; the engineering that makes the look and feel buildable on the other.</p>
        <p className="exit"><b>Gate exits when</b> concept, development, and engineering resolve into a design the build can be priced and made from.</p>
        <div className="dels"><span className="tag tag-neutral">Concept</span><span className="tag tag-neutral">Creative Direction</span><span className="tag tag-neutral">Experiential Design</span><span className="tag tag-neutral">Engineering</span></div>
      </div>
    </article>
    <article className="ph" id="phase-3">
      <div className="num">03</div>
      <div>
        <h3>Advance</h3>
        <p className="phmeta"><span>Act I</span><b>Plan</b><span>Gate 3</span></p>
        <p>Contracts, permits, insurance, the risk register, and the PO baseline. The paperwork phase that makes the build real and safe before a dollar of production money moves.</p>
        <p className="exit"><b>Gate exits when</b> contracts, permits, and insurance are in place, the risk register is live, and the PO baseline is locked.</p>
        <div className="dels"><span className="tag tag-neutral">Contracts</span><span className="tag tag-neutral">Permits</span><span className="tag tag-neutral">Insurance</span><span className="tag tag-neutral">Risk Register</span><span className="tag tag-neutral">PO Baseline</span></div>
      </div>
    </article>
    <article className="ph" id="phase-4">
      <div className="num">04</div>
      <div>
        <h3>Procure</h3>
        <p className="phmeta"><span>Act II</span><b>Build</b><span>Gate 4</span></p>
        <p>Vendor award, deposits, long-lead orders, rate-card lock, and submittals. The buying phase, who's building what, at what rate, and what has to be ordered now to arrive on time.</p>
        <p className="exit"><b>Gate exits when</b> vendors are awarded, deposits and long-lead orders are placed, rate cards are locked, and submittals are in.</p>
        <div className="dels"><span className="tag tag-neutral">Vendor Award</span><span className="tag tag-neutral">Deposits</span><span className="tag tag-neutral">Long-Lead Orders</span><span className="tag tag-neutral">Rate-Card Lock</span><span className="tag tag-neutral">Submittals</span></div>
      </div>
    </article>
    <article className="ph" id="phase-5">
      <div className="num">05</div>
      <div>
        <h3>Build</h3>
        <p className="phmeta"><span>Act II</span><b>Build</b><span>Gate 5</span></p>
        <p>Fabrication plus construction, with shop QC. Scenic, staging, and technical production get pre-built and tested off-site so problems surface in the shop, not on the site.</p>
        <p className="exit"><b>Gate exits when</b> fabrication and construction are complete and everything has cleared shop QC.</p>
        <div className="dels"><span className="tag tag-neutral">Fabrication</span><span className="tag tag-neutral">Scenic</span><span className="tag tag-neutral">Staging</span><span className="tag tag-neutral">Technical Production</span><span className="tag tag-neutral">Shop QC</span></div>
      </div>
    </article>
    <article className="ph" id="phase-6">
      <div className="num">06</div>
      <div>
        <h3>Install</h3>
        <p className="phmeta"><span>Act II</span><b>Build</b><span>Gate 6</span></p>
        <p>Logistics, install, commissioning, and punch closure. Crew on the ground, trucks scheduled, load-in run, systems up and commissioned, and the punch list worked to zero.</p>
        <p className="exit"><b>Gate exits when</b> logistics and install are done, systems are commissioned, and the punch list is closed.</p>
        <div className="dels"><span className="tag tag-neutral">Logistics</span><span className="tag tag-neutral">Load-In</span><span className="tag tag-neutral">Commissioning</span><span className="tag tag-neutral">Punch Closure</span></div>
      </div>
    </article>
    <article className="ph" id="phase-7">
      <div className="num">07</div>
      <div>
        <h3>Operate</h3>
        <p className="phmeta"><span>Act III</span><b>Show</b><span>Gate 7</span></p>
        <p>Run plus strike, live operations, dispatch, and incident and daily reporting. Show calling and live execution, the experience itself; we run the show and hold the standard. Strike lives inside Operate, never a phase of its own: the controlled teardown and load-out are part of the run.</p>
        <p className="exit"><b>Gate exits when</b> the run is complete, strike and load-out are done, and dispatch, incident, and daily reporting are closed out.</p>
        <div className="dels"><span className="tag tag-neutral">Show Calling</span><span className="tag tag-neutral">Live Operations</span><span className="tag tag-neutral">Dispatch</span><span className="tag tag-neutral">Reporting</span><span className="tag tag-neutral">Strike</span></div>
      </div>
    </article>
    <article className="ph" id="phase-8">
      <div className="num">08</div>
      <div>
        <h3>Amplify</h3>
        <p className="phmeta"><span>Act III</span><b>Show</b><span>Gate 8</span></p>
        <p>Content capture, media and press, broadcast and livestream delivery, social amplification, and post-event campaigns. The experience gets a second life on every screen it didn't happen on, capture planning happens in earlier phases; Amplify gates the execution and delivery.</p>
        <p className="exit"><b>Gate exits when</b> capture assets are delivered and archived, press and media distribution is complete, broadcast masters are delivered, and post-event campaigns are launched or formally handed off to always-on marketing.</p>
        <div className="dels"><span className="tag tag-neutral">Content Capture</span><span className="tag tag-neutral">Media &amp; Press</span><span className="tag tag-neutral">Broadcast &amp; Livestream</span><span className="tag tag-neutral">Social</span><span className="tag tag-neutral">Post-Event Campaigns</span></div>
      </div>
    </article>
    <article className="ph" id="phase-9">
      <div className="num">09</div>
      <div>
        <h3>Close</h3>
        <p className="phmeta"><span>Act III</span><b>Show</b><span>Gate 9</span></p>
        <p>Reconciliation and the final cost report; archive handover. The books get squared, the debrief gets written down, and the build is logged in the archives.</p>
        <p className="exit"><b>Gate exits when</b> reconciliation is complete, the final cost report is delivered, and the archive is handed over.</p>
        <div className="dels"><span className="tag tag-neutral">Reconciliation</span><span className="tag tag-neutral">Final Cost Report</span><span className="tag tag-neutral">Archive Handover</span><span className="tag tag-neutral">Debrief</span></div>
      </div>
    </article>
  </div>
</div></section>

<section className="wrap sec-pad-sm">
  <p className="kicker">The Chart · ATLVS Coordinate Matrix</p>
  <h2 className="sec-h2">90 Coordinates. Nothing Off the Map.</h2>
  <p className="lede">XPMS 2.6 formalizes the ATLVS Coordinate Matrix, the task-management lens over the lifecycle. Every task and work item on a build resolves to exactly one of 90 coordinates: ten department classes (latitude) crossed with the nine gated phases (longitude), written class-by-phase, like 3000xAMP for Marketing × Amplify. Project workspaces own gates 1–4, Discover through Procure; an oversight grid runs gates 5–9, Build through Close. So there is always one cell, one owner, and one place to look.</p>
</section>

<section className="wrap sec-pad">
  <p className="kicker">Questions</p>
  <h2 className="sec-h2">Asked Before Every Build.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)', maxWidth: '59rem'}}>
    <details className="faq-item">
      <summary className="faq-q">How many phases are in the GHXSTSHIP production lifecycle?</summary>
      <div className="faq-a">Nine. The Course follows the XPMS 2.6 standard, nine gated phases in three acts: Plan (Discover, Design, Advance), Build (Procure, Build, Install), and Show (Operate, Amplify, Close). Strike lives inside Operate, and every work item resolves to one of 90 coordinates on the ATLVS Coordinate Matrix, ten department classes across the nine phases.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Can GHXSTSHIP act as the lead producer for an experiential or entertainment project?</summary>
      <div className="faq-a">Yes. GHXSTSHIP operates as the lead producer and accountable management team for experiential and entertainment production, owning scope, schedule, budget, crew, vendors, and technology across all nine phases of the XPMS 2.6 lifecycle.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Do you provide operations leadership?</summary>
      <div className="faq-a">Yes. We provide venue and site operations leadership: logistics, workforce and crew management, vendor coordination, health, safety and compliance, programming, and day-of operations.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Do you handle event technology integrations and installs?</summary>
      <div className="faq-a">Yes. We implement and integrate event technology: the ATLVS operator console, COMPVSS site and venue operations, the GVTEWAY public interface and marketplace, and the LEG3ND knowledge layer of standard, courses, certifications, and catalog, plus the show technology we specify and install, third-party integrations, on-site installs, data, and analytics. You get the platforms that are live today and the rest as they ship.</div>
    </details>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Let's Build <span className="a">Yours.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/services/experiential-design-production" className="btn btn-secondary btn-lg">Explore the Services</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","logo":"https://ghxstship.tours/assets/logo-ghostship-skull.svg","description":"Professional services firm for live and experiential projects: experiential design and production, venue and site operations, tour and talent management, and technology and systems engineering.","sameAs":["https://www.instagram.com/ghxstship.tours","https://www.linkedin.com/company/ghxstship","https://www.youtube.com/@ghxstship","https://www.tiktok.com/@ghxstship.tours"]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Experiential design and production","name":"Experiential Design and Production","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"End-to-end design and production of live and experiential projects, concept, scope, schedule, budget, fabrication, staging, technical production, and show calling."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Venue and site operations","name":"Venue and Site Operations","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Venue and site operations, programming, bookings, logistics, crew and workforce, compliance, facility and vendor operations, and day-of operations for events, venues, and activations."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Tour and talent management","name":"Tour and Talent Management","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Tour and talent management, routing, advancing, artist relations, travel, settlement, and the run of show, city after city."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Technology and systems engineering","name":"Technology and Systems Engineering","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Technology and systems engineering, the ATLVS operator console, COMPVSS site and venue operations, the GVTEWAY public interface and marketplace, and the LEG3ND knowledge layer, plus the show technology we specify and install, third-party integrations, data, and analytics."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many phases are in the GHXSTSHIP production lifecycle?","acceptedAnswer":{"@type":"Answer","text":"Nine. The Course follows the XPMS 2.6 standard, nine gated phases in three acts: Plan (Discover, Design, Advance), Build (Procure, Build, Install), and Show (Operate, Amplify, Close). Strike lives inside Operate, and every work item resolves to one of 90 coordinates on the ATLVS Coordinate Matrix, ten department classes across the nine phases."}},{"@type":"Question","name":"Can GHXSTSHIP act as the lead producer for an experiential or entertainment project?","acceptedAnswer":{"@type":"Answer","text":"Yes. GHXSTSHIP operates as the lead producer and accountable management team for experiential and entertainment production, owning scope, schedule, budget, crew, vendors, and technology across all nine phases of the XPMS 2.6 lifecycle."}},{"@type":"Question","name":"Do you provide operations leadership?","acceptedAnswer":{"@type":"Answer","text":"Yes. We provide venue and site operations leadership: logistics, workforce and crew management, vendor coordination, health, safety and compliance, programming, and day-of operations."}},{"@type":"Question","name":"Do you handle event technology integrations and installs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We implement and integrate event technology: the ATLVS operator console, COMPVSS site and venue operations, the GVTEWAY public interface and marketplace, and the LEG3ND knowledge layer of standard, courses, certifications, and catalog, plus the show technology we specify and install, third-party integrations, on-site installs, data, and analytics. You get the platforms that are live today and the rest as they ship."}}]}` }} />
    </>
  );
}
