import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concert & Tour Production",
  description: "Show design, technical production and multi-city routing for live music, for artists, tour managers and promoters. From GHXSTSHIP, a professional services firm for live and experiential projects, headquartered in Miami, running the nine-phase XPMS 2.6 production lifecycle.",
  keywords: ["concert tour production company", "tour production", "show design", "multi-city routing", "tour management", "backline", "concert production Miami", "tour and talent management"],
  alternates: { canonical: "https://ghxstship.tours/destinations/concert-tour-production" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout; components come from modernist.css */
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
    <p className="kicker">Industry · Concerts &amp; Tours</p>
    <h1 className="page-h1">Concerts <span style={{color: 'var(--color-accent-700)'}}>&amp; Tours.</span></h1>
    <p className="lede">GHXSTSHIP is a professional services firm for live and experiential projects, headquartered in Miami, with regional offices in Los Angeles, Chicago, and New York City, and satellite offices in Nashville, Denver, Las Vegas, and Phoenix. For Concert &amp; Tour Production, we deliver show design, technical production, and multi-city routing for live music. We do it for artists, tour managers, and promoters, on the same nine-phase XPMS 2.6 production lifecycle, with the road itself run by our Tour &amp; Talent Management vertical.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80&auto=format&fit=crop" alt="Concert crowd facing a lit stage at a live show" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 className="sec-h2">Everything a Tour Needs.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Show Design &amp; Staging</div>
    <div className="cap">Routing &amp; Advancing</div>
    <div className="cap">Audio, Lighting, Video &amp; Rigging</div>
    <div className="cap">Trucking &amp; Backline</div>
    <div className="cap">Crew &amp; Tour Management</div>
    <div className="cap">Budgets &amp; Settlements</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Touring, Nine Phases.</h2>
  <p className="lede">Every project runs the same nine phases: Discover to Close.</p>
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
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Who We Build For</p>
  <h2 className="sec-h2">Built for the People Behind the Tour.</h2>
  <p className="lede">Tour production at GHXSTSHIP is built for the partners accountable for the run.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Artists &amp; Management</span>
    <span className="tag tag-neutral">Tour Managers</span>
    <span className="tag tag-neutral">Promoters</span>
    <span className="tag tag-neutral">Record Labels</span>
    <span className="tag tag-neutral">Venues</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Tours We've Built.</h2>
  <div style={{marginTop: '8px', borderTop: '1px solid var(--color-divider)'}}>
    <div className="row-line"><span className="row-title">Black Coffee at the Race Track</span><span className="row-sub">Concert Experience · Miami Music Week · Club Space</span><span className="row-sub">2026</span></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See all work →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals Behind Every Tour.</h2>
  <p className="lede">Touring leans hardest on <Link href="/services/tour-talent-management">Tour &amp; Talent Management</Link>: routing, advancing, artist relations, travel, and settlement, city after city, with the other three verticals carrying the build behind it.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>Routing, advancing, artist relations, travel, settlement, and the run of show, city after city.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>Show design, staging, fabrication, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>Load-in, staffing, safety, and vendor operations in every room on the routing.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Engineering</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, live and in build, so the plan, the crew, and the public side live in one place.</p><Link href="/services/technology-systems-engineering" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Most experiential and brand-activation agencies stop at creative and hand you off to a chain of vendors. We run all nine phases ourselves, and we build the technology that powers it.</p>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="card"><p className="card-title">End to End</p><p className="card-body">All nine phases, one accountable crew running the whole build.</p></div>
    <div className="card"><p className="card-title">We Engineer the Tech</p><p className="card-body">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, built in-house, live and in build, and delivered through <Link href="/services/technology-systems-engineering">Technology &amp; Systems Engineering</Link>.</p></div>
    <div className="card"><p className="card-title">Ops as a Discipline</p><p className="card-body">Logistics, crew, and compliance run as a full vertical: <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>.</p></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Touring FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for tours?</summary><div className="faq-a">End-to-end concert and tour production: show design and staging, technical production, routing, advancing, trucking, backline, and tour management, run through our <Link href="/services/tour-talent-management">Tour &amp; Talent Management</Link> vertical on our nine-phase XPMS 2.6 lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who is tour production for?</summary><div className="faq-a">Artists and management, tour managers, promoters, and labels who need one accountable production partner across every city.</div></details>
    <details className="faq-item"><summary className="faq-q">How many cities can you route?</summary><div className="faq-a">From single-market runs to multi-continent routings, with full logistics, advancing, and settlements.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm">
  <p className="kicker">More Industries</p>
  <div className="more-mkts">
    <Link href="/destinations/festival-production" className="chip">Festival Production</Link>
    <Link href="/destinations/brand-activations" className="chip">Brand Activations</Link>
    <Link href="/destinations/immersive-experiences" className="chip">Immersive Experiences</Link>
    <Link href="/destinations/cruise-ships" className="chip">Cruise Ships</Link>
    <Link href="/destinations/amusement-parks" className="chip">Amusement Parks</Link>
    <Link href="/destinations/sporting-events" className="chip">Sporting Events</Link>
    <Link href="/destinations/tv-film-broadcast" className="chip">TV, Film &amp; Broadcast</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">Tour.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Concert & Tour Production","serviceType":"Concert touring production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Concert touring, show production, and multi-city routing for live music, delivered through the GHXSTSHIP nine-phase XPMS 2.6 production lifecycle.","audience":{"@type":"Audience","audienceType":"Artists, tour managers, and promoters"},"url":"https://ghxstship.tours/destinations/concert-tour-production"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"Concert & Tour Production","item":"https://ghxstship.tours/destinations/concert-tour-production"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for tours?","acceptedAnswer":{"@type":"Answer","text":"End-to-end concert and tour production: show design and staging, technical production, routing, advancing, trucking, backline, and tour management, run through our Tour & Talent Management vertical on our nine-phase XPMS 2.6 lifecycle."}},
 {"@type":"Question","name":"Who is tour production for?","acceptedAnswer":{"@type":"Answer","text":"Artists and management, tour managers, promoters, and labels who need one accountable production partner across every city."}},
 {"@type":"Question","name":"How many cities can you route?","acceptedAnswer":{"@type":"Answer","text":"From single-market runs to multi-continent routings, with full logistics, advancing, and settlements."}}
]}` }} />
    </>
  );
}
