import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Production & Technology, Miami | GHXSTSHIP",
  description: "One accountable partner for live and experiential projects: design and production, venue and site operations, tour and talent management, and technology. Miami HQ.",
  keywords: ["experiential design and production", "venue and site operations", "tour and talent management", "technology and systems engineering", "event production company", "live event operations", "tour management company", "experiential technology"],
  alternates: { canonical: "https://ghxstship.tours/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout; components come from modernist.css */
  .hero { padding-block: clamp(48px, 8vw, 110px) clamp(40px, 6vw, 80px); }
  .hero-grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: clamp(28px, 4vw, 64px); align-items: center; }
  @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }
  .hero h1 { margin-bottom: 20px; }
  .hero h1 .a { color: var(--color-accent-700); }
  .hero-fig { aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid var(--color-divider); }
  .hero-fig img { width: 100%; height: 100%; object-fit: cover; }
  .stats-in { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding-block: clamp(28px, 4vw, 44px); }
  @media (max-width: 720px) { .stats-in { grid-template-columns: repeat(2, 1fr); } }
  .trust { padding-block: clamp(28px, 4vw, 48px); text-align: center; }
  .trust .lbl { font-size: 0.8rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 0 0 18px; }
  .trust .marquee { overflow: hidden; -webkit-mask: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); mask: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); }
  .trust .track { display: flex; gap: 56px; width: max-content; animation: trust-scroll 34s linear infinite; }
  .trust:hover .track { animation-play-state: paused; }
  .trust .track span { font-family: var(--font-heading); font-weight: 800; font-size: 1.333rem; letter-spacing: 0.02em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 45%, transparent); white-space: nowrap; }
  @keyframes trust-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (prefers-reduced-motion: reduce) { .trust .track { animation: none; flex-wrap: wrap; width: auto; justify-content: center; } }
  .plat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 28px; }
  @media (max-width: 720px) { .plat-row { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .plat-row { grid-template-columns: 1fr; } }
  .plat { border: 1px solid var(--color-divider); padding: 20px; }
  .plat b { font-family: var(--font-heading); font-weight: 800; font-size: 1.2rem; letter-spacing: 0.02em; }
  .plat p { font-size: 0.8rem; margin: 6px 0 0; color: color-mix(in srgb, var(--color-text) 65%, transparent); }
` }} />
      


<main id="main">

<section className="hero"><div className="wrap"><div className="hero-grid">
  <div>
    <p className="kicker">Experiential Design &amp; Production · Venue &amp; Site Operations · Tour &amp; Talent Management · Technology &amp; Systems Engineering</p>
    <h1 className="display-h1">Beyond<br/>the <span className="a">Scenes.</span></h1>
    <p className="lede">You're not running an event, you're building a world that exists for one weekend and strikes by morning. GHXSTSHIP runs the whole thing with you: experiential design &amp; production, venue &amp; site operations, tour &amp; talent management, and the technology and systems that tie it together. One partner you can hold accountable, for festivals, tours, activations, immersive experiences, and live events.</p>
    <div className="cta-row">
      <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
      <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
    </div>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" alt="Crowd at a live event under production lighting" width="720" height="900"/>
  </figure>
</div></div></section>

<div className="band"><div className="wrap stats-in">
  <div className="stat"><div className="v">14+</div><div className="k">Years</div></div>
  <div className="stat"><div className="v">250+</div><div className="k">Experiences</div></div>
  <div className="stat"><div className="v">8</div><div className="k">Locations</div></div>
  <div className="stat"><div className="v">4</div><div className="k">In-House Platforms</div></div>
</div></div>

<section className="trust"><div className="wrap">
  <p className="lbl">Trusted by the brands behind the moments</p>
  <div className="marquee"><div className="track" aria-label="Trusted by Red Bull, Heineken, Formula 1, Insomniac, Patrón, Polymarket, Club Space, III Points, Factory Town and EDC">
    <span>Red Bull</span><span>Heineken</span><span>Formula 1</span><span>Insomniac</span><span>Patrón</span><span>Polymarket</span><span>Club Space</span><span>III Points</span><span>Factory Town</span><span>EDC</span>
    <span aria-hidden="true">Red Bull</span><span aria-hidden="true">Heineken</span><span aria-hidden="true">Formula 1</span><span aria-hidden="true">Insomniac</span><span aria-hidden="true">Patrón</span><span aria-hidden="true">Polymarket</span><span aria-hidden="true">Club Space</span><span aria-hidden="true">III Points</span><span aria-hidden="true">Factory Town</span><span aria-hidden="true">EDC</span>
  </div></div>
</div></section>

<section className="wrap sec-pad"><div className="split2">
  <h2 className="sec-h2-sm" style={{maxWidth: '22ch'}}>One accountable partner for <span style={{color: 'var(--color-accent-700)'}}>Experiential Design &amp; Production</span>, <span style={{color: 'var(--color-accent-700)'}}>Venue &amp; Site Operations</span>, <span style={{color: 'var(--color-accent-700)'}}>Tour &amp; Talent Management</span> &amp; <span style={{color: 'var(--color-accent-700)'}}>Technology &amp; Systems Engineering</span>.</h2>
  <p className="lede">GHXSTSHIP runs four services the way a lead producer runs a show: one partner who owns scope, schedule, budget, crew, and the technology. You get the experience designed and produced, the venue and site operated, the tour and the talent managed, and the systems wired to run it all, from the first call to the night it opens, instead of stitching together six vendors who blame each other when something slips.</p>
</div></section>

<section className="band"><div className="wrap sec-pad" id="services">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Disciplines. One Team.</h2>
  <p className="lede">Four services run by one team: we design and produce the experience, operate the venue and the site, manage the tour and the talent, and implement the technology. Different crews doing each, held to the same standard.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>We design and build the experience. Concept, scope, schedule, budget, fabrication, staging, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>We run the room and the ground. Programming, bookings, logistics, staffing, safety, facility and vendor operations, clockwork at any scale.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>We move the show and the people in it. Routing, advancing, artist relations, travel, settlement, and the run of show, city after city.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Engineering</h3><p>We give the team its instruments. ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, the console, the field app, the public interface, and the knowledge layer, plus the show technology we specify and install.</p><Link href="/services/technology-systems-engineering" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad" id="course">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">9 Phases, First Line to Wrap.</h2>
  <p className="lede">Every engagement runs the same nine-phase XPMS 2.6 production lifecycle: Discover through Close. Every phase has deliverables and a name next to them, so you always know who owns what.</p>
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

<section className="band"><div className="wrap sec-pad" id="work">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">From the Archives.</h2>
  <p className="lede">A few of the experiences we designed, built, crewed, and ran end to end.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
      <Link href="/work/black-coffee-race-track" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop" alt="Open-air crowd at a racetrack show at dusk" loading="lazy" width="800" height="600"/></figure><div className="body"><h3>Black Coffee at the Race Track</h3><p className="meta">Concert &amp; Tour Production · Hialeah Park · 2026</p><span className="more">Read the case study →</span></div></Link>
      <Link href="/work/polymarket-free-grocery-store" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop" alt="Produce aisle stocked in a grocery store" loading="lazy" width="800" height="600"/></figure><div className="body"><h3>The Polymarket</h3><p className="meta">Brand Activations · The West Village · 2026</p><span className="more">Read the case study →</span></div></Link>
      <Link href="/work/l-acoustics-dj" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format&fit=crop" alt="Audio control surface in a live sound control room" loading="lazy" width="800" height="600"/></figure><div className="body"><h3>L-Acoustics DJ</h3><p className="meta">Technology Implementation · III Points · 2025–present</p><span className="more">Read the case study →</span></div></Link>
      <Link href="/work/patron-cristalino-becky-g" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop" alt="Spirit poured over ice in a rocks glass" loading="lazy" width="800" height="600"/></figure><div className="body"><h3>PATRÓN Cristalino x Becky G</h3><p className="meta">Product Launch · Olvera Street · 2024</p><span className="more">Read the case study →</span></div></Link>
    </div>
</div>
</section></main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","logo":"https://ghxstship.tours/assets/logo-ghostship-skull.svg","description":"Professional services firm for live and experiential projects: experiential design and production, venue and site operations, tour and talent management, and technology and systems engineering.","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"},"sameAs":["https://www.instagram.com/ghxstship.tours","https://www.linkedin.com/company/ghxstship","https://www.youtube.com/@ghxstship","https://www.tiktok.com/@ghxstship.tours"]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ProfessionalService","name":"GHXSTSHIP","url":"https://ghxstship.tours/","areaServed":"US","makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Experiential Design and Production"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Venue and Site Operations"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Tour and Talent Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Technology and Systems Engineering"}}]}` }} />
    </>
  );
}
