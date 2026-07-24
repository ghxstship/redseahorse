import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "GHXSTSHIP runs four professional services as one team \u2014 experiential design &amp; production, venue &amp; site operations, tour &amp; talent management, and technology &amp; systems implementation \u2014 for festivals, tours, activations, and live events.",
  keywords: ["experiential design and production", "venue and site operations", "tour and talent management", "technology and systems implementation", "event production services", "live event operations", "experiential production company"],
  alternates: { canonical: "https://ghxstship.tours/services" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .who-card { border-left: 3px solid var(--color-accent); background: var(--color-bg); border-top: 1px solid var(--color-divider); border-right: 1px solid var(--color-divider); border-bottom: 1px solid var(--color-divider); padding: 22px; }
  .who-card h3 { font-size: 17px; margin: 0 0 6px; }
  .who-card p { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; }
  .xlink { border: 1px solid var(--color-divider); padding: 24px; text-decoration: none; color: inherit; display: flex; flex-direction: column; gap: 8px; background: var(--color-bg); }
  .xlink h3 { font-size: 18px; margin: 0; }
  .xlink p { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: none; }
  .xlink .more { margin-top: auto; padding-top: 6px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Services</p>
  <h1 className="page-h1">Four Disciplines. One Team.</h1>
  <p className="lede">GHXSTSHIP is the management team behind the build. One crew across experiential design &amp; production, venue &amp; site operations, tour &amp; talent management, and technology &amp; systems implementation. We own scope, schedule, budget, crew, and the platforms from the first line to the night it opens, so you're talking to one team instead of refereeing six vendors.</p>
  <div className="cta-row" style={{marginTop: '20px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}>
  <p className="kicker">What We Run</p>
  <h2 className="sec-h2">The Four Services.</h2>
  <p className="lede">Four services run as one system. The handoffs that usually drop between vendors happen inside one team instead.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>We design and build the experience. Concept, creative development, spatial design, scope, schedule, budget, fabrication, staging, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>We run the room and the ground. Programming, bookings, logistics, staffing, safety, facility and vendor operations, clockwork at any scale.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>We move the show and the people in it. Routing, advancing, artist relations, travel, settlement, and the run of show, city after city.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Implementation</h3><p>We give the team its instruments. ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND plus immersive show tech, so the plan, the people, and the gate all live in one place.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Who We Build For</p>
  <h2 className="sec-h2">Built for the People Accountable for the Show.</h2>
  <div className="grid3" style={{marginTop: '28px'}}>
    <div className="who-card"><h3>General Contractors &amp; Owner's Reps</h3><p>A specialist experiential team you can subcontract for production, staging, and live-event scope. One partner that plugs into your build and answers for it.</p></div>
    <div className="who-card"><h3>Venue &amp; Hospitality Operators</h3><p>Venue and site operations and technology installs for clubs, stadiums, arenas, and hospitality, run to the same standard on every date.</p></div>
    <div className="who-card"><h3>Brands, Promoters &amp; Producers</h3><p>Design, production, operations, and touring for festivals, tours, activations, immersive, sporting, and broadcast, with the platforms to keep all of it in one place.</p></div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">9 Phases, First Line to Wrap.</h2>
  <p className="lede">Every service walks the same nine-phase XPMS 2.5 production lifecycle, Discover through Close. Every phase has deliverables and a name next to them, so you always know who owns what.</p>
  <div className="phases">
    <div className="phase done"><div className="dot">1</div><div className="nm">Discover</div></div>
    <div className="phase done"><div className="dot">2</div><div className="nm">Design</div></div>
    <div className="phase done"><div className="dot">3</div><div className="nm">Advance</div></div>
    <div className="phase done"><div className="dot">4</div><div className="nm">Procure</div></div>
    <div className="phase"><div className="dot">5</div><div className="nm">Build</div></div>
    <div className="phase"><div className="dot">6</div><div className="nm">Install</div></div>
    <div className="phase"><div className="dot">7</div><div className="nm">Operate</div></div>
    <div className="phase"><div className="dot">8</div><div className="nm">Amplify</div></div>
    <div className="phase"><div className="dot">9</div><div className="nm">Close</div></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/course" className="btn btn-ghost">Walk the full course →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Keep Exploring</p>
  <h2 className="sec-h2">Where the Services Go to Work.</h2>
  <div className="grid3" style={{marginTop: '28px'}}>
    <Link href="/destinations" className="xlink"><h3>Industries</h3><p>Festivals, concerts and tours, brand activations, immersive experiences, sporting events, and TV, film and broadcast. See where the work happens.</p><span className="more">See the industries →</span></Link>
    <Link href="/pricing" className="xlink"><h3>Engagement Models</h3><p>Project-based, retained, or embedded. How we scope, staff, and price an engagement, and where each model fits.</p><span className="more">See the models →</span></Link>
    <Link href="/platforms" className="xlink"><h3>Platforms</h3><p>ATLVS, COMPVSS, GVTEWAY, and LEG3ND, the four in-house platforms every engagement runs on.</p><span className="more">See the platforms →</span></Link>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">The Services, Answered.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">Can GHXSTSHIP act as the lead producer for an experiential or entertainment project?</summary><div className="faq-a">Yes. GHXSTSHIP runs as the lead producer and accountable team for experiential design and production, owning scope, schedule, budget, crew, vendors, and technology across all nine phases, from Discover to Close, the way a lead producer owns a show.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you run venues and sites?</summary><div className="faq-a">Yes. Venue &amp; Site Operations is its own service: logistics, workforce and crew management, health, safety and compliance, and the day-of on the ground, plus programming, bookings, facility and vendor operations, and on-site teams for clubs, stadiums, arenas, and hospitality.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you manage tours and talent?</summary><div className="faq-a">Yes. Tour &amp; Talent Management is its own service: tour routing and advancing, artist and talent relations and logistics, travel and accommodation, crew rostering on the road, per-city venue advance, settlement and reporting, and the run of show, city after city.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you implement technology and systems?</summary><div className="faq-a">Yes. Technology &amp; Systems Implementation covers our four in-house platforms, ATLVS, COMPVSS, GVTEWAY, and LEG3ND, plus immersive show systems, third-party integrations, on-site installs, data, analytics, and the implementation and training to make it stick.</div></details>
    <details className="faq-item"><summary className="faq-q">Which industries and verticals do you serve?</summary><div className="faq-a">Festivals, concerts and tours, brand activations, immersive experiences, sporting events, TV, film and broadcast, health and wellness, premium hospitality, luxury retail, and water and motorsports, for brands, promoters, venue operators, general contractors, and production directors worldwide.</div></details>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Bring On the <span className="a">Team.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/team" className="btn btn-secondary btn-lg">Meet the Team</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ProfessionalService","name":"GHXSTSHIP","url":"https://ghxstship.tours/services","areaServed":"Worldwide","description":"One accountable team for experiential design and production, venue and site operations, tour and talent management, and technology and systems implementation.","makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Experiential Design and Production","url":"https://ghxstship.tours/services/experiential-design-production"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Venue and Site Operations","url":"https://ghxstship.tours/services/venue-site-operations"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Tour and Talent Management","url":"https://ghxstship.tours/services/tour-talent-management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Technology and Systems Implementation","url":"https://ghxstship.tours/services/technology-systems-implementation"}}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/services"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can GHXSTSHIP act as the lead producer for an experiential or entertainment project?","acceptedAnswer":{"@type":"Answer","text":"Yes. GHXSTSHIP runs as the lead producer and accountable team for experiential design and production, owning scope, schedule, budget, crew, vendors, and technology across all nine phases, from Discover to Close, the way a lead producer owns a show."}},{"@type":"Question","name":"Do you run venues and sites?","acceptedAnswer":{"@type":"Answer","text":"Yes. Venue and Site Operations is its own service: logistics, workforce and crew management, health, safety and compliance, and the day-of on the ground, plus programming, bookings, facility and vendor operations, and on-site teams for clubs, stadiums, arenas, and hospitality."}},{"@type":"Question","name":"Do you manage tours and talent?","acceptedAnswer":{"@type":"Answer","text":"Yes. Tour and Talent Management is its own service: tour routing and advancing, artist and talent relations and logistics, travel and accommodation, crew rostering on the road, per-city venue advance, settlement and reporting, and the run of show, city after city."}},{"@type":"Question","name":"Do you implement technology and systems?","acceptedAnswer":{"@type":"Answer","text":"Yes. Technology and Systems Implementation covers our four in-house platforms, ATLVS, COMPVSS, GVTEWAY, and LEG3ND, plus immersive show systems, third-party integrations, on-site installs, data, analytics, and the implementation and training to make it stick."}},{"@type":"Question","name":"Which industries and verticals do you serve?","acceptedAnswer":{"@type":"Answer","text":"Festivals, concerts and tours, brand activations, immersive experiences, sporting events, TV, film and broadcast, health and wellness, premium hospitality, luxury retail, and water and motorsports, for brands, promoters, venue operators, general contractors, and production directors worldwide."}}]}` }} />
    </>
  );
}
