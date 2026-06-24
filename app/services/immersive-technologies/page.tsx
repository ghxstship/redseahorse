import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive Technologies",
  description: "GHXSTSHIP builds the technology layer of live experience \u2014 ATLVS, COMPVSS, GVTEWAY, and LEG3ND \u2014 the platforms, show control, and data that run under all eight production phases.",
  alternates: { canonical: "https://ghxstship.tours/services/immersive-technologies" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);overflow-x:hidden;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1240px;margin:0 auto;padding:0 var(--sp-6)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}
  .eyebrow::before{content:"◆";color:var(--nebula)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,5vw,64px);line-height:0.98;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 var(--space-14)}
  .answer{font-family:var(--font-body);font-size:var(--fs-body-l);line-height:1.55;color:var(--fg-on-dark-1);max-width:var(--measure-wide);margin:0 0 var(--space-14);font-weight:500}
  .lede{font-size:var(--fs-body-l);line-height:1.6;color:var(--fg-on-dark-2);max-width:var(--measure);margin:0}
  header.nav{position:sticky;top:0;z-index:50;background:rgba(6,8,21,.88);backdrop-filter:blur(10px);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;height:var(--nav-h)}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}
  .brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);letter-spacing:0;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:var(--space-22);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1000px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .pad{padding:var(--space-64) 0}
  .pad.alt{background:var(--ink);border-top:var(--stroke-4) solid var(--ink-3);border-bottom:var(--stroke-4) solid var(--ink-3)}
  .hero{padding:var(--space-32) 0 var(--sp-8);position:relative;overflow:hidden}
  .hero::before{content:"";position:absolute;inset:0;background:radial-gradient(var(--ink-3) 1.4px,transparent 1.5px) 0 0/26px 26px;opacity:.45;-webkit-mask:radial-gradient(120% 90% at 70% 0%,#000,transparent);mask:radial-gradient(120% 90% at 70% 0%,#000,transparent)}
  .hero h1{font-family:var(--font-display);font-weight:900;font-size:clamp(48px,8vw,104px);line-height:0.97;text-transform:uppercase;letter-spacing:-.015em;margin:var(--sp-2) 0 var(--space-18);position:relative}
  .hero h1 .pop{color:var(--brass)}
  .hero-cta{display:flex;gap:var(--space-14);flex-wrap:wrap;margin-top:var(--sp-5);position:relative}
  .caps{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-3);margin-top:var(--space-32)}
  @media(max-width:760px){.caps{grid-template-columns:1fr}}
  .cap{display:flex;align-items:center;gap:var(--sp-3);font-size:var(--fs-small);color:var(--fg-on-dark-2);background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-1);padding:var(--space-14) var(--sp-4)}
  .cap i{font-size:var(--fs-body-l);color:var(--brass)}
  .aud{display:flex;gap:var(--space-10);flex-wrap:wrap;margin-top:var(--space-26)}
  .aud .gx-tag{background:var(--ink-2);color:var(--fg-on-dark-1);border-color:var(--ink-3)}
  .mu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-18);margin-top:var(--space-32)}
  @media(max-width:760px){.mu-grid{grid-template-columns:1fr}}
  .mu{border:var(--stroke-3) solid var(--ink);border-radius:var(--r-1);overflow:hidden;background:var(--ink-2);box-shadow:var(--shadow-hard)}
  .mu .media{height:130px;display:grid;place-items:center;border-bottom:var(--stroke-3) solid var(--ink);position:relative}
  .mu .px{position:absolute;left:var(--sp-3);top:var(--sp-3)}
  .mu .body{padding:var(--space-18)}
  .mu h3{font-family:var(--font-display);font-weight:800;font-size:var(--fs-body-l);text-transform:uppercase;margin:0 0 var(--space-5);line-height:1}
  .mu .meta{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;color:var(--fg-on-dark-3);text-transform:uppercase}
  .faq-list{margin-top:var(--space-30);border-top:var(--stroke-2) solid var(--ink-3)}
  .faq details{border-bottom:var(--stroke-2) solid var(--ink-3)}
  .faq summary{list-style:none;cursor:pointer;padding:var(--space-20) 0;display:flex;justify-content:space-between;gap:var(--space-20);font-family:var(--font-display);font-weight:800;font-size:var(--fs-body-l);text-transform:none;letter-spacing:-.01em;color:var(--bone)}
  .faq summary::-webkit-details-marker{display:none}
  .faq .ic{color:var(--brass);font-size:var(--fs-h3)}.faq details[open] .ic{transform:rotate(45deg)}
  .faq .a{padding:0 0 var(--space-22);font-size:var(--fs-body);line-height:1.6;color:var(--fg-on-dark-2);max-width:880px}
  .cta{padding:var(--space-96) 0;text-align:center;position:relative;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.12}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,8vw,96px);line-height:0.96;text-transform:uppercase;margin:0 0 var(--space-22);position:relative}
  footer{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:var(--space-40) 0;text-align:center}
  footer .fm{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;color:var(--fg-on-dark-3);text-transform:uppercase}

  .hero-grid{display:grid;grid-template-columns:1.45fr .85fr;gap:var(--sp-7);align-items:center}
  @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-fig{max-width:420px}}
  .hero-fig{position:relative;border:var(--stroke-3) solid var(--ink);border-radius:var(--r-2);overflow:hidden;box-shadow:var(--shadow-hard-lg);aspect-ratio:4/5;background:var(--ink-2);margin:0}
  .hero-fig img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(1.04) contrast(1.04)}
  .hero-fig figcaption{position:absolute;left:0;right:0;bottom:0;font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--bone);background:linear-gradient(transparent,rgba(6,12,12,.88));padding:var(--space-30) var(--space-14) var(--sp-3)}
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
      



<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/solutions">Services</Link> / <span style={{color: 'var(--brass)'}}>Immersive Technologies</span></p></div>

<main>
<section className="hero"><div className="wrap"><div className="hero-grid">
  <div className="hero-copy">
    <p className="eyebrow">Services · Immersive Technologies</p>
    <h1>Immersive<br/><span className="pop">Technologies</span></h1>
    <p className="answer"><strong>Immersive Technologies</strong> is the layer that runs under the whole show. We build the
    platforms that operators actually use on the floor — <span className="pn-atlvs">ATLVS</span> for production and resource
    management, <span className="pn-compvss">COMPVSS</span> in the crew's pocket, <span className="pn-gvteway">GVTEWAY</span> at the
    door, <span className="pn-legend">LEG3ND</span> holding the record — plus the show control, sensors, and data pipeline that
    tie a live experience together. Technology runs under all eight production phases, and it's where every other discipline
    reports in.</p>
    <div className="hero-cta">
      <Link href="/contact" className="gx-btn">Start a Project</Link>
      <a className="gx-btn gx-btn--ghost" href="https://atlvs.pro">Explore the Platforms</a>
    </div>
  </div>
  <figure className="hero-fig"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop" alt="Immersive Technologies · Show Control" loading="lazy"/><figcaption>Immersive Technologies · Show Control</figcaption></figure>
</div></div></section>

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">The Platforms</p>
  <h2 className="sec">Four Platforms, One Floor.</h2>
  <p className="lede">The technology layer of XPMS is four platforms a production runs on. Each owns a job, and they share one source of truth.</p>
  <div className="caps" style={{marginTop: 'var(--space-32)'}}>
    <div className="cap"><i className="ph-bold ph-squares-four"></i><b style={{color: 'var(--bone)'}}><span className="pn-atlvs">ATLVS</span></b> — production &amp; resource management, the operator system.</div>
    <div className="cap"><i className="ph-bold ph-device-mobile"></i><b style={{color: 'var(--bone)'}}><span className="pn-compvss">COMPVSS</span></b> — workforce &amp; crew, the app in the field.</div>
    <div className="cap"><i className="ph-bold ph-ticket"></i><b style={{color: 'var(--bone)'}}><span className="pn-gvteway">GVTEWAY</span></b> — ticketing, access &amp; fan engagement, the guest gateway.</div>
    <div className="cap"><i className="ph-bold ph-book-bookmark"></i><b style={{color: 'var(--bone)'}}><span className="pn-legend">LEG3ND</span></b> — standards, knowledge &amp; the production record.</div>
  </div>
</div></section>

<section className="pad"><div className="wrap">
  <p className="eyebrow">What We Build</p>
  <h2 className="sec">The Classes We Activate.</h2>
  <p className="lede">XPMS maps every deliverable to a department class and a production phase. Immersive Technologies lights up three.</p>
  <div className="caps" style={{marginTop: 'var(--space-32)'}}>
    <div className="cap"><i className="ph-bold ph-circuitry"></i><b style={{color: 'var(--bone)'}}>Technology</b> — the platforms above, integrations, the data pipeline, dashboards &amp; reporting.</div>
    <div className="cap"><i className="ph-bold ph-cube-transparent"></i><b style={{color: 'var(--bone)'}}>Experience</b> — interactive media, show control, sensors &amp; real-time content.</div>
    <div className="cap"><i className="ph-bold ph-paint-brush-broad"></i><b style={{color: 'var(--bone)'}}>Creative</b> — content systems and the tech that serves the creative.</div>
  </div>
  <p className="answer" style={{marginTop: 'var(--space-30)'}}>Integrations meet your stack where it is, and show control drives the room. The data pipeline keeps ticketing, finance,
  scheduling, and access talking to each other, and the dashboards put the numbers on one screen so they reconcile.
  <span className="pn-legend">LEG3ND</span> writes it all down as the production runs, so the next show starts from what the last
  one learned.</p>
</div></section>

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">The Course</p>
  <h2 className="sec">Tech Runs Under All Eight.</h2>
  <p className="lede">Every production runs the same eight phases. The technology layer runs under all of them, and it's where every other discipline reports in.</p>
  <div className="gx-smap" style={{marginTop: 'var(--space-40)'}}><div className="gx-smap__line">
    <div className="gx-smap__stop is-terminus"><div className="gx-smap__dot">01</div><div className="gx-smap__name">Discovery</div><div className="gx-smap__sub">Consult</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">02</div><div className="gx-smap__name">Design</div><div className="gx-smap__sub">Concept</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">03</div><div className="gx-smap__name">Advance</div><div className="gx-smap__sub">Advance</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">04</div><div className="gx-smap__name">Procurement</div><div className="gx-smap__sub">Procure</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">05</div><div className="gx-smap__name">Build</div><div className="gx-smap__sub">Fabricate</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">06</div><div className="gx-smap__name">Install</div><div className="gx-smap__sub">Install</div></div>
    <div className="gx-smap__stop"><div className="gx-smap__dot">07</div><div className="gx-smap__name">Operate</div><div className="gx-smap__sub">Live</div></div>
    <div className="gx-smap__stop is-terminus"><div className="gx-smap__dot">08</div><div className="gx-smap__name">Close</div><div className="gx-smap__sub">Close-out</div></div>
  </div></div>
</div></section>

<section className="pad"><div className="wrap">
  <p className="eyebrow">Who We Build For</p>
  <h2 className="sec">Built for the People Running the Show.</h2>
  <p className="answer">Immersive Technologies is built for the people accountable for what happens when the doors open and
  the data has to add up the next morning.</p>
  <div className="aud">
    <span className="gx-tag">Producers</span><span className="gx-tag">Brands &amp; Sponsors</span>
    <span className="gx-tag">Venue Operators</span><span className="gx-tag">Technical Directors</span>
  </div>
</div></section>

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">The Archives</p>
  <h2 className="sec">On-Site, On the Record.</h2>
  <div className="mu-grid"><article className="mu" style={{gridColumn: '1/-1'}}><div className="body" style={{textAlign: 'center', padding: 'var(--space-40)'}}><h3>In Production</h3><p className="meta" style={{marginTop: 'var(--sp-2)'}}>New platform work is live on the floor. Want your show to be the first case study? Start a project.</p><Link href="/contact" className="gx-btn gx-btn--sm" style={{marginTop: 'var(--space-18)'}}>Start a Project</Link></div></article>
  </div>
</div></section>

{/* THE DIFFERENCE */}
<section className="pad" id="difference" aria-labelledby="diff-h"><div className="wrap">
  <p className="eyebrow">Why GHXSTSHIP</p>
  <h2 className="sec">The Difference.</h2>
  <p className="answer">We build the technology and we run it on the floor. The platforms come from people who advance the show
  and reconcile the settlement after it, so the tech serves the production instead of the other way around.</p>
  <div className="caps" style={{marginTop: 'var(--space-32)'}}>
    <div className="cap"><i className="ph-bold ph-stack"></i><b style={{color: 'var(--bone)'}}>We build the platforms</b> — <span className="pn-atlvs">ATLVS</span>, <span className="pn-compvss">COMPVSS</span>, <span className="pn-gvteway">GVTEWAY</span> &amp; <span className="pn-legend">LEG3ND</span>, in-house.</div>
    <div className="cap"><i className="ph-bold ph-plugs-connected"></i><b style={{color: 'var(--bone)'}}>We meet your stack</b> — integrations &amp; a data pipeline that put the numbers on one screen.</div>
    <div className="cap"><i className="ph-bold ph-pulse"></i><b style={{color: 'var(--bone)'}}>We run it live</b> — show control &amp; real-time content, on the floor with you.</div>
  </div>
</div></section>

<section className="pad alt faq"><div className="wrap">
  <p className="eyebrow">Answers</p>
  <h2 className="sec">Immersive Technologies FAQ.</h2>
  <div className="faq-list">
    <details open><summary>What are <span className="pn-atlvs">ATLVS</span>, <span className="pn-compvss">COMPVSS</span>, <span className="pn-gvteway">GVTEWAY</span>, and <span className="pn-legend">LEG3ND</span>?<span className="ic">+</span></summary><p className="a">Four platforms that make up the technology layer of XPMS. <span className="pn-atlvs">ATLVS</span> is the studio and operator system for production and resource management. <span className="pn-compvss">COMPVSS</span> is the field app for workforce and crew. <span className="pn-gvteway">GVTEWAY</span> is the guest gateway for ticketing, access, and fan engagement. <span className="pn-legend">LEG3ND</span> holds the standards, knowledge, and the production record. Together they run under the whole show.</p></details>
    <details><summary>Do you integrate with our existing stack?<span className="ic">+</span></summary><p className="a">Yes. We meet your stack where it is. We connect to the ticketing, finance, scheduling, access, and show-control systems you already run, build the data pipeline between them, and put the reporting on one set of dashboards so the numbers reconcile instead of arguing with each other.</p></details>
    <details><summary>What is XPMS?<span className="ic">+</span></summary><p className="a">XPMS is our Experiential Production Management System: eight department classes mapped across eight production phases, so every deliverable maps to a class and a phase. The four platforms are the technology layer of XPMS, and technology is where every other discipline reports in.</p></details>
    <details><summary>Can we use the platforms without the full production service?<span className="ic">+</span></summary><p className="a">Yes. The platforms stand on their own. Run <span className="pn-atlvs">ATLVS</span>, <span className="pn-compvss">COMPVSS</span>, <span className="pn-gvteway">GVTEWAY</span>, and <span className="pn-legend">LEG3ND</span> for your own productions and bring us in for as much or as little of the build and operate work as you want. Start at <a href="https://atlvs.pro" style={{color: 'var(--brass)'}}>atlvs.pro</a>.</p></details>
  </div>
</div></section>

<section className="cta"><div className="wrap">
  <p className="eyebrow" style={{justifyContent: 'center'}}>Ready When You Are</p>
  <h2>Run the<br/>Whole Show.</h2>
  <div className="hero-cta" style={{justifyContent: 'center'}}>
    <Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link>
    <a className="gx-btn gx-btn--ghost gx-btn--lg" href="https://atlvs.pro">Explore the Platforms</a>
  </div>
</div></section>
</main>




      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Immersive Technologies","serviceType":"Immersive and experiential technology",
 "provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},
 "areaServed":"Worldwide",
 "description":"The technology layer of live experience: production and resource management, workforce and crew apps, ticketing and access, interactive media and show control, integrations, and the production record, delivered through the GHXSTSHIP eight-phase production lifecycle.",
 "audience":{"@type":"Audience","audienceType":"Producers, brands, venue operators, and technical directors"},
 "url":"https://ghxstship.tours/services/immersive-technologies"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},
 {"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/solutions"},
 {"@type":"ListItem","position":3,"name":"Immersive Technologies","item":"https://ghxstship.tours/services/immersive-technologies"}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"What are ATLVS, COMPVSS, GVTEWAY, and LEG3ND?","acceptedAnswer":{"@type":"Answer","text":"Four platforms that make up the technology layer of XPMS. ATLVS is the studio and operator system for production and resource management. COMPVSS is the field app for workforce and crew management. GVTEWAY is the guest gateway for ticketing, access, and fan engagement. LEG3ND holds the standards, knowledge, and the production record. Together they run under the whole show."}},
 {"@type":"Question","name":"Do you integrate with our existing stack?","acceptedAnswer":{"@type":"Answer","text":"Yes. We meet your stack where it is. We connect to the ticketing, finance, scheduling, access, and show-control systems you already run, build the data pipeline between them, and put the reporting on one set of dashboards so the numbers reconcile instead of arguing with each other."}},
 {"@type":"Question","name":"What is XPMS?","acceptedAnswer":{"@type":"Answer","text":"XPMS is the GHXSTSHIP Experiential Production Management System: eight department classes mapped across eight production phases, so every deliverable maps to a class and a phase. The four platforms are the technology layer of XPMS, and technology is where every other discipline reports in."}},
 {"@type":"Question","name":"Can we use the platforms without the full production service?","acceptedAnswer":{"@type":"Answer","text":"Yes. The platforms stand on their own. You can run ATLVS, COMPVSS, GVTEWAY, and LEG3ND for your own productions and bring us in for as much or as little of the build and operate work as you want. Start at atlvs.pro."}}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"ATLVS","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","url":"https://atlvs.pro"},"description":"Production and resource management — the studio and operator system in the GHXSTSHIP technology layer."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"COMPVSS","applicationCategory":"BusinessApplication","operatingSystem":"Web, iOS, Android","offers":{"@type":"Offer","url":"https://atlvs.pro/compvss"},"description":"Workforce and crew management — the field app in the GHXSTSHIP technology layer."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"GVTEWAY","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","url":"https://atlvs.pro/gvteway"},"description":"Ticketing, access, and fan engagement — the guest gateway in the GHXSTSHIP technology layer."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"LEG3ND","applicationCategory":"BusinessApplication","operatingSystem":"Web","offers":{"@type":"Offer","url":"https://atlvs.pro"},"description":"Standards, knowledge, and the production record in the GHXSTSHIP technology layer."}` }} />
      <Script src="/phase-detail.js" strategy="afterInteractive" />
    </>
  );
}
