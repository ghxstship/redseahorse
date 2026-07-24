import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive Experiences",
  description: "GHXSTSHIP is an immersive experience design studio in Miami \u2014 Las Vegas, Chicago, NY, LA for brands, museums &amp; cultural institutions \u2014 narrative installations and immersive worlds audiences step inside, via our 9-phase XPMS 2.5 lifecycle.",
  keywords: ["immersive experience design", "narrative installations", "immersive worlds", "interactive technology", "projection design", "spatial design", "immersive production Miami"],
  alternates: { canonical: "https://ghxstship.tours/destinations/immersive-experiences" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .hero-grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: clamp(28px, 4vw, 64px); align-items: center; }
  @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }
  .hero-fig { aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid var(--color-divider); }
  .hero-fig img { width: 100%; height: 100%; object-fit: cover; }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .cap { border: 1px solid var(--color-divider); background: var(--color-bg); padding: 16px 18px; font-family: var(--font-heading); font-weight: 600; font-size: 13px; letter-spacing: 0.02em; text-transform: uppercase; }
  .phases { display: flex; margin-top: 32px; }
  .phase { flex: 1; position: relative; text-align: center; padding-top: 34px; }
  .phase::before { content: ""; position: absolute; top: 9px; left: 0; width: 100%; height: 2px; background: var(--color-divider); }
  .phase:first-child::before { left: 50%; width: 50%; }
  .phase:last-child::before { width: 50%; }
  .phase .dot { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 20px; height: 20px; border-radius: 50%; background: var(--color-bg); border: 2px solid var(--color-divider); font-size: 10px; font-weight: 600; display: grid; place-items: center; }
  .phase.done .dot { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-on-accent); }
  .phase .nm { font-family: var(--font-heading); font-weight: 800; font-size: 12px; text-transform: uppercase; margin-top: 2px; }
  @media (max-width: 720px) { .phases { flex-direction: column; gap: 10px; } .phase { text-align: left; padding: 0 0 0 30px; } .phase::before { top: 0; left: 9px; width: 2px; height: 100%; } .phase .dot { left: 0; transform: none; } }
  .aud-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px; }
  .svc-card { border: 1px solid var(--color-divider); padding: 24px; display: flex; flex-direction: column; gap: 10px; background: var(--color-bg); }
  .svc-card .bar { height: 3px; width: 44px; background: var(--color-accent); }
  .svc-card .role { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); }
  .svc-card h3 { font-size: 19px; line-height: 1.05; margin: 0; }
  .svc-card p { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: 1; }
  .svc-card .more { font-family: var(--font-heading); font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; text-decoration: none; color: var(--color-accent-700); }
  .more-mkts { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
  .close-cta { text-align: center; padding-block: clamp(56px, 8vw, 110px); }
  .close-cta h2 { font-size: clamp(36px, 5.5vw, 72px); letter-spacing: -0.025em; line-height: 0.96; margin-bottom: 18px; }
  .close-cta h2 .a { color: var(--color-accent); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) clamp(40px,6vw,72px)'}}><div className="hero-grid">
  <div>
    <p className="kicker">Industry · Immersive</p>
    <h1 className="page-h1">Immersive <span style={{color: 'var(--color-accent-700)'}}>Experiences.</span></h1>
    <p className="lede">GHXSTSHIP is a full-service immersive experience design studio headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We build narrative installations and immersive worlds audiences step inside — for brands, museums, and cultural institutions — through our nine-phase XPMS 2.5 production lifecycle.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=80&auto=format&fit=crop" alt="Immersive light installation surrounding an audience" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Worlds Audiences Step Inside.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Narrative &amp; World-Building</div>
    <div className="cap">Spatial &amp; Set Design</div>
    <div className="cap">Interactive Technology</div>
    <div className="cap">Projection, Audio &amp; Lighting</div>
    <div className="cap">Fabrication &amp; Install</div>
    <div className="cap">Operations &amp; Run-of-Show</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Immersive, Nine Phases.</h2>
  <p className="lede">Same nine phases on every project, Discover to Close. You watch each one happen.</p>
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
  <p className="kicker">Who We Build For</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Built for Storytellers &amp; Institutions.</h2>
  <p className="lede">Immersive work at GHXSTSHIP is built for the teams shaping culture and brand worlds.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Brands</span>
    <span className="tag tag-neutral">Museums</span>
    <span className="tag tag-neutral">Cultural Institutions</span>
    <span className="tag tag-neutral">Attractions</span>
    <span className="tag tag-neutral">Agencies</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Worlds We Built.</h2>
  <div style={{marginTop: '8px', borderTop: '1px solid var(--color-divider)'}}>
    <Link href="/work/salvage-city-supper-club" className="row-line" style={{textDecoration: 'none', color: 'inherit'}}><span className="row-title">Salvage City Supper Club</span><span className="row-sub">Immersive Experience · Club Space · Miami</span><span className="row-sub">2025–26</span></Link>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See all work →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Four Verticals Behind Every World.</h2>
  <p className="lede">One accountable partner, four services carrying the story: the world designed and produced, the venue operated, the performers managed, and the show systems built to run it every day.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The General Contractor</p><h3>Experiential Design &amp; Production</h3><p>Narrative, spatial design, fabrication, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Foreman</p><h3>Venue &amp; Site Operations</h3><p>Daily operations, staffing, safety, and run-of-show for the life of the experience.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Road Manager</p><h3>Tour &amp; Talent Management</h3><p>Cast, performers, and talent logistics inside the world, night after night.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Procore</p><h3>Technology &amp; Systems Implementation</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND plus immersive show tech: projection, playback, and control.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>The Difference.</h2>
  <p className="lede">Most experiential and brand-activation agencies stop at creative and hand you off to a chain of vendors. We run all nine phases ourselves, and we build the technology that runs them.</p>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="card"><p className="card-title">End to End</p><p className="card-body">All nine phases, one accountable crew running the whole build.</p></div>
    <div className="card"><p className="card-title">We Implement the Tech</p><p className="card-body">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, built in-house and implemented through <Link href="/services/technology-systems-implementation">Technology &amp; Systems Implementation</Link>.</p></div>
    <div className="card"><p className="card-title">Ops as a Discipline</p><p className="card-body">Logistics, crew, and compliance run as a full vertical: <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>.</p></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Immersive FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.5 production lifecycle end to end, not just creative. We build and implement our own technology, ATLVS, COMPVSS, GVTEWAY, and LEG3ND. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for immersive experiences?</summary><div className="faq-a">End-to-end immersive design: narrative and world-building, spatial and set design, interactive technology, projection and lighting, fabrication, and run-of-show — on our nine-phase XPMS 2.5 lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who are immersive experiences for?</summary><div className="faq-a">Brands, museums, cultural institutions, and attractions that want audiences to step inside a story.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you handle the technology and the build?</summary><div className="faq-a">Yes — creative, technology, fabrication, install, and daily operations are all in-house.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm">
  <p className="kicker">More Industries</p>
  <div className="more-mkts">
    <Link href="/destinations/festival-production" className="chip">Festival Production</Link>
    <Link href="/destinations/concert-tour-production" className="chip">Concerts &amp; Tours</Link>
    <Link href="/destinations/brand-activations" className="chip">Brand Activations</Link>
    <Link href="/destinations/sporting-events" className="chip">Sporting Events</Link>
    <Link href="/destinations/tv-film-broadcast" className="chip">TV, Film &amp; Broadcast</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">World.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Immersive Experiences","serviceType":"Immersive experience design and production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Narrative installations and immersive worlds audiences step inside, delivered through the GHXSTSHIP nine-phase XPMS 2.5 production lifecycle.","audience":{"@type":"Audience","audienceType":"Brands, museums, and cultural institutions"},"url":"https://ghxstship.tours/destinations/immersive-experiences"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"Immersive Experiences","item":"https://ghxstship.tours/destinations/immersive-experiences"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.5 production lifecycle end to end, not just creative. We build and implement our own technology, ATLVS, COMPVSS, GVTEWAY, and LEG3ND. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for immersive experiences?","acceptedAnswer":{"@type":"Answer","text":"End-to-end immersive design: narrative and world-building, spatial and set design, interactive technology, projection and lighting, fabrication, and run-of-show — on our nine-phase XPMS 2.5 lifecycle."}},
 {"@type":"Question","name":"Who are immersive experiences for?","acceptedAnswer":{"@type":"Answer","text":"Brands, museums, cultural institutions, and attractions that want audiences to step inside a story."}},
 {"@type":"Question","name":"Do you handle the technology and the build?","acceptedAnswer":{"@type":"Answer","text":"Yes — creative, technology, fabrication, install, and daily operations are all in-house."}}
]}` }} />
    </>
  );
}
