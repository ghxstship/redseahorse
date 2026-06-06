import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Production Glossary",
  description: "The definitive glossary of experiential production, operations, and event technology terms \u2014 by GHXSTSHIP. Plain-language definitions of festival production, the production lifecycle, load-in, run of show, and more.",
  alternates: { canonical: "https://ghxstship.tours/resources/glossary" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
  .wrap{max-width:1000px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--brass)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 32px}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .brand img{width:34px;height:34px;image-rendering:pixelated}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;letter-spacing:0;text-transform:uppercase;white-space:nowrap}
  .nav-cta{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass);text-decoration:none}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .hero{padding:30px 0 50px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"◆";color:var(--nebula)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,72px);line-height:.88;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 16px}
  .lede{font-size:18px;line-height:1.6;color:var(--fg-on-dark-2);max-width:720px;margin:0}
  .terms{padding:40px 0 70px;display:grid;gap:0}
  .term{padding:26px 0;border-bottom:var(--stroke-2) solid var(--ink-3)}
  .term h2{font-family:var(--font-display);font-weight:800;font-size:26px;text-transform:uppercase;letter-spacing:-.005em;margin:0 0 10px;color:var(--bone)}
  .term p{font-size:16px;line-height:1.65;color:var(--fg-on-dark-2);margin:0;max-width:820px}
  .term .x{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--plasma);margin-top:10px;display:inline-block}
  .cta{padding:60px 0;text-align:center;border-top:var(--stroke-3) solid var(--brass);background:var(--ink)}
  .cta h3{font-family:var(--font-display);font-weight:900;font-size:36px;text-transform:uppercase;margin:0 0 18px}
  footer{padding:34px 0;text-align:center;font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3)}
/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .nav-inner .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .nav-inner .brand img{width:34px;height:34px;image-rendering:pixelated}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:17px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  .navlinks .cart{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:12px;color:var(--brass)}
  .navlinks .cart .n{background:var(--brass);color:var(--on-brass);border-radius:var(--r-pill);min-width:20px;height:20px;display:grid;place-items:center;font-size:11px;font-weight:700;padding:0 5px}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}.navlinks .cart{display:none}}
  .site-foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:46px 0 26px}
  .site-foot .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:30px}
  @media(max-width:820px){.site-foot .foot-grid{grid-template-columns:1fr 1fr}}
  .site-foot .brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none;margin-bottom:14px}
  .site-foot .brand img{width:30px;height:30px;image-rendering:pixelated}
  .site-foot .brand b{font-family:var(--font-display);font-weight:900;font-size:18px;text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .site-foot .foot-tag{font-family:var(--font-display);font-weight:700;font-size:17px;line-height:1.2;text-transform:uppercase;color:var(--brass);margin:0 0 12px;max-width:22rem}
  .site-foot .foot-ports{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 14px;display:flex;flex-wrap:nowrap;white-space:nowrap}
  .site-foot .foot-ports span:not(:first-child)::before{content:"\\00b7";margin:0 7px;color:var(--fg-on-dark-3)}
  @media(max-width:560px){.site-foot .foot-ports{flex-direction:column}.site-foot .foot-ports span:not(:first-child)::before{display:none}}
  .site-foot .foot-social{display:flex;gap:14px}
  .site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:20px;text-decoration:none}
  .site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 12px}
  .site-foot .foot-col a{display:block;font-size:13px;color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:9px}
  .site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:30px;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}
` }} />
      
<header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / Resources / <span style={{color: 'var(--brass)'}}>Glossary</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">Resources · The Field Guide</p>
  <h1>The Experiential<br/>Production Glossary</h1>
  <p className="lede">The industry's terms, defined plainly by the people who produce it. A reference for producers, brands, and the next generation learning the craft — part of the GHXSTSHIP commitment to training experiential producers.</p>
</div></section>
<section className="terms"><div className="wrap">
  <article className="term"><h2>Experiential Production</h2><p>The end-to-end creative and physical production of live experiences — festivals, concerts and tours, brand activations, immersive experiences, and sporting events — from concept through strike.</p><span className="x">Related: Production Lifecycle · Brand Activation</span></article>
  <article className="term"><h2>Production Lifecycle</h2><p>The structured, repeatable phases a live experience moves through from start to finish. GHXSTSHIP uses an eight-phase lifecycle: Project Discovery, Research &amp; Development, Creative Design, Compliance &amp; Risk Management, Production &amp; Build, Operations &amp; Logistics, Live Activation, and Strike &amp; Post-Production.</p><span className="x">The GHXSTSHIP methodology</span></article>
  <article className="term"><h2>Brand Activation</h2><p>A live, experiential marketing engagement that brings a brand to life through physical or immersive interaction with an audience, designed to drive awareness, affinity, and measurable action.</p></article>
  <article className="term"><h2>Immersive Experience</h2><p>A designed environment that audiences step inside and move through, using narrative, spatial design, and interactive technology to surround and engage them.</p></article>
  <article className="term"><h2>Load-In</h2><p>The scheduled process of transporting, installing, and assembling all production elements — staging, scenic, audio, lighting, video, and rigging — at a venue ahead of a live event.</p></article>
  <article className="term"><h2>Run of Show</h2><p>The minute-by-minute master document that sequences every cue, transition, and responsibility across departments during a live event, used by the show caller to run the event.</p></article>
  <article className="term"><h2>Show Caller</h2><p>The person who directs a live event in real time, calling cues to audio, lighting, video, and stage departments from the run of show.</p></article>
  <article className="term"><h2>Strike</h2><p>The controlled teardown, removal, and load-out of all production elements after a live event concludes, including reconciliation and site restoration.</p></article>
  <article className="term"><h2>Activation Footprint</h2><p>The total physical space and spatial layout a brand activation or installation occupies within a venue or site, including audience flow and technical zones.</p></article>
  <article className="term"><h2>Experiential Technology</h2><p>The software and integrated systems that power live experience production and audience engagement — including production management (ATLVS), workforce and crew management (COMPVSS), and ticketing platforms (GVTEWAY).</p></article>
</div></section>
<section className="cta"><div className="wrap">
  <h3>Learn the Ropes.</h3>
  <Link href="/team" className="gx-btn">Join the Crew</Link>
</div></section>
</main>
<footer className="site-foot"><div className="wrap">
  <div className="foot-grid">
    <div className="foot-brand">
      <Link href="/" className="brand"><img src="/assets/skull-bone.svg" alt=""/><b>G H X S T S H I P</b></Link>
      <p className="foot-tag" style={{color: 'var(--bone)'}}>The <span style={{color: 'var(--brass)'}}>General Contractor</span>, <span style={{color: 'var(--nebula)'}}>Foreman</span> &amp; <span style={{color: 'var(--plasma)'}}>Procore</span> of experiential project management.</p>
      <p className="foot-ports"><span>Miami</span><span>Las Vegas</span><span>Chicago</span><span>New York</span><span>Los Angeles</span></p>
      <div className="foot-social"><a href="https://instagram.com/ghxstship" aria-label="Instagram"><i className="ph-bold ph-instagram-logo"></i></a><a href="https://linkedin.com/company/ghxstship" aria-label="LinkedIn"><i className="ph-bold ph-linkedin-logo"></i></a><a href="https://youtube.com/@ghxstship" aria-label="YouTube"><i className="ph-bold ph-youtube-logo"></i></a><a href="https://tiktok.com/@ghxstship" aria-label="TikTok"><i className="ph-bold ph-tiktok-logo"></i></a><a href="https://x.com/ghxstship" aria-label="X"><i className="ph-bold ph-x-logo"></i></a></div>
    </div>
    <nav className="foot-col"><h5>Explore</h5><Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/#course">Course</Link><Link href="/work">Archives</Link><Link href="/resources/blog">Logs</Link><Link href="/gallery">Gallery</Link><Link href="/store">Museum</Link></nav>
    <nav className="foot-col"><h5>Company</h5><Link href="/about">The Story</Link><Link href="/locations">Home Ports</Link><Link href="/resources/glossary">Glossary</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link><Link href="/contact">Start a Project</Link></nav>
    <nav className="foot-col"><h5>Platforms</h5><Link href="/solutions">ATLVS</Link><Link href="/solutions">COMPVSS</Link><Link href="/solutions">GVTEWAY</Link></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"DefinedTermSet","name":"GHXSTSHIP Experiential Production Glossary","url":"https://ghxstship.tours/resources/glossary","hasDefinedTerm":[
 {"@type":"DefinedTerm","name":"Experiential Production","description":"The end-to-end creative and physical production of live experiences — festivals, concerts and tours, brand activations, immersive experiences, and sporting events — from concept through strike."},
 {"@type":"DefinedTerm","name":"Production Lifecycle","description":"The structured, repeatable phases a live experience moves through from start to finish. GHXSTSHIP uses an eight-phase lifecycle (XPMS): Discovery, Design, Advance, Procurement, Build, Install, Operate, and Close."},
 {"@type":"DefinedTerm","name":"Brand Activation","description":"A live, experiential marketing engagement that brings a brand to life through physical or immersive interaction with an audience, designed to drive awareness, affinity, and measurable action."},
 {"@type":"DefinedTerm","name":"Load-In","description":"The scheduled process of transporting, installing, and assembling all production elements — staging, scenic, audio, lighting, video, and rigging — at a venue ahead of a live event."},
 {"@type":"DefinedTerm","name":"Run of Show","description":"The minute-by-minute master document that sequences every cue, transition, and responsibility across departments during a live event, used by the show caller to run the event."},
 {"@type":"DefinedTerm","name":"Strike","description":"The controlled teardown, removal, and load-out of all production elements after a live event concludes, including reconciliation and site restoration."},
 {"@type":"DefinedTerm","name":"Activation Footprint","description":"The total physical space and spatial layout a brand activation or installation occupies within a venue or site, including audience flow and technical zones."},
 {"@type":"DefinedTerm","name":"Show Caller","description":"The person who directs a live event in real time, calling cues to audio, lighting, video, and stage departments from the run of show."},
 {"@type":"DefinedTerm","name":"Experiential Technology","description":"The software and integrated systems that power live experience production and audience engagement, including production management, workforce and crew management, and ticketing platforms."},
 {"@type":"DefinedTerm","name":"Immersive Experience","description":"A designed environment that audiences step inside and move through, using narrative, spatial design, and interactive technology to surround and engage them."}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},
 {"@type":"ListItem","position":2,"name":"Resources","item":"https://ghxstship.tours/resources"},
 {"@type":"ListItem","position":3,"name":"Glossary","item":"https://ghxstship.tours/resources/glossary"}
]}` }} />
    </>
  );
}
