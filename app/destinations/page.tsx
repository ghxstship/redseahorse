import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "The industries GHXSTSHIP serves: festivals and cultural moments, concerts and tours, brand activations, immersive experiences, sporting events, and TV, film and broadcast \u2014 plus health and wellness, hospitality, luxury retail, and motorsports.",
  keywords: ["festival production company", "concert tour production", "brand activation agency", "immersive experience design", "sporting event production", "broadcast production company", "experiential production industries"],
  alternates: { canonical: "https://ghxstship.tours/destinations" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .mcard { border: 1px solid var(--color-divider); background: var(--color-bg); text-decoration: none; color: inherit; display: flex; flex-direction: column; }
  .mcard .media { aspect-ratio: 4 / 3; overflow: hidden; }
  .mcard .media img { width: 100%; height: 100%; object-fit: cover; }
  .mcard .body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
  .mcard .bar { height: 3px; width: 44px; background: var(--color-accent); }
  .mcard h2 { font-size: 1.4rem; line-height: 1.05; margin: 0; }
  .mcard p { font-size: 0.867rem; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: none; }
  .mcard .more { margin-top: auto; padding-top: 6px; }
  .also-tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Industries</p>
  <h1 className="page-h1">Where We Work.</h1>
  <p className="lede">GHXSTSHIP produces experiential and entertainment work across the industries below. Tell us what you're building. We bring the right team and run the whole build, start to finish.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}>
  <div className="grid3">
    <Link href="/destinations/festival-production" className="mcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80&auto=format&fit=crop" alt="Festival crowd under multi-stage production lighting" loading="lazy" width="700" height="525"/></figure>
      <div className="body"><div className="bar"></div><h2>Festivals &amp; Cultural Moments</h2><p>Multi-stage festival production, infrastructure, and headliner experiences at scale.</p><span className="more">View industry →</span></div>
    </Link>
    <Link href="/destinations/concert-tour-production" className="mcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80&auto=format&fit=crop" alt="Concert crowd facing a lit stage" loading="lazy" width="700" height="525"/></figure>
      <div className="body"><div className="bar"></div><h2>Concerts &amp; Tours</h2><p>Concert touring, show production, and multi-city routing for live music.</p><span className="more">View industry →</span></div>
    </Link>
    <Link href="/destinations/brand-activations" className="mcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80&auto=format&fit=crop" alt="Brand activation environment with a live crowd" loading="lazy" width="700" height="525"/></figure>
      <div className="body"><div className="bar"></div><h2>Brand Activations</h2><p>Experiential marketing, pop-ups, and brand environments that convert.</p><span className="more">View industry →</span></div>
    </Link>
    <Link href="/destinations/immersive-experiences" className="mcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=700&q=80&auto=format&fit=crop" alt="Immersive light installation surrounding an audience" loading="lazy" width="700" height="525"/></figure>
      <div className="body"><div className="bar"></div><h2>Immersive Experiences</h2><p>Narrative installations and immersive worlds audiences step inside.</p><span className="more">View industry →</span></div>
    </Link>
    <Link href="/destinations/sporting-events" className="mcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&q=80&auto=format&fit=crop" alt="Stadium crowd on game day" loading="lazy" width="700" height="525"/></figure>
      <div className="body"><div className="bar"></div><h2>Sporting Events</h2><p>Stadium activations, fan experiences, and game-day production.</p><span className="more">View industry →</span></div>
    </Link>
    <Link href="/destinations/tv-film-broadcast" className="mcard">
      <figure className="media grayscale"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=700&q=80&auto=format&fit=crop" alt="Broadcast camera on a television production set" loading="lazy" width="700" height="525"/></figure>
      <div className="body"><div className="bar"></div><h2>TV, Film &amp; Broadcast</h2><p>Live broadcast, film and TV capture, and on-air activations.</p><span className="more">View industry →</span></div>
    </Link>
  </div>
</section>

<section className="band"><div className="wrap sec-pad-sm">
  <p className="kicker">Also Where We Work</p>
  <h2 style={{fontSize: 'clamp(24px,3vw,34px)'}}>Beyond the Big Six.</h2>
  <div className="also-tags">
    <span className="tag tag-neutral">Health &amp; Wellness</span>
    <span className="tag tag-neutral">Premium Hospitality</span>
    <span className="tag tag-neutral">Luxury Retail</span>
    <span className="tag tag-neutral">Water &amp; Motorsports</span>
    <span className="tag tag-neutral">Corporate &amp; Private</span>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Services</p>
  <h2 className="sec-h2">Four Verticals, Every Industry.</h2>
  <p className="lede">Whatever the industry, the same four services carry the build: we design and produce the experience, operate the venue and the site, manage the tour and the talent, and implement the technology.</p>
  <div className="grid4" style={{marginTop: '24px'}}>
    <Link href="/services/experiential-design-production" className="btn btn-secondary btn-block">Experiential Design &amp; Production</Link>
    <Link href="/services/venue-site-operations" className="btn btn-secondary btn-block">Venue &amp; Site Operations</Link>
    <Link href="/services/tour-talent-management" className="btn btn-secondary btn-block">Tour &amp; Talent Management</Link>
    <Link href="/services/technology-systems-implementation" className="btn btn-secondary btn-block">Technology &amp; Systems Implementation</Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Pick Your <span className="a">Industry.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/services/experiential-design-production" className="btn btn-secondary btn-lg">See the Services</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Industries","url":"https://ghxstship.tours/destinations","about":"The industries and kinds of projects GHXSTSHIP serves: festivals, concerts and tours, brand activations, immersive experiences, sporting events, and TV, film and broadcast."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://ghxstship.tours/destinations"}]}` }} />
    </>
  );
}
