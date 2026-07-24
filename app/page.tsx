import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Design & Production, Venue & Site Operations, Tour & Talent Management",
  description: "GHXSTSHIP delivers four professional services \u2014 experiential design &amp; production, venue &amp; site operations, tour &amp; talent management, and technology &amp; systems implementation \u2014 for festivals, tours, activations, and live events.",
  keywords: ["experiential design and production", "venue and site operations", "tour and talent management", "technology and systems implementation", "event production company", "live event operations", "tour management company", "experiential technology"],
  alternates: { canonical: "https://ghxstship.tours/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .hero { padding-block: clamp(48px, 8vw, 110px) clamp(40px, 6vw, 80px); }
  .hero-grid { display: grid; grid-template-columns: 1.35fr 1fr; gap: clamp(28px, 4vw, 64px); align-items: center; }
  @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }
  .hero h1 { margin-bottom: 20px; }
  .hero h1 .a { color: var(--color-accent-700); }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
  .hero-fig { aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid var(--color-divider); }
  .hero-fig img { width: 100%; height: 100%; object-fit: cover; }
  .stats-in { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding-block: clamp(28px, 4vw, 44px); }
  @media (max-width: 720px) { .stats-in { grid-template-columns: repeat(2, 1fr); } }
  .trust { padding-block: clamp(28px, 4vw, 48px); text-align: center; }
  .trust .lbl { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 0 0 18px; }
  .trust .marquee { overflow: hidden; -webkit-mask: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); mask: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); }
  .trust .track { display: flex; gap: 56px; width: max-content; animation: trust-scroll 34s linear infinite; }
  .trust:hover .track { animation-play-state: paused; }
  .trust .track span { font-family: var(--font-heading); font-weight: 800; font-size: 20px; letter-spacing: 0.02em; text-transform: uppercase; color: color-mix(in srgb, var(--color-text) 45%, transparent); white-space: nowrap; }
  @keyframes trust-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @media (prefers-reduced-motion: reduce) { .trust .track { animation: none; flex-wrap: wrap; width: auto; justify-content: center; } }
  .svc-card { border: 1px solid var(--color-divider); padding: 24px; display: flex; flex-direction: column; gap: 10px; background: var(--color-bg); }
  .svc-card .bar { height: 3px; width: 44px; background: var(--color-accent); }
  .svc-card .role { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); }
  .svc-card h3 { font-size: 21px; line-height: 1.05; margin: 0; }
  .svc-card p { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: 1; }
  .svc-card .more { font-family: var(--font-heading); font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; text-decoration: none; color: var(--color-accent-700); }
  .phases { display: flex; margin-top: 32px; }
  .phase { flex: 1; position: relative; text-align: center; padding-top: 34px; }
  .phase::before { content: ""; position: absolute; top: 9px; left: 0; width: 100%; height: 2px; background: var(--color-divider); }
  .phase:first-child::before { left: 50%; width: 50%; }
  .phase:last-child::before { width: 50%; }
  .phase .dot { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 20px; height: 20px; border-radius: 50%; background: var(--color-bg); border: 2px solid var(--color-divider); font-size: 10px; font-weight: 600; display: grid; place-items: center; }
  .phase.done .dot { background: var(--color-accent); border-color: var(--color-accent); color: var(--color-on-accent); }
  .phase .nm { font-family: var(--font-heading); font-weight: 800; font-size: 12px; text-transform: uppercase; margin-top: 2px; }
  @media (max-width: 720px) { .phases { flex-direction: column; gap: 10px; } .phase { text-align: left; padding: 0 0 0 30px; } .phase::before { top: 0; left: 9px; width: 2px; height: 100%; } .phase .dot { left: 0; transform: none; } }
  .wcard { border: 1px solid var(--color-divider); text-decoration: none; color: inherit; display: flex; flex-direction: column; }
  .wcard .media { aspect-ratio: 4 / 3; overflow: hidden; }
  .wcard .media img { width: 100%; height: 100%; object-fit: cover; }
  .wcard .body { padding: 16px 18px 18px; }
  .wcard h3 { font-size: 18px; margin: 0 0 4px; }
  .wcard .meta { font-size: 12px; color: color-mix(in srgb, var(--color-text) 60%, transparent); margin: 0; }
  .plat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 28px; }
  @media (max-width: 720px) { .plat-row { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .plat-row { grid-template-columns: 1fr; } }
  .plat { border: 1px solid var(--color-divider); padding: 20px; }
  .plat b { font-family: var(--font-heading); font-weight: 800; font-size: 18px; letter-spacing: 0.02em; }
  .plat p { font-size: 12px; margin: 6px 0 0; color: color-mix(in srgb, var(--color-text) 65%, transparent); }
  .close-cta { text-align: center; padding-block: clamp(56px, 8vw, 110px); }
  .close-cta h2 { font-size: clamp(36px, 5.5vw, 72px); letter-spacing: -0.025em; line-height: 0.96; margin-bottom: 18px; }
  .close-cta h2 .a { color: var(--color-accent); }
` }} />
      


<main id="main">

<section className="hero"><div className="wrap"><div className="hero-grid">
  <div>
    <p className="kicker">Experiential Design &amp; Production · Venue &amp; Site Operations · Tour &amp; Talent Management · Technology &amp; Systems</p>
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
  <div className="stat"><div className="v">5</div><div className="k">Offices</div></div>
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
  <h2 style={{fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: '1.02', maxWidth: '22ch'}}>One accountable partner for <span style={{color: 'var(--color-accent-700)'}}>Experiential Design &amp; Production</span>, <span style={{color: 'var(--color-accent-700)'}}>Venue &amp; Site Operations</span>, <span style={{color: 'var(--color-accent-700)'}}>Tour &amp; Talent Management</span> &amp; <span style={{color: 'var(--color-accent-700)'}}>Technology &amp; Systems</span>.</h2>
  <p className="lede">GHXSTSHIP runs four services the way a general contractor runs a build: one partner who owns scope, schedule, budget, crew, and the technology. You get the experience designed and produced, the venue and site operated, the tour and the talent managed, and the systems wired to run it all, from the first call to the night it opens, instead of stitching together six vendors who blame each other when something slips.</p>
</div></section>

<section className="band"><div className="wrap sec-pad" id="services">
  <p className="kicker">The Services</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Four Disciplines. One Team.</h2>
  <p className="lede">Four services run by one team: we design and produce the experience, operate the venue and the site, manage the tour and the talent, and implement the technology. Different crews doing each, held to the same standard.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The General Contractor</p><h3>Experiential Design &amp; Production</h3><p>We design and build the experience. Concept, scope, schedule, budget, fabrication, staging, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Foreman</p><h3>Venue &amp; Site Operations</h3><p>We run the room and the ground. Programming, bookings, logistics, staffing, safety, facility and vendor operations, clockwork at any scale.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Road Manager</p><h3>Tour &amp; Talent Management</h3><p>We move the show and the people in it. Routing, advancing, artist relations, travel, settlement, and the run of show, city after city.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Procore</p><h3>Technology &amp; Systems Implementation</h3><p>We give the team its instruments. ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND plus immersive show tech, so the plan, the people, and the gate all live in one place.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad" id="course">
  <p className="kicker">The Process</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>9 Phases, First Line to Wrap.</h2>
  <p className="lede">Every engagement walks the same nine-phase XPMS 2.5 production lifecycle, Discover through Close. Every phase has deliverables and a name next to them, so you always know who owns what.</p>
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

<section className="band"><div className="wrap sec-pad" id="work">
  <p className="kicker">Selected Work</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>From the Archives.</h2>
  <p className="lede">A few of the experiences we designed, built, crewed, and ran end to end.</p>
  <div className="grid3" style={{marginTop: '28px'}}>
    <Link href="/work" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80&auto=format&fit=crop" alt="EDC Las Vegas" loading="lazy" width="700" height="525"/></figure><div className="body"><h3>EDC Las Vegas</h3><p className="meta">Festival · Insomniac, Las Vegas · 2025–26</p></div></Link>
    <Link href="/work" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80&auto=format&fit=crop" alt="Black Coffee at the Race Track" loading="lazy" width="700" height="525"/></figure><div className="body"><h3>Black Coffee at the Race Track</h3><p className="meta">Concerts &amp; Tours · Club Space Miami · 2026</p></div></Link>
    <Link href="/work" className="wcard"><figure className="media grayscale"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop" alt="Polymarket Grocery Store" loading="lazy" width="700" height="525"/></figure><div className="body"><h3>Polymarket Grocery Store</h3><p className="meta">Brand Activation · 2026</p></div></Link>
  </div>
</div></section>

<section className="wrap sec-pad" id="platforms">
  <p className="kicker">The Platforms</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Software We Run On.</h2>
  <p className="lede">Four in-house platforms wire every engagement together, from the production plan to the crew to the gate.</p>
  <div className="plat-row">
    <div className="plat"><b>ATLVS</b><p>Project management for producers and executives. The plan, the budget, the schedule.</p></div>
    <div className="plat"><b>COMPVSS</b><p>Crew, vendor, and talent operations. Rosters, advancing, day-of coordination.</p></div>
    <div className="plat"><b>GVTEWAY</b><p>Guest and client experience. Access, ticketing integrations, front of house.</p></div>
    <div className="plat"><b>LEG3ND</b><p>Show and media systems. Immersive content, playback, and control.</p></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/platforms" className="btn btn-ghost">See the platforms →</Link></p>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Start Your <span className="a">Project.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","logo":"https://ghxstship.tours/assets/logo-ghostship-skull.svg","description":"Professional services firm for live and experiential projects: experiential design and production, venue and site operations, tour and talent management, and technology and systems implementation.","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"},"sameAs":["https://www.instagram.com/ghxstship.tours","https://www.linkedin.com/company/ghxstship","https://www.youtube.com/@ghxstship","https://www.tiktok.com/@ghxstship.tours"]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ProfessionalService","name":"GHXSTSHIP","url":"https://ghxstship.tours/","areaServed":"US","makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Experiential Design and Production"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Venue and Site Operations"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Tour and Talent Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Technology and Systems Implementation"}}]}` }} />
    </>
  );
}
