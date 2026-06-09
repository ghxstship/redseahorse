import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions \u2014 Experiential Production, Operations Leadership & Technology",
  description: "GHXSTSHIP is the general contractor, foreman, and Procore of experiential project management \u2014 one accountable management team for experiential and entertainment production, operations leadership, and event technology integration and installs, for GCs, venue operators, brands, and promoters worldwide.",
  alternates: { canonical: "https://ghxstship.tours/solutions" },
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
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 var(--space-18)}
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
  .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);line-height:1;text-decoration:none}
  .foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:var(--space-22) 0 0;padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3)}
  .sgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-4);padding:var(--space-36) 0 0}@media(max-width:880px){.sgrid{grid-template-columns:1fr}}
  .scard{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:var(--space-26)}
  .scard i{font-size:var(--fs-h2);color:var(--brass)}
  .scard h3{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;margin:var(--space-14) 0 var(--sp-2);line-height:.98}
  .scard p{font-size:14.5px;line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .who{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-4);padding:var(--space-36) 0 0}@media(max-width:880px){.who{grid-template-columns:1fr}}
  .who .w{border-left:var(--stroke-4) solid var(--brass);background:var(--ink-2);border-radius:0 6px 6px 0;padding:var(--space-22)}
  .who .w:nth-child(2){border-color:var(--nebula)}.who .w:nth-child(3){border-color:var(--plasma)}
  .who .w h3{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;margin:0 0 var(--sp-2)}
  .who .w p{font-size:var(--fs-small);line-height:1.55;color:var(--fg-on-dark-2);margin:0}
  .faq{margin-top:var(--space-28);border-top:var(--stroke-2) solid var(--ink-3)}
  .faq details{border-bottom:var(--stroke-2) solid var(--ink-3)}
  .faq summary{list-style:none;cursor:pointer;padding:var(--space-18) 0;display:flex;justify-content:space-between;gap:var(--space-20);font-family:var(--font-display);font-weight:800;font-size:var(--fs-body-l);color:var(--bone)}
  .faq summary::-webkit-details-marker{display:none}.faq .ic{color:var(--brass);font-size:var(--fs-h3)}.faq details[open] .ic{transform:rotate(45deg)}
  .faq .a{padding:0 0 var(--space-20);font-size:var(--fs-body);line-height:1.6;color:var(--fg-on-dark-2);max-width:880px}/*__nf__*/
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
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>Solutions</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Fleet &middot; The Verticals We Serve</p>
  <h1>The Management Team<br/>Behind the <span className="pop">Build.</span></h1>
  <p className="answer">GHXSTSHIP is the general contractor, foreman, and Procore of experiential project management &mdash; the single accountable management team for experiential and entertainment production, operations leadership, and technology integration. We own scope, schedule, budget, crew, and the platforms, from first line to launch, so owners, operators, and partners don't have to manage a chain of vendors.</p>
  <div style={{display: 'flex', gap: 'var(--space-14)', flexWrap: 'wrap', marginTop: 'var(--space-26)'}}><Link href="/contact" className="gx-btn">Start a Project</Link><Link href="/work" className="gx-btn gx-btn--ghost">See the Archives</Link></div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">The Fleet &middot; What We Run</p>
  <h2 className="sec">Three Ships, One Yard.</h2>
  <p className="lede">Experiential production management, operations leadership, and event technology integration &mdash; delivered as one system, not three vendors.</p>
  <div className="sgrid">
    <div className="scard"><i className="ph-bold ph-boat"></i><h3>Production Management</h3><p>The general contractor for live experiences: experiential design, scenic fabrication, staging, technical production, and show calling &mdash; scope, schedule, and budget owned end to end.</p></div>
    <div className="scard"><i className="ph-bold ph-anchor"></i><h3>Operations Leadership</h3><p>The foreman for venues and activations: logistics, crew and workforce, vendor management, health, safety and compliance, and day-of operations at any scale.</p></div>
    <div className="scard"><i className="ph-bold ph-compass"></i><h3>Technology Innovations</h3><p>The Procore for the project: ATLVS, COMPVSS, and GVTEWAY plus event-technology integrations, installs, and analytics &mdash; the platforms the whole build runs on.</p><p style={{margin: 'var(--space-14) 0 0'}}><a href="https://atlvs.pro" target="_blank" rel="noopener" style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--plasma)', textDecoration: 'none'}}>Explore the platforms at ATLVS.pro</a></p></div>
  </div>
</div></section>
<section className="pad alt"><div className="wrap">
  <p className="eyebrow">Who We Build For</p>
  <h2 className="sec">Built for the People Accountable for the Show.</h2>
  <div className="who">
    <div className="w"><h3>General Contractors &amp; Owner's Reps</h3><p>A specialist experiential management team you can subcontract for production, staging, and live-event scope &mdash; one accountable partner that plugs into your build.</p></div>
    <div className="w"><h3>Venue &amp; Hospitality Operators</h3><p>Turnkey operations leadership, programming, and technology installs for clubs, stadiums, arenas, and hospitality &mdash; run to a single standard across every date.</p></div>
    <div className="w"><h3>Brands, Promoters &amp; Producers</h3><p>End-to-end production and operations for festivals, tours, activations, immersive, sporting, and broadcast &mdash; with the platforms to coordinate it all.</p></div>
  </div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">Answers</p>
  <h2 className="sec">Solutions FAQ.</h2>
  <div className="faq">
    <details open><summary>Can GHXSTSHIP act as the general contractor for an experiential or entertainment project?<span className="ic">+</span></summary><p className="a">Yes. GHXSTSHIP operates as the general contractor and accountable management team for experiential and entertainment production &mdash; owning scope, schedule, budget, crew, vendors, and technology across all eight phases, from discovery to close, the way a GC owns a build.</p></details>
    <details><summary>Do you provide operations leadership?<span className="ic">+</span></summary><p className="a">Yes. We provide operations leadership &mdash; logistics, workforce and crew management, vendor and procurement coordination, health, safety and compliance, programming, and day-of operations for venues, clubs, stadiums, and hospitality environments.</p></details>
    <details><summary>Do you handle event technology integrations and installs?<span className="ic">+</span></summary><p className="a">Yes. We implement and integrate event technology &mdash; production and resource management (ATLVS), workforce and crew management (COMPVSS), and ticketing and fan engagement (GVTEWAY) &mdash; alongside third-party integrations, on-site installs, data, and analytics.</p></details>
    <details><summary>Which industries and verticals do you serve?<span className="ic">+</span></summary><p className="a">Festivals, concerts and tours, brand activations, immersive experiences, sporting events, TV, film and broadcast, health and wellness, premium hospitality, luxury retail, and water and motorsports &mdash; for brands, promoters, venue operators, general contractors, and production directors worldwide.</p></details>
  </div>
</div></section>
<section className="cta"><div className="wrap"><h2>Bring On the<br/>Management Team.</h2>
  <div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/team" className="gx-btn gx-btn--ghost gx-btn--lg">Meet the Crew</Link></div>
</div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","sameAs":["https://www.facebook.com/ghxstship.tours","https://www.instagram.com/ghxstship.tours","https://www.linkedin.com/company/ghxstship","https://soundcloud.com/ghxstship","https://www.tiktok.com/@ghxstship.tours","https://www.youtube.com/@ghxstship"]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Experiential production management","name":"Experiential Production Management","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"General contractor and management team for experiential and entertainment production \\u2014 design, fabrication, staging, technical production, and show calling.","audience":{"@type":"Audience","audienceType":"General contractors, venue operators, brands, promoters, and production directors"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Venue operations management","name":"Operations Leadership","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Operations leadership \\u2014 logistics, crew and workforce, compliance, programming, and day-of operations for venues, stadiums, and hospitality."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Event technology integration","name":"Technology Innovations","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Event technology integration and installs \\u2014 ATLVS, COMPVSS, and GVTEWAY plus third-party integrations, data, and analytics."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can GHXSTSHIP act as the general contractor for an experiential or entertainment project?","acceptedAnswer":{"@type":"Answer","text":"Yes. GHXSTSHIP operates as the general contractor and accountable management team for experiential and entertainment production, owning scope, schedule, budget, crew, vendors, and technology across all eight phases."}},{"@type":"Question","name":"Do you provide operations leadership?","acceptedAnswer":{"@type":"Answer","text":"Yes. We provide operations leadership: logistics, workforce and crew management, vendor coordination, health, safety and compliance, programming, and day-of operations."}},{"@type":"Question","name":"Do you handle event technology integrations and installs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We implement and integrate event technology: ATLVS, COMPVSS, and GVTEWAY, plus third-party integrations, on-site installs, data, and analytics."}}]}` }} />
    </>
  );
}
