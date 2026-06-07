import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story",
  description: "GHXSTSHIP is the general contractor, foreman, and Procore of experiential project management \u2014 a full-service experiential production, operations, and technology company in Miami, Las Vegas, Chicago, New York, and Los Angeles.",
  alternates: { canonical: "https://ghxstship.tours/about" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:22px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:980px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 56px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7.5vw,88px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
  h1 .pop{color:var(--brass)}
  .lede{font-size:18px;line-height:1.62;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .answer{font-size:20px;line-height:1.55;color:var(--fg-on-dark-1);max-width:820px;margin:0;font-weight:500}
  .pad{padding:64px 0}
  .pad.alt{background:var(--ink);border-top:var(--stroke-3) solid var(--ink-3);border-bottom:var(--stroke-3) solid var(--ink-3)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(32px,4.4vw,52px);line-height:.94;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 14px}
  .cta{padding:84px 0;text-align:center;position:relative;overflow:hidden;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.1}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,84px);line-height:.9;text-transform:uppercase;margin:0 0 22px;position:relative}
  .cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0 30px}
  .foot-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:center}
  .foot-links{display:flex;gap:18px;flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .foot-links a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3)}
  .pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:36px 0 0}@media(max-width:880px){.pgrid{grid-template-columns:1fr}}
  .pc{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:26px}
  .pc .bar{height:6px;width:54px;border-radius:2px;margin-bottom:18px;background:var(--brass)}
  .pc:nth-child(2) .bar{background:var(--nebula)}.pc:nth-child(3) .bar{background:var(--plasma)}
  .pc .role{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass)}
  .pc:nth-child(2) .role{color:var(--nebula)}.pc:nth-child(3) .role{color:var(--plasma)}
  .pc h3{font-family:var(--font-display);font-weight:900;font-size:28px;text-transform:uppercase;margin:8px 0 8px;line-height:.95}
  .pc p{font-size:14px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .band{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;padding:40px 0 0}@media(max-width:680px){.band{grid-template-columns:1fr 1fr}}
  .st .v{font-family:var(--font-display);font-weight:900;font-size:56px;line-height:.9;color:var(--brass)}
  .st:nth-child(2) .v{color:var(--nebula)}.st:nth-child(3) .v{color:var(--plasma)}.st:nth-child(4) .v{color:var(--bone)}
  .st .k{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);margin-top:8px}
/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .nav-inner .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .nav-inner .brand img{width:34px;height:34px}
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
  .site-foot .brand img{width:30px;height:30px}
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
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Story</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Story &middot; Beyond the Scenes</p>
  <h1>We Build the<br/><span className="pop">Whole Ship.</span></h1>
  <p className="answer">GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with home ports in Las Vegas, Chicago, New York, and Los Angeles. We are the general contractor, foreman, and Procore of experiential project management &mdash; one accountable partner owning scope, schedule, budget, crew, and technology from first line to launch.</p>
</div></section>
<section className="pad alt"><div className="wrap">
  <p className="eyebrow">How We're Built</p>
  <h2 className="sec">Three Vessels. One Yard.</h2>
  <p className="lede">Production = Operations + Technology. The general contractor builds it, the foreman runs it, the platform coordinates it.</p>
  <div className="pgrid">
    <div className="pc"><div className="bar"></div><p className="role">The General Contractor</p><h3>Production</h3><p>We build the ship &mdash; scope, schedule, budget, fabrication, staging, and the finish, owned end to end.</p></div>
    <div className="pc"><div className="bar"></div><p className="role">The Foreman</p><h3>Operations</h3><p>We crew it and run it &mdash; logistics, staffing, safety, and the day-of call, clockwork at any scale.</p></div>
    <div className="pc"><div className="bar"></div><p className="role">The Procore</p><h3>Technology</h3><p>We give the yard its instruments &mdash; ATLVS, COMPVSS &amp; GVTEWAY, the platforms the project runs on.</p></div>
  </div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">The Track Record</p>
  <h2 className="sec">Receipts, Not Promises.</h2>
  <div className="band">
    <div className="st"><div className="v">14+</div><div className="k">Years</div></div>
    <div className="st"><div className="v">250+</div><div className="k">Experiences</div></div>
    <div className="st"><div className="v">5M+</div><div className="k">Memories</div></div>
    <div className="st"><div className="v">5</div><div className="k">Home Ports</div></div>
  </div>
</div></section>
<section className="cta"><div className="wrap"><h2>Venture<br/>Beyond.</h2>
  <div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/work" className="gx-btn gx-btn--ghost gx-btn--lg">See the Archives</Link></div>
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
    <nav className="foot-col"><h5>Explore</h5><Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/course">Course</Link><Link href="/work">Archives</Link><Link href="/resources/blog">Logs</Link><Link href="/gallery">Gallery</Link><Link href="/store">Museum</Link></nav>
    <nav className="foot-col"><h5>Company</h5><Link href="/about">The Story</Link><Link href="/locations">Home Ports</Link><Link href="/resources/glossary">Glossary</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link><Link href="/contact">Start a Project</Link></nav>
    <nav className="foot-col"><h5>Platforms</h5><a href="https://atlvs.pro">ATLVS</a><a href="https://atlvs.pro/compvss">COMPVSS</a><a href="https://atlvs.pro/gvteway">GVTEWAY</a></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"AboutPage","name":"The Story \\u2014 GHXSTSHIP","url":"https://ghxstship.tours/about"}` }} />
    </>
  );
}
