import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amusement Parks",
  description: "Seasonal overlays, ride and attraction theming, live shows and park-wide events, for parks, operators and IP holders. From GHXSTSHIP, a professional services firm for live and experiential projects, headquartered in Miami, running the nine-phase XPMS 2.6 production lifecycle.",
  keywords: ["amusement park production company", "theme park seasonal overlay", "attraction theming", "park live show production", "haunt event production", "themed entertainment Miami"],
  alternates: { canonical: "https://ghxstship.tours/destinations/amusement-parks" },
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
    <p className="kicker">Industry · Amusement Parks</p>
    <h1 className="page-h1">Amusement <span style={{color: 'var(--color-accent-700)'}}>Parks.</span></h1>
    <p className="lede">GHXSTSHIP is a professional services firm for live and experiential projects, headquartered in Miami, with regional offices in Los Angeles, Chicago, and New York City, and satellite offices in Nashville, Denver, Las Vegas, and Phoenix. For Amusement Parks, we deliver seasonal overlays, attraction theming, live shows, and park-wide events. We do it for parks, operators, and IP holders, on the same nine-phase XPMS 2.6 production lifecycle.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=900&q=80&auto=format&fit=crop" alt="Swing carousel ride turning above an amusement park midway" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 className="sec-h2">The Park, Transformed.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Seasonal Overlays &amp; Haunts</div>
    <div className="cap">Ride &amp; Attraction Theming</div>
    <div className="cap">Scenic Fabrication</div>
    <div className="cap">Audio, Lighting &amp; Video</div>
    <div className="cap">Live Shows &amp; Parades</div>
    <div className="cap">Guest Flow &amp; Crowd Ops</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Parks, Nine Phases.</h2>
  <p className="lede">Same nine phases on every project, Discover to Close. You watch each one happen.</p>
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
  <h2 className="sec-h2">Built for Parks, Operators &amp; IP.</h2>
  <p className="lede">Park production at GHXSTSHIP is built for the partners accountable for the season.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Parks &amp; Operators</span>
    <span className="tag tag-neutral">Attraction Developers</span>
    <span className="tag tag-neutral">IP Holders</span>
    <span className="tag tag-neutral">Family Entertainment</span>
    <span className="tag tag-neutral">Brands</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Seasons We've Built.</h2>
  <div style={{border: '1px solid var(--color-divider)', padding: 'clamp(28px,4vw,48px)', textAlign: 'center', marginTop: '24px'}}>
    <h3 style={{fontSize: '21px'}}>In Production</h3>
    <p className="text-muted" style={{maxWidth: '44ch', marginInline: 'auto'}}>New park work is underway. Want to be the first case study? Start a project.</p>
    <Link href="/contact" className="btn btn-secondary" style={{marginTop: '8px'}}>Start a Project</Link>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See all work →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals Behind Every Season.</h2>
  <p className="lede">One accountable partner, four services carrying the park: the overlay designed and produced, the park footprint operated, the performers managed, and the systems wired to run it all.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>Overlays, scenic, and themed environments designed, fabricated, and installed end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>Park logistics, staffing, safety, and guest flow across a full operating season.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>Performer casts, character talent, and rehearsal and rotation logistics all season.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Engineering</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, live and in build, so the plan, the crew, and the public side live in one place.</p><Link href="/services/technology-systems-engineering" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Most experiential and brand-activation agencies stop at creative and hand you off to a chain of vendors. We run all nine phases ourselves, and we build the technology that runs them.</p>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="card"><p className="card-title">End to End</p><p className="card-body">All nine phases, one accountable crew running the whole build.</p></div>
    <div className="card"><p className="card-title">We Engineer the Tech</p><p className="card-body">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, built in-house, live and in build, and delivered through <Link href="/services/technology-systems-engineering">Technology &amp; Systems Engineering</Link>.</p></div>
    <div className="card"><p className="card-title">Ops as a Discipline</p><p className="card-body">Logistics, crew, and compliance run as a full vertical: <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>.</p></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Parks FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for amusement parks?</summary><div className="faq-a">End-to-end park production: seasonal overlays and haunt events, ride and attraction theming, scenic fabrication, live show production, park-wide events and IP activations, and guest flow and crowd operations, on our nine-phase XPMS 2.6 lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who is park production for?</summary><div className="faq-a">Parks and operators, attraction developers, IP holders and licensors, family entertainment centers, and brands building a themed footprint.</div></details>
    <details className="faq-item"><summary className="faq-q">Can you build inside an operating park?</summary><div className="faq-a">Yes. Most park work installs overnight around an operating day, so the schedule is built to the park calendar, and guest safety and clean handover before opening are gate conditions, not afterthoughts.</div></details>
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
    <Link href="/destinations/sporting-events" className="chip">Sporting Events</Link>
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



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Amusement Parks","serviceType":"Amusement park and attraction production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Seasonal overlays, attraction theming, live shows, and park-wide events, delivered through the GHXSTSHIP nine-phase XPMS 2.6 production lifecycle.","audience":{"@type":"Audience","audienceType":"Parks, operators, IP holders, and attraction developers"},"url":"https://ghxstship.tours/destinations/amusement-parks"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"Amusement Parks","item":"https://ghxstship.tours/destinations/amusement-parks"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for amusement parks?","acceptedAnswer":{"@type":"Answer","text":"End-to-end park production: seasonal overlays and haunt events, ride and attraction theming, scenic fabrication, live show production, park-wide events and IP activations, and guest flow and crowd operations, on our nine-phase XPMS 2.6 lifecycle."}},
 {"@type":"Question","name":"Who is park production for?","acceptedAnswer":{"@type":"Answer","text":"Parks and operators, attraction developers, IP holders and licensors, family entertainment centers, and brands building a themed footprint."}},
 {"@type":"Question","name":"Can you build inside an operating park?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most park work installs overnight around an operating day, so the schedule is built to the park calendar, and guest safety and clean handover before opening are gate conditions, not afterthoughts."}}
]}` }} />
    </>
  );
}
