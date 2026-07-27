import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Coffee at the Race Track \u2014 Case Study",
  description: "Black Coffee at the Race Track \u2014 the first dance music event ever staged at Hialeah Park, the 1922 racetrack, presented by Club Space for Miami Music Week 2026 with Carlita and Kaz James.",
  keywords: ["Hialeah Park racetrack event", "Black Coffee Miami", "Miami Music Week 2026", "Club Space", "open-air festival production", "racetrack event production"],
  alternates: { canonical: "https://ghxstship.tours/work/black-coffee-race-track" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout only — every component comes from modernist.css */
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
  <p className="kicker">Case Study · Concert &amp; Tour Production</p>
  <h1 className="page-h1">Black Coffee at the Race Track.</h1>
  <p className="lede">The first dance music event ever staged at Hialeah Park — an open-air build on a 1922 racetrack, presented by Club Space for Miami Music Week 2026.</p>
  <div className="meta-tags">
    <span className="tag tag-neutral">Client · Club Space</span>
    <span className="tag tag-neutral">Venue · Hialeah Park</span>
    <span className="tag tag-neutral">Miami</span>
    <span className="tag tag-neutral">2026</span>
    <span className="tag tag-outline">Experiential Design &amp; Production, Venue &amp; Site Operations</span>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80&auto=format&fit=crop" alt="Open-air crowd at a racetrack show at dusk" width="1600" height="900"/>
  </figure>
</section>

<div className="band" style={{marginTop: 'clamp(32px,5vw,56px)'}}><div className="wrap facts-in">
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>28 March 2026, 6pm–1am</div><div className="k">Date</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>Hialeah Park, opened 1922</div><div className="k">Venue</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>Black Coffee, Carlita, Kaz James</div><div className="k">Line-up</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>First dance music event at the track</div><div className="k">First</div></div>
</div></div>

<section className="wrap sec-pad"><div className="cs-body">

  <h2>The Challenge</h2>
  <p>Hialeah Park is a landmark, not a venue. Opened in 1922 and redesigned in the thirties around gardens and flamingo pools, it had never hosted a dance music event — which meant there was no infrastructure to inherit and no precedent to copy. Everything an open-air show needs had to be brought in and taken back out.</p>
  <p>And the site came with a constraint no production rider covers: the park's flamingos, imported from Cuba in 1934, had to be kept away from the music and otherwise undisturbed.</p>

  <h2>The Approach</h2>
  <p>A greenfield build on a protected site. Discover and Design worked the sightlines and the sound against a listed landscape rather than a bare field. Advance carried the permissions and the site-specific conditions, including the exclusion zones that kept the wildlife clear of the programme.</p>
  <p>Procure, Build and Install put in a temporary open-air venue on the infield and took it back out. Operate ran a seven-hour show from six until one; Close returned the park to the condition a 1922 landmark is handed back in.</p>
  <div className="pull"><p>A hundred-year-old racetrack, open air, for one night.</p></div>

  <h2>The Result</h2>
  <p>The show ran, the flamingos were undisturbed, and the coverage led on the thing that mattered: a historic track hosting dance music for the first time. <strong>BizBash</strong> carried it in its Miami Music Week round-up, <strong>Miami New Times</strong> and <strong>Time Out</strong> previewed it, and World Red Eye shot the night.</p>
  <p>The result worth having is not the attendance figure. It is that a landmark that had never done this now has a template for doing it again.</p>

  <h2>The Credits</h2>
  <p><strong>Client</strong> Club Space · <strong>Venue</strong> The historic racetrack, Hialeah · <strong>Year</strong> 2026 · <strong>Services</strong> Experiential Design &amp; Production, Venue &amp; Site Operations.</p>

</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Press &amp; Media</p>
  <h2 className="sec-h2-sm">What Was Written.</h2>
  <p className="lede" style={{maxWidth: '64ch'}}>Independent coverage of the project. These outlets wrote about the work, not about us — we are not credited in them, and they are listed here as the public record of what was built.</p>
  <div className="press-rows">
    <a className="row-line" href="https://www.bizbash.com/event-production-planning/miami-music-week-2026-inside-wmc-ultra-edm-marathons-and-standout-activations" target="_blank" rel="noopener"><span className="row-title">Inside Miami Music Week 2026</span><span className="row-sub">BizBash</span><span className="row-sub">2026</span></a>
    <a className="row-line" href="https://worldredeye.com/2026/03/miami-music-week-2026-black-coffee-carlita-at-the-racetrack/" target="_blank" rel="noopener"><span className="row-title">Miami Music Week 2026: Black Coffee &amp; Carlita at the Racetrack</span><span className="row-sub">World Red Eye</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://www.miaminewtimes.com/music/black-coffee-will-turn-hialeah-race-track-into-dance-floor-40532738/" target="_blank" rel="noopener"><span className="row-title">Black Coffee Will Turn Hialeah Race Track Into Dance Floor</span><span className="row-sub">Miami New Times</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://www.timeout.com/miami/things-to-do/black-coffee-at-hialeah-racetrack" target="_blank" rel="noopener"><span className="row-title">Black Coffee at Hialeah Racetrack</span><span className="row-sub">Time Out Miami</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://magneticmag.com/2026/04/miami-music-week-2026-recap/" target="_blank" rel="noopener"><span className="row-title">Miami Music Week 2026 Recap: Factory Town, WMC, Club Space + More</span><span className="row-sub">Magnetic Magazine</span><span className="row-sub">2026-04</span></a>
    <a className="row-line" href="https://www.edmtunes.com/2026/03/black-coffee-hialeah-park-racetrack-mmw/" target="_blank" rel="noopener"><span className="row-title">Black Coffee Brings Open Air Show to Historic Hialeah Racetrack for MMW</span><span className="row-sub">EDMTunes</span><span className="row-sub">2026-03</span></a>
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
    <Link href="/work/polymarket-free-grocery-store" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop" alt="Produce aisle stocked in a grocery store" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>The Polymarket</h3><p className="meta">Brand Activations · 7th Avenue and Charles Street · 2026</p></div>
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



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "CreativeWork", "name": "Black Coffee at the Race Track", "creator": {"@type": "Organization", "name": "GHXSTSHIP", "url": "https://ghxstship.tours/"}, "about": "Concert & Tour Production", "locationCreated": {"@type": "Place", "name": "Hialeah Park", "address": "The historic racetrack, Hialeah, Miami"}, "genre": "Concert & Tour Production", "keywords": "Hialeah Park racetrack event, Black Coffee Miami, Miami Music Week 2026, Club Space, open-air festival production, racetrack event production", "url": "https://ghxstship.tours/work/black-coffee-race-track"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ghxstship.tours/"}, {"@type": "ListItem", "position": 2, "name": "Work", "item": "https://ghxstship.tours/work"}, {"@type": "ListItem", "position": 3, "name": "Black Coffee at the Race Track", "item": "https://ghxstship.tours/work/black-coffee-race-track"}]}` }} />
    </>
  );
}
