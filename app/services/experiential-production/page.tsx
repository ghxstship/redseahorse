import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Production",
  description: "GHXSTSHIP experiential production builds branded environments end to end: creative, scenic fabrication, technical production, talent, and a producer.",
  alternates: { canonical: "https://ghxstship.tours/services/experiential-production" },
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
  .cap{display:flex;align-items:flex-start;gap:var(--sp-3);font-size:var(--fs-small);color:var(--fg-on-dark-2);background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-1);padding:var(--space-14) var(--sp-4)}
  .cap i{font-size:var(--fs-body-l);color:var(--brass);flex:none;position:relative;top:1px}
.cap-t{flex:1;min-width:0;line-height:1.5}
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
  .mu a{text-decoration:none}
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
      



<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/solutions">Services</Link> / <span style={{color: 'var(--brass)'}}>Experiential Production</span></p></div>

<main>
<section className="hero"><div className="wrap"><div className="hero-grid">
  <div className="hero-copy">
    <p className="eyebrow">Services · Experiential Production</p>
    <h1>Experiential<br/><span className="pop">Production</span></h1>
    <p className="answer"><strong>Experiential production</strong> is the build. You bring an idea for a
    branded environment people walk into, and we make it real: creative direction and show design,
    scenic fabrication, staging and rigging, audio, video, and lighting, the performers and crew who
    run it, and a producer who owns the budget and the schedule from the first call to load-out. We are
    the General Contractor of the experience.</p>
    <div className="hero-cta">
      <Link href="/contact" className="gx-btn">Start a Project</Link>
      <Link href="/solutions" className="gx-btn gx-btn--ghost">All Services</Link>
    </div>
  </div>
  <figure className="hero-fig"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" alt="Experiential Production · The Build" loading="lazy"/><figcaption>Experiential Production · The Build</figcaption></figure>
</div></div></section>

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">What We Build</p>
  <h2 className="sec">The Whole Build, in One Crew.</h2>
  <p className="answer">We run experiential production on XPMS, our Experiential Production Management
    System. Picture a grid: eight department classes down one side, eight production phases across the
    top. Every deliverable lives at one address, a class and a phase, so a render from Creative and the
    steel Production cuts from it never drift apart. Here are the classes experiential production turns
    on.</p>
  <div className="caps">
    <div className="cap"><i className="ph-bold ph-pen-nib"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>Creative</b>&nbsp;— creative direction, experiential &amp; scenic design, content and show design.</span></div>
    <div className="cap"><i className="ph-bold ph-cube"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>Production</b>&nbsp;— scenic fabrication, staging &amp; rigging, technical production for audio, video &amp; lighting, plus production management and budgets.</span></div>
    <div className="cap"><i className="ph-bold ph-users-three"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>Talent</b>&nbsp;— performers, specialty acts, and the crew who build and run the show.</span></div>
    <div className="cap"><i className="ph-bold ph-path"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>Experience</b>&nbsp;— the audience journey, moment design, and how the world reads from the floor.</span></div>
    <div className="cap"><i className="ph-bold ph-crown-simple"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>Executive</b>&nbsp;— the accountable producer who owns the budget and the schedule end to end.</span></div>
  </div>
</div></section>

<section className="pad"><div className="wrap">
  <p className="eyebrow">The Course</p>
  <h2 className="sec">Your Build, Eight Phases.</h2>
  <p className="lede">Experiential production walks all eight phases, from the first Discovery call through Close-out and the final invoice.</p>
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

<section className="pad alt"><div className="wrap">
  <p className="eyebrow">Who We Build For</p>
  <h2 className="sec">Built for the People Who Build Experiences.</h2>
  <p className="answer">Experiential production is for the people on the hook for the room: the brand whose
    name is on the door, the agency that pitched the idea, the promoter putting it on, and the creative
    and production directors who have to make it stand up on site.</p>
  <div className="aud">
    <span className="gx-tag">Brands</span><span className="gx-tag">Agencies</span>
    <span className="gx-tag">Promoters</span><span className="gx-tag">Creative Directors</span>
    <span className="gx-tag">Production Directors</span>
  </div>
</div></section>

<section className="pad"><div className="wrap">
  <p className="eyebrow">The Archives</p>
  <h2 className="sec">Experiences We've Built.</h2>
  <p className="answer">A few of the worlds we've built and run, from a sold-out immersive supper club to
    brand takeovers on the festival floor.</p>
  <div className="mu-grid">
    <article className="mu"><Link href="/work/salvage-city-supper-club"><div className="body"><h3>Salvage City Supper Club</h3><p className="meta" style={{marginTop: 'var(--sp-2)'}}>Immersive Experience · Club Space, Miami</p></div></Link></article>
    <article className="mu"><Link href="/work"><div className="body"><h3>Red Bull Unforeseen Motel</h3><p className="meta" style={{marginTop: 'var(--sp-2)'}}>Brand Activation · Built &amp; Run</p></div></Link></article>
    <article className="mu"><Link href="/work"><div className="body"><h3>Polymarket Grocery Store</h3><p className="meta" style={{marginTop: 'var(--sp-2)'}}>Brand Activation · Built &amp; Run</p></div></Link></article>
  </div>
  <div className="hero-cta" style={{marginTop: 'var(--space-30)'}}>
    <Link href="/work" className="gx-btn gx-btn--sm gx-btn--ghost">See the Archives</Link>
  </div>
</div></section>

{/* THE DIFFERENCE */}
<section className="pad" id="difference" aria-labelledby="diff-h"><div className="wrap">
  <p className="eyebrow">Why GHXSTSHIP</p>
  <h2 className="sec">The Difference.</h2>
  <p className="answer">Most shops design the thing and then hand you a list of vendors to chase. We hold
    creative and the fabrication shop and the crew and the producer under one roof, on XPMS, so the
    person who drew it is talking to the person cutting it. We build the technology that runs it too.</p>
  <div className="caps" style={{marginTop: 'var(--space-32)'}}>
    <div className="cap"><i className="ph-bold ph-path"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>One accountable crew</b>&nbsp;— all 8 phases under one producer, so you're never chasing a vendor relay.</span></div>
    <div className="cap"><i className="ph-bold ph-hammer"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>We fabricate</b>&nbsp;— scenic, staging, and rigging built by the crew who install it.</span></div>
    <div className="cap"><i className="ph-bold ph-compass-tool"></i><span className="cap-t"><b style={{color: 'var(--bone)'}}>We build the tech</b>&nbsp;— <span className="pn-atlvs">ATLVS</span>, <span className="pn-compvss">COMPVSS</span>, <span className="pn-gvteway">GVTEWAY</span> &amp; <span className="pn-legend">LEG3ND</span>, in-house.</span></div>
  </div>
</div></section>

<section className="pad alt faq"><div className="wrap">
  <p className="eyebrow">Answers</p>
  <h2 className="sec">Experiential Production FAQ.</h2>
  <div className="faq-list">
    <details open><summary>What does GHXSTSHIP's experiential production cover?<span className="ic">+</span></summary><p className="a">The whole build of a branded environment: creative direction and show design, experiential and scenic design, scenic fabrication, staging and rigging, technical production for audio, video, and lighting, performers and crew, the audience experience, and a producer who owns the budget and the schedule from the first call to load-out.</p></details>
    <details><summary>Do you fabricate and build in-house?<span className="ic">+</span></summary><p className="a">Yes. Scenic fabrication, staging, rigging, and technical production sit inside our Production class, so the people who design the build are the same crew accountable for installing and running it on site.</p></details>
    <details><summary>How does XPMS work?<span className="ic">+</span></summary><p className="a">XPMS is our Experiential Production Management System, a coordinate model of eight department classes by eight production phases. Every deliverable lives at one address, a class and a phase, so nothing falls between Creative finishing a render and Production cutting steel. It runs on <span className="pn-atlvs">ATLVS</span>.</p></details>
    <details><summary>Who runs point on the project?<span className="ic">+</span></summary><p className="a">A producer from our Executive class. They own the budget and the schedule end to end, and they are your single accountable contact from Discovery through Close.</p></details>
  </div>
</div></section>

<section className="cta"><div className="wrap">
  <p className="eyebrow" style={{justifyContent: 'center'}}>Ready When You Are</p>
  <h2>Build Your<br/>Experience.</h2>
  <div className="hero-cta" style={{justifyContent: 'center'}}>
    <Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link>
    <Link href="/destinations/immersive-experiences" className="gx-btn gx-btn--ghost gx-btn--lg">Immersive Experiences</Link>
  </div>
</div></section>
</main>




      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Experiential Production","serviceType":"Experiential production",
 "provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},
 "areaServed":"Worldwide",
 "description":"End-to-end experiential production: creative direction and show design, scenic fabrication, staging and rigging, technical production for audio, video, and lighting, performers and production crew, audience experience design, and an accountable producer who owns the budget and the schedule across the GHXSTSHIP eight-phase lifecycle.",
 "audience":{"@type":"Audience","audienceType":"Brands, agencies, promoters, and creative and production directors"},
 "url":"https://ghxstship.tours/services/experiential-production"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},
 {"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/solutions"},
 {"@type":"ListItem","position":3,"name":"Experiential Production","item":"https://ghxstship.tours/services/experiential-production"}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"What does GHXSTSHIP's experiential production cover?","acceptedAnswer":{"@type":"Answer","text":"The whole build of a branded environment: creative direction and show design, experiential and scenic design, scenic fabrication, staging and rigging, technical production for audio, video, and lighting, performers and crew, the audience experience, and an accountable producer who owns the budget and the schedule from first call to load-out."}},
 {"@type":"Question","name":"Do you fabricate and build in-house?","acceptedAnswer":{"@type":"Answer","text":"Yes. Scenic fabrication, staging, rigging, and technical production sit inside our Production department, so the people who design the build are the same crew accountable for installing and running it on site."}},
 {"@type":"Question","name":"How does XPMS work?","acceptedAnswer":{"@type":"Answer","text":"XPMS is our Experiential Production Management System: a coordinate model of eight department classes by eight production phases. Every deliverable lives at one address, a class and a phase, so nothing falls between Creative finishing a render and Production cutting steel."}},
 {"@type":"Question","name":"Who runs point on the project?","acceptedAnswer":{"@type":"Answer","text":"A producer from our Executive class. They own the budget and the schedule end to end, and they are your single accountable contact from Discovery through Close."}}
]}` }} />
      <Script src="/phase-detail.js" strategy="afterInteractive" />
    </>
  );
}
