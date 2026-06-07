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
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  .wrap{max-width:1000px;margin:0 auto;padding:0 var(--sp-6)}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--brass)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) var(--sp-6)}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}
  .brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);letter-spacing:0;text-transform:uppercase;white-space:nowrap}
  .nav-cta{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--brass);text-decoration:none}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .hero{padding:var(--space-30) 0 var(--space-48);border-bottom:var(--stroke-2) solid var(--ink-3)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}
  .eyebrow::before{content:"◆";color:var(--nebula)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,72px);line-height:.88;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 var(--sp-4)}
  .lede{font-size:var(--fs-body-l);line-height:1.6;color:var(--fg-on-dark-2);max-width:720px;margin:0}
  .terms{padding:var(--space-40) 0 var(--space-64);display:grid;gap:0}
  .term{padding:var(--space-26) 0;border-bottom:var(--stroke-2) solid var(--ink-3)}
  .term h2{font-family:var(--font-display);font-weight:800;font-size:var(--fs-h2);text-transform:uppercase;letter-spacing:-.005em;margin:0 0 var(--space-10);color:var(--bone)}
  .term p{font-size:var(--fs-body);line-height:1.65;color:var(--fg-on-dark-2);margin:0;max-width:var(--measure-wide)}
  .term .x{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--plasma);margin-top:var(--space-10);display:inline-block}
  .cta{padding:var(--space-56) 0;text-align:center;border-top:var(--stroke-3) solid var(--brass);background:var(--ink)}
  .cta h3{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h1);text-transform:uppercase;margin:0 0 var(--space-18)}
  footer{padding:var(--space-32) 0;text-align:center;font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3)}
/*__nf__*/
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
