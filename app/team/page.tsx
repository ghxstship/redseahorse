import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Crew \u2014 Leadership & Team",
  description: "Meet the GHXSTSHIP crew \u2014 the senior management team of executive producers, production directors, project managers, logistics and operations leads, and technical directors who deliver every experiential project.",
  alternates: { canonical: "https://ghxstship.tours/team" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:20px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1040px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 56px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
  h1 .pop{color:var(--brass)}
  .lede{font-size:18px;line-height:1.62;color:var(--fg-on-dark-2);max-width:780px;margin:0}
  .answer{font-size:20px;line-height:1.55;color:var(--fg-on-dark-1);max-width:840px;margin:0;font-weight:500}
  .pad{padding:60px 0}.pad.alt{background:var(--ink);border-top:var(--stroke-3) solid var(--ink-3);border-bottom:var(--stroke-3) solid var(--ink-3)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(30px,4.2vw,48px);line-height:.95;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 14px}
  .cta{padding:80px 0;text-align:center;position:relative;overflow:hidden;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.1}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(38px,6.5vw,78px);line-height:.9;text-transform:uppercase;margin:0 0 22px;position:relative}
  .cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0 30px}
  .foot-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
  .foot-links{display:flex;gap:18px;flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .foot-links a:hover{color:var(--brass)}
  .foot-social{display:flex;gap:14px;margin-top:14px}
  .foot-social a{color:var(--fg-on-dark-2);font-size:20px;line-height:1;text-decoration:none}.foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3)}
  .tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding:44px 0 0}@media(max-width:880px){.tgrid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.tgrid{grid-template-columns:1fr}}
  .tm{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);overflow:hidden}
  .tm .av{height:150px;display:grid;place-items:center;background:repeating-linear-gradient(45deg,var(--ink-2) 0 14px,var(--ink) 14px 28px);border-bottom:var(--stroke-2) solid var(--ink-3)}
  .tm .av img{width:54px;height:54px;opacity:.85}
  .tm .body{padding:18px}.tm .rk{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass)}
  .tm h3{font-family:var(--font-display);font-weight:900;font-size:22px;text-transform:uppercase;margin:6px 0 6px;line-height:1}
  .tm p{font-size:13.5px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}/*__nf__*/
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
  .tier{font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--nebula);margin:34px 0 14px;display:flex;align-items:center;gap:10px}
  .tier::before{content:"";width:18px;height:3px;background:var(--nebula)}
` }} />
      
<header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav><button className="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gx-nav-drawer"><span className="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Crew</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Crew &middot; Leadership</p>
  <h1>The Crew That<br/>Runs the <span className="pop">Build.</span></h1>
  <p className="answer">Every voyage is led by a senior crew that stays with you from first consultation to strike. Ranks map to roles &mdash; the accountable management team for your production, operations, and technology. Headshots and full bios drop in as the roster is confirmed.</p>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">Ranks &amp; Roles</p>
  <h2 className="sec">Who&rsquo;s Aboard.</h2>
  <p className="tier">Level 01 &middot; Command</p>
  <div className="tgrid"><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Production</p><h3>Executive Producer</h3><p>Owns the voyage end to end &mdash; vision, budget, and the standard the whole build holds to.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Production</p><h3>Senior Producer</h3><p>Leads the production day to day &mdash; scope, schedule, vendors, and the build.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Production</p><h3>Associate Producer</h3><p>Supports the production across phases &mdash; coordination, tracking, and delivery.</p></div></article></div>
  <p className="tier">Level 02 &middot; Direction</p>
  <div className="tgrid"><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Production</p><h3>Production Director</h3><p>Runs the build &mdash; creative, scenic, staging, and technical production.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Operations</p><h3>Operations Director</h3><p>Runs the day-of &mdash; logistics, crew, safety, and compliance.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Hospitality</p><h3>Hospitality Director</h3><p>Owns guest experience, VIP, and hospitality operations.</p></div></article></div>
  <p className="tier">Level 03 &middot; Management</p>
  <div className="tgrid"><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Project</p><h3>Project Manager</h3><p>Charts the course &mdash; scope, schedule, deliverables, and owners.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Project</p><h3>Project Coordinator</h3><p>Keeps the plan moving &mdash; documents, comms, and tracking.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Logistics</p><h3>Logistics Manager</h3><p>Moves freight and crew &mdash; load-in and out, transport, and vendors.</p></div></article></div>
  <p className="tier">Level 04 &middot; On Deck</p>
  <div className="tgrid"><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Production</p><h3>Production Manager</h3><p>Runs the floor build and the technical package on site.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Crew</p><h3>Production Crew</h3><p>The hands that build, rig, run, and strike.</p></div></article><article className="tm"><div className="av"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="rk">Support</p><h3>Production Assistant</h3><p>Supports every department &mdash; and learns the ropes.</p></div></article></div>
</div></section>
<section className="pad alt"><div className="wrap">
  <p className="eyebrow">Join the Crew</p>
  <h2 className="sec">Learn the Ropes.</h2>
  <p className="answer">We train the next generation of experiential producers &mdash; no experience gatekept. Apprentice on real voyages, manned by the people who&rsquo;ve built them. Bring the hunger; we&rsquo;ll teach the ropes.</p>
  <div style={{display: 'flex', gap: '14px', marginTop: '24px'}}><Link href="/careers" className="gx-btn">Join the Crew</Link><Link href="/solutions" className="gx-btn gx-btn--ghost">See What We Run</Link></div>
</div></section>
<section className="cta"><div className="wrap"><h2>Build With<br/>the Crew.</h2><div className="row"><Link href="/careers" className="gx-btn gx-btn--lg">See Open Roles</Link></div></div></section>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"AboutPage","name":"The Crew \\u2014 GHXSTSHIP","url":"https://ghxstship.tours/team"}` }} />
    </>
  );
}
