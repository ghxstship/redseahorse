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
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}a{color:inherit}.wrap{max-width:var(--container);margin:0 auto;padding:0 var(--sp-6)}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}.crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}.eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:var(--space-40) 0 var(--space-44);border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,6.5vw,76px);line-height:.88;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 var(--sp-4)}h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.6;color:var(--fg-on-dark-2);max-width:var(--measure);margin:0}
  .answer{font-size:var(--fs-body-l);line-height:1.55;color:var(--fg-on-dark-1);max-width:var(--measure-wide);margin:0;font-weight:500}
  .pad{padding:var(--space-56) 0}h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(28px,4vw,44px);line-height:.96;text-transform:uppercase;margin:0 0 var(--space-14)}
  .cta{padding:var(--space-80) 0;text-align:center;border-top:var(--stroke-2) solid var(--ink-3)}.cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,6vw,72px);line-height:.9;text-transform:uppercase;margin:0 0 var(--space-22)}.cta .row{display:flex;gap:var(--space-14);justify-content:center;flex-wrap:wrap}
.jl{display:grid;grid-template-columns:1.6fr .8fr;gap:var(--space-40);padding:var(--space-36) 0 0}@media(max-width:820px){.jl{grid-template-columns:1fr}}
  .prose h2{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;margin:var(--space-30) 0 var(--sp-3);line-height:1}
  .prose p{font-size:var(--fs-body);line-height:1.7;color:var(--fg-on-dark-1);margin:0 0 var(--space-14)}
  .prose ul{margin:0 0 var(--space-14);padding-left:var(--space-18)}.prose li{font-size:var(--fs-body);line-height:1.7;color:var(--fg-on-dark-2);margin-bottom:var(--space-7)}
  .meta-card{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:var(--space-22);position:sticky;top:var(--space-96)}
  .meta-card .r{display:flex;justify-content:space-between;gap:var(--sp-3);padding:var(--space-9) 0;border-bottom:var(--stroke-2) solid var(--ink-3);font-size:var(--fs-small)}
  .meta-card .r:last-of-type{border-bottom:0}.meta-card .k{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .meta-card .v{color:var(--bone);font-weight:600;text-align:right}
  .badge{display:inline-block;font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--brass);border:var(--stroke-1) solid var(--ink-3);border-radius:var(--r-pill);padding:var(--sp-1) var(--space-10);margin-bottom:var(--space-14)}
/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) 0}
  .nav-inner .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}.nav-inner .brand img{width:34px;height:34px}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:var(--space-16);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}}
  .site-foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:var(--space-44) 0 var(--space-26)}
  .site-foot .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:var(--space-30)}
  @media(max-width:820px){.site-foot .foot-grid{grid-template-columns:1fr 1fr}}
  .site-foot .brand{display:inline-flex;align-items:center;gap:var(--sp-3);text-decoration:none;margin-bottom:var(--space-14)}
  .site-foot .brand img{width:30px;height:30px}
  .site-foot .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-body-l);text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .site-foot .foot-tag{font-family:var(--font-display);font-weight:700;font-size:var(--fs-body-l);line-height:1.2;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3);max-width:22rem}
  .site-foot .foot-ports{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 var(--space-14);display:flex;flex-wrap:nowrap;white-space:nowrap}
  .site-foot .foot-ports span:not(:first-child)::before{content:"\\00b7";margin:0 var(--space-7);color:var(--fg-on-dark-3)}
  @media(max-width:560px){.site-foot .foot-ports{flex-direction:column}.site-foot .foot-ports span:not(:first-child)::before{display:none}}
  .site-foot .foot-social{display:flex;gap:var(--space-14)}.site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);text-decoration:none}.site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3)}
  .site-foot .foot-col a{display:block;font-size:var(--fs-small);color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:var(--space-9)}.site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:var(--space-10);margin-top:var(--space-30);padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}` }} />
      
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
    <div style={{display: 'flex', gap: 'var(--space-14)', flexWrap: 'wrap', marginTop: 'var(--sp-5)'}}><Link href="/careers/apply" className="gx-btn gx-btn--lg">Apply for This Role</Link><Link href="/careers" className="gx-btn gx-btn--ghost gx-btn--lg">All Open Roles</Link></div>
  </div>
  <aside><div className="meta-card">
    <div className="r"><span className="k">Department</span><span className="v">Production</span></div>
    <div className="r"><span className="k">Type</span><span className="v">Full-time</span></div>
    <div className="r"><span className="k">Location</span><span className="v">Miami, FL</span></div>
    <div className="r"><span className="k">Travel</span><span className="v">Frequent</span></div>
    <div className="r"><span className="k">Reports To</span><span className="v">Production Director</span></div>
    <div style={{marginTop: 'var(--sp-4)'}}><Link href="/careers/apply" className="gx-btn gx-btn--sm" style={{width: '100%', justifyContent: 'center'}}>Apply Now</Link></div>
  </div></aside>
</div></div></section></main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"JobPosting","title":"Production Manager","description":"Own on-site load-in, build, crew calls, and the day-of standard for experiential and entertainment productions.","datePosted":"2026-06-06","employmentType":"FULL_TIME","hiringOrganization":{"@type":"Organization","name":"GHXSTSHIP","sameAs":"https://ghxstship.tours/"},"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"}},"industry":"Experiential Production"}` }} />
    </>
  );
}
