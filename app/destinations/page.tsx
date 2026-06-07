import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations \u2014 Industries We Produce",
  description: "GHXSTSHIP produces experiential and entertainment productions across festivals, concerts and tours, brand activations, immersive experiences, sporting events, and TV, film and broadcast \u2014 plus health and wellness, hospitality, luxury retail, and motorsports.",
  alternates: { canonical: "https://ghxstship.tours/destinations" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 40px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 16px}
  h1 .pop{color:var(--brass)}
  .answer{font-size:20px;line-height:1.55;color:var(--fg-on-dark-1);max-width:840px;margin:0;font-weight:500}
  .pad{padding:54px 0}
  .dgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:8px}
  @media(max-width:880px){.dgrid{grid-template-columns:1fr 1fr}}@media(max-width:540px){.dgrid{grid-template-columns:1fr}}
  .dc{display:block;text-decoration:none;background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:26px;transition:transform var(--dur-2),border-color var(--dur-2),box-shadow var(--dur-2)}
  .dc:hover{transform:translate(-3px,-3px);border-color:var(--brass);box-shadow:var(--shadow-hard)}
  .dc i{font-size:34px;color:var(--brass)}
  .dc h2{font-family:var(--font-display);font-weight:900;font-size:25px;text-transform:uppercase;margin:14px 0 8px;line-height:.98}
  .dc p{font-size:14px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .dc .go{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass);margin-top:12px;display:inline-block}
  .more{margin-top:30px;padding-top:24px;border-top:var(--stroke-2) solid var(--ink-3)}
  .more p.l{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 12px}
  .tags{display:flex;gap:9px;flex-wrap:wrap}
  .tags span{font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-2);border:var(--stroke-1) solid var(--ink-3);border-radius:var(--r-pill);padding:7px 13px}
  .cta{padding:74px 0;text-align:center;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,6vw,72px);line-height:.9;text-transform:uppercase;margin:0 0 22px}
  .cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
  /*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .nav-inner .brand{display:flex;align-items:center;gap:12px;text-decoration:none}.nav-inner .brand img{width:34px;height:34px}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:17px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}}
  .site-foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:46px 0 26px}
  .site-foot .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:30px}
  @media(max-width:820px){.site-foot .foot-grid{grid-template-columns:1fr 1fr}}
  .site-foot .brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none;margin-bottom:14px}
  .site-foot .brand img{width:30px;height:30px}
  .site-foot .brand b{font-family:var(--font-display);font-weight:900;font-size:18px;text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .site-foot .foot-tag{font-family:var(--font-display);font-weight:700;font-size:17px;line-height:1.2;text-transform:uppercase;color:var(--brass);margin:0 0 12px;max-width:22rem}
  .site-foot .foot-ports{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 14px;display:flex;flex-wrap:nowrap;white-space:nowrap}
  .site-foot .foot-ports span:not(:first-child)::before{content:"\\00b7";margin:0 7px;color:var(--fg-on-dark-3)}
  @media(max-width:560px){.site-foot .foot-ports{flex-direction:column}.site-foot .foot-ports span:not(:first-child)::before{display:none}}
  .site-foot .foot-social{display:flex;gap:14px}.site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:20px;text-decoration:none}.site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 12px}
  .site-foot .foot-col a{display:block;font-size:13px;color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:9px}.site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:30px;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}
` }} />
      
<header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>Destinations</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">Destinations</p>
  <h1>Where We <span className="pop">Sail.</span></h1>
  <p className="answer">GHXSTSHIP produces experiential and entertainment work across the industries below — each a destination on the board. Pick where you're headed; we bring the right ship from the Fleet and crew the build end to end.</p>
</div></section>
<section className="pad"><div className="wrap">
  <div className="dgrid">
    <Link href="/destinations/festival-production" className="dc"><i className="ph-bold ph-confetti"></i><h2>Festivals &amp; Cultural Moments</h2><p>Multi-stage festival production, infrastructure, and headliner experiences at scale.</p><span className="go">View destination</span></Link>
    <Link href="/destinations/concert-tour-production" className="dc"><i className="ph-bold ph-music-notes"></i><h2>Concerts &amp; Tours</h2><p>Concert touring, show production, and multi-city routing for live music.</p><span className="go">View destination</span></Link>
    <Link href="/destinations/brand-activations" className="dc"><i className="ph-bold ph-storefront"></i><h2>Brand Activations</h2><p>Experiential marketing, pop-ups, and brand environments that convert.</p><span className="go">View destination</span></Link>
    <Link href="/destinations/immersive-experiences" className="dc"><i className="ph-bold ph-planet"></i><h2>Immersive Environments</h2><p>Narrative installations and immersive worlds audiences step inside.</p><span className="go">View destination</span></Link>
    <Link href="/destinations/sporting-events" className="dc"><i className="ph-bold ph-flag-checkered"></i><h2>Sporting Events</h2><p>Stadium activations, fan experiences, and game-day production.</p><span className="go">View destination</span></Link>
    <Link href="/destinations/tv-film-broadcast" className="dc"><i className="ph-bold ph-television-simple"></i><h2>TV, Film &amp; Broadcast</h2><p>Live broadcast, film and TV capture, and on-air activations.</p><span className="go">View destination</span></Link>
  </div>
  <div className="more">
    <p className="l">Also on the board</p>
    <div className="tags"><span>Health &amp; Wellness</span><span>Premium Hospitality</span><span>Luxury Retail</span><span>Water &amp; Motorsports</span><span>Corporate &amp; Private</span></div>
  </div>
</div></section>
<section className="cta"><div className="wrap"><h2>Pick Your<br/>Destination.</h2>
  <div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/solutions" className="gx-btn gx-btn--ghost gx-btn--lg">See the Fleet</Link></div>
</div></section>
</main>
<footer className="site-foot"><div className="wrap">
  <div className="foot-grid">
    <div className="foot-brand"><Link href="/" className="brand"><img src="/assets/skull-bone.svg" alt=""/><b>G H X S T S H I P</b></Link>
      <p className="foot-tag" style={{color: 'var(--bone)'}}>The <span style={{color: 'var(--brass)'}}>General Contractor</span>, <span style={{color: 'var(--nebula)'}}>Foreman</span> &amp; <span style={{color: 'var(--plasma)'}}>Procore</span> of experiential project management.</p>
      <p className="foot-ports"><span>Miami</span><span>Las Vegas</span><span>Chicago</span><span>New York</span><span>Los Angeles</span></p>
      <div className="foot-social"><a href="https://instagram.com/ghxstship" aria-label="Instagram"><i className="ph-bold ph-instagram-logo"></i></a><a href="https://linkedin.com/company/ghxstship" aria-label="LinkedIn"><i className="ph-bold ph-linkedin-logo"></i></a><a href="https://youtube.com/@ghxstship" aria-label="YouTube"><i className="ph-bold ph-youtube-logo"></i></a><a href="https://tiktok.com/@ghxstship" aria-label="TikTok"><i className="ph-bold ph-tiktok-logo"></i></a><a href="https://x.com/ghxstship" aria-label="X"><i className="ph-bold ph-x-logo"></i></a></div></div>
    <nav className="foot-col"><h5>Explore</h5><Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/course">Course</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link></nav>
    <nav className="foot-col"><h5>Company</h5><Link href="/about">The Story</Link><Link href="/careers">Careers</Link><Link href="/locations">Home Ports</Link><Link href="/contact">Contact</Link><Link href="/contact">Start a Project</Link></nav>
    <nav className="foot-col"><h5>Platforms</h5><a href="https://atlvs.pro">ATLVS</a><a href="https://atlvs.pro/compvss">COMPVSS</a><a href="https://atlvs.pro/gvteway">GVTEWAY</a></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Destinations","url":"https://ghxstship.tours/destinations","about":"Industries and experience types GHXSTSHIP produces."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Destinations","item":"https://ghxstship.tours/destinations"}]}` }} />
    </>
  );
}
