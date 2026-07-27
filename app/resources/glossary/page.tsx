import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary",
  description: "The vocabulary of experiential production, defined plainly: the nine gated phases of XPMS 2.6, the three acts, the ten department classes, the ATLVS Coordinate Matrix, and the industry terms around them.",
  keywords: ["experiential production glossary", "XPMS 2.6", "production lifecycle phases", "ATLVS Coordinate Matrix", "department classes", "event production terms", "run of show", "load-in", "strike"],
  alternates: { canonical: "https://ghxstship.tours/resources/glossary" },
  openGraph: {"siteName": "GHXSTSHIP", "type": "website", "locale": "en_US", "title": "The vocabulary of experiential production, defined", "images": [{"url": "/og/default.png", "width": 1200, "height": 630, "alt": "The GHXSTSHIP flag, white on black"}]},
  twitter: {"card": "summary_large_image", "images": ["/og/default.png"]},
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout only; every component comes from modernist.css */
  .gl-jump { display: flex; flex-wrap: wrap; gap: 2px; margin-top: clamp(20px, 3vw, 28px); }
  .gl-jump a { display: inline-flex; align-items: center; justify-content: center; min-width: 34px; min-height: 34px; padding: 0 6px; font-family: var(--font-heading); font-weight: 600; font-size: 0.867rem; text-decoration: none; color: var(--color-text); border: 1px solid var(--color-divider); }
  .gl-jump a:hover { background: var(--color-accent); color: var(--color-on-accent); border-color: var(--color-accent); }
  .gl-sec { margin-top: clamp(28px, 4vw, 44px); }
  .gl-letter { font-size: 1.6rem; color: var(--color-accent-700); border-bottom: 2px solid var(--color-divider); padding-bottom: 6px; scroll-margin-top: 90px; }
  .gl-terms { margin: 0; }
  .gl-term { padding: 18px 0; border-bottom: 1px solid var(--color-divider); scroll-margin-top: 90px; }
  .gl-term dt { font-family: var(--font-heading); font-weight: 800; font-size: 1.2rem; text-transform: uppercase; letter-spacing: -0.01em; display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
  .gl-term dd { margin: 8px 0 0; font-size: 1rem; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 80%, transparent); max-width: 72ch; }
  .gl-term dd strong, .gl-term dd code { color: var(--color-text); }
  .gl-term dd code { font-size: 0.9em; background: var(--color-surface); padding: 1px 5px; }
  .gl-tier { font-family: var(--font-body); font-weight: 600; font-size: 0.667rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-accent-700); }
  .gl-aka, .gl-note, .gl-see { display: block; margin-top: 8px; font-size: 0.867rem; }
  .gl-aka { color: color-mix(in srgb, var(--color-text) 58%, transparent); }
  .gl-note { color: color-mix(in srgb, var(--color-text) 66%, transparent); border-left: 2px solid var(--color-divider); padding-left: 12px; margin-bottom: 0; }
  .gl-see { font-family: var(--font-heading); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-accent-700); text-decoration: none; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Resources · Glossary</p>
  <h1 className="page-h1">The Words for the Work.</h1>
  <p className="lede">The vocabulary of experiential production, defined plainly by the people who produce it. 29 of these terms are XPMS 2.6 canon: the nine gated phases, the three acts, the ten department classes and the coordinate system that ties them together.</p>
  <nav className="gl-jump" aria-label="Jump to letter"><a href="#a">A</a><a href="#b">B</a><a href="#c">C</a><a href="#d">D</a><a href="#e">E</a><a href="#f">F</a><a href="#g">G</a><a href="#h">H</a><a href="#i">I</a><a href="#l">L</a><a href="#m">M</a><a href="#o">O</a><a href="#p">P</a><a href="#r">R</a><a href="#s">S</a><a href="#t">T</a><a href="#u">U</a><a href="#v">V</a><a href="#w">W</a><a href="#x">X</a></nav>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <div className="gl-sec">
    <h2 className="gl-letter" id="a">A</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="act">
        <dt>Act<span className="gl-tier">XPMS canon</span></dt>
        <dd>The three presentation groupings of the XPMS 2.6 lifecycle. <strong>Act I, Plan</strong> covers Discover, Design and Advance: everything before money is committed. <strong>Act II, Build</strong> covers Procure, Build and Install: money committed and the thing made real. <strong>Act III, Show</strong> covers Operate, Amplify and Close: doors open and everything downstream of doors. Acts are a grouping, not an authorization boundary. Gates are the only control points, and nothing gates on an act.<span className="gl-aka">Also: Plan, Build (act), Show</span><p className="gl-note">Act II is named Build and contains the Build phase at gate 5. That is deliberate, on the film convention where the Production stage contains principal photography. Write Act II · Build and Gate 5 · Build when it needs disambiguating.</p><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="activation-footprint">
        <dt>Activation Footprint</dt>
        <dd>The total physical space and spatial layout a brand activation occupies on a site, including the public-facing build, back of house, queueing and the circulation around it.<Link href="/destinations/brand-activations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="advance">
        <dt>Advance<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 3, code ADV, Act I. Contracts, permits, insurance, the risk register and the PO baseline. The paperwork phase that makes the build real and insurable. <strong>Exits when</strong> contracts are executed, permits are filed and the PO baseline is set.<p className="gl-note">Distinct from the touring sense of the word. On the road, to advance a date means to confirm technical requirements, hospitality, schedules and settlement terms with the venue and promoter before arrival. See Venue Advance.</p><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="amplify">
        <dt>Amplify<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 8, code AMP, Act III. Content capture, media and press, broadcast and livestream delivery, social amplification and post-event campaigns. The experience gets a second life on every screen it did not happen on. <strong>Exits when</strong> capture assets are delivered and archived, press and media distribution is complete, broadcast masters are delivered, and post-event campaigns are launched or formally handed off.<p className="gl-note">Added as the ninth gated phase in XPMS 2.5. Before that, amplification was assumed rather than gated.</p><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="archive-handover">
        <dt>Archive Handover<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>The transfer of a completed build's full record at Close: drawings, as-builts, permits, contracts, settlement, capture assets and the final cost report. What lets the next build start from evidence instead of memory.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="as-built">
        <dt>As-Built<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>A drawing corrected to reflect what was actually installed rather than what was designed. Filed at the close of Install, and the reason a venue can be re-entered a year later without re-surveying it.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="atlvs-coordinate-matrix">
        <dt>ATLVS Coordinate Matrix<span className="gl-tier">XPMS canon</span></dt>
        <dd>The task-management lens over the XPMS lifecycle: ten department classes as latitude, the nine gated phases as longitude, giving <strong>90 coordinates</strong>. Every task and work item on a build resolves to exactly one. It is a computed view, never a taxonomy: it introduces no new codes and no new level in the tree.<span className="gl-aka">Also: Coordinate Matrix</span><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="atom">
        <dt>Atom<span className="gl-tier">XPMS canon</span></dt>
        <dd>The smallest catalogued unit of work or material in XPMS, addressed by a URID and priced by a band. The catalog holds 624 of them across the ten department classes.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="b">B</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="brand-activation">
        <dt>Brand Activation</dt>
        <dd>A live, experiential marketing engagement that brings a brand into physical space so an audience can walk into it rather than watch it.<Link href="/destinations/brand-activations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="budget-envelope">
        <dt>Budget Envelope<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>The approved outer bound of spend, set in Discover before design begins. Not an estimate and not a quote: the number the build has to fit inside, agreed before anyone draws anything.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="build">
        <dt>Build<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 5, code BLD, Act II. Fabrication, scenic, staging and technical production, pre-built and tested off site. <strong>Exits when</strong> fabrication is complete, QC has passed and the punch list is opened.<p className="gl-note">The phase, not the act. Act II is also called Build and contains this phase.</p><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="c">C</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="call-time">
        <dt>Call Time</dt>
        <dd>The time a crew member or performer is required on site, distinct from door time or show time. The unit the day is actually built from.<Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="close">
        <dt>Close<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 9, code CLS, Act III. Reconciliation, the final cost report and archive handover. <strong>Exits when</strong> the build is reconciled, the final cost report is filed and the archive is handed over.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="commissioning">
        <dt>Commissioning<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>Proving an installed system performs to specification under real conditions, not just that it powers on. Happens in Install, before the punch list can close.<Link href="/services/technology-systems-engineering" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="coordinate">
        <dt>Coordinate<span className="gl-tier">XPMS canon</span></dt>
        <dd>A single cell of the ATLVS Coordinate Matrix, written <code>class × phase</code> — for example <strong>3000xAMP</strong> for Marketing work in the Amplify phase. Gives every deliverable an address, so nothing falls between departments.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="creative">
        <dt>Creative<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>1000</strong>. Concept, creative direction, art direction, content and the design language a build is made from.<Link href="/services/experiential-design-production" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="d">D</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="dark-day">
        <dt>Dark Day</dt>
        <dd>A day with no public programming inside an otherwise live run. Used for maintenance, changeover, or crew rest, and planned rather than lost.<Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="department-class">
        <dt>Department Class<span className="gl-tier">XPMS canon</span></dt>
        <dd>The latitude of the ATLVS Coordinate Matrix and the first segment of every URID. There are ten, stable since XPMS 2.0: <strong>0000 Executive · 1000 Creative · 2000 Talent · 3000 Marketing · 4000 Build · 5000 Production · 6000 Operations · 7000 Experience · 8000 Hospitality · 9000 Technology</strong>.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="design">
        <dt>Design<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 2, code DSN, Act I. Concept, development and engineering in one phase, absorbing what other models split into Concept, Develop and Engineering. The idea gets pressure-tested until it can be priced and made. <strong>Exits when</strong> scope is locked and spec drawings and sample approvals are complete.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="discipline">
        <dt>Discipline<span className="gl-tier">XPMS canon</span></dt>
        <dd>The second segment of a URID, below department class. Seventy-nine of them across the ten classes — Production alone carries ten.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="discover">
        <dt>Discover<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 1, code DIS, Act I. Brief intake, feasibility, budget envelope and stakeholder alignment. The consultation that works out what is being built and whether it can be. <strong>Exits when</strong> the go/no-go decision is ratified and the budget envelope is approved.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="e">E</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="executive">
        <dt>Executive<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>0000</strong>. Client relationship, commercial terms, governance and the decisions that sit above the build.<Link href="/about" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="experience">
        <dt>Experience<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>7000</strong>. Show technology and the audience-facing layer: projection, playback, LED, show control, sensors and real-time content.<Link href="/services/technology-systems-engineering" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="experiential-production">
        <dt>Experiential Production</dt>
        <dd>The end-to-end creative and physical production of live experiences: concept, design, fabrication, installation, and the crew who run it.<Link href="/services/experiential-design-production" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="experiential-technology">
        <dt>Experiential Technology</dt>
        <dd>The software and integrated systems that run live experience production, from the operator console to the show control on the floor.<Link href="/platforms" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="f">F</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="feasibility">
        <dt>Feasibility<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>The Discover-phase read on whether a brief can be built at all, on the site, in the time, for the envelope. The answer that saves the most money is the early no.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="front-of-house">
        <dt>Front of House</dt>
        <dd>Everything on the audience side of the line: the guest experience, the service standard, and the mix position the show is run from.<span className="gl-aka">Also: FOH</span><Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="g">G</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="gate">
        <dt>Gate<span className="gl-tier">XPMS canon</span></dt>
        <dd>The control point at the end of each XPMS phase. Nine of them, numbered 1 to 9. A build does not move to the next phase until its gate exit condition is met, and gates are the only authorization boundary in the standard.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="gate-exit-condition">
        <dt>Gate Exit Condition<span className="gl-tier">XPMS canon</span></dt>
        <dd>The written test a phase must pass before its gate opens. Stated as facts about deliverables rather than opinions about readiness — "permits filed, PO baseline set" rather than "Advance looks good".<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="h">H</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="hold">
        <dt>Hold</dt>
        <dd>A date reserved with a venue but not yet contracted, ranked first hold, second hold and so on. Releases if it is not confirmed by the challenge deadline.<Link href="/services/tour-talent-management" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="hospitality">
        <dt>Hospitality<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>8000</strong>. Food and beverage, bars and catering, VIP and premium hospitality, and the front-of-house standards a guest feels on arrival.<Link href="/destinations" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="i">I</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="immersive-experience">
        <dt>Immersive Experience</dt>
        <dd>A designed environment audiences step inside and move through, using narrative, spatial design and interactive technology to surround them rather than face them.<Link href="/destinations/immersive-experiences" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="install">
        <dt>Install<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 6, code INS, Act II. Logistics, load-in, commissioning and punch closure. <strong>Exits when</strong> everything is installed and commissioned, the punch list is closed and as-builts are filed.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="l">L</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="load-in">
        <dt>Load-In</dt>
        <dd>The scheduled process of transporting, installing and assembling all production elements — staging, scenic, audio, lighting, video and rigging — at a venue ahead of a live event.<span className="gl-aka">Also: Bump-In</span><Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="load-out">
        <dt>Load-Out</dt>
        <dd>The removal of production elements from a venue after a run. The physical half of Strike.<span className="gl-aka">Also: Bump-Out</span><Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="long-lead-order">
        <dt>Long-Lead Order<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>An order placed in Procure whose delivery time, not its price, drives the schedule. Missing a long-lead date moves the show, which is why they are locked before anything else is bought.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="m">M</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="marketing">
        <dt>Marketing<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>3000</strong>. Campaign, content, press, social and the amplification work that carries a build beyond the people who attended it.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="o">O</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="operate">
        <dt>Operate<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 7, code OPR, Act III. The run plus the strike: live operations, dispatch, and incident and daily reporting. <strong>Exits when</strong> the show is closed, strike is complete and operating acceptance is signed.<p className="gl-note">Strike lives inside Operate. It is never a phase of its own.</p><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="operations">
        <dt>Operations<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>6000</strong>, the largest in the catalog at 161 atoms. Logistics, workforce, vendor coordination, safety, compliance and day-of running.<Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="p">P</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="po-baseline">
        <dt>PO Baseline<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>The locked set of purchase orders a build is measured against from Advance onward. Every later change is a variance to this, which is what makes a final cost report meaningful.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="procure">
        <dt>Procure<span className="gl-tier">XPMS canon</span></dt>
        <dd>Gate 4, code PRC, Act II. Vendor award, deposits, long-lead orders, rate-card lock and submittals. The buying phase: who is building what, at what rate, and what has to be ordered now. <strong>Exits when</strong> all awards are issued, deposits are paid and long-lead orders are confirmed.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="production">
        <dt>Production<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>5000</strong>. Staging, rigging, audio, lighting, video, power and the technical production that makes a show happen.<Link href="/services/experiential-design-production" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="production-lifecycle">
        <dt>Production Lifecycle<span className="gl-tier">XPMS canon</span></dt>
        <dd>The structured, repeatable phases a live experience moves through from first consultation to archive handover. GHXSTSHIP runs the <strong>nine gated phases of XPMS 2.6</strong>: Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, Close.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="punch-list">
        <dt>Punch List<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>The running list of defects and unfinished items opened at the end of Build and closed during Install. Gate 6 does not open while it is open.<span className="gl-aka">Also: Punch Closure</span><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="r">R</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="rate-card-lock">
        <dt>Rate-Card Lock<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>Fixing labour and equipment rates with a vendor for the duration of an engagement, so the schedule can move without the price moving with it.<Link href="/pricing" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="reconciliation">
        <dt>Reconciliation<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>Settling actuals against the PO baseline at Close: what was ordered, what was delivered, what was charged, and what the variance was. The step that turns a build into a number you can trust next time.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="rider">
        <dt>Rider</dt>
        <dd>The technical and hospitality requirements attached to an artist's contract. Advancing a date is largely the work of reconciling the rider with the room.<Link href="/services/tour-talent-management" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="risk-register">
        <dt>Risk Register<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>The live list of what could go wrong on a build, who owns each item, and what the mitigation is. Opened in Advance and worked until Close, not written once and filed.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="run-of-show">
        <dt>Run of Show</dt>
        <dd>The minute-by-minute master document that sequences every cue, transition and responsibility across departments during a live event, used by the show caller to run the event.<span className="gl-aka">Also: ROS</span><Link href="/services/experiential-design-production" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="s">S</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="settlement">
        <dt>Settlement<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>Closing the financial position on a single date with the promoter or venue: box office against the deal, costs against the budget, signed the same night or the morning after.<Link href="/services/tour-talent-management" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="shop-qc">
        <dt>Shop QC<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>Quality control performed on fabricated elements in the shop, before they ship. Catching a fault in Build costs a day; catching it in Install costs the load-in.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="show-caller">
        <dt>Show Caller</dt>
        <dd>The person who directs a live event in real time, calling cues to audio, lighting, video and stage departments from the run of show.<Link href="/services/experiential-design-production" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="site-survey">
        <dt>Site Survey</dt>
        <dd>Measuring and documenting a venue or site before design commits to it: dimensions, power, rigging points, access, load paths and the things drawings never show.<Link href="/services/venue-site-operations" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="strike">
        <dt>Strike</dt>
        <dd>The controlled teardown, removal and load-out of all production elements after a live event concludes, including reconciliation and site restoration. In the XPMS 2.6 lifecycle, strike lives inside the Operate phase; it is never a phase of its own.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="submittals">
        <dt>Submittals<span className="gl-tier">XPMS deliverable</span></dt>
        <dd>Vendor documents issued for approval before fabrication starts: shop drawings, samples, product data, method statements. Approving them is the last chance to change something cheaply.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="t">T</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="talent">
        <dt>Talent<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>2000</strong>. Artists, performers, hosts and crew-facing talent relations, including routing, advancing and settlement.<Link href="/services/tour-talent-management" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="tech-rehearsal">
        <dt>Tech Rehearsal</dt>
        <dd>The rehearsal run for the technical departments rather than the performers: cues, transitions, timings and failure modes, worked until the run of show holds.<Link href="/services/experiential-design-production" className="gl-see">Where this is used →</Link></dd>
      </div>
      <div className="gl-term" id="technology">
        <dt>Technology<span className="gl-tier">XPMS canon</span></dt>
        <dd>Department class <strong>9000</strong>. The platforms, integrations, data pipeline and reporting that a build runs on, plus the show technology specified and installed under it.<Link href="/services/technology-systems-engineering" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="u">U</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="urid">
        <dt>URID<span className="gl-tier">XPMS canon</span></dt>
        <dd>The identifier every catalogued atom carries, in the grammar <code>DEPARTMENT.DISCIPLINE.CATEGORY</code> — for example <strong>4000.02.01</strong> for a Build-class item. Load-bearing on every budget line, assignment and coordinate, which is why the grammar has never changed.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="v">V</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="venue-advance">
        <dt>Venue Advance</dt>
        <dd>Confirming technical requirements, hospitality riders, schedules, credentials, security and settlement terms with the local promoter and venue before a date. Done for every city on a routing, not once for the tour.<Link href="/services/tour-talent-management" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="w">W</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="wrap">
        <dt>Wrap</dt>
        <dd>The end of production on a build or a shoot day. Distinct from Close, which is the XPMS phase that reconciles and archives what wrapped.<Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
  <div className="gl-sec">
    <h2 className="gl-letter" id="x">X</h2>
    <dl className="gl-terms">
      <div className="gl-term" id="xpms">
        <dt>XPMS<span className="gl-tier">XPMS canon</span></dt>
        <dd>The <strong>Experiential Production Management Standard</strong>, the GHXSTSHIP methodology every engagement runs on. Currently at version 2.6: nine gated phases in three acts, ten department classes, 90 coordinates, and a catalog of 624 priced atoms. Governance is append-only, so nothing that has ever been issued is retired.<span className="gl-aka">Also: Experiential Production Management Standard, XPMS 2.6</span><Link href="/course" className="gl-see">Where this is used →</Link></dd>
      </div>
    </dl>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Keep Learning</p>
  <h2>Learn the <span className="a">Ropes.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>We train the next generation of experiential producers on real builds. Chart the nine-phase course or join the crew.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/careers" className="btn btn-primary btn-lg">Join the Crew</Link>
    <Link href="/course" className="btn btn-secondary btn-lg">Chart the Course</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "DefinedTermSet", "@id": "https://ghxstship.tours/resources/glossary", "name": "GHXSTSHIP Glossary", "description": "The vocabulary of experiential production, including the XPMS 2.6 standard: nine gated phases, three acts, ten department classes and the ATLVS Coordinate Matrix.", "url": "https://ghxstship.tours/resources/glossary", "hasDefinedTerm": [{"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#act", "name": "Act", "description": "The three presentation groupings of the XPMS 2.6 lifecycle. Act I, Plan covers Discover, Design and Advance: everything before money is committed. Act II, Build covers Procure, Build and Install: money committed and the thing made real. Act III, Show covers Operate, Amplify and Close: doors open and everything downstream of doors. Acts are a grouping, not an authorization boundary. Gates are the only control points, and nothing gates on an act.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["Plan", "Build (act)", "Show"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#activation-footprint", "name": "Activation Footprint", "description": "The total physical space and spatial layout a brand activation occupies on a site, including the public-facing build, back of house, queueing and the circulation around it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#advance", "name": "Advance", "description": "Gate 3, code ADV, Act I. Contracts, permits, insurance, the risk register and the PO baseline. The paperwork phase that makes the build real and insurable. Exits when contracts are executed, permits are filed and the PO baseline is set.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#amplify", "name": "Amplify", "description": "Gate 8, code AMP, Act III. Content capture, media and press, broadcast and livestream delivery, social amplification and post-event campaigns. The experience gets a second life on every screen it did not happen on. Exits when capture assets are delivered and archived, press and media distribution is complete, broadcast masters are delivered, and post-event campaigns are launched or formally handed off.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#archive-handover", "name": "Archive Handover", "description": "The transfer of a completed build's full record at Close: drawings, as-builts, permits, contracts, settlement, capture assets and the final cost report. What lets the next build start from evidence instead of memory.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#as-built", "name": "As-Built", "description": "A drawing corrected to reflect what was actually installed rather than what was designed. Filed at the close of Install, and the reason a venue can be re-entered a year later without re-surveying it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#atlvs-coordinate-matrix", "name": "ATLVS Coordinate Matrix", "description": "The task-management lens over the XPMS lifecycle: ten department classes as latitude, the nine gated phases as longitude, giving 90 coordinates. Every task and work item on a build resolves to exactly one. It is a computed view, never a taxonomy: it introduces no new codes and no new level in the tree.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["Coordinate Matrix"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#atom", "name": "Atom", "description": "The smallest catalogued unit of work or material in XPMS, addressed by a URID and priced by a band. The catalog holds 624 of them across the ten department classes.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#brand-activation", "name": "Brand Activation", "description": "A live, experiential marketing engagement that brings a brand into physical space so an audience can walk into it rather than watch it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#budget-envelope", "name": "Budget Envelope", "description": "The approved outer bound of spend, set in Discover before design begins. Not an estimate and not a quote: the number the build has to fit inside, agreed before anyone draws anything.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#build", "name": "Build", "description": "Gate 5, code BLD, Act II. Fabrication, scenic, staging and technical production, pre-built and tested off site. Exits when fabrication is complete, QC has passed and the punch list is opened.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#call-time", "name": "Call Time", "description": "The time a crew member or performer is required on site, distinct from door time or show time. The unit the day is actually built from.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#close", "name": "Close", "description": "Gate 9, code CLS, Act III. Reconciliation, the final cost report and archive handover. Exits when the build is reconciled, the final cost report is filed and the archive is handed over.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#commissioning", "name": "Commissioning", "description": "Proving an installed system performs to specification under real conditions, not just that it powers on. Happens in Install, before the punch list can close.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#coordinate", "name": "Coordinate", "description": "A single cell of the ATLVS Coordinate Matrix, written class × phase — for example 3000xAMP for Marketing work in the Amplify phase. Gives every deliverable an address, so nothing falls between departments.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#creative", "name": "Creative", "description": "Department class 1000. Concept, creative direction, art direction, content and the design language a build is made from.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#dark-day", "name": "Dark Day", "description": "A day with no public programming inside an otherwise live run. Used for maintenance, changeover, or crew rest, and planned rather than lost.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#department-class", "name": "Department Class", "description": "The latitude of the ATLVS Coordinate Matrix and the first segment of every URID. There are ten, stable since XPMS 2.0: 0000 Executive · 1000 Creative · 2000 Talent · 3000 Marketing · 4000 Build · 5000 Production · 6000 Operations · 7000 Experience · 8000 Hospitality · 9000 Technology.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#design", "name": "Design", "description": "Gate 2, code DSN, Act I. Concept, development and engineering in one phase, absorbing what other models split into Concept, Develop and Engineering. The idea gets pressure-tested until it can be priced and made. Exits when scope is locked and spec drawings and sample approvals are complete.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#discipline", "name": "Discipline", "description": "The second segment of a URID, below department class. Seventy-nine of them across the ten classes — Production alone carries ten.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#discover", "name": "Discover", "description": "Gate 1, code DIS, Act I. Brief intake, feasibility, budget envelope and stakeholder alignment. The consultation that works out what is being built and whether it can be. Exits when the go/no-go decision is ratified and the budget envelope is approved.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#executive", "name": "Executive", "description": "Department class 0000. Client relationship, commercial terms, governance and the decisions that sit above the build.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#experience", "name": "Experience", "description": "Department class 7000. Show technology and the audience-facing layer: projection, playback, LED, show control, sensors and real-time content.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#experiential-production", "name": "Experiential Production", "description": "The end-to-end creative and physical production of live experiences: concept, design, fabrication, installation, and the crew who run it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#experiential-technology", "name": "Experiential Technology", "description": "The software and integrated systems that run live experience production, from the operator console to the show control on the floor.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#feasibility", "name": "Feasibility", "description": "The Discover-phase read on whether a brief can be built at all, on the site, in the time, for the envelope. The answer that saves the most money is the early no.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#front-of-house", "name": "Front of House", "description": "Everything on the audience side of the line: the guest experience, the service standard, and the mix position the show is run from.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["FOH"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#gate", "name": "Gate", "description": "The control point at the end of each XPMS phase. Nine of them, numbered 1 to 9. A build does not move to the next phase until its gate exit condition is met, and gates are the only authorization boundary in the standard.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#gate-exit-condition", "name": "Gate Exit Condition", "description": "The written test a phase must pass before its gate opens. Stated as facts about deliverables rather than opinions about readiness — \\"permits filed, PO baseline set\\" rather than \\"Advance looks good\\".", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#hold", "name": "Hold", "description": "A date reserved with a venue but not yet contracted, ranked first hold, second hold and so on. Releases if it is not confirmed by the challenge deadline.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#hospitality", "name": "Hospitality", "description": "Department class 8000. Food and beverage, bars and catering, VIP and premium hospitality, and the front-of-house standards a guest feels on arrival.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#immersive-experience", "name": "Immersive Experience", "description": "A designed environment audiences step inside and move through, using narrative, spatial design and interactive technology to surround them rather than face them.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#install", "name": "Install", "description": "Gate 6, code INS, Act II. Logistics, load-in, commissioning and punch closure. Exits when everything is installed and commissioned, the punch list is closed and as-builts are filed.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#load-in", "name": "Load-In", "description": "The scheduled process of transporting, installing and assembling all production elements — staging, scenic, audio, lighting, video and rigging — at a venue ahead of a live event.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["Bump-In"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#load-out", "name": "Load-Out", "description": "The removal of production elements from a venue after a run. The physical half of Strike.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["Bump-Out"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#long-lead-order", "name": "Long-Lead Order", "description": "An order placed in Procure whose delivery time, not its price, drives the schedule. Missing a long-lead date moves the show, which is why they are locked before anything else is bought.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#marketing", "name": "Marketing", "description": "Department class 3000. Campaign, content, press, social and the amplification work that carries a build beyond the people who attended it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#operate", "name": "Operate", "description": "Gate 7, code OPR, Act III. The run plus the strike: live operations, dispatch, and incident and daily reporting. Exits when the show is closed, strike is complete and operating acceptance is signed.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#operations", "name": "Operations", "description": "Department class 6000, the largest in the catalog at 161 atoms. Logistics, workforce, vendor coordination, safety, compliance and day-of running.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#po-baseline", "name": "PO Baseline", "description": "The locked set of purchase orders a build is measured against from Advance onward. Every later change is a variance to this, which is what makes a final cost report meaningful.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#procure", "name": "Procure", "description": "Gate 4, code PRC, Act II. Vendor award, deposits, long-lead orders, rate-card lock and submittals. The buying phase: who is building what, at what rate, and what has to be ordered now. Exits when all awards are issued, deposits are paid and long-lead orders are confirmed.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#production", "name": "Production", "description": "Department class 5000. Staging, rigging, audio, lighting, video, power and the technical production that makes a show happen.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#production-lifecycle", "name": "Production Lifecycle", "description": "The structured, repeatable phases a live experience moves through from first consultation to archive handover. GHXSTSHIP runs the nine gated phases of XPMS 2.6: Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, Close.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#punch-list", "name": "Punch List", "description": "The running list of defects and unfinished items opened at the end of Build and closed during Install. Gate 6 does not open while it is open.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["Punch Closure"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#rate-card-lock", "name": "Rate-Card Lock", "description": "Fixing labour and equipment rates with a vendor for the duration of an engagement, so the schedule can move without the price moving with it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#reconciliation", "name": "Reconciliation", "description": "Settling actuals against the PO baseline at Close: what was ordered, what was delivered, what was charged, and what the variance was. The step that turns a build into a number you can trust next time.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#rider", "name": "Rider", "description": "The technical and hospitality requirements attached to an artist's contract. Advancing a date is largely the work of reconciling the rider with the room.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#risk-register", "name": "Risk Register", "description": "The live list of what could go wrong on a build, who owns each item, and what the mitigation is. Opened in Advance and worked until Close, not written once and filed.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#run-of-show", "name": "Run of Show", "description": "The minute-by-minute master document that sequences every cue, transition and responsibility across departments during a live event, used by the show caller to run the event.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["ROS"]}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#settlement", "name": "Settlement", "description": "Closing the financial position on a single date with the promoter or venue: box office against the deal, costs against the budget, signed the same night or the morning after.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#shop-qc", "name": "Shop QC", "description": "Quality control performed on fabricated elements in the shop, before they ship. Catching a fault in Build costs a day; catching it in Install costs the load-in.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#show-caller", "name": "Show Caller", "description": "The person who directs a live event in real time, calling cues to audio, lighting, video and stage departments from the run of show.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#site-survey", "name": "Site Survey", "description": "Measuring and documenting a venue or site before design commits to it: dimensions, power, rigging points, access, load paths and the things drawings never show.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#strike", "name": "Strike", "description": "The controlled teardown, removal and load-out of all production elements after a live event concludes, including reconciliation and site restoration. In the XPMS 2.6 lifecycle, strike lives inside the Operate phase; it is never a phase of its own.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#submittals", "name": "Submittals", "description": "Vendor documents issued for approval before fabrication starts: shop drawings, samples, product data, method statements. Approving them is the last chance to change something cheaply.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#talent", "name": "Talent", "description": "Department class 2000. Artists, performers, hosts and crew-facing talent relations, including routing, advancing and settlement.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#tech-rehearsal", "name": "Tech Rehearsal", "description": "The rehearsal run for the technical departments rather than the performers: cues, transitions, timings and failure modes, worked until the run of show holds.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#technology", "name": "Technology", "description": "Department class 9000. The platforms, integrations, data pipeline and reporting that a build runs on, plus the show technology specified and installed under it.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#urid", "name": "URID", "description": "The identifier every catalogued atom carries, in the grammar DEPARTMENT.DISCIPLINE.CATEGORY — for example 4000.02.01 for a Build-class item. Load-bearing on every budget line, assignment and coordinate, which is why the grammar has never changed.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#venue-advance", "name": "Venue Advance", "description": "Confirming technical requirements, hospitality riders, schedules, credentials, security and settlement terms with the local promoter and venue before a date. Done for every city on a routing, not once for the tour.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#wrap", "name": "Wrap", "description": "The end of production on a build or a shoot day. Distinct from Close, which is the XPMS phase that reconciles and archives what wrapped.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary"}, {"@type": "DefinedTerm", "@id": "https://ghxstship.tours/resources/glossary#xpms", "name": "XPMS", "description": "The Experiential Production Management Standard, the GHXSTSHIP methodology every engagement runs on. Currently at version 2.6: nine gated phases in three acts, ten department classes, 90 coordinates, and a catalog of 624 priced atoms. Governance is append-only, so nothing that has ever been issued is retired.", "inDefinedTermSet": "https://ghxstship.tours/resources/glossary", "alternateName": ["Experiential Production Management Standard", "XPMS 2.6"]}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ghxstship.tours/"}, {"@type": "ListItem", "position": 2, "name": "Resources", "item": "https://ghxstship.tours/resources"}, {"@type": "ListItem", "position": 3, "name": "Glossary", "item": "https://ghxstship.tours/resources/glossary"}]}` }} />
    </>
  );
}
