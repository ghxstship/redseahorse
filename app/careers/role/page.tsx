import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Manager \u2014 Careers",
  description: "Production Manager role at GHXSTSHIP \u2014 own on-site load-in, build, crew calls, and the day-of standard for experiential and entertainment productions. Miami, full-time.",
  alternates: { canonical: "https://ghxstship.tours/careers/role" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}.crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}.eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 44px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,6.5vw,76px);line-height:.88;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 16px}h1 .pop{color:var(--brass)}
  .lede{font-size:18px;line-height:1.6;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .answer{font-size:19px;line-height:1.55;color:var(--fg-on-dark-1);max-width:820px;margin:0;font-weight:500}
  .pad{padding:54px 0}h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(28px,4vw,44px);line-height:.96;text-transform:uppercase;margin:0 0 14px}
  .cta{padding:74px 0;text-align:center;border-top:var(--stroke-2) solid var(--ink-3)}.cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,6vw,72px);line-height:.9;text-transform:uppercase;margin:0 0 22px}.cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.jl{display:grid;grid-template-columns:1.6fr .8fr;gap:40px;padding:36px 0 0}@media(max-width:820px){.jl{grid-template-columns:1fr}}
  .prose h2{font-family:var(--font-display);font-weight:900;font-size:24px;text-transform:uppercase;margin:30px 0 12px;line-height:1}
  .prose p{font-size:16px;line-height:1.7;color:var(--fg-on-dark-1);margin:0 0 14px}
  .prose ul{margin:0 0 14px;padding-left:18px}.prose li{font-size:16px;line-height:1.7;color:var(--fg-on-dark-2);margin-bottom:7px}
  .meta-card{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:22px;position:sticky;top:90px}
  .meta-card .r{display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-bottom:var(--stroke-2) solid var(--ink-3);font-size:13px}
  .meta-card .r:last-of-type{border-bottom:0}.meta-card .k{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .meta-card .v{color:var(--bone);font-weight:600;text-align:right}
  .badge{display:inline-block;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass);border:var(--stroke-1) solid var(--ink-3);border-radius:var(--r-pill);padding:4px 10px;margin-bottom:14px}
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
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:30px;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}` }} />
      <header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/careers">Careers</Link> / <span style={{color: 'var(--brass)'}}>Production Manager</span></p></div>
<main><section className="hero"><div className="wrap">
  <span className="badge">Production &middot; Full-time</span>
  <p className="eyebrow">Open Role</p>
  <h1>Production <span className="pop">Manager.</span></h1>
  <p className="answer">The Production Manager runs the floor build and the technical package on site &mdash; owning load-in, the crew call, and the day-of standard for festivals, activations, and live events.</p>
</div></section>
<section className="pad"><div className="wrap"><div className="jl">
  <div className="prose">
    <h2>About the Role</h2>
    <p>As Production Manager you turn the plan into a built environment. You own the on-site build from load-in to strike &mdash; sequencing crew, vendors, and freight, holding the schedule, and keeping the show safe and on standard. You report to the Production Director and work alongside the Project Manager and Technical Director.</p>
    <h2>What You&rsquo;ll Do</h2>
    <ul><li>Own on-site load-in, build, and strike for assigned productions</li><li>Sequence crew calls, freight, and vendor deliveries against the schedule</li><li>Run the floor day-of &mdash; safety, standard, and problem-solving in real time</li><li>Manage the technical package with the Technical Director</li><li>Track labor, hours, and on-site spend against the budget</li><li>Close out each build with reconciliation and a debrief</li></ul>
    <h2>What You Bring</h2>
    <ul><li>3+ years in live event, festival, or experiential production</li><li>Fluency with load-in logistics, rigging basics, and crew coordination</li><li>Calm under pressure; relentless on safety and the standard</li><li>Comfort with production software and shared schedules</li><li>Willingness to travel and work nights, weekends, and show days</li></ul>
    <h2>Nice to Have</h2>
    <ul><li>OSHA / safety certification</li><li>Experience across multiple verticals &mdash; festivals, activations, sporting</li><li>A network of trusted freelance crew</li></ul>
    <h2>About GHXSTSHIP</h2>
    <p>GHXSTSHIP is the general contractor, foreman, and Procore of experiential project management &mdash; a full-service experiential production, operations, and technology company headquartered in Miami, with crews in Las Vegas, Chicago, New York, and Los Angeles. We build festivals, tours, activations, immersive worlds, and sporting events end to end.</p>
    <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '24px'}}><Link href="/careers/apply" className="gx-btn gx-btn--lg">Apply for This Role</Link><Link href="/careers" className="gx-btn gx-btn--ghost gx-btn--lg">All Open Roles</Link></div>
  </div>
  <aside><div className="meta-card">
    <div className="r"><span className="k">Department</span><span className="v">Production</span></div>
    <div className="r"><span className="k">Type</span><span className="v">Full-time</span></div>
    <div className="r"><span className="k">Location</span><span className="v">Miami, FL</span></div>
    <div className="r"><span className="k">Travel</span><span className="v">Frequent</span></div>
    <div className="r"><span className="k">Reports To</span><span className="v">Production Director</span></div>
    <div style={{marginTop: '16px'}}><Link href="/careers/apply" className="gx-btn gx-btn--sm" style={{width: '100%', justifyContent: 'center'}}>Apply Now</Link></div>
  </div></aside>
</div></div></section></main><footer className="site-foot"><div className="wrap">
  <div className="foot-grid">
    <div className="foot-brand"><Link href="/" className="brand"><img src="/assets/skull-bone.svg" alt=""/><b>G H X S T S H I P</b></Link>
      <p className="foot-tag" style={{color: 'var(--bone)'}}>The <span style={{color: 'var(--brass)'}}>General Contractor</span>, <span style={{color: 'var(--nebula)'}}>Foreman</span> &amp; <span style={{color: 'var(--plasma)'}}>Procore</span> of experiential project management.</p>
      <p className="foot-ports"><span>Miami</span><span>Las Vegas</span><span>Chicago</span><span>New York</span><span>Los Angeles</span></p>
      <div className="foot-social"><a href="https://instagram.com/ghxstship" aria-label="Instagram"><i className="ph-bold ph-instagram-logo"></i></a><a href="https://linkedin.com/company/ghxstship" aria-label="LinkedIn"><i className="ph-bold ph-linkedin-logo"></i></a><a href="https://youtube.com/@ghxstship" aria-label="YouTube"><i className="ph-bold ph-youtube-logo"></i></a><a href="https://tiktok.com/@ghxstship" aria-label="TikTok"><i className="ph-bold ph-tiktok-logo"></i></a><a href="https://x.com/ghxstship" aria-label="X"><i className="ph-bold ph-x-logo"></i></a></div></div>
    <nav className="foot-col"><h5>Explore</h5><Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/course">Course</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link></nav>
    <nav className="foot-col"><h5>Company</h5><Link href="/about">The Story</Link><Link href="/careers">Careers</Link><Link href="/locations">Home Ports</Link><Link href="/contact">Contact</Link><Link href="/contact">Start a Project</Link></nav>
    <nav className="foot-col"><h5>Platforms</h5><a href="https://atlvs.pro">ATLVS</a><a href="https://atlvs.pro/compvss">COMPVSS</a><a href="https://atlvs.pro/gvteway">GVTEWAY</a></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"JobPosting","title":"Production Manager","description":"Own on-site load-in, build, crew calls, and the day-of standard for experiential and entertainment productions.","datePosted":"2026-06-06","employmentType":"FULL_TIME","hiringOrganization":{"@type":"Organization","name":"GHXSTSHIP","sameAs":"https://ghxstship.tours/"},"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"}},"industry":"Experiential Production"}` }} />
    </>
  );
}
