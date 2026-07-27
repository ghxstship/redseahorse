import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV, Film & Broadcast",
  description: "Live broadcast, content capture and on-air activations, for networks, studios, streamers and brands. From GHXSTSHIP, a professional services firm for live and experiential projects, headquartered in Miami, running the nine-phase XPMS 2.6 production lifecycle.",
  keywords: ["broadcast production company", "tv production", "film production", "live broadcast", "content capture", "on-air activations", "set design", "broadcast production Miami"],
  alternates: { canonical: "https://ghxstship.tours/destinations/tv-film-broadcast" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout, components come from modernist.css */
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
    <p className="kicker">Industry · TV · Film · Broadcast</p>
    <h1 className="page-h1">TV, Film <span style={{color: 'var(--color-accent-700)'}}>&amp; Broadcast.</span></h1>
    <p className="lede">GHXSTSHIP is a professional services firm for live and experiential projects, headquartered in Miami, with regional offices in Los Angeles, Chicago, and New York City, and satellite offices in Nashville, Denver, Las Vegas, and Phoenix. For TV, Film &amp; Broadcast, we deliver live broadcast, content capture, and on-air activations. We do it for networks, studios, streamers, and brands, on the same nine-phase XPMS 2.6 production lifecycle.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop" alt="Broadcast camera on a television production set" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 className="sec-h2">On Air, On Time.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Live Broadcast Production</div>
    <div className="cap">Set Design &amp; Scenic</div>
    <div className="cap">Camera, Audio &amp; Lighting</div>
    <div className="cap">Content Capture &amp; Post</div>
    <div className="cap">On-Air Activations</div>
    <div className="cap">Compliance &amp; Insurance</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Broadcast, Nine Phases.</h2>
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
  <h2 className="sec-h2">Built for Networks, Studios &amp; Streamers.</h2>
  <p className="lede">Broadcast work at GHXSTSHIP is built for the teams accountable for what airs.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Networks</span>
    <span className="tag tag-neutral">Studios</span>
    <span className="tag tag-neutral">Streamers</span>
    <span className="tag tag-neutral">Brands</span>
    <span className="tag tag-neutral">Producers</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Broadcasts We Ran.</h2>
  <div style={{border: '1px solid var(--color-divider)', padding: 'clamp(28px,4vw,48px)', textAlign: 'center', marginTop: '24px'}}>
    <h3 style={{fontSize: '21px'}}>In Production</h3>
    <p className="text-muted" style={{maxWidth: '44ch', marginInline: 'auto'}}>New broadcast work is underway. Want to be the first case study? Start a project.</p>
    <Link href="/contact" className="btn btn-secondary" style={{marginTop: '8px'}}>Start a Project</Link>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals Behind Every Broadcast.</h2>
  <p className="lede">One accountable partner, four services carrying the shoot: the set designed and produced, the stage operated, the talent managed, and the systems wired to keep it on air.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>Set design, scenic, fabrication, and the finish, built to broadcast standards.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>Stage and location operations, staffing, safety, and vendor logistics on the clock.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>On-air talent, appearances, and artist logistics from call time to wrap.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Engineering</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, live and in build, plus the playback and control we implement for the live moment.</p><Link href="/services/technology-systems-engineering" className="more">Explore the service →</Link></article>
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
  <h2 className="sec-h2">Broadcast FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for TV, film and broadcast?</summary><div className="faq-a">End-to-end broadcast production: live broadcast, set design and scenic, camera, audio, and lighting, content capture and post, on-air activations, and compliance, on our nine-phase XPMS 2.6 lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who is broadcast production for?</summary><div className="faq-a">Networks, studios, streamers, and brands that need a production partner from set build to air.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you handle live and captured content?</summary><div className="faq-a">Yes, live broadcast and captured and post content, plus on-air brand activations.</div></details>
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
    <Link href="/destinations/sporting-events" className="chip">Sporting Events</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">Broadcast.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"TV, Film & Broadcast","serviceType":"Broadcast, film, and television production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Live broadcast, film and TV capture, and on-air activations, delivered through the GHXSTSHIP nine-phase XPMS 2.6 production lifecycle.","audience":{"@type":"Audience","audienceType":"Networks, studios, streamers, and brands"},"url":"https://ghxstship.tours/destinations/tv-film-broadcast"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"TV, Film & Broadcast","item":"https://ghxstship.tours/destinations/tv-film-broadcast"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.6 production lifecycle end to end, not just creative. We build and implement our own technology: ATLVS the operator console, COMPVSS for site and venue operations, GVTEWAY the public interface and marketplace, and LEG3ND the knowledge layer that holds the standard, the courses, and the catalog. Some are live today and some are in build. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for TV, film and broadcast?","acceptedAnswer":{"@type":"Answer","text":"End-to-end broadcast production: live broadcast, set design and scenic, camera, audio, and lighting, content capture and post, on-air activations, and compliance, on our nine-phase XPMS 2.6 lifecycle."}},
 {"@type":"Question","name":"Who is broadcast production for?","acceptedAnswer":{"@type":"Answer","text":"Networks, studios, streamers, and brands that need a production partner from set build to air."}},
 {"@type":"Question","name":"Do you handle live and captured content?","acceptedAnswer":{"@type":"Answer","text":"Yes, live broadcast and captured and post content, plus on-air brand activations."}}
]}` }} />
    </>
  );
}
