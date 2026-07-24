import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology & Systems Implementation",
  description: "GHXSTSHIP Technology &amp; Systems Implementation delivers the four in-house platforms \u2014 ATLVS, COMPVSS, GVTEWAY, and LEG3ND \u2014 plus immersive show technology, systems integration, and implementation and training.",
  keywords: ["technology and systems implementation", "event technology platforms", "ATLVS", "COMPVSS", "GVTEWAY", "LEG3ND", "show control", "systems integration", "immersive show technology", "production software implementation"],
  alternates: { canonical: "https://ghxstship.tours/services/technology-systems-implementation" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .svc-fig { aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid var(--color-divider); }
  .svc-fig img { width: 100%; height: 100%; object-fit: cover; }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .aud-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .plat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 28px; }
  @media (max-width: 720px) { .plat-row { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .plat-row { grid-template-columns: 1fr; } }
  .plat { border: 1px solid var(--color-divider); padding: 20px; background: var(--color-bg); }
  .plat b { font-family: var(--font-heading); font-weight: 800; font-size: 18px; letter-spacing: 0.02em; }
  .plat p { font-size: 12px; margin: 6px 0 0; color: color-mix(in srgb, var(--color-text) 65%, transparent); }
  .phases { display: flex; margin-top: 32px; }
  .phase { flex: 1; position: relative; text-align: center; padding-top: 34px; }
  .phase::before { content: ""; position: absolute; top: 9px; left: 0; width: 100%; height: 2px; background: var(--color-divider); }
  .phase:first-child::before { left: 50%; width: 50%; }
  .phase:last-child::before { width: 50%; }
  .phase .dot { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 20px; height: 20px; border-radius: 50%; background: var(--color-bg); border: 2px solid var(--color-divider); font-size: 10px; font-weight: 600; display: grid; place-items: center; }
  .phase.done .dot { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-on-accent); }
  .phase .nm { font-family: var(--font-heading); font-weight: 800; font-size: 12px; text-transform: uppercase; margin-top: 2px; }
  @media (max-width: 720px) { .phases { flex-direction: column; gap: 10px; } .phase { text-align: left; padding: 0 0 0 30px; } .phase::before { top: 0; left: 9px; width: 2px; height: 100%; } .phase .dot { left: 0; transform: none; } }
  .more-svc a.row-line { text-decoration: none; color: inherit; }
  .more-svc .arrow { color: var(--color-accent-700); font-weight: 600; }
  .close-cta { text-align: center; padding-block: clamp(56px, 8vw, 110px); }
  .close-cta h2 { font-size: clamp(36px, 5.5vw, 72px); letter-spacing: -0.025em; line-height: 0.96; margin-bottom: 18px; }
  .close-cta h2 .a { color: var(--color-accent); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Services · The Procore</p>
  <h1 className="page-h1">Technology &amp; Systems Implementation.</h1>
  <p className="lede">Technology &amp; systems implementation is the layer that runs under the whole show. We build the platforms operators actually use on the floor, ATLVS for production and resource management, COMPVSS in the crew's pocket, GVTEWAY at the door, LEG3ND holding the record, plus the immersive show technology, show control, and data pipeline that tie a live experience together. Then we implement it: configuration, integration, installs, and training, so the systems run your shows instead of sitting in a browser tab.</p>
  <div className="cta-row" style={{marginTop: '20px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/platforms" className="btn btn-secondary btn-lg">Explore the Platforms</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}>
  <p className="kicker">The Platforms</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Four Platforms, One Floor.</h2>
  <p className="lede">The technology layer of XPMS 2.5 is four platforms a production runs on. Each owns a job, and they share one source of truth.</p>
  <div className="plat-row">
    <div className="plat"><b>ATLVS</b><p>Production and resource management. The studio and operator system: the plan, the budget, the schedule.</p></div>
    <div className="plat"><b>COMPVSS</b><p>Workforce and crew management. The app in the field: rosters, advancing, day-of coordination.</p></div>
    <div className="plat"><b>GVTEWAY</b><p>Ticketing, access, and fan engagement. The guest gateway: box office, credentials, front of house.</p></div>
    <div className="plat"><b>LEG3ND</b><p>Standards, knowledge, and the production record. Show and media systems, immersive content, playback, and control.</p></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/platforms" className="btn btn-ghost">See the platforms →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad"><div className="split2">
  <figure className="svc-fig grayscale sticky-fig">
    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop" alt="Circuit boards and show-control hardware in close-up" width="720" height="900" loading="lazy"/>
  </figure>
  <div>
    <p className="kicker">What We Implement</p>
    <h2 style={{fontSize: 'clamp(28px,3.6vw,44px)'}}>From the Platforms to the Floor.</h2>
    <p className="lede">XPMS 2.5 maps every deliverable to a department class and a production phase. Technology &amp; systems implementation lights up three, and carries the work from configuration to commissioning to the crew knowing how to use it.</p>
    <div style={{marginTop: '20px'}}>
      <div className="row-line"><span className="row-title">Technology</span><span className="row-sub">The four platforms, third-party integrations, the data pipeline, dashboards and reporting</span></div>
      <div className="row-line"><span className="row-title">Experience</span><span className="row-sub">Immersive show technology, interactive media, show control, sensors, and real-time content</span></div>
      <div className="row-line"><span className="row-title">Creative</span><span className="row-sub">Content systems and the tech that serves the creative</span></div>
      <div className="row-line"><span className="row-title">Implementation &amp; Training</span><span className="row-sub">Configuration, on-site installs and commissioning, data migration, and team training</span></div>
    </div>
    <p className="lede" style={{marginTop: '20px'}}>Integrations meet your stack where it is, and show control drives the room. The data pipeline keeps ticketing, finance, scheduling, and access talking to each other, and the dashboards put the numbers on one screen so they reconcile. LEG3ND writes it all down as the production runs, so the next show starts from what the last one learned.</p>
  </div>
</div></div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Tech Runs Under All Nine.</h2>
  <p className="lede">Every production runs the same nine phases. The technology layer runs under all of them, and it's where every other discipline reports in. Amplify is a natural fit: LEG3ND and the streaming delivery pipeline carry capture, broadcast, and post-event content from the floor to wherever it plays next.</p>
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
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Built for the People Running the Show.</h2>
  <p className="lede">Technology &amp; systems implementation is built for the people accountable for what happens when the doors open and the data has to add up the next morning.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Producers</span><span className="tag tag-neutral">Brands &amp; Sponsors</span>
    <span className="tag tag-neutral">Venue Operators</span><span className="tag tag-neutral">Technical Directors</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>The Difference.</h2>
  <p className="lede">We build the technology and we run it on the floor. The platforms come from people who advance the show and reconcile the settlement after it, so the tech serves the production instead of the other way around.</p>
  <div style={{marginTop: '20px'}}>
    <div className="row-line"><span className="row-title">We Build the Platforms</span><span className="row-sub">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, in-house</span></div>
    <div className="row-line"><span className="row-title">We Meet Your Stack</span><span className="row-sub">Integrations and a data pipeline that put the numbers on one screen</span></div>
    <div className="row-line"><span className="row-title">We Run It Live</span><span className="row-sub">Show control and real-time content, on the floor with you</span></div>
    <div className="row-line"><span className="row-title">We Make It Stick</span><span className="row-sub">Implementation, commissioning, and training, so your team owns the tools after we leave</span></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Technology &amp; Systems FAQ.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">What are ATLVS, COMPVSS, GVTEWAY, and LEG3ND?</summary><div className="faq-a">Four platforms that make up the technology layer of XPMS 2.5. ATLVS is the studio and operator system for production and resource management. COMPVSS is the field app for workforce and crew management. GVTEWAY is the guest gateway for ticketing, access, and fan engagement. LEG3ND holds the standards, knowledge, and the production record. Together they run under the whole show.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you integrate with our existing stack?</summary><div className="faq-a">Yes. We meet your stack where it is. We connect to the ticketing, finance, scheduling, access, and show-control systems you already run, build the data pipeline between them, and put the reporting on one set of dashboards so the numbers reconcile instead of arguing with each other.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you handle implementation and training?</summary><div className="faq-a">Yes. Implementation is the service: we configure the platforms for your operation, install and commission the show systems on site, migrate the data, and train your team, so the tools are running your shows, not sitting in a browser tab.</div></details>
    <details className="faq-item"><summary className="faq-q">What is XPMS?</summary><div className="faq-a">XPMS 2.5 is our Experiential Production Management Standard: nine gated production phases — Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close — mapped across ten department classes, 90 coordinates in the ATLVS Coordinate Matrix, so every deliverable maps to a class and a phase. The four platforms are the technology layer of XPMS 2.5, and technology is where every other discipline reports in.</div></details>
    <details className="faq-item"><summary className="faq-q">Can we use the platforms without the full production service?</summary><div className="faq-a">Yes. The platforms stand on their own. Run ATLVS, COMPVSS, GVTEWAY, and LEG3ND for your own productions and bring us in for as much or as little of the build and operate work as you want. Start at the <Link href="/platforms">platforms page</Link>.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm more-svc">
  <p className="kicker">More Services</p>
  <h2 style={{fontSize: 'clamp(24px,3vw,36px)'}}>The Other Disciplines.</h2>
  <div style={{marginTop: '12px'}}>
    <Link href="/services/experiential-design-production" className="row-line"><span className="row-title">Experiential Design &amp; Production</span><span className="row-sub">The General Contractor</span><span className="arrow">→</span></Link>
    <Link href="/services/venue-site-operations" className="row-line"><span className="row-title">Venue &amp; Site Operations</span><span className="row-sub">The Foreman</span><span className="arrow">→</span></Link>
    <Link href="/services/tour-talent-management" className="row-line"><span className="row-title">Tour &amp; Talent Management</span><span className="row-sub">The Road Manager</span><span className="arrow">→</span></Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Run the Whole <span className="a">Show.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Put the plan, the people, and the gate in one place, and keep them there from Discover through Close.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/platforms" className="btn btn-secondary btn-lg">Explore the Platforms</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Technology and Systems Implementation","serviceType":"Technology and systems implementation","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"The technology layer of live experience: the ATLVS, COMPVSS, GVTEWAY, and LEG3ND platforms, immersive show technology and show control, systems integration and the data pipeline, and the implementation and training that makes it stick, delivered through the nine-phase XPMS 2.5 production lifecycle.","audience":{"@type":"Audience","audienceType":"Producers, brands, venue operators, and technical directors"},"url":"https://ghxstship.tours/services/technology-systems-implementation"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/services"},{"@type":"ListItem","position":3,"name":"Technology and Systems Implementation","item":"https://ghxstship.tours/services/technology-systems-implementation"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are ATLVS, COMPVSS, GVTEWAY, and LEG3ND?","acceptedAnswer":{"@type":"Answer","text":"Four platforms that make up the technology layer of XPMS 2.5. ATLVS is the studio and operator system for production and resource management. COMPVSS is the field app for workforce and crew management. GVTEWAY is the guest gateway for ticketing, access, and fan engagement. LEG3ND holds the standards, knowledge, and the production record. Together they run under the whole show."}},{"@type":"Question","name":"Do you integrate with our existing stack?","acceptedAnswer":{"@type":"Answer","text":"Yes. We meet your stack where it is. We connect to the ticketing, finance, scheduling, access, and show-control systems you already run, build the data pipeline between them, and put the reporting on one set of dashboards so the numbers reconcile instead of arguing with each other."}},{"@type":"Question","name":"Do you handle implementation and training?","acceptedAnswer":{"@type":"Answer","text":"Yes. Implementation is the service: we configure the platforms for your operation, install and commission the show systems on site, migrate the data, and train your team, so the tools are running your shows, not sitting in a browser tab."}},{"@type":"Question","name":"What is XPMS?","acceptedAnswer":{"@type":"Answer","text":"XPMS 2.5 is our Experiential Production Management Standard: nine gated production phases — Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close — mapped across ten department classes, 90 coordinates in the ATLVS Coordinate Matrix, so every deliverable maps to a class and a phase. The four platforms are the technology layer of XPMS 2.5, and technology is where every other discipline reports in."}},{"@type":"Question","name":"Can we use the platforms without the full production service?","acceptedAnswer":{"@type":"Answer","text":"Yes. The platforms stand on their own. You can run ATLVS, COMPVSS, GVTEWAY, and LEG3ND for your own productions and bring us in for as much or as little of the build and operate work as you want."}}]}` }} />
    </>
  );
}
