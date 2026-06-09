import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Course \u2014 The 8-Phase Production Lifecycle",
  description: "The GHXSTSHIP Course is an eight-phase experiential production lifecycle \u2014 Project Discovery, R&amp;D, Creative Design, Compliance &amp; Risk, Production &amp; Build, Operations &amp; Logistics, Live Activation, and Strike &amp; Post \u2014 the route every build follows from first line to launch.",
  alternates: { canonical: "https://ghxstship.tours/course" },
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
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Course</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Course &middot; The Production Lifecycle</p>
  <h1>8 Phases, from<br/>Launch to <span className="pop">Landing.</span></h1>
  <p className="answer">The Course is the GHXSTSHIP production lifecycle — eight phases that take an experiential or entertainment project from first consultation to strike. Every build follows the same charted route, with clear deliverables and an accountable owner at each stop, so scope, schedule, and budget stay on course from discovery to close.</p>
  <div style={{display: 'flex', gap: 'var(--space-14)', flexWrap: 'wrap', marginTop: 'var(--space-26)'}}><Link href="/contact" className="gx-btn">Start a Project</Link><Link href="/work" className="gx-btn gx-btn--ghost">See the Archives</Link></div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">The Route</p>
  <h2 className="sec">The 8-Phase Lifecycle.</h2>
  <p className="lede">Discovery to Close — one methodology across festivals, tours, activations, immersive, sporting, and broadcast.</p>
  <div className="sgrid"><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>01</span><h3>Project Discovery</h3><p>Goals, scope, budget, and vision — the consultation that sets the route and sizes the build.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>02</span><h3>Research & Development</h3><p>Feasibility, concepts, and technology and partner exploration. The idea gets pressure-tested.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>03</span><h3>Creative Design</h3><p>Creative direction, experiential design, and storytelling — the look, the feel, the narrative.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>04</span><h3>Compliance & Risk</h3><p>Engineering, permits, safety, insurance, and risk planning. The build is made real and safe.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>05</span><h3>Production & Build</h3><p>Fabrication, scenic, staging, and technical production — pre-built and tested off-site.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>06</span><h3>Operations & Logistics</h3><p>Logistics, crew, vendors, scheduling, and load-in. Crew on the ground, systems up.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>07</span><h3>Live Activation</h3><p>Show calling and live execution — the experience itself. We run the show and hold the standard.</p></div><div className="scard"><span style={{fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: 'var(--fs-h1)', color: 'var(--brass)', display: 'block', lineHeight: '1'}}>08</span><h3>Strike & Post</h3><p>Load-out, reconciliation, analytics, and the debrief. Struck clean, logged in the Archives.</p></div></div>
</div></section>
<section className="cta"><div className="wrap"><h2>Chart Your<br/>Course.</h2>
  <div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/solutions" className="gx-btn gx-btn--ghost gx-btn--lg">Meet the Fleet</Link></div>
</div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","sameAs":["https://www.facebook.com/ghxstship.tours","https://www.instagram.com/ghxstship.tours","https://www.linkedin.com/company/ghxstship","https://www.tiktok.com/@ghxstship.tours","https://www.youtube.com/@ghxstship"]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Experiential production management","name":"Experiential Production Management","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"General contractor and management team for experiential and entertainment production \\u2014 design, fabrication, staging, technical production, and show calling.","audience":{"@type":"Audience","audienceType":"General contractors, venue operators, brands, promoters, and production directors"}}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Venue operations management","name":"Operations Leadership","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Operations leadership \\u2014 logistics, crew and workforce, compliance, programming, and day-of operations for venues, stadiums, and hospitality."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","serviceType":"Event technology integration","name":"Technology Innovations","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Event technology integration and installs \\u2014 ATLVS, COMPVSS, and GVTEWAY plus third-party integrations, data, and analytics."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can GHXSTSHIP act as the general contractor for an experiential or entertainment project?","acceptedAnswer":{"@type":"Answer","text":"Yes. GHXSTSHIP operates as the general contractor and accountable management team for experiential and entertainment production, owning scope, schedule, budget, crew, vendors, and technology across all eight phases."}},{"@type":"Question","name":"Do you provide operations leadership?","acceptedAnswer":{"@type":"Answer","text":"Yes. We provide operations leadership: logistics, workforce and crew management, vendor coordination, health, safety and compliance, programming, and day-of operations."}},{"@type":"Question","name":"Do you handle event technology integrations and installs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We implement and integrate event technology: ATLVS, COMPVSS, and GVTEWAY, plus third-party integrations, on-site installs, data, and analytics."}}]}` }} />
    </>
  );
}
