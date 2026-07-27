import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Polymarket \u2014 Case Study",
  description: "The Polymarket \u2014 New York&#x27;s first free grocery store, a fully stocked five-day retail activation in the West Village where every shopper filled a tote at no cost, alongside a $1M donation to Food Bank For New York City.",
  keywords: ["Polymarket free grocery store", "West Village pop-up", "retail activation New York", "brand activation case study", "experiential retail production"],
  alternates: { canonical: "https://ghxstship.tours/work/polymarket-free-grocery-store" },
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
  <p className="kicker">Case Study · Brand Activations</p>
  <h1 className="page-h1">The Polymarket.</h1>
  <p className="lede">A fully stocked grocery store in the West Village, open to anyone, where nothing had a price — five days, no purchase, no catch.</p>
  <div className="meta-tags">
    <span className="tag tag-neutral">Client · Polymarket</span>
    <span className="tag tag-neutral">Venue · 7th Avenue and Charles Street</span>
    <span className="tag tag-neutral">New York City</span>
    <span className="tag tag-neutral">2026</span>
    <span className="tag tag-outline">Experiential Design &amp; Production, Venue &amp; Site Operations</span>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80&auto=format&fit=crop" alt="Produce aisle stocked in a grocery store" width="1600" height="900"/>
  </figure>
</section>

<div className="band" style={{marginTop: 'clamp(32px,5vw,56px)'}}><div className="wrap facts-in">
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>12–16 February 2026</div><div className="k">Dates</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>7th Avenue at Charles Street</div><div className="k">Location</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>A tote per shopper, filled free</div><div className="k">Model</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>First 300 in line each day</div><div className="k">Guaranteed</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>$1M to Food Bank For New York City</div><div className="k">Donation</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>3 million donated alongside the store</div><div className="k">Meals</div></div>
</div></div>

<section className="wrap sec-pad"><div className="cs-body">

  <h2>The Challenge</h2>
  <p>Build a working grocery store in Lower Manhattan, in February, and operate it as a real shop for five days — stocked, staffed, queued and restocked — where nothing scans and nobody pays. Retail operations with the transaction removed and the demand unknowable.</p>
  <p>A free store in a city with a food-insecurity problem draws a crowd that is not a marketing audience. The build had to hold a queue on a West Village street, in winter, without turning the thing it was trying to do into a spectacle at the expense of the people in it.</p>

  <h2>The Approach</h2>
  <p>Retail build and site operations run as one job. Design and Advance handled the storefront, the fit-out and the street: sightlines, queue management, the permissions that a five-day operating shop needs rather than the ones a pop-up gets away with.</p>
  <p>Build and Install fitted a functioning store — shelving, cold chain, back of house, restock cadence. Operate is the whole of a project like this: crowd flow, a guaranteed allocation for the first three hundred in line each day, restocking against demand nobody could forecast, and a queue kept orderly and warm on a public street.</p>
  <div className="pull"><p>Retail operations with the transaction taken out.</p></div>

  <h2>The Result</h2>
  <p>Thousands were served on the first day, and the store ran its full five days. Polymarket donated <strong>$1 million</strong> to Food Bank For New York City and three million meals alongside it.</p>
  <p>The coverage was national — Newsweek, Fox Business, FOX 5, Vice — and it was not uniformly warm. Some of it was politically framed and some questioned the motive. That is the honest record of a free grocery store in an election-year news cycle, and it is worth stating plainly: the queue was the story, in both directions.</p>

  <h2>The Credits</h2>
  <p><strong>Client</strong> Polymarket · <strong>Venue</strong> West Village, Lower Manhattan · <strong>Year</strong> 2026 · <strong>Services</strong> Experiential Design &amp; Production, Venue &amp; Site Operations.</p>

</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Press &amp; Media</p>
  <h2 className="sec-h2-sm">What Was Written.</h2>
  <p className="lede" style={{maxWidth: '64ch'}}>Independent coverage of the project. These outlets wrote about the work, not about us — we are not credited in them, and they are listed here as the public record of what was built.</p>
  <div className="press-rows">
    <a className="row-line" href="https://www.newsweek.com/new-york-city-opens-first-free-grocery-store-11523713" target="_blank" rel="noopener"><span className="row-title">New York City opens first free grocery store</span><span className="row-sub">Newsweek</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.newsweek.com/new-york-city-gets-first-free-grocery-store-polymarket-11460498" target="_blank" rel="noopener"><span className="row-title">New York City gets first free grocery store</span><span className="row-sub">Newsweek</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.foxbusiness.com/markets/betting-company-polymarket-opens-nycs-first-free-grocery-store-downtown-manhattan" target="_blank" rel="noopener"><span className="row-title">Polymarket creates NYC&#x27;s first free grocery store in downtown Manhattan</span><span className="row-sub">Fox Business</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.fox5ny.com/news/polymarket-free-grocery-store-opens-nyc-heres-how-work" target="_blank" rel="noopener"><span className="row-title">Polymarket free grocery store opens in NYC — here&#x27;s how it works</span><span className="row-sub">FOX 5 New York</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.vice.com/en/article/cryptocurrency-firm-launches-free-supermarket/" target="_blank" rel="noopener"><span className="row-title">There&#x27;s a Free Grocery Store in NYC Now. Here&#x27;s How It Works.</span><span className="row-sub">Vice</span><span className="row-sub">2026-02</span></a>
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



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "CreativeWork", "name": "The Polymarket", "creator": {"@type": "Organization", "name": "GHXSTSHIP", "url": "https://ghxstship.tours/"}, "about": "Brand Activations", "locationCreated": {"@type": "Place", "name": "7th Avenue and Charles Street", "address": "West Village, Lower Manhattan, New York City"}, "genre": "Brand Activations", "keywords": "Polymarket free grocery store, West Village pop-up, retail activation New York, brand activation case study, experiential retail production", "url": "https://ghxstship.tours/work/polymarket-free-grocery-store"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ghxstship.tours/"}, {"@type": "ListItem", "position": 2, "name": "Work", "item": "https://ghxstship.tours/work"}, {"@type": "ListItem", "position": 3, "name": "The Polymarket", "item": "https://ghxstship.tours/work/polymarket-free-grocery-store"}]}` }} />
    </>
  );
}
