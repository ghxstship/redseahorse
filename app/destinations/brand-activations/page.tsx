import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activations",
  description: "GHXSTSHIP is a brand activation agency in Miami \u2014 Las Vegas, Chicago, NY, LA for brands, agencies &amp; creative directors \u2014 experiential marketing, pop-ups &amp; brand environments that convert, via our 9-phase XPMS 2.5 lifecycle.",
  keywords: ["brand activation agency", "experiential marketing", "brand pop-ups", "brand environments", "activation fabrication", "experiential production", "brand activation Miami"],
  alternates: { canonical: "https://ghxstship.tours/destinations/brand-activations" },
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
    <p className="kicker">Industry · Brand Activations</p>
    <h1 className="page-h1">Brand <span style={{color: 'var(--color-accent-700)'}}>Activations.</span></h1>
    <p className="lede">GHXSTSHIP is a full-service brand activation agency headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We design and build experiential marketing, pop-ups, and brand environments that convert attention — for brands, agencies, and creative directors — through our nine-phase XPMS 2.5 production lifecycle.</p>
    <div className="cta-row" style={{marginTop: '22px'}}>
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/destinations" className="btn btn-secondary btn-lg">All Industries</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80&auto=format&fit=crop" alt="Brand activation environment with a live crowd" width="720" height="900"/>
  </figure>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">What We Build</p>
  <h2 className="sec-h2">Activations That Convert.</h2>
  <div className="grid3" style={{marginTop: '24px'}}>
    <div className="cap">Concept &amp; Creative Direction</div>
    <div className="cap">Fabrication &amp; Scenic</div>
    <div className="cap">Footprint &amp; Spatial Design</div>
    <div className="cap">Technical &amp; Interactive</div>
    <div className="cap">Permitting &amp; Logistics</div>
    <div className="cap">Measurement &amp; Reporting</div>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Activations, Nine Phases.</h2>
  <p className="lede">Every project runs the same nine phases, Discover to Close.</p>
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
  <h2 className="sec-h2">Built for Brands &amp; Their Agencies.</h2>
  <p className="lede">Activations at GHXSTSHIP are built for the marketers and creatives accountable for the result.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Brands</span>
    <span className="tag tag-neutral">Agencies</span>
    <span className="tag tag-neutral">CMOs</span>
    <span className="tag tag-neutral">Creative Directors</span>
    <span className="tag tag-neutral">Experiential Leads</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Activations We've Built.</h2>
  <div style={{marginTop: '8px', borderTop: '1px solid var(--color-divider)'}}>
    <div className="row-line"><span className="row-title">Polymarket Grocery Store</span><span className="row-sub">Brand Activation · Miami</span><span className="row-sub">2026</span></div>
    <div className="row-line"><span className="row-title">Red Bull Unforeseen Motel</span><span className="row-sub">Brand Activation · III Points · Miami</span><span className="row-sub">2023</span></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See all work →</Link></p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals Behind Every Activation.</h2>
  <p className="lede">One accountable partner, four services carrying the footprint: the environment designed and produced, the site operated, the talent managed, and the systems wired to measure it all.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>Concept, creative direction, fabrication, scenic, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>Permitting, logistics, staffing, and day-of operations on every footprint.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>Appearances, brand ambassadors, and talent logistics for the activation moment.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Implementation</h3><p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND plus interactive show tech, measurement built in.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
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
  <h2 className="sec-h2">Activations FAQ.</h2>
  <div style={{marginTop: '16px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">How is GHXSTSHIP different from a traditional agency?</summary><div className="faq-a">Three ways: we own the full nine-phase XPMS 2.5 production lifecycle end to end, not just creative. We build and implement our own technology, ATLVS, COMPVSS, GVTEWAY, and LEG3ND. And operations is a dedicated vertical, <Link href="/services/venue-site-operations">Venue &amp; Site Operations</Link>, with logistics, crew, compliance, and analytics run by its own team.</div></details>
    <details className="faq-item"><summary className="faq-q">What does GHXSTSHIP do for brand activations?</summary><div className="faq-a">End-to-end experiential marketing: concept and creative, fabrication and scenic, spatial design, interactive technology, permitting, and measurement — on our nine-phase XPMS 2.5 lifecycle.</div></details>
    <details className="faq-item"><summary className="faq-q">Who are activations for?</summary><div className="faq-a">Brands, agencies, CMOs, and creative directors who need a partner from concept through reporting.</div></details>
    <details className="faq-item"><summary className="faq-q">Can you measure activation impact?</summary><div className="faq-a">Yes — we build in measurement and reporting so the activation ties back to business outcomes.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm">
  <p className="kicker">More Industries</p>
  <div className="more-mkts">
    <Link href="/destinations/festival-production" className="chip">Festival Production</Link>
    <Link href="/destinations/concert-tour-production" className="chip">Concerts &amp; Tours</Link>
    <Link href="/destinations/immersive-experiences" className="chip">Immersive Experiences</Link>
    <Link href="/destinations/sporting-events" className="chip">Sporting Events</Link>
    <Link href="/destinations/tv-film-broadcast" className="chip">TV, Film &amp; Broadcast</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">Activation.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Brand Activations","serviceType":"Brand activation and experiential marketing","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Experiential marketing, pop-ups, and brand environments that convert attention, delivered through the GHXSTSHIP nine-phase XPMS 2.5 production lifecycle.","audience":{"@type":"Audience","audienceType":"Brands, agencies, and creative directors"},"url":"https://ghxstship.tours/destinations/brand-activations"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"},{"@type":"ListItem","position":3,"name":"Brand Activations","item":"https://ghxstship.tours/destinations/brand-activations"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full nine-phase XPMS 2.5 production lifecycle end to end, not just creative. We build and implement our own technology, ATLVS, COMPVSS, GVTEWAY, and LEG3ND. And operations is a dedicated vertical, Venue & Site Operations, with logistics, crew, compliance, and analytics run by its own team."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for brand activations?","acceptedAnswer":{"@type":"Answer","text":"End-to-end experiential marketing: concept and creative, fabrication and scenic, spatial design, interactive technology, permitting, and measurement — on our nine-phase XPMS 2.5 lifecycle."}},
 {"@type":"Question","name":"Who are activations for?","acceptedAnswer":{"@type":"Answer","text":"Brands, agencies, CMOs, and creative directors who need a partner from concept through reporting."}},
 {"@type":"Question","name":"Can you measure activation impact?","acceptedAnswer":{"@type":"Answer","text":"Yes — we build in measurement and reporting so the activation ties back to business outcomes."}}
]}` }} />
    </>
  );
}
