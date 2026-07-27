import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIFA World Cup Brazil Base Camp | Case Study",
  description: "FIFA World Cup Brazil Base Camp, team base camp operations in New Jersey for the 2026 FIFA World Cup.",
  keywords: ["World Cup 2026 base camp", "team base camp operations", "New Jersey", "sporting event operations", "tournament hospitality production"],
  alternates: { canonical: "https://ghxstship.tours/work/fifa-world-cup-brazil-base-camp" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout only, every component comes from modernist.css */
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
  <p className="kicker">Case Study · Sporting Events</p>
  <h1 className="page-h1">FIFA World Cup Brazil Base Camp.</h1>
  <p className="lede">Base camp operations in New Jersey for the 2026 FIFA World Cup.</p>
  <div className="meta-tags">
    <span className="tag tag-neutral">Client · CBF · FIFA World Cup 26</span>
    <span className="tag tag-neutral">Venue · Team base camp</span>
    <span className="tag tag-neutral">New Jersey</span>
    <span className="tag tag-neutral">2026</span>
    <span className="tag tag-outline">Venue &amp; Site Operations, Tour &amp; Talent Management</span>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&q=80&auto=format&fit=crop" alt="Football stadium pitch under floodlights" width="1600" height="900"/>
  </figure>
</section>

<div className="band" style={{marginTop: 'clamp(32px,5vw,56px)'}}><div className="wrap facts-in">
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>FIFA World Cup 26</div><div className="k">Tournament</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>New Jersey</div><div className="k">Location</div></div>
  <div className="stat"><div className="v" style={{fontSize: 'clamp(19px,2vw,24px)'}}>Venue &amp; site operations</div><div className="k">Discipline</div></div>
</div></div>

<section className="wrap sec-pad"><div className="cs-body">

  <h2>The Challenge</h2>
  <p>A tournament base camp is a closed operation with a fixed occupant and no margin. It runs to a calendar set by the competition, with security, media and access regimes that are not negotiable, for a party whose only interest in the site is that it never becomes a distraction.</p>

  <h2>The Approach</h2>
  <p>Venue and site operations across the tournament window: logistics, workforce, vendor coordination, and the compliance and access control a tournament imposes, planned in Advance, run in Operate, closed out clean.</p>
  <div className="pull"><p>A base camp works when nobody notices it.</p></div>

  <h2>The Result</h2>
  <p>Details publish here as the tournament progresses and as they clear approval.</p>

  <h2>The Credits</h2>
  <p><strong>Client</strong> CBF · FIFA World Cup 26 · <strong>Venue</strong> New Jersey · <strong>Year</strong> 2026 · <strong>Services</strong> Venue &amp; Site Operations, Tour &amp; Talent Management.</p>

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



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "CreativeWork", "name": "FIFA World Cup Brazil Base Camp", "creator": {"@type": "Organization", "name": "GHXSTSHIP", "url": "https://ghxstship.tours/"}, "about": "Sporting Events", "locationCreated": {"@type": "Place", "name": "Team base camp", "address": "New Jersey, New Jersey"}, "genre": "Sporting Events", "keywords": "World Cup 2026 base camp, team base camp operations, New Jersey, sporting event operations, tournament hospitality production", "url": "https://ghxstship.tours/work/fifa-world-cup-brazil-base-camp"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://ghxstship.tours/"}, {"@type": "ListItem", "position": 2, "name": "Work", "item": "https://ghxstship.tours/work"}, {"@type": "ListItem", "position": 3, "name": "FIFA World Cup Brazil Base Camp", "item": "https://ghxstship.tours/work/fifa-world-cup-brazil-base-camp"}]}` }} />
    </>
  );
}
