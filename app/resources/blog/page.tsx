import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Log \u2014 Dispatches on Experiential Production",
  description: "The GHXSTSHIP Log \u2014 field notes on experiential production management, operations leadership, event technology, and the 8-phase production lifecycle.",
  alternates: { canonical: "https://ghxstship.tours/resources/blog" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}.wrap{max-width:var(--container);margin:0 auto;padding:0 var(--sp-6)}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) 0}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:var(--space-20);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1040px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:var(--space-40) 0 var(--space-56);border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 var(--space-18)}
  h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.62;color:var(--fg-on-dark-2);max-width:var(--measure);margin:0}
  .answer{font-size:var(--fs-body-l);line-height:1.55;color:var(--fg-on-dark-1);max-width:var(--measure-wide);margin:0;font-weight:500}
  .pad{padding:var(--space-56) 0}.pad.alt{background:var(--ink);border-top:var(--stroke-3) solid var(--ink-3);border-bottom:var(--stroke-3) solid var(--ink-3)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(30px,4.2vw,48px);line-height:.95;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 var(--space-14)}
  .cta{padding:var(--space-80) 0;text-align:center;position:relative;overflow:hidden;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.1}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(38px,6.5vw,78px);line-height:.9;text-transform:uppercase;margin:0 0 var(--space-22);position:relative}
  .cta .row{display:flex;gap:var(--space-14);justify-content:center;flex-wrap:wrap;position:relative}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:var(--space-40) 0 var(--space-30)}
  .foot-top{display:flex;justify-content:space-between;gap:var(--sp-5);flex-wrap:wrap;align-items:flex-start}
  .foot-links{display:flex;gap:var(--space-18);flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .foot-links a:hover{color:var(--brass)}
  .foot-social{display:flex;gap:var(--space-14);margin-top:var(--space-14)}
  .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);line-height:1;text-decoration:none}.foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:var(--space-22) 0 0;padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3)}
  .bgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-18);padding:var(--space-44) 0 0}@media(max-width:880px){.bgrid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.bgrid{grid-template-columns:1fr}}
  .bp{display:block;text-decoration:none;background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:var(--space-22);transition:transform var(--dur-2),border-color var(--dur-2),box-shadow .12s}
  .bp:hover{transform:translate(-3px,-3px);border-color:var(--brass);box-shadow:var(--shadow-hard-lg)}
  .bp .cat{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--brass)}
  .bp h3{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;margin:var(--sp-2) 0 var(--sp-2);line-height:1.02}
  .bp p{font-size:13.5px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .bp .d{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin-top:var(--sp-3)}/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) 0}
  .nav-inner .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}
  .nav-inner .brand img{width:34px;height:34px}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:var(--space-16);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  .navlinks .cart{display:flex;align-items:center;gap:var(--space-7);font-family:var(--font-mono);font-size:var(--fs-label);color:var(--brass)}
  .navlinks .cart .n{background:var(--brass);color:var(--on-brass);border-radius:var(--r-pill);min-width:20px;height:20px;display:grid;place-items:center;font-size:var(--fs-label);font-weight:700;padding:0 var(--space-5)}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}.navlinks .cart{display:none}}
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
  .site-foot .foot-social{display:flex;gap:var(--space-14)}
  .site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);text-decoration:none}
  .site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3)}
  .site-foot .foot-col a{display:block;font-size:var(--fs-small);color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:var(--space-9)}
  .site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:var(--space-10);margin-top:var(--space-30);padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}
` }} />
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/resources/glossary">Resources</Link> / <span style={{color: 'var(--brass)'}}>The Log</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Log &middot; Dispatches</p>
  <h1>Notes From<br/>the <span className="pop">Bridge.</span></h1>
  <p className="answer">The The Log is where GHXSTSHIP shares field notes on experiential production, operations leadership, and event technology &mdash; how we build, what we&rsquo;ve learned, and where the industry is heading.</p>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">Latest Dispatches</p>
  <h2 className="sec">From the Log.</h2>
  <div className="bgrid"><Link href="/resources/the-experiential-gc" className="bp"><p className="cat">Field Notes</p><h3>What an Experiential General Contractor Actually Does</h3><p>One accountable partner for scope, schedule, budget, crew, and tech — and why the GC model beats a vendor chain for live experiences.</p><p className="d">Jun 2026</p></Link>
  <a className="bp" href="#"><p className="cat">Operations</p><h3>The 8-Phase Production Lifecycle, Explained</h3><p>Discovery to Close — how the Course keeps a build on schedule, on budget, and on standard.</p><p className="d">May 2026</p></a>
  <a className="bp" href="#"><p className="cat">Technology</p><h3>ATLVS, COMPVSS &amp; GVTEWAY: The Instruments</h3><p>How proprietary production, crew, and ticketing software coordinate an entire experiential build.</p><p className="d">May 2026</p></a>
  <a className="bp" href="#"><p className="cat">Venue Ops</p><h3>Running a Venue to One Standard</h3><p>Programming, staffing, compliance, and day-of operations across every date — the foreman&rsquo;s playbook.</p><p className="d">Apr 2026</p></a>
  <a className="bp" href="#"><p className="cat">Press</p><h3>GHXSTSHIP Charts New Immersive Work in Miami</h3><p>A look at the latest voyage on the board and the crew behind it.</p><p className="d">Apr 2026</p></a>
  <a className="bp" href="#"><p className="cat">Crew Call</p><h3>Learn the Ropes: Join the Crew</h3><p>We train the next generation of experiential producers on real projects. How to come aboard.</p><p className="d">Mar 2026</p></a></div>
</div></section>
<section className="cta"><div className="wrap"><h2>Build With<br/>GHXSTSHIP.</h2><div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/solutions" className="gx-btn gx-btn--ghost gx-btn--lg">See Solutions</Link></div></div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Blog","name":"GHXSTSHIP Log","url":"https://ghxstship.tours/resources/blog"}` }} />
    </>
  );
}
