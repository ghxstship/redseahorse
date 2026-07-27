import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour & Talent Management",
  description: "GHXSTSHIP Tour & Talent Management moves the show and the people in it: tour routing and advancing, artist relations and logistics, travel, crew rostering, per-city venue advance, settlement, and the run of show.",
  keywords: ["tour management company", "tour and talent management", "tour routing", "tour advancing", "artist logistics", "road manager", "crew rostering", "venue advance", "tour settlement", "run of show"],
  alternates: { canonical: "https://ghxstship.tours/services/tour-talent-management" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout; components come from modernist.css */
  .svc-fig { aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid var(--color-divider); }
  .svc-fig img { width: 100%; height: 100%; object-fit: cover; }
  .aud-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .more-svc a.row-line { text-decoration: none; color: inherit; }
  .more-svc .arrow { color: var(--color-accent-700); font-weight: 600; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Services · The Tour Manager</p>
  <h1 className="page-h1">Tour &amp; Talent Management.</h1>
  <p className="lede">Tour &amp; talent management is the work of moving the show and the people in it. We route the run, advance every city, carry the artist party and the crew, and own the run of show from the first hold to the last settlement. One accountable lead, The Tour Manager, rides with the tour, so the artist plays the room and somebody else worries about everything between the rooms.</p>
  <div className="cta-row" style={{marginTop: '20px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/services" className="btn btn-secondary btn-lg">All Services</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}><div className="split2">
  <figure className="svc-fig grayscale sticky-fig">
    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80&auto=format&fit=crop" alt="Performer on stage in front of a touring crowd" width="720" height="900"/>
  </figure>
  <div>
    <p className="kicker">What We Run</p>
    <h2 className="sec-h2-sm">The Whole Run, One Sheet.</h2>
    <p className="lede">Like every GHXSTSHIP service, the tour runs on XPMS 2.6, our Experiential Production Management Standard: ten department classes crossed with nine gated production phases, so every deliverable has an address and nothing falls between the bus and the office. Here is what the road work covers.</p>
    <div style={{marginTop: '20px'}}>
      <div className="row-line"><span className="row-title">Routing &amp; Advancing</span><span className="row-sub">The run itself: dates, holds, routing, and the master advance for the whole tour</span></div>
      <div className="row-line"><span className="row-title">Artist &amp; Talent Relations</span><span className="row-sub">The artist party, the riders, the day sheet, and the logistics around the people on the marquee</span></div>
      <div className="row-line"><span className="row-title">Travel &amp; Accommodation</span><span className="row-sub">Flights, ground transport, and hotels for artists and crew, built around the routing</span></div>
      <div className="row-line"><span className="row-title">Crew on the Road</span><span className="row-sub">Rostering, call times, credentials, and per-city local labor, run in COMPVSS</span></div>
      <div className="row-line"><span className="row-title">Per-City Venue Advance</span><span className="row-sub">Technical, hospitality, schedule, security, and settlement terms confirmed before the trucks roll</span></div>
      <div className="row-line"><span className="row-title">Settlement &amp; Reporting</span><span className="row-sub">Each date reconciled against the deal and reported the morning after</span></div>
      <div className="row-line"><span className="row-title">Run of Show</span><span className="row-sub">Owned by the road manager, city after city, so every date runs to the same standard</span></div>
    </div>
  </div>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Nine Phases, Every City.</h2>
  <p className="lede">Every production runs the same nine phases. A tour runs them as a cycle: the run is designed and routed once, then every city gets its own advance, install, show, and settlement. In Amplify, the road manager carries talent approvals and the per-city content, capture, recaps, and post-show delivery cleared with the artist party before the bus rolls. The road manager keeps hands on the work from Advance through Close, date after date.</p>
  <div className="phases">
    <div className="phase done"><div className="dot">1</div><div className="nm">Discover</div></div>
    <div className="phase done"><div className="dot">2</div><div className="nm">Design</div></div>
    <div className="phase done"><div className="dot">3</div><div className="nm">Advance</div></div>
    <div className="phase done"><div className="dot">4</div><div className="nm">Procure</div></div>
    <div className="phase done"><div className="dot">5</div><div className="nm">Build</div></div>
    <div className="phase done"><div className="dot">6</div><div className="nm">Install</div></div>
    <div className="phase done"><div className="dot">7</div><div className="nm">Operate</div></div>
    <div className="phase done"><div className="dot">8</div><div className="nm">Amplify</div></div>
    <div className="phase done"><div className="dot">9</div><div className="nm">Close</div></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/course" className="btn btn-ghost">Chart the full course →</Link></p>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Who We Build For</p>
  <h2 className="sec-h2">Built for the People on the Bus.</h2>
  <p className="lede">Tour &amp; talent management is for the people whose name is on the ticket and the people who answer to them: the artist and their manager, the promoter with dates on the line, the agency routing the run, and the production director who has to land the same show in a different room every night.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Artists &amp; Managers</span><span className="tag tag-neutral">Promoters</span>
    <span className="tag tag-neutral">Agencies</span><span className="tag tag-neutral">Festivals</span>
    <span className="tag tag-neutral">Production Directors</span>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Most tours run on a binder, a group chat, and one exhausted tour manager. We run the road as a discipline: one accountable lead, a full advance for every city, and the whole run living in the platforms we build, so the artist party, the crew, and the promoter all work from the same sheet.</p>
  <div style={{marginTop: '20px'}}>
    <div className="row-line"><span className="row-title">One Accountable Lead</span><span className="row-sub">The Tour Manager owns the schedule, the people, and the money for the whole run</span></div>
    <div className="row-line"><span className="row-title">Every City, Advanced</span><span className="row-sub">A full venue advance before every date, confirmed with the local promoter and venue</span></div>
    <div className="row-line"><span className="row-title">The Run on Our Platforms</span><span className="row-sub">Routing and budgets in ATLVS, crew, day sheets and credentials in COMPVSS, open calls and profiles in GVTEWAY</span></div>
    <div className="row-line"><span className="row-title">Settled the Morning After</span><span className="row-sub">Each date reconciled and reported before the bus reaches the next city</span></div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Tour &amp; Talent Management FAQ.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">What does Tour &amp; Talent Management cover?</summary><div className="faq-a">The whole run: tour routing and advancing, artist and talent relations and logistics, travel and accommodation, crew rostering on the road, the per-city venue advance, settlement and reporting after each date, and the run of show itself. One road manager owns the schedule, the people, and the money from the first hold to the last settlement.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you advance every date?</summary><div className="faq-a">Yes. Every city gets a full venue advance: technical requirements, hospitality riders, schedules, credentials, security, and settlement terms, confirmed with the local promoter and venue before the trucks roll. The advance lives in COMPVSS today, with ATLVS coming online behind it, so the whole party works from the same sheet.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you handle artist travel and accommodation?</summary><div className="faq-a">Yes. Flights, ground transport, hotels, and the day sheet that ties them together, for the artist party and the crew. We build the travel around the routing so the show always has the people it needs, rested, in the right city.</div></details>
    <details className="faq-item"><summary className="faq-q">Who settles the show?</summary><div className="faq-a">We do. The road manager reconciles each date against the deal, closes the settlement with the promoter, and reports it, so the tour's numbers are current the morning after every show instead of six weeks after the run ends.</div></details>
  </div>
</section>

<section className="wrap sec-pad-sm more-svc" style={{paddingTop: '0'}}>
  <p className="kicker">More Services</p>
  <h2 style={{fontSize: 'clamp(24px,3vw,36px)'}}>The Other Disciplines.</h2>
  <div style={{marginTop: '12px'}}>
    <Link href="/services/experiential-design-production" className="row-line"><span className="row-title">Experiential Design &amp; Production</span><span className="row-sub">The Experiential Producer</span><span className="arrow">→</span></Link>
    <Link href="/services/venue-site-operations" className="row-line"><span className="row-title">Venue &amp; Site Operations</span><span className="row-sub">The Operations Director</span><span className="arrow">→</span></Link>
    <Link href="/services/technology-systems-engineering" className="row-line"><span className="row-title">Technology &amp; Systems Engineering</span><span className="row-sub">The Production OS</span><span className="arrow">→</span></Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Take It on the <span className="a">Road.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Hand us the routing and the roster. We advance it, move it, run it, and settle it, city after city.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/destinations/concert-tour-production" className="btn btn-secondary btn-lg">Concert &amp; Tour Production</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Tour and Talent Management","serviceType":"Tour and talent management","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Tour and talent management end to end: tour routing and advancing, artist and talent relations and logistics, travel and accommodation, crew rostering on the road, per-city venue advance, settlement and reporting, and ownership of the run of show.","audience":{"@type":"Audience","audienceType":"Artists and their managers, promoters, agencies, festivals, and production directors"},"url":"https://ghxstship.tours/services/tour-talent-management"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/services"},{"@type":"ListItem","position":3,"name":"Tour and Talent Management","item":"https://ghxstship.tours/services/tour-talent-management"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Tour and Talent Management cover?","acceptedAnswer":{"@type":"Answer","text":"The whole run: tour routing and advancing, artist and talent relations and logistics, travel and accommodation, crew rostering on the road, the per-city venue advance, settlement and reporting after each date, and the run of show itself. One road manager owns the schedule, the people, and the money from the first hold to the last settlement."}},{"@type":"Question","name":"Do you advance every date?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every city gets a full venue advance: technical requirements, hospitality riders, schedules, credentials, security, and settlement terms, confirmed with the local promoter and venue before the trucks roll. The advance lives in COMPVSS today, with ATLVS coming online behind it, so the whole party works from the same sheet."}},{"@type":"Question","name":"Do you handle artist travel and accommodation?","acceptedAnswer":{"@type":"Answer","text":"Yes. Flights, ground transport, hotels, and the day sheet that ties them together, for the artist party and the crew. We build the travel around the routing so the show always has the people it needs, rested, in the right city."}},{"@type":"Question","name":"Who settles the show?","acceptedAnswer":{"@type":"Answer","text":"We do. The road manager reconciles each date against the deal, closes the settlement with the promoter, and reports it, so the tour's numbers are current the morning after every show instead of six weeks after the run ends."}}]}` }} />
    </>
  );
}
