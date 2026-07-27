import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venue & Site Operations",
  description: "GHXSTSHIP Venue &amp; Site Operations runs the room and the ground: logistics, staffing, safety, and day-of operations on the site, plus programming, bookings, facility and vendor operations in the venue.",
  keywords: ["venue and site operations", "venue management", "site operations", "event logistics", "day-of operations", "show calling", "venue programming", "facility operations", "event staffing", "health and safety compliance"],
  alternates: { canonical: "https://ghxstship.tours/services/venue-site-operations" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .svc-fig { aspect-ratio: 4 / 3; overflow: hidden; border: 1px solid var(--color-divider); }
  .svc-fig img { width: 100%; height: 100%; object-fit: cover; }
  .aud-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .scope-head { display: flex; align-items: baseline; gap: 12px; }
  .scope-head .no { font-family: var(--font-heading); font-weight: 800; font-size: 1rem; color: var(--color-accent-700); }
  .more-svc a.row-line { text-decoration: none; color: inherit; }
  .more-svc .arrow { color: var(--color-accent-700); font-weight: 600; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Services · The Operations Director</p>
  <h1 className="page-h1">Venue &amp; Site Operations.</h1>
  <p className="lede">Venue &amp; site operations is the work of actually running the ground and the room. On the site, we carry the logistics, the run-of-show, the crew, the access points, and the day-of calls. In the venue, we operate the programming and booking calendar, facility and vendor operations, hospitality, box office and access, and the guest journey from the door to settlement. One accountable lead, The Operations Director, owns all of it from advance through wrap. They live on the floor so you can watch the show instead of chasing it.</p>
  <div className="cta-row" style={{marginTop: '20px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/services" className="btn btn-secondary btn-lg">All Services</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}><div className="split2">
  <div>
    <div className="scope-head"><span className="no">01</span><h2 style={{fontSize: 'clamp(26px,3.2vw,38px)', margin: '0'}}>On the Site.</h2></div>
    <p className="lede" style={{marginTop: '10px'}}>The ground, held together. Logistics, staffing, safety, and the day itself, with one operations lead accountable for what happens when the doors open.</p>
    <div style={{marginTop: '16px'}}>
      <div className="row-line"><span className="row-title">Logistics</span><span className="row-sub">Load-in and load-out, transport and freight, site and infrastructure</span></div>
      <div className="row-line"><span className="row-title">Run-of-Show</span><span className="row-sub">Day-of show calling, incident management, vendor coordination on the ground</span></div>
      <div className="row-line"><span className="row-title">Crew &amp; Workforce</span><span className="row-sub">Scheduling, call times, credentialing and access, run in COMPVSS</span></div>
      <div className="row-line"><span className="row-title">Safety &amp; Compliance</span><span className="row-sub">Permits, inspections, capacity, and incident protocol, owned on the floor</span></div>
    </div>
  </div>
  <figure className="svc-fig grayscale sticky-fig">
    <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=900&q=80&auto=format&fit=crop" alt="Crew working an event site during load-in" width="900" height="675" loading="lazy"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad"><div className="split2">
  <figure className="svc-fig grayscale sticky-fig">
    <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=80&auto=format&fit=crop" alt="Packed venue floor during a live show" width="900" height="675" loading="lazy"/>
  </figure>
  <div>
    <div className="scope-head"><span className="no">02</span><h2 style={{fontSize: 'clamp(26px,3.2vw,38px)', margin: '0'}}>In the Venue.</h2></div>
    <p className="lede" style={{marginTop: '10px'}}>The room, operated end to end. We keep the calendar full, the building running, and the standard held on every date, with the P&amp;L owned by one accountable venue lead.</p>
    <div style={{marginTop: '16px'}}>
      <div className="row-line"><span className="row-title">Programming &amp; Bookings</span><span className="row-sub">The booking calendar, holds and confirms, per-show advance</span></div>
      <div className="row-line"><span className="row-title">Facility &amp; Vendor Operations</span><span className="row-sub">The building, the contracts, and the crews that keep both running</span></div>
      <div className="row-line"><span className="row-title">Hospitality</span><span className="row-sub">F&amp;B, bars and catering, VIP and premium hospitality, front-of-house standards</span></div>
      <div className="row-line"><span className="row-title">Guest Journey &amp; Settlement</span><span className="row-sub">Box office and access we operate, the door to the back office, settlement and reporting, with GVTEWAY ticketing and stakeholder portals in build</span></div>
    </div>
  </div>
</div></div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">We Own the Day Itself.</h2>
  <p className="lede">Every production runs the same nine phases. Venue &amp; site operations owns Operate and the day-of, supports Amplify with the site access, crews, and coordination that capture and post-event delivery need, keeps hands on the work from Advance through Close, and runs the room on a repeating cycle, every date, from a held date to a clean settlement.</p>
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
  <p style={{marginTop: '24px'}}><Link href="/course" className="btn btn-ghost">Walk the full course →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Who We Build For</p>
  <h2 className="sec-h2">Built for Whoever Owns the Floor.</h2>
  <p className="lede">Venue &amp; site operations is for the people who answer for the building, the calendar, and the night. If your name is on the run-of-show, we are on the floor with you. We take the day-to-day so you can think about the next year.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Producers</span><span className="tag tag-neutral">Promoters</span>
    <span className="tag tag-neutral">Venue Owners &amp; Operators</span><span className="tag tag-neutral">Clubs</span>
    <span className="tag tag-neutral">Stadiums &amp; Arenas</span><span className="tag tag-neutral">Hospitality Groups</span>
    <span className="tag tag-neutral">General Contractors</span><span className="tag tag-neutral">Cultural Institutions</span>
  </div>
</div></section>

<section className="wrap sec-pad more-svc">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Rooms We Run.</h2>
  <p className="lede">We already do this work in the field, and we'd run your room the same way.</p>
  <div style={{marginTop: '16px'}}>
    <div className="row-line"><span className="row-title">Factory Town</span><span className="row-sub">Venue Operations · Miami · 2023–25</span></div>
    <div className="row-line"><span className="row-title">The Vanguard Orlando</span><span className="row-sub">Venue Operations · Orlando · 2024</span></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See the work →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Plenty of crews can build a site, and plenty of consultants will assess your room and leave you to staff it. Fewer will stand on the ground at 6am and own what happens when the schedule slips, then run all nine phases themselves on every date. We treat operations as its own discipline, and the work runs on tooling we built ourselves, with COMPVSS in the crew's hands so the people on the ground and the numbers in the back office come from the same place.</p>
  <div style={{marginTop: '20px'}}>
    <div className="row-line"><span className="row-title">One Accountable Lead</span><span className="row-sub">The Operations Director calls the show, owns the P&amp;L, and answers for the site and the standard on every date</span></div>
    <div className="row-line"><span className="row-title">Crew and Access, Handled</span><span className="row-sub">Schedules and credentials in COMPVSS, public listings and open calls in GVTEWAY</span></div>
    <div className="row-line"><span className="row-title">Safety We Own</span><span className="row-sub">Compliance is a job somebody works on the floor, with permits, inspections, and incident protocol carried as part of it</span></div>
    <div className="row-line"><span className="row-title">The Calendar, Owned</span><span className="row-sub">Operations runs the bookings so the room stays full and the settlement stays clean</span></div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Venue &amp; Site Operations FAQ.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">What does Venue &amp; Site Operations cover?</summary><div className="faq-a">Everything that keeps a site and a room running. On the site: logistics and load-in and load-out, transport and freight, site and infrastructure, run-of-show, day-of show calling, incident management, crew and access, and the health, safety and compliance that keeps the doors open. In the venue: the programming and booking calendar, facility operations, vendor management, hospitality and F&amp;B, box office and access, the guest journey, and settlement and reporting. One accountable lead owns it from advance through close.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you handle permits, safety and compliance?</summary><div className="faq-a">Yes. Health, safety and compliance sits with an Executive-class operations lead who is accountable for the site. We carry permits, inspections, capacity, and incident protocol as part of the job.</div></details>
    <details className="faq-item"><summary className="faq-q">Can you run day-of operations and show calling?</summary><div className="faq-a">That is the core of it. We own the Operate phase: we build the run-of-show, call the show day-of, coordinate vendors and crew on the floor, and handle incidents in real time so the people accountable for the show can watch it run.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you handle programming and bookings?</summary><div className="faq-a">Yes. We build and run the booking calendar, hold and confirm dates, advance each show, manage vendors, and settle and report after the night ends. Operations owns the calendar so the room stays full and the back office stays clean.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you run hospitality and F&amp;B?</summary><div className="faq-a">Yes. Hospitality covers F&amp;B, bars and catering, VIP and premium hospitality, and the front-of-house standards your guests feel the moment they walk in. We staff it, train it, and hold the line on it every date.</div></details>
    <details className="faq-item"><summary className="faq-q">How does XPMS work?</summary><div className="faq-a">XPMS 2.6 is our Experiential Production Management Standard: nine gated production phases — Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close — crossed with ten department classes, so every deliverable maps to a class and a phase and nothing falls between the floor and the office. Venue &amp; site operations activates the classes a live site and a running room need, on every date, on a repeating cycle.</div></details>
  </div>
</section>

<section className="wrap sec-pad-sm more-svc" style={{paddingTop: '0'}}>
  <p className="kicker">More Services</p>
  <h2 style={{fontSize: 'clamp(24px,3vw,36px)'}}>The Other Disciplines.</h2>
  <div style={{marginTop: '12px'}}>
    <Link href="/services/experiential-design-production" className="row-line"><span className="row-title">Experiential Design &amp; Production</span><span className="row-sub">The Experiential Producer</span><span className="arrow">→</span></Link>
    <Link href="/services/tour-talent-management" className="row-line"><span className="row-title">Tour &amp; Talent Management</span><span className="row-sub">The Tour Manager</span><span className="arrow">→</span></Link>
    <Link href="/services/technology-systems-engineering" className="row-line"><span className="row-title">Technology &amp; Systems Engineering</span><span className="row-sub">The Production OS</span><span className="arrow">→</span></Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Run the Site. Run the <span className="a">Room.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Hand us the ground and the calendar. One lead, one standard, every date.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/destinations/festival-production" className="btn btn-secondary btn-lg">See Festival Production</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Venue and Site Operations","serviceType":"Venue and site operations","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Venue and site operations leadership: logistics, crew and workforce, health, safety and compliance, run-of-show and day-of operations on the ground, plus programming, bookings, facility and vendor operations, hospitality, and on-site teams for clubs, stadiums, arenas, and hospitality.","audience":{"@type":"Audience","audienceType":"Producers, promoters, venue owners and operators, general contractors, and hospitality groups"},"url":"https://ghxstship.tours/services/venue-site-operations"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/services"},{"@type":"ListItem","position":3,"name":"Venue and Site Operations","item":"https://ghxstship.tours/services/venue-site-operations"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does Venue and Site Operations cover?","acceptedAnswer":{"@type":"Answer","text":"Everything that keeps a site and a room running. On the site: logistics and load-in and load-out, transport and freight, site and infrastructure, run-of-show, day-of show calling, incident management, crew and access, and health, safety and compliance. In the venue: the programming and booking calendar, facility operations, vendor management, hospitality and F&B, box office and access, the guest journey, and settlement and reporting. One accountable lead owns it from advance through close."}},{"@type":"Question","name":"Do you handle permits, safety and compliance?","acceptedAnswer":{"@type":"Answer","text":"Yes. Health, safety and compliance sits with an Executive-class operations lead who is accountable for the site. We carry permits, inspections, capacity, and incident protocol as part of the job."}},{"@type":"Question","name":"Can you run day-of operations and show calling?","acceptedAnswer":{"@type":"Answer","text":"That is the core of it. We own the Operate phase: we build the run-of-show, call the show day-of, coordinate vendors and crew on the floor, and handle incidents in real time so the people accountable for the show can watch it run."}},{"@type":"Question","name":"Do you handle programming and bookings?","acceptedAnswer":{"@type":"Answer","text":"Yes. We build and run the booking calendar, hold and confirm dates, advance each show, manage vendors, and settle and report after the night ends. Operations owns the calendar so the room stays full and the back office stays clean."}},{"@type":"Question","name":"Do you run hospitality and F&B?","acceptedAnswer":{"@type":"Answer","text":"Yes. Hospitality covers F&B, bars and catering, VIP and premium hospitality, and the front-of-house standards your guests feel the moment they walk in. We staff it, train it, and hold the line on it every date."}},{"@type":"Question","name":"How does XPMS work?","acceptedAnswer":{"@type":"Answer","text":"XPMS 2.6 is our Experiential Production Management Standard: nine gated production phases — Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close — crossed with ten department classes, so every deliverable maps to a class and a phase and nothing falls between the floor and the office. Venue and Site Operations activates the classes a live site and a running room need, on every date, on a repeating cycle."}}]}` }} />
    </>
  );
}
