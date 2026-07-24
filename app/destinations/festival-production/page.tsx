import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival Production",
  description: "GHXSTSHIP is a festival production company in Miami \u2014 Las Vegas, Chicago, NY, LA for promoters, brands &amp; production directors \u2014 multi-stage infrastructure, staging, technical production &amp; headliner experiences, via our 9-phase XPMS 2.5 lifecycle.",
  keywords: ["festival production company", "multi-stage festival production", "festival infrastructure", "festival staging", "technical production", "headliner experiences", "festival production Miami"],
  alternates: { canonical: "https://ghxstship.tours/destinations/festival-production" },
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
  .cap { border: 1px solid var(--color-divider); background: var(--color-bg); padding: 16px 18px; font-family: var(--font-heading); font-weight: 600; font-size: 13px; letter-spacing: 0.02em; text-transform: uppercase; }
  .aud-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px; }
  .more-mkts { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) clamp(40px,6vw,72px)'}}><div className="hero-grid">
  <div>
    <p className="kicker">Industry · Festivals</p>
    <h1 className="page-h1">Festival <span style={{color: 'var(--color-accent-700)'}}>Production.</span></h1>
    <p className="lede">GHXSTSHIP is a full-service festival production company headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We deliver multi-stage festival infrastructure, staging, technical production, and headliner experiences at scale — for promoters, brands, and production directors — through our nine-phase XPMS 2.5 production lifecycle.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" alt="Festival crowd under multi-stage production lighting" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 className="sec-h2">Everything a Festival Needs.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Site Design &amp; Infrastructure</div>
    <div className="cap">Multi-Stage Design &amp; Scenic Build</div>
    <div className="cap">Audio, Lighting, Video &amp; Rigging</div>
    <div className="cap">Power &amp; Distribution</div>
    <div className="cap">Headliner &amp; Talent Experiences</div>
    <div className="cap">Permits, Safety &amp; Compliance</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Your Festival, Nine Phases.</h2>
  <p className="lede">Every festival runs the same nine phases — from first consultation to load-out and analytics.</p>
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
  <h2 className="sec-h2">Built for the People Who Build Festivals.</h2>
  <p className="lede">Festival production at GHXSTSHIP is built for the producers and partners accountable for the show.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Festival Promoters</span>
    <span className="tag tag-neutral">Brands &amp; Sponsors</span>
    <span className="tag tag-neutral">Talent Buyers</span>
    <span className="tag tag-neutral">Production Directors</span>
    <span className="tag tag-neutral">Venue &amp; City Partners</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Festivals We've Built.</h2>
  <div style={{border: '1px solid var(--color-divider)', padding: 'clamp(28px,4vw,48px)', textAlign: 'center', marginTop: '24px'}}>
    <h3 style={{fontSize: '21px'}}>In Production</h3>
    <p className="text-muted" style={{maxWidth: '44ch', marginInline: 'auto'}}>New festival work is underway. Want to be the first case study? Start a project.</p>
    <Link href="/contact" className="btn btn-secondary" style={{marginTop: '8px'}}>Start a Project</Link>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals Behind Every Festival.</h2>
  <p className="lede">One accountable partner, four services carrying the site: the experience designed and produced, the grounds operated, the talent managed, and the systems wired to run it all.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The General Contractor</p><h3>Experiential Design &amp; Production</h3><p>Concept, scope, schedule, budget, fabrication, staging, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Foreman</p><h3>Venue &amp; Site Operations</h3><p>Site logistics, staffing, safety, facility and vendor operations, clockwork at festival scale.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Road Manager</p><h3>Tour &amp; Talent Management</h3><p>Headliner advancing, artist relations, travel, and the run of show across every stage.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Procore</p><h3>Technology &amp; Systems Implementation</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, so the plan, the crew, and the gate live in one place.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Most experiential and brand-activation agencies stop at creative and hand you off to a chain of vendors. We run all nine phases ourselves, and we build the technology that powers it.</p>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="card"><p className="card-title">End to End</p><p className="card-body">All nine phases, one accountable crew running the whole build.</p></div>
    <div className="card"><p className="card-title">We Implement the Tech</p><p className="card-body">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, built in-house and implemented through <Link href="/services/technology-systems-implementation">Technology &amp; Systems Implementation</Link>.</p></div>
    <div className="card"><p className="card-title">Ops as a Discipline</p><p className="card-body">Logistics, crew, and compliance run as a full vertical: <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>.</p></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Festival Production FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.5 production lifecycle end to end, not just creative. We build and implement our own technology, ATLVS, COMPVSS, GVTEWAY, and LEG3ND. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for festivals?</summary><div className="faq-a">End-to-end festival production: site and infrastructure, multi-stage design and build, technical production across audio, lighting, video, rigging, and power, and headliner experiences — managed through our nine-phase XPMS 2.5 production lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who is festival production for?</summary><div className="faq-a">Festival promoters, brands, talent buyers, and production directors who need one accountable partner from first consultation to load-out.</div></details>
    <details className="faq-item"><summary className="faq-q">What size festivals can you produce?</summary><div className="faq-a">From boutique single-stage events to 50,000-plus-capacity multi-stage festivals, with full infrastructure and logistics.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm">
  <p className="kicker">More Industries</p>
  <div className="more-mkts">
    <Link href="/destinations/concert-tour-production" className="chip">Concerts &amp; Tours</Link>
    <Link href="/destinations/brand-activations" className="chip">Brand Activations</Link>
    <Link href="/destinations/immersive-experiences" className="chip">Immersive Experiences</Link>
    <Link href="/destinations/sporting-events" className="chip">Sporting Events</Link>
    <Link href="/destinations/tv-film-broadcast" className="chip">TV, Film &amp; Broadcast</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">Festival.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Festival Production","serviceType":"Festival production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Multi-stage festival production, infrastructure, staging, technical production, and headliner experiences at scale, delivered through the GHXSTSHIP nine-phase XPMS 2.5 production lifecycle.","audience":{"@type":"Audience","audienceType":"Festival promoters, brands, and production directors"},"url":"https://ghxstship.tours/destinations/festival-production"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"Festival Production","item":"https://ghxstship.tours/destinations/festival-production"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.5 production lifecycle end to end, not just creative. We build and implement our own technology, ATLVS, COMPVSS, GVTEWAY, and LEG3ND. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for festivals?","acceptedAnswer":{"@type":"Answer","text":"GHXSTSHIP provides end-to-end festival production: site and infrastructure, multi-stage design and build, technical production across audio, lighting, video, rigging, and power, and headliner experiences — managed through our nine-phase XPMS 2.5 production lifecycle."}},
 {"@type":"Question","name":"Who is festival production for?","acceptedAnswer":{"@type":"Answer","text":"Festival promoters, brands, talent buyers, and production directors who need a single accountable partner from first consultation to load-out."}},
 {"@type":"Question","name":"What size festivals can GHXSTSHIP produce?","acceptedAnswer":{"@type":"Answer","text":"From boutique single-stage events to 50,000-plus-capacity multi-stage festivals, with full infrastructure and logistics."}}
]}` }} />
    </>
  );
}
