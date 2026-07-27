import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery \u2014 Photo & Video",
  description: "The GHXSTSHIP Gallery \u2014 photography and video from festivals, concerts and tours, brand activations, immersive experiences, and sporting events produced by GHXSTSHIP.",
  keywords: ["event production photography", "festival production photos", "live event video", "experiential production gallery"],
  alternates: { canonical: "https://ghxstship.tours/gallery" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .masonry { columns: 3; column-gap: 16px; margin-top: clamp(28px, 4vw, 44px); }
  @media (max-width: 960px) { .masonry { columns: 2; } }
  @media (max-width: 560px) { .masonry { columns: 1; } }
  .tile { display: block; text-decoration: none; color: inherit; break-inside: avoid; margin: 0 0 16px; border: 1px solid var(--color-divider); background: var(--color-bg); }
  .tile figure { overflow: hidden; }
  .tile img { width: 100%; height: 100%; object-fit: cover; }
  .tile .ar-45 { aspect-ratio: 4 / 5; }
  .tile .ar-11 { aspect-ratio: 1 / 1; }
  .tile .ar-169 { aspect-ratio: 16 / 9; }
  .tile .ar-34 { aspect-ratio: 3 / 4; }
  .tile .cap { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; padding: 10px 12px 12px; }
  .tile .cap b { font-family: var(--font-heading); font-weight: 800; font-size: 0.867rem; letter-spacing: 0.02em; text-transform: uppercase; }
  .tile:hover .cap b { color: var(--color-accent-700); }
  .gal-note { text-align: center; margin-top: clamp(24px, 4vw, 36px); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Gallery</p>
  <h1 className="page-h1">Beyond the Scenes.</h1>
  <p className="lede">Photography and video from our builds — festivals, concerts and tours, brand activations, immersive worlds, and game-day production, shot on site while the work was up. Every image opens full size in a new tab.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <div className="masonry">
    <a className="tile" href="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-45"><img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=80&auto=format&fit=crop" alt="Audio control surface in a live sound control room" width="900" height="1125"/></figure>
      <span className="cap"><b>L-Acoustics DJ · III Points</b><span className="tag tag-neutral">Technology</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-169"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80&auto=format&fit=crop" alt="Black Coffee performing, still from the aftermovie" loading="lazy" width="900" height="506"/></figure>
      <span className="cap"><b>Black Coffee · Aftermovie</b><span className="tag tag-neutral">Video</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-11"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop" alt="Supper club table set for service" loading="lazy" width="900" height="900"/></figure>
      <span className="cap"><b>Salvage City Supper Club</b><span className="tag tag-neutral">Hospitality</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-34"><img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80&auto=format&fit=crop" alt="Spirit poured over ice in a rocks glass" loading="lazy" width="900" height="1200"/></figure>
      <span className="cap"><b>PATRÓN x Becky G</b><span className="tag tag-neutral">Activation</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-45"><img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80&auto=format&fit=crop" alt="Nightclub crowd under stage lighting" loading="lazy" width="900" height="1125"/></figure>
      <span className="cap"><b>Heineken Turn 4 · F1 Las Vegas</b><span className="tag tag-neutral">Auto &amp; Motorsports</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-169"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop" alt="Broadcast camera operator during an on-air capture" loading="lazy" width="900" height="506"/></figure>
      <span className="cap"><b>On-Air Capture</b><span className="tag tag-neutral">Video</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-11"><img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop" alt="Produce aisle stocked in a grocery store" loading="lazy" width="900" height="900"/></figure>
      <span className="cap"><b>The Polymarket · New York City</b><span className="tag tag-neutral">Activation</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-169"><img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop" alt="Festival stage build, still from the time-lapse" loading="lazy" width="900" height="506"/></figure>
      <span className="cap"><b>Festival Build · Time-lapse</b><span className="tag tag-neutral">Video</span></span>
    </a>
    <a className="tile" href="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80&auto=format&fit=crop" target="_blank" rel="noopener">
      <figure className="grayscale ar-34"><img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80&auto=format&fit=crop" alt="Crowd at Factory Town, Miami" loading="lazy" width="900" height="1200"/></figure>
      <span className="cap"><b>Factory Town · Miami</b><span className="tag tag-neutral">Festival</span></span>
    </a>
  </div>
  <p className="gal-note text-muted">Placeholder imagery — real production photography &amp; video drop in here</p>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Put Your Show in <span className="a">the Frame.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ImageGallery","name":"GHXSTSHIP Gallery","url":"https://ghxstship.tours/gallery","about":"Photography and video from GHXSTSHIP experiential productions."}` }} />
    </>
  );
}
