import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected work from GHXSTSHIP \u2014 festivals, concerts and tours, brand activations, immersive experiences, and sporting events designed, built, crewed, and launched end to end.",
  keywords: ["experiential production portfolio", "festival production case studies", "brand activation work", "immersive experience production", "live event production company"],
  alternates: { canonical: "https://ghxstship.tours/work/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .work-grid { margin-top: clamp(28px, 4vw, 44px); }
  a.wcard:hover h2 { color: var(--color-accent-700); }
  .wcard .body { display: flex; flex-direction: column; gap: 8px; align-items: flex-start; }
  .wcard h2 { margin: 0; }
  .wcard .go { font-family: var(--font-heading); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-accent-700); margin-top: 2px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Selected Work</p>
  <h1 className="page-h1">Every Build, Logged.</h1>
  <p className="lede">These are our case studies: shows we designed, built, crewed, and ran end to end across every industry we work — festivals, concerts and tours, brand activations, immersive experiences, premium hospitality, technology implementation, auto and motorsports, and sporting events. The numbers here are the ones that actually moved.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <div className="grid3 work-grid">
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format&fit=crop" alt="Audio control surface in a live sound control room" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Technology Implementation</span><h2>L-Acoustics DJ</h2><p className="meta">III Points Miami · 2025–present</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80&auto=format&fit=crop" alt="Football stadium pitch under floodlights" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Sporting Events</span><h2>FIFA World Cup Brazil Base Camp</h2><p className="meta">New Jersey · 2026</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop" alt="Black Coffee at the Race Track" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Concerts &amp; Tours</span><h2>Black Coffee at the Race Track</h2><p className="meta">Club Space Miami · 2026</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop" alt="Produce aisle stocked in a grocery store" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Brand Activation</span><h2>The Polymarket: New York's First Free Grocery Store</h2><p className="meta">New York City · 2026</p></div>
    </article>
    <Link href="/work/salvage-city-supper-club" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop" alt="Supper club table set for service" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Premium Hospitality</span><h2>Salvage City Supper Club</h2><p className="meta">EDC Las Vegas · 2025–26</p><span className="go">Read the case study →</span></div>
    </Link>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80&auto=format&fit=crop" alt="Crowd in a warehouse venue under structural lighting" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Venue &amp; Site Operations</span><h2>Factory Town</h2><p className="meta">Miami · 2023–25</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&auto=format&fit=crop" alt="Nightclub crowd under stage lighting" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Auto &amp; Motorsports</span><h2>Heineken Turn 4 Nightclub</h2><p className="meta">F1 Las Vegas · 2024</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1727842568394-f7b5f2db1e90?w=800&q=80&auto=format&fit=crop" alt="Weathered neon MOTEL sign lit at dusk" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Brand Activation</span><h2>Red Bull Unforeseen Motel</h2><p className="meta">III Points Miami · 2024</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80&auto=format&fit=crop" alt="Spirit poured over ice in a rocks glass" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Product Launch</span><h2>PATRÓN Cristalino x Becky G</h2><p className="meta">Los Angeles · 2024</p></div>
    </article>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Add Your Build to <span className="a">the Archives.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/destinations" className="btn btn-secondary btn-lg">See the Industries</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Selected Work","url":"https://ghxstship.tours/work/","description":"Selected work from GHXSTSHIP: festivals, concerts and tours, brand activations, immersive experiences, and sporting events designed, built, crewed, and launched end to end."}` }} />
    </>
  );
}
