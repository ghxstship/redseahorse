import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sporting Events",
  description: "GHXSTSHIP is a sporting event production company in Miami \u2014 Las Vegas, Chicago, NY, LA for leagues, teams, brands &amp; venues \u2014 stadium activations, fan experiences &amp; game-day production, via our 9-phase XPMS 2.6 lifecycle.",
  keywords: ["sporting event production company", "stadium activations", "fan experience design", "game-day production", "broadcast-ready staging", "sponsorship integration", "sports production Miami"],
  alternates: { canonical: "https://ghxstship.tours/destinations/sporting-events" },
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
  .cap { border: 1px solid var(--color-divider); background: var(--color-bg); padding: 16px 18px; font-family: var(--font-heading); font-weight: 600; font-size: 0.867rem; letter-spacing: 0.02em; text-transform: uppercase; }
  .aud-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px; }
  .more-mkts { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) clamp(40px,6vw,72px)'}}><div className="hero-grid">
  <div>
    <p className="kicker">Industry · Sporting Events</p>
    <h1 className="page-h1">Sporting <span style={{color: 'var(--color-accent-700)'}}>Events.</span></h1>
    <p className="lede">GHXSTSHIP is a full-service sporting event production company headquartered in Miami, with regional offices in Los Angeles, Chicago, and New York City, and satellite offices in Nashville, Denver, Las Vegas, and Phoenix. We deliver stadium activations, fan experiences, and game-day production — for leagues, teams, brands, and venues — through our nine-phase XPMS 2.6 production lifecycle.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80&auto=format&fit=crop" alt="Stadium crowd on game day" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 className="sec-h2">Game-Day, Handled.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Fan Experience Design</div>
    <div className="cap">Field &amp; Stadium Activations</div>
    <div className="cap">Broadcast-Ready Staging</div>
    <div className="cap">Audio, Lighting &amp; Video</div>
    <div className="cap">Sponsorship Integration</div>
    <div className="cap">Safety &amp; Crowd Ops</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Sporting, Nine Phases.</h2>
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
  <h2 className="sec-h2">Built for Leagues, Teams &amp; Venues.</h2>
  <p className="lede">Sporting production at GHXSTSHIP is built for the partners accountable for game day.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Leagues</span>
    <span className="tag tag-neutral">Teams</span>
    <span className="tag tag-neutral">Venues</span>
    <span className="tag tag-neutral">Brands &amp; Sponsors</span>
    <span className="tag tag-neutral">Federations</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Game Days We Ran.</h2>
  <div style={{marginTop: '8px', borderTop: '1px solid var(--color-divider)'}}>
    <div className="row-line"><span className="row-title">Formula 1 Las Vegas Grand Prix</span><span className="row-sub">Motorsports · Las Vegas</span><span className="row-sub">2023</span></div>
    <div className="row-line"><span className="row-title">Heineken Turn4 Nightclub</span><span className="row-sub">Motorsports · F1 Las Vegas Grand Prix</span><span className="row-sub">2024</span></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See all work →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals Behind Every Game Day.</h2>
  <p className="lede">One accountable partner, four services carrying the venue: the activation designed and produced, the stadium footprint operated, the talent managed, and the systems wired to run it all.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>Fan experiences and activations designed, built, and finished end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>Stadium logistics, staffing, safety, and crowd operations at full capacity.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>Halftime acts, appearances, and talent logistics on the game-day clock.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Implementation</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, live and in build, so the plan, the crew, and the public side live in one place.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Most experiential and brand-activation agencies stop at creative and hand you off to a chain of vendors. We run all nine phases ourselves, and we build the technology that runs them.</p>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="card"><p className="card-title">End to End</p><p className="card-body">All nine phases, one accountable crew running the whole build.</p></div>
    <div className="card"><p className="card-title">We Implement the Tech</p><p className="card-body">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, built in-house, live and in build, and implemented through <Link href="/services/technology-systems-implementation">Technology &amp; Systems Implementation</Link>.</p></div>
    <div className="card"><p className="card-title">Ops as a Discipline</p><p className="card-body">Logistics, crew, and compliance run as a full vertical: <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>.</p></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Sporting FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for sporting events?</summary><div className="faq-a">End-to-end sporting event production: fan experience design, field and stadium activations, broadcast-ready staging, technical production, sponsorship integration, and crowd operations — on our nine-phase XPMS 2.6 lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who is sporting production for?</summary><div className="faq-a">Leagues, teams, venues, federations, and brand sponsors who need a single accountable production partner.</div></details>
    <details className="faq-item"><summary className="faq-q">Can you produce broadcast-ready moments?</summary><div className="faq-a">Yes — staging and technical are built to broadcast standards for in-venue and on-air.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm">
  <p className="kicker">More Industries</p>
  <div className="more-mkts">
    <Link href="/destinations/festival-production" className="chip">Festival Production</Link>
    <Link href="/destinations/concert-tour-production" className="chip">Concerts &amp; Tours</Link>
    <Link href="/destinations/brand-activations" className="chip">Brand Activations</Link>
    <Link href="/destinations/immersive-experiences" className="chip">Immersive Experiences</Link>
    <Link href="/destinations/cruise-ships" className="chip">Cruise Ships</Link>
    <Link href="/destinations/amusement-parks" className="chip">Amusement Parks</Link>
    <Link href="/destinations/tv-film-broadcast" className="chip">TV, Film &amp; Broadcast</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">Game Day.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Sporting Events","serviceType":"Sporting event production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Stadium activations, fan experiences, and game-day production, delivered through the GHXSTSHIP nine-phase XPMS 2.6 production lifecycle.","audience":{"@type":"Audience","audienceType":"Leagues, teams, brands, and venues"},"url":"https://ghxstship.tours/destinations/sporting-events"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"Sporting Events","item":"https://ghxstship.tours/destinations/sporting-events"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for sporting events?","acceptedAnswer":{"@type":"Answer","text":"End-to-end sporting event production: fan experience design, field and stadium activations, broadcast-ready staging, technical production, sponsorship integration, and crowd operations — on our nine-phase XPMS 2.6 lifecycle."}},
 {"@type":"Question","name":"Who is sporting production for?","acceptedAnswer":{"@type":"Answer","text":"Leagues, teams, venues, federations, and brand sponsors who need a single accountable production partner."}},
 {"@type":"Question","name":"Can you produce broadcast-ready moments?","acceptedAnswer":{"@type":"Answer","text":"Yes — staging and technical are built to broadcast standards for in-venue and on-air."}}
]}` }} />
    </>
  );
}
