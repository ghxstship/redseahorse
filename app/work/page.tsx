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
  .wcard { border: 1px solid var(--color-divider); text-decoration: none; color: inherit; display: flex; flex-direction: column; background: var(--color-bg); }
  a.wcard:hover h3 { color: var(--color-accent-700); }
  .wcard .media { aspect-ratio: 4 / 3; overflow: hidden; }
  .wcard .media img { width: 100%; height: 100%; object-fit: cover; }
  .wcard .body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px; align-items: flex-start; }
  .wcard h3 { font-size: 18px; margin: 0; }
  .wcard .meta { font-size: 12px; color: color-mix(in srgb, var(--color-text) 60%, transparent); margin: 0; }
  .wcard .go { font-family: var(--font-heading); font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-accent-700); margin-top: 2px; }
  .close-cta { text-align: center; padding-block: clamp(56px, 8vw, 110px); }
  .close-cta h2 { font-size: clamp(36px, 5.5vw, 72px); letter-spacing: -0.025em; line-height: 0.96; margin-bottom: 18px; }
  .close-cta h2 .a { color: var(--color-accent); }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Selected Work</p>
  <h1 className="page-h1">Every Build, Logged.</h1>
  <p className="lede">These are our case studies: shows we designed, built, crewed, and ran end to end across every industry we work — festivals, concerts and tours, brand activations, immersive experiences, and sporting events. The numbers here are the ones that actually moved.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <div className="grid3 work-grid">
    <Link href="/work/salvage-city-supper-club" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop" alt="Salvage City Supper Club" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Immersive</span><h3>Salvage City Supper Club</h3><p className="meta">Club Space Miami · 2025</p><span className="go">Read the case study →</span></div>
    </Link>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop" alt="EDC Las Vegas" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Festival</span><h3>EDC Las Vegas</h3><p className="meta">Insomniac, Las Vegas · 2025–26</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop" alt="Black Coffee at the Race Track" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Concerts &amp; Tours</span><h3>Black Coffee at the Race Track</h3><p className="meta">Club Space Miami · 2026</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop" alt="Polymarket Grocery Store" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Brand Activation</span><h3>Polymarket Grocery Store</h3><p className="meta">2026</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop" alt="PATRÓN Cristalino x Becky G" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Product Launch</span><h3>PATRÓN Cristalino x Becky G</h3><p className="meta">Los Angeles · 2024</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80&auto=format&fit=crop" alt="Heineken Turn 4 Nightclub" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Sporting Events</span><h3>Heineken Turn 4 Nightclub</h3><p className="meta">F1 Las Vegas · 2024</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80&auto=format&fit=crop" alt="Formula 1 Las Vegas Grand Prix" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Sporting Events</span><h3>Formula 1 Las Vegas Grand Prix</h3><p className="meta">Las Vegas · 2023</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop" alt="Factory Town" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Venue &amp; Site Operations</span><h3>Factory Town</h3><p className="meta">Miami · 2023</p></div>
    </article>
    <article className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop" alt="Red Bull Unforeseen Motel" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><span className="tag tag-neutral">Brand Activation</span><h3>Red Bull Unforeseen Motel</h3><p className="meta">III Points Miami · 2023</p></div>
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
