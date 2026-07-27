import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salvage City Supper Club \u2014 Case Study",
  description: "How GHXSTSHIP designed, built, and ran Salvage City Supper Club \u2014 a premium hospitality supper-club experience at EDC Las Vegas. The challenge, the full-lifecycle approach, and the results.",
  keywords: ["premium hospitality case study", "experiential production", "supper club", "EDC Las Vegas", "festival hospitality production"],
  alternates: { canonical: "https://ghxstship.tours/work/salvage-city-supper-club" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .meta-tags { display: flex; gap: 8px; flex-wrap: wrap; margin: 18px 0 0; }
  .hero-fig { aspect-ratio: 16 / 9; overflow: hidden; border: 1px solid var(--color-divider); margin-top: clamp(24px, 4vw, 40px); }
  .hero-fig img { width: 100%; height: 100%; object-fit: cover; }
  .results-in { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding-block: clamp(28px, 4vw, 44px); }
  @media (max-width: 720px) { .results-in { grid-template-columns: repeat(2, 1fr); } }
  .cs-body { max-width: 55rem; }
  .cs-body h2 { font-size: clamp(24px, 3vw, 34px); margin-top: clamp(32px, 5vw, 56px); }
  .cs-body p { font-size: 1.067rem; line-height: 1.7; color: color-mix(in srgb, var(--color-text) 78%, transparent); max-width: 68ch; }
  .cs-body strong { color: var(--color-text); }
  .pull { border-left: 4px solid var(--color-accent); padding-left: 20px; margin: clamp(24px, 4vw, 36px) 0; }
  .pull p { font-family: var(--font-heading); font-weight: 800; font-size: clamp(19px, 2.4vw, 26px); line-height: 1.2; text-transform: uppercase; color: var(--color-text); margin: 0; max-width: 34ch; }
  .more-grid { margin-top: clamp(24px, 4vw, 36px); }
  .wcard:hover h3 { color: var(--color-accent-700); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Case Study · Immersive Experience</p>
  <h1 className="page-h1">Salvage City Supper Club.</h1>
  <p className="lede">A premium supper-club world installed, run, and struck inside a working festival footprint — designed, built, and crewed end to end by GHXSTSHIP.</p>
  <div className="meta-tags">
    <span className="tag tag-neutral">Client · Insomniac</span>
    <span className="tag tag-neutral">Industry · Premium Hospitality</span>
    <span className="tag tag-neutral">Venue · EDC Las Vegas</span>
    <span className="tag tag-neutral">Year · 2025–26</span>
    <span className="tag tag-outline">Scope · Full Build · Full Lifecycle</span>
  </div>
  <figure className="hero-fig grayscale">
    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop" alt="Supper club table set for service" width="1600" height="900"/>
  </figure>
</section>

<div className="band" style={{marginTop: 'clamp(32px,5vw,56px)'}}><div className="wrap results-in">
  <div className="stat"><div className="v">[00K]</div><div className="k">Guests Hosted</div></div>
  <div className="stat"><div className="v">[00M]</div><div className="k">Social Impressions</div></div>
  <div className="stat"><div className="v">[00%]</div><div className="k">Capacity Sell-Through</div></div>
  <div className="stat"><div className="v">[00]</div><div className="k">Days Concept-to-Live</div></div>
</div></div>

<section className="wrap sec-pad"><div className="cs-body">

  <h2>The Challenge</h2>
  <p>Insomniac needed a premium supper-club experience that could live inside <strong>EDC Las Vegas</strong> — a footprint with its own identity, technical constraints, and an audience that has seen everything. The brief: a fully realized world that felt like a place guests had stumbled onto, and that could be installed, run, and struck without disrupting the festival's ongoing programming.</p>
  <p>The constraints were real: a fixed footprint, a hard load-in window, and a guest experience that had to feel intimate at scale.</p>

  <h2>The Approach</h2>
  <p>GHXSTSHIP ran the full <strong>production lifecycle</strong>, Discover through Close. Discover defined the narrative world and tested it against the venue. Design delivered the scenic language; Advance cleared the build against venue and fire-code requirements and locked the schedule around the room's calendar.</p>
  <p>Procure and Build fabricated a modular scenic package designed for the load-in window. Install sequenced crew and freight around the venue's programming. Operate ran the room nightly; Close returned the space clean — with a full reconciliation and analytics report.</p>
  <div className="pull"><p>"A world guests felt they'd stumbled onto, installed and run and struck on the venue's clock."</p></div>

  <h2>The Result</h2>
  <p>The room ran nightly on the venue's clock, and the space went back clean, with a full reconciliation and analytics report delivered at close. Final attendance, sell-through, and reach figures publish here as they clear client review.</p>
  <p>Salvage City is now a repeatable GHXSTSHIP format — proof that an immersive world can be delivered to a working venue without compromise.</p>

  <h2>The Credits</h2>
  <p><strong>Client</strong> Insomniac · <strong>Venue</strong> EDC Las Vegas · <strong>Year</strong> 2025–26 · <strong>Scope</strong> Full build across the entire production lifecycle · <strong>Services</strong> Experiential Design &amp; Production, Venue &amp; Site Operations, and Technology &amp; Systems Engineering.</p>

</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">More Work</p>
  <h2 className="sec-h2-sm">From the Archives.</h2>
  <div className="grid3 more-grid">
    <Link href="/work" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80&auto=format&fit=crop" alt="Audio control surface in a live sound control room" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>L-Acoustics DJ</h3><p className="meta">Technology Implementation · III Points Miami · 2025–present</p></div>
    </Link>
    <Link href="/work" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop" alt="Black Coffee at the Race Track" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>Black Coffee at the Race Track</h3><p className="meta">Concerts &amp; Tours · Club Space Miami · 2026</p></div>
    </Link>
    <Link href="/work" className="wcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&auto=format&fit=crop" alt="Produce aisle stocked in a grocery store" loading="lazy" width="800" height="600"/></figure>
      <div className="body"><h3>The Polymarket</h3><p className="meta">Brand Activation · New York City · 2026</p></div>
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



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CreativeWork","name":"Salvage City Supper Club","creator":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"about":"Premium hospitality production","locationCreated":{"@type":"Place","name":"EDC Las Vegas"},"datePublished":"2025-05","genre":"Premium Hospitality","keywords":"premium hospitality, experiential production, supper club, Las Vegas, EDC","url":"https://ghxstship.tours/work/salvage-city-supper-club"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Work","item":"https://ghxstship.tours/work"},{"@type":"ListItem","position":3,"name":"Salvage City Supper Club","item":"https://ghxstship.tours/work/salvage-city-supper-club"}]}` }} />
    </>
  );
}
