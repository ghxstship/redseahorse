import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "COMPVSS \u2014 Workforce & Crew Management",
  description: "COMPVSS is GHXSTSHIP's workforce and crew management platform for live event production \u2014 the compass that points crew, certifications, scheduling, and on-site call to the right place at the right time.",
  alternates: { canonical: "https://ghxstship.tours/compvss" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased;scroll-behavior:smooth}
  a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}.brand img{width:34px;height:34px;image-rendering:pixelated}
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
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
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
  .foot-social a{color:var(--fg-on-dark-2);font-size:20px;line-height:1;text-decoration:none}
  .foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3)}
  .sgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:36px 0 0}@media(max-width:880px){.sgrid{grid-template-columns:1fr}}
  .scard{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:26px}
  .scard i{font-size:30px;color:var(--brass)}
  .scard h3{font-family:var(--font-display);font-weight:900;font-size:24px;text-transform:uppercase;margin:14px 0 8px;line-height:.98}
  .scard p{font-size:14.5px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .who{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:36px 0 0}@media(max-width:880px){.who{grid-template-columns:1fr}}
  .who .w{border-left:var(--stroke-4) solid var(--brass);background:var(--ink-2);border-radius:0 6px 6px 0;padding:22px}
  .who .w:nth-child(2){border-color:var(--nebula)}.who .w:nth-child(3){border-color:var(--plasma)}
  .who .w h3{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;margin:0 0 8px}
  .who .w p{font-size:14px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .faq{margin-top:28px;border-top:var(--stroke-2) solid var(--ink-3)}
  .faq details{border-bottom:var(--stroke-2) solid var(--ink-3)}
  .faq summary{list-style:none;cursor:pointer;padding:18px 0;display:flex;justify-content:space-between;gap:20px;font-family:var(--font-display);font-weight:800;font-size:19px;color:var(--bone)}
  .faq summary::-webkit-details-marker{display:none}.faq .ic{color:var(--brass);font-size:22px}.faq details[open] .ic{transform:rotate(45deg)}
  .faq .a{padding:0 0 20px;font-size:15px;line-height:1.6;color:var(--fg-on-dark-2);max-width:880px}/*__nf__*/
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

  /* Product accent: remap the jade accent to the COMPVSS color within page content (nav/footer stay global jade). */
  main{--brass:var(--compvss);--brass-deep:var(--compvss-deep);--halftone-brass:color-mix(in srgb, var(--compvss) 16%, transparent)}
` }} />
      
<header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>COMPVSS</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Instruments &middot; COMPVSS &middot; The Compass</p>
  <h1>COMPVSS<br/>The <span className="pop">Compass.</span></h1>
  <p className="answer">COMPVSS is the workforce and crew management platform for live event production — the compass that points every crew member to the right place at the right time. Rosters, certifications, scheduling, and on-site call, managed as one accountable system across every date.</p>
  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '26px'}}><Link href="/contact" className="gx-btn">Start a Project</Link><Link href="/solutions" className="gx-btn gx-btn--ghost">The Fleet</Link></div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">What It Does</p>
  <h2 className="sec">Point the Crew.</h2>
  <div className="sgrid"><div className="scard"><i className="ph-bold ph-users-three"></i><h3>Crew &amp; Rosters</h3><p>Build, schedule, and deploy crews across dates and venues — the right people on the right call.</p></div><div className="scard"><i className="ph-bold ph-seal-check"></i><h3>Certifications</h3><p>Track certifications, credentials, and compliance so every crew member is cleared for the gig.</p></div><div className="scard"><i className="ph-bold ph-clock-countdown"></i><h3>Day-of Call</h3><p>On-site call sheets, check-in, and time tracking that keep the floor running to standard.</p></div></div>
</div></section>
<section className="pad alt"><div className="wrap">
  <p className="eyebrow">Answers</p>
  <h2 className="sec">FAQ.</h2>
  <div className="faq"><details open><summary>What is COMPVSS?<span className="ic">+</span></summary><p className="a">COMPVSS is GHXSTSHIP's enterprise workforce and crew management platform for live event production — rosters, certifications, scheduling, and day-of operations in one place.</p></details><details><summary>Who is it for?<span className="ic">+</span></summary><p className="a">Operations leads, production managers, and venue operators responsible for crewing and running live events safely and on schedule.</p></details><details><summary>How does it fit the fleet?<span className="ic">+</span></summary><p className="a">COMPVSS points the crew while ATLVS charts the course and GVTEWAY opens the gate — one coordinated system for the whole build.</p></details></div>
</div></section>
<section className="cta"><div className="wrap"><h2>Run It on<br/>COMPVSS.</h2>
  <div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/solutions" className="gx-btn gx-btn--ghost gx-btn--lg">See the Fleet</Link></div>
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
    <nav className="foot-col"><h5>Platforms</h5><Link href="/atlvs">ATLVS</Link><Link href="/compvss">COMPVSS</Link><Link href="/gvteway">GVTEWAY</Link></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","sameAs":["https://instagram.com/ghxstship","https://linkedin.com/company/ghxstship","https://youtube.com/@ghxstship","https://x.com/ghxstship"]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Experiential production management","name":"Experiential Production Management","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"General contractor and management team for experiential and entertainment production \\u2014 design, fabrication, staging, technical production, and show calling.","audience":{"@type":"Audience","audienceType":"General contractors, venue operators, brands, promoters, and production directors"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Venue operations management","name":"Venue Operations Management","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Venue operations leadership \\u2014 logistics, crew and workforce, compliance, programming, and day-of operations for venues, stadiums, and hospitality."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Event technology integration","name":"Event Technology Integration","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Event technology integration and installs \\u2014 ATLVS, COMPVSS, and GVTEWAY plus third-party integrations, data, and analytics."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can GHXSTSHIP act as the general contractor for an experiential or entertainment project?","acceptedAnswer":{"@type":"Answer","text":"Yes. GHXSTSHIP operates as the general contractor and accountable management team for experiential and entertainment production, owning scope, schedule, budget, crew, vendors, and technology across all eight phases."}},{"@type":"Question","name":"Do you provide venue operations management?","acceptedAnswer":{"@type":"Answer","text":"Yes. We provide venue operations leadership: logistics, workforce and crew management, vendor coordination, health, safety and compliance, programming, and day-of operations."}},{"@type":"Question","name":"Do you handle event technology integrations and installs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We implement and integrate event technology: ATLVS, COMPVSS, and GVTEWAY, plus third-party integrations, on-site installs, data, and analytics."}}]}` }} />
    </>
  );
}
