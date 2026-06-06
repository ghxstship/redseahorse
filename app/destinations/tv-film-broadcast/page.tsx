import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV, Film & Broadcast \u2014 GHXSTSHIP",
  description: "GHXSTSHIP is a broadcast &amp; film production company in Miami \u2014 Las Vegas, Chicago, NY, LA for networks, studios, streamers &amp; brands \u2014 live broadcast, content capture &amp; on-air activations, via our 8-phase lifecycle.",
  alternates: { canonical: "https://ghxstship.tours/destinations/tv-film-broadcast" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);overflow-x:hidden;-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
  a{color:inherit}
  .wrap{max-width:1240px;margin:0 auto;padding:0 32px}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"◆";color:var(--nebula)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,5vw,64px);line-height:.92;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 14px}
  .answer{font-family:var(--font-body);font-size:20px;line-height:1.55;color:var(--fg-on-dark-1);max-width:820px;margin:0 0 14px;font-weight:500}
  .lede{font-size:17px;line-height:1.6;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  header.nav{position:sticky;top:0;z-index:50;background:rgba(6,8,21,.88);backdrop-filter:blur(10px);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .brand img{width:34px;height:34px;image-rendering:pixelated}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;letter-spacing:0;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:22px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1000px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .pad{padding:70px 0}
  .pad.alt{background:var(--ink);border-top:var(--stroke-4) solid var(--ink-3);border-bottom:4px solid var(--ink-3)}
  .hero{padding:34px 0 64px;position:relative;overflow:hidden}
  .hero::before{content:"";position:absolute;inset:0;background:radial-gradient(var(--ink-3) 1.4px,transparent 1.5px) 0 0/26px 26px;opacity:.45;-webkit-mask:radial-gradient(120% 90% at 70% 0%,#000,transparent);mask:radial-gradient(120% 90% at 70% 0%,#000,transparent)}
  .hero h1{font-family:var(--font-display);font-weight:900;font-size:clamp(48px,8vw,104px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:8px 0 18px;position:relative}
  .hero h1 .pop{color:var(--brass)}
  .hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:24px;position:relative}
  .caps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:34px}
  @media(max-width:760px){.caps{grid-template-columns:1fr}}
  .cap{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--fg-on-dark-2);background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-1);padding:14px 16px}
  .cap i{font-size:20px;color:var(--brass)}
  .aud{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
  .aud .gx-tag{background:var(--ink-2);color:var(--fg-on-dark-1);border-color:var(--ink-3)}
  .mu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}
  @media(max-width:760px){.mu-grid{grid-template-columns:1fr}}
  .mu{border:var(--stroke-3) solid var(--ink);border-radius:var(--r-1);overflow:hidden;background:var(--ink-2);box-shadow:var(--shadow-hard)}
  .mu .media{height:130px;display:grid;place-items:center;border-bottom:var(--stroke-3) solid var(--ink);position:relative}
  .mu .px{position:absolute;left:12px;top:12px}
  .mu .body{padding:18px}
  .mu h3{font-family:var(--font-display);font-weight:800;font-size:19px;text-transform:uppercase;margin:0 0 5px;line-height:1}
  .mu .meta{font-family:var(--font-mono);font-size:10px;letter-spacing:.08em;color:var(--fg-on-dark-3);text-transform:uppercase}
  .faq-list{margin-top:30px;border-top:var(--stroke-2) solid var(--ink-3)}
  .faq details{border-bottom:var(--stroke-2) solid var(--ink-3)}
  .faq summary{list-style:none;cursor:pointer;padding:20px 0;display:flex;justify-content:space-between;gap:20px;font-family:var(--font-display);font-weight:800;font-size:20px;text-transform:none;letter-spacing:-.01em;color:var(--bone)}
  .faq summary::-webkit-details-marker{display:none}
  .faq .ic{color:var(--brass);font-size:22px}.faq details[open] .ic{transform:rotate(45deg)}
  .faq .a{padding:0 0 22px;font-size:16px;line-height:1.6;color:var(--fg-on-dark-2);max-width:880px}
  .cta{padding:90px 0;text-align:center;position:relative;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.12}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,8vw,96px);line-height:.88;text-transform:uppercase;margin:0 0 22px;position:relative}
  footer{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0;text-align:center}
  footer .fm{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;color:var(--fg-on-dark-3);text-transform:uppercase}

  .hero-grid{display:grid;grid-template-columns:1.45fr .85fr;gap:48px;align-items:center}
  @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-fig{max-width:420px}}
  .hero-fig{position:relative;border:var(--stroke-3) solid var(--ink);border-radius:var(--r-2);overflow:hidden;box-shadow:var(--shadow-hard-lg);aspect-ratio:4/5;background:var(--ink-2);margin:0}
  .hero-fig img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(1.04) contrast(1.04)}
  .hero-fig figcaption{position:absolute;left:0;right:0;bottom:0;font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--bone);background:linear-gradient(transparent,rgba(6,12,12,.88));padding:30px 14px 12px}
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

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/destinations">Destinations</Link> / <span style={{color: 'var(--brass)'}}>TV, Film &amp; Broadcast</span></p></div>

<main>
<section className="hero"><div className="wrap"><div className="hero-grid">
  <div className="hero-copy">
    <p className="eyebrow">Destinations · TV · Film · Broadcast</p>
    <h1>TV, Film<br/><span className="pop">&amp; Broadcast</span></h1>
    <p className="answer">GHXSTSHIP is a full-service <strong>broadcast, film, and television production company</strong> headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We deliver live broadcast, content capture, and on-air activations — for networks, studios, streamers, and brands — through our eight-phase production lifecycle.</p>
    <div className="hero-cta">
      <a className="gx-btn" href="mailto:hello@ghxstship.tours">Start a Project</a>
      <Link href="/destinations" className="gx-btn gx-btn--ghost">All Destinations &#8599;</Link>
    </div>
  </div>
  <figure className="hero-fig"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop" alt="TV, Film & Broadcast" loading="lazy"/><figcaption>TV, Film & Broadcast</figcaption></figure>
</div></div></section>

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">What We Build</p>
  <h2 className="sec">On Air, On Time.</h2>
  <div className="caps">
    <div className="cap"><i className="ph-bold ph-broadcast"></i>Live broadcast production</div>
    <div className="cap"><i className="ph-bold ph-cube"></i>Set design &amp; scenic</div>
    <div className="cap"><i className="ph-bold ph-video-camera"></i>Camera, audio &amp; lighting</div>
    <div className="cap"><i className="ph-bold ph-film-slate"></i>Content capture &amp; post</div>
    <div className="cap"><i className="ph-bold ph-megaphone-simple"></i>On-air activations</div>
    <div className="cap"><i className="ph-bold ph-shield-check"></i>Compliance &amp; insurance</div>
  </div>
</div></section>

<section className="pad"><div className="wrap">
  <p className="eyebrow">The Course</p>
  <h2 className="sec">Broadcast, Eight Phases.</h2>
  <p className="lede">Every project follows the same proven course — eight phases, Discovery to Close.</p>
  <div className="gx-smap" style={{marginTop: '40px'}}><div className="gx-smap__line">
    <div className="gx-smap__stop is-terminus"><div className="gx-smap__dot">01</div><div className="gx-smap__name">Discovery</div><div className="gx-smap__sub">Consult</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">02</div><div className="gx-smap__name">Design</div><div className="gx-smap__sub">Concept</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">03</div><div className="gx-smap__name">Advance</div><div className="gx-smap__sub">Advance</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">04</div><div className="gx-smap__name">Procurement</div><div className="gx-smap__sub">Procure</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">05</div><div className="gx-smap__name">Build</div><div className="gx-smap__sub">Fabricate</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">06</div><div className="gx-smap__name">Install</div><div className="gx-smap__sub">Install</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">07</div><div className="gx-smap__name">Operate</div><div className="gx-smap__sub">Live</div></div>
    <div className="gx-smap__stop is-terminus"><div className="gx-smap__dot">08</div><div className="gx-smap__name">Close</div><div className="gx-smap__sub">Close-out</div></div>
  </div></div>
</div></section>

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">Who We Build For</p>
  <h2 className="sec">Built for Networks, Studios &amp; Streamers.</h2>
  <p className="answer">Broadcast work at GHXSTSHIP is built for the teams accountable for what airs.</p>
  <div className="aud"><span className="gx-tag">Networks</span><span className="gx-tag">Studios</span><span className="gx-tag">Streamers</span><span className="gx-tag">Brands</span><span className="gx-tag">Producers</span></div>
</div></section>

<section className="pad"><div className="wrap">
  <p className="eyebrow">The Archives</p>
  <h2 className="sec">Broadcasts, Charted.</h2>
  <div className="mu-grid"><article className="mu" style={{gridColumn: '1/-1'}}><div className="body" style={{textAlign: 'center', padding: '40px'}}><h3>Now Charting</h3><p className="meta" style={{marginTop: '8px'}}>New broadcast work is on the board. Want to be the first case study? Start a project.</p><a className="gx-btn gx-btn--sm" style={{marginTop: '18px'}} href="mailto:hello@ghxstship.tours">Start a Project</a></div></article>
  </div>
</div></section>

{/* THE DIFFERENCE */}
<section className="pad" id="difference" aria-labelledby="diff-h"><div className="wrap">
  <p className="eyebrow">Why GHXSTSHIP</p>
  <h2 className="sec">The Difference.</h2>
  <p className="answer">Most experiential and brand-activation agencies stop at creative and hand you to a chain of vendors. GHXSTSHIP owns the entire voyage — and builds the technology that powers it.</p>
  <div className="caps" style={{marginTop: '34px'}}>
    <div className="cap"><i className="ph-bold ph-path"></i><b style={{color: 'var(--bone)'}}>End to end</b> — all 8 phases, one accountable crew, not just creative.</div>
    <div className="cap"><i className="ph-bold ph-compass-tool"></i><b style={{color: 'var(--bone)'}}>We implement the tech</b> — ATLVS, COMPVSS &amp; GVTEWAY, in-house.</div>
    <div className="cap"><i className="ph-bold ph-shield-check"></i><b style={{color: 'var(--bone)'}}>Ops as a discipline</b> — logistics, crew &amp; compliance, a full vertical.</div>
  </div>
</div></section>

<section className="pad alt faq"><div className="wrap">
  <p className="eyebrow">Answers</p>
  <h2 className="sec">Broadcast FAQ.</h2>
  <div className="faq-list">
    <details open><summary>How is GHXSTSHIP different from a traditional agency?<span className="ic">+</span></summary><p className="a">Three ways: we own the full eight-phase production lifecycle end to end (not just creative), we build our own technology (ATLVS, COMPVSS, GVTEWAY), and Operations — logistics, crew, compliance, and analytics — is a dedicated vertical, not an afterthought.</p></details>
    <details><summary>What does GHXSTSHIP do for TV, film and broadcast?<span className="ic">+</span></summary><p className="a">End-to-end broadcast production: live broadcast, set design and scenic, camera/audio/lighting, content capture and post, on-air activations, and compliance — on our eight-phase lifecycle.</p></details>
    <details><summary>Who is broadcast production for?<span className="ic">+</span></summary><p className="a">Networks, studios, streamers, and brands that need a production partner from set build to air.</p></details>
    <details><summary>Do you handle live and captured content?<span className="ic">+</span></summary><p className="a">Yes — live broadcast and captured/post content, plus on-air brand activations.</p></details>
  </div>
</div></section>

<section className="cta"><div className="wrap">
  <p className="eyebrow" style={{justifyContent: 'center'}}>Ready When You Are</p>
  <h2>Chart Your<br/>Broadcast.</h2>
  <div className="hero-cta" style={{justifyContent: 'center'}}>
    <a className="gx-btn gx-btn--lg" href="mailto:hello@ghxstship.tours">Start a Project</a>
    <Link href="/#work" className="gx-btn gx-btn--ghost gx-btn--lg">See the Archives</Link>
  </div>
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


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"TV, Film &amp; Broadcast","serviceType":"Broadcast, film and television production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"Live broadcast, film and TV content capture, and on-air activations, delivered through the GHXSTSHIP eight-phase production lifecycle.","audience":{"@type":"Audience","audienceType":"Networks, studios, streamers, and brands"},"url":"https://ghxstship.tours/destinations/tv-film-broadcast"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},
 {"@type":"ListItem","position":2,"name":"Destinations","item":"https://ghxstship.tours/#destinations"},
 {"@type":"ListItem","position":3,"name":"TV, Film &amp; Broadcast","item":"https://ghxstship.tours/destinations/tv-film-broadcast"}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full eight-phase production lifecycle end to end (not just creative), we build our own technology (ATLVS, COMPVSS, and GVTEWAY), and Operations — logistics, crew, compliance, and analytics — is a dedicated vertical rather than an afterthought."}},
 {"@type":"Question","name":"What does GHXSTSHIP do for TV, film and broadcast?","acceptedAnswer":{"@type":"Answer","text":"End-to-end broadcast production: live broadcast, set design and scenic, camera/audio/lighting, content capture and post, on-air activations, and compliance — on our eight-phase lifecycle."}},
 {"@type":"Question","name":"Who is broadcast production for?","acceptedAnswer":{"@type":"Answer","text":"Networks, studios, streamers, and brands that need a production partner from set build to air."}},
 {"@type":"Question","name":"Do you handle live and captured content?","acceptedAnswer":{"@type":"Answer","text":"Yes — live broadcast and captured/post content, plus on-air brand activations."}}
]}` }} />
      <Script src="/phase-detail.js" strategy="afterInteractive" />
    </>
  );
}
