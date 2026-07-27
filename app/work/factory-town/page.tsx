import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory Town | Case Study",
  description: "Factory Town, Hialeah, venue and site operations across a seven-acre open-air entertainment district built in a 1946 mattress factory, run season after season through Miami Music Week and Art Basel.",
  keywords: ["Factory Town Miami", "Hialeah venue operations", "warehouse venue production", "Miami Music Week", "Art Basel Miami events", "multi-stage site operations"],
  alternates: { canonical: "https://ghxstship.tours/work/factory-town" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout only; every component comes from modernist.css */
  .meta-tags { display: flex; gap: 8px; flex-wrap: wrap; margin: 18px 0 0; }
  .hero-fig { aspect-ratio: 16 / 9; overflow: hidden; border: 1px solid var(--color-divider); margin-top: clamp(24px, 4vw, 40px); }
  .hero-fig img { width: 100%; height: 100%; object-fit: cover; }
  .facts-in { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px 32px; padding-block: clamp(28px, 4vw, 44px); }
  @media (max-width: 720px) { .facts-in { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .facts-in { grid-template-columns: 1fr; } }
  .cs-body { max-width: 55rem; }
  .cs-body h2 { font-size: clamp(24px, 3vw, 34px); margin-top: clamp(32px, 5vw, 56px); }
  .cs-body p { font-size: 1.067rem; line-height: 1.7; color: color-mix(in srgb, var(--color-text) 78%, transparent); max-width: 68ch; }
  .cs-body strong { color: var(--color-text); }
  .pull { border-left: 4px solid var(--color-accent); padding-left: 20px; margin: clamp(24px, 4vw, 36px) 0; }
  .pull p { font-family: var(--font-heading); font-weight: 800; font-size: clamp(19px, 2.4vw, 26px); line-height: 1.2; text-transform: uppercase; color: var(--color-text); margin: 0; max-width: 34ch; }
  .press-rows { margin-top: clamp(20px, 3vw, 28px); }
  .press-rows .row-line { text-decoration: none; color: inherit; }
  .press-rows .row-line:hover .row-title { color: var(--color-accent-700); }
  .more-grid { margin-top: clamp(24px, 4vw, 36px); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Case Study · Venue &amp; Site Operations</p>
  <h1 className="page-h1">Factory Town.</h1>
  <p className="lede">Seven acres of industrial Hialeah, a 1946 factory floor and the land around it, run as a multi-stage open-air venue season after season.</p>
  <div className="meta-tags">
    <span className="tag tag-neutral">Client · Link Miami Rebels</span>
    <span className="tag tag-neutral">Venue · Factory Town</span>
    <span className="tag tag-neutral">Miami</span>
    <span className="tag tag-neutral">2023–25</span>
    <span className="tag tag-outline">Venue &amp; Site Operations, Experiential Design &amp; Production</span>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=1600&q=80&auto=format&fit=crop" alt="Crowd in a warehouse venue under structural lighting" width="1600" height="900"/>
  </figure>
</section>

<div className="band" style={{marginTop: 'clamp(32px,5vw,56px)'}}><div className="wrap facts-in">
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>Seven acres, Hialeah</div><div className="k">Site</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>The 1946 Dixie Bedding factory</div><div className="k">Building</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>4800 NW 37th Avenue</div><div className="k">Address</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>Multi-stage, open-sided, open-air</div><div className="k">Format</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>Miami Music Week and Art Basel</div><div className="k">Seasons</div></div>
</div></div>

<section className="wrap sec-pad"><div className="cs-body">

  <h2>The Challenge</h2>
  <p>Factory Town is not a room with a calendar. It is a seven-acre site in Hialeah built around an abandoned mattress factory, the Dixie Bedding plant, put up in 1946 and once a US Army contractor, with a large open-sided warehouse and a great deal of open ground where stages and structures go up and come down.</p>
  <p>Operating it means the venue is rebuilt for its programme rather than booked into. Every season the site changes shape: different stage counts, different capacities, different circulation, on ground that is industrial rather than purpose-built.</p>

  <h2>The Approach</h2>
  <p>Venue and site operations, run as a standing discipline rather than a series of one-offs. Logistics and workforce planning against a footprint that moves. Vendor coordination across a site with no permanent back of house. Health, safety and compliance on an industrial property. Day-of operations across multiple stages running at once.</p>
  <p>The repeatable part is the standard, not the layout: the same nine phases applied to every season, so a Miami Music Week build and an Art Basel build differ in shape but not in how they are run, gated or closed out.</p>
  <div className="pull"><p>The venue gets rebuilt for the programme, not booked into.</p></div>

  <h2>The Result</h2>
  <p>Season after season across 2023–25, through Miami Music Week and Art Basel, for headline programmes including Black Coffee, Solomun, Elrow, ZHU, Dom Dolla and Green Velvet.</p>
  <p>World Red Eye has photographed the site for years and keeps a standing archive of it, the closest thing to a continuous public record of what the ground has held.</p>

  <h2>The Credits</h2>
  <p><strong>Client</strong> Link Miami Rebels · <strong>Venue</strong> 4800 NW 37th Avenue, Hialeah · <strong>Year</strong> 2023–25 · <strong>Services</strong> Venue &amp; Site Operations, Experiential Design &amp; Production.</p>

</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Press &amp; Media</p>
  <h2 className="sec-h2-sm">What Was Written.</h2>
  <p className="lede" style={{maxWidth: '64ch'}}>Independent coverage of the project. The public record of what was built.</p>
  <div className="press-rows">
    <a className="row-line" href="https://worldredeye.com/factory-town/" target="_blank" rel="noopener"><span className="row-title">Factory Town: the World Red Eye archive</span><span className="row-sub">World Red Eye</span><span className="row-sub"></span></a>
    <a className="row-line" href="https://magneticmag.com/2026/04/miami-music-week-2026-recap/" target="_blank" rel="noopener"><span className="row-title">Miami Music Week 2026 Recap: Factory Town, WMC, Club Space + More</span><span className="row-sub">Magnetic Magazine</span><span className="row-sub">2026-04</span></a>
    <a className="row-line" href="https://worldredeye.com/2024/12/factory-basel-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">GOLFOS, Carlita &amp; Ben Sterling at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2024-12</span></a>
    <a className="row-line" href="https://worldredeye.com/2024/03/dom-dolla-green-velvet-mau-p-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">Dom Dolla, Green Velvet &amp; Mau P at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2024-03</span></a>
    <a className="row-line" href="https://en.wikipedia.org/wiki/Factory_Town" target="_blank" rel="noopener"><span className="row-title">Factory Town</span><span className="row-sub">Wikipedia</span><span className="row-sub">current</span></a>
    <a className="row-line" href="https://worldredeye.com/2023/12/zhu-hayden-james-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">ZHU &amp; Hayden James at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2023-12</span></a>
  </div>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">More Work</p>
  <h2 className="sec-h2-sm">From the Archives.</h2>
  <div className="grid3 more-grid">
    <Link href="/work/salvage-city-supper-club" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop" alt="Supper club table set for service" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>Salvage City Supper Club</h3><p className="meta">Premium Hospitality · EDC Las Vegas · 2025–26</p></div>
    </Link>
    <Link href="/work/l-acoustics-dj" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format&fit=crop" alt="Audio control surface in a live sound control room" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>L-Acoustics DJ</h3><p className="meta">Technology Implementation · III Points · 2025–present</p></div>
    </Link>
    <Link href="/work/black-coffee-race-track" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop" alt="Open-air crowd at a racetrack show at dusk" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>Black Coffee at the Race Track</h3><p className="meta">Concert &amp; Tour Production · Hialeah Park · 2026</p></div>
    </Link>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See all the work →</Link></p>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Yours <span className="a">Next.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "CreativeWork", "name": "Factory Town", "creator": {"@type": "Organization", "name": "GHXSTSHIP", "url": "https://ghxstship.tours/"}, "about": "Venue & Site Operations", "locationCreated": {"@type": "Place", "name": "Factory Town", "address": "4800 NW 37th Avenue, Hialeah, Miami"}, "genre": "Venue & Site Operations", "keywords": "Factory Town Miami, Hialeah venue operations, warehouse venue production, Miami Music Week, Art Basel Miami events, multi-stage site operations", "url": "https://ghxstship.tours/work/factory-town"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ghxstship.tours/"}, {"@type": "ListItem", "position": 2, "name": "Work", "item": "https://ghxstship.tours/work"}, {"@type": "ListItem", "position": 3, "name": "Factory Town", "item": "https://ghxstship.tours/work/factory-town"}]}` }} />
    </>
  );
}
