import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What an Experiential General Contractor Does",
  description: "An experiential general contractor is one accountable partner that owns scope, schedule, budget, crew, and technology for a live experience \u2014 here is how the GC model works for experiential and entertainment production.",
  alternates: { canonical: "https://ghxstship.tours/resources/the-experiential-gc" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 var(--sp-6)}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:20px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1040px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 56px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
  h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.62;color:var(--fg-on-dark-2);max-width:780px;margin:0}
  .answer{font-size:var(--fs-body-l);line-height:1.55;color:var(--fg-on-dark-1);max-width:840px;margin:0;font-weight:500}
  .pad{padding:60px 0}.pad.alt{background:var(--ink);border-top:var(--stroke-3) solid var(--ink-3);border-bottom:var(--stroke-3) solid var(--ink-3)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(30px,4.2vw,48px);line-height:.95;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 14px}
  .cta{padding:80px 0;text-align:center;position:relative;overflow:hidden;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.1}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(38px,6.5vw,78px);line-height:.9;text-transform:uppercase;margin:0 0 22px;position:relative}
  .cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0 30px}
  .foot-top{display:flex;justify-content:space-between;gap:var(--sp-5);flex-wrap:wrap;align-items:flex-start}
  .foot-links{display:flex;gap:18px;flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .foot-links a:hover{color:var(--brass)}
  .foot-social{display:flex;gap:14px;margin-top:14px}
  .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);line-height:1;text-decoration:none}.foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3)}
  .prose{max-width:760px;margin:0 auto;padding:var(--sp-7) 0 0}
  .prose .meta{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 26px}
  .prose p{font-size:var(--fs-body-l);line-height:1.72;color:var(--fg-on-dark-1);margin:0 0 20px}
  .prose h2{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h2);text-transform:uppercase;letter-spacing:-.01em;margin:36px 0 14px;line-height:1}
  .prose .lead{font-size:var(--fs-h3);line-height:1.6;color:var(--bone);font-weight:500}/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .nav-inner .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}
  .nav-inner .brand img{width:34px;height:34px}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:17px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  .navlinks .cart{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:var(--fs-label);color:var(--brass)}
  .navlinks .cart .n{background:var(--brass);color:var(--on-brass);border-radius:var(--r-pill);min-width:20px;height:20px;display:grid;place-items:center;font-size:var(--fs-label);font-weight:700;padding:0 5px}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}.navlinks .cart{display:none}}
  .site-foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:46px 0 26px}
  .site-foot .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:30px}
  @media(max-width:820px){.site-foot .foot-grid{grid-template-columns:1fr 1fr}}
  .site-foot .brand{display:inline-flex;align-items:center;gap:var(--sp-3);text-decoration:none;margin-bottom:14px}
  .site-foot .brand img{width:30px;height:30px}
  .site-foot .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-body-l);text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .site-foot .foot-tag{font-family:var(--font-display);font-weight:700;font-size:var(--fs-body-l);line-height:1.2;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3);max-width:22rem}
  .site-foot .foot-ports{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 14px;display:flex;flex-wrap:nowrap;white-space:nowrap}
  .site-foot .foot-ports span:not(:first-child)::before{content:"\\00b7";margin:0 7px;color:var(--fg-on-dark-3)}
  @media(max-width:560px){.site-foot .foot-ports{flex-direction:column}.site-foot .foot-ports span:not(:first-child)::before{display:none}}
  .site-foot .foot-social{display:flex;gap:14px}
  .site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);text-decoration:none}
  .site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3)}
  .site-foot .foot-col a{display:block;font-size:var(--fs-small);color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:9px}
  .site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:30px;padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}
` }} />
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/resources/blog">The Log</Link> / <span style={{color: 'var(--brass)'}}>The Experiential GC</span></p></div>
<main>
<article className="pad"><div className="wrap">
  <p className="eyebrow">Field Notes</p>
  <h1 style={{maxWidth: '880px'}}>What an Experiential<br/><span className="pop">General Contractor</span> Does.</h1>
  <div className="prose">
    <p className="meta">By the GHXSTSHIP Crew &middot; June 2026 &middot; 5 min read</p>
    <p className="lead">An experiential general contractor is a single accountable partner that owns a live experience the way a construction GC owns a building &mdash; scope, schedule, budget, crew, and the technology that runs it, from first line to launch.</p>
    <p>Most experiential and brand-activation work is bought as a chain of vendors: a creative shop, a fabricator, a staging company, a staffing agency, and a stack of disconnected software. Each is accountable for a slice. No one is accountable for the whole. When the schedule slips or the budget moves, the seams show.</p>
    <p>The general-contractor model collapses that chain into one yard. GHXSTSHIP carries three integrated disciplines &mdash; Production Management, Operations Leadership, and Technology Innovations &mdash; under one accountable crew, governed by a single eight-phase production lifecycle from Discovery to Close.</p>
    <h2>Production: the build</h2>
    <p>The general contractor builds the ship: experiential design and creative direction, scenic fabrication, staging and set, technical production across audio, lighting, video, rigging, and power, and live show calling. One team owns scope, schedule, budget, and the finish.</p>
    <h2>Operations: the run</h2>
    <p>The foreman crews it and runs it: logistics and load-in, workforce and crew management, vendor and procurement coordination, health, safety and compliance, and the day-of call. This is a dedicated discipline, not an afterthought bolted onto creative.</p>
    <h2>Technology: the coordination</h2>
    <p>The Procore gives the yard its instruments: ATLVS for production and resource management, COMPVSS for workforce and crew, and GVTEWAY for ticketing and fans &mdash; plus the integrations, installs, and analytics that keep the whole build coordinated and measurable.</p>
    <h2>Why it matters</h2>
    <p>For general contractors, venue operators, brands, and promoters, the result is one partner to hold accountable, one schedule to track, and one standard to hold &mdash; on time, on budget, beyond the scenes.</p>
    <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', margin: '34px 0 0'}}><Link href="/contact" className="gx-btn">Start a Project</Link><Link href="/resources/blog" className="gx-btn gx-btn--ghost">Back to the Log</Link></div>
  </div>
</div></article>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Article","headline":"What an Experiential General Contractor Does","datePublished":"2026-06-06","author":{"@type":"Organization","name":"GHXSTSHIP"},"publisher":{"@type":"Organization","name":"GHXSTSHIP"},"mainEntityOfPage":"https://ghxstship.tours/resources/the-experiential-gc"}` }} />
    </>
  );
}
