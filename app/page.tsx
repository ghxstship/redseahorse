import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Production & Operations Management",
  description: "GHXSTSHIP runs experiential production and operations like a general contractor \u2014 managing scope, schedule, budget, crew, and technology for festivals, brand activations, immersive experiences, and live events.",
  keywords: ["experiential production management", "event general contractor", "production management company", "operations leadership management", "event project management", "brand activation contractor", "festival production management", "live event operations"],
  alternates: { canonical: "https://ghxstship.tours/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* PREVIEW PAGE STYLES — every value reads a kit token (var(--*)); no hardcoded design literals. */
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--fg-on-dark-1);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  .wrap{max-width:1200px;margin:0 auto;padding:0 var(--sp-6)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:var(--tracking-eyebrow);text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-4);display:flex;align-items:center;gap:var(--sp-2);white-space:nowrap;flex-wrap:nowrap}
  .eyebrow::before{content:"◆";color:var(--plasma)}
  h2.sec{font-family:var(--font-display);font-weight:700;font-size:var(--fs-display-m);line-height:var(--lh-display-m);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:0 0 var(--sp-4)}
  .lede{font-size:var(--fs-body-l);line-height:var(--lh-body-l);color:var(--fg-on-dark-2);max-width:46rem;margin:0}

  /* NAV */
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-1) solid var(--ink-3)}
  .nav-in{display:flex;align-items:center;justify-content:space-between;min-height:4.5rem;padding:var(--sp-3) var(--sp-6)}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none;color:inherit}
  .brand .mk{width:var(--sp-7);height:var(--sp-7);border-radius:50%;background:var(--ink-2);border:var(--stroke-1) solid var(--brass);display:grid;place-items:center}
  .brand .mk img{width:70%;height:70%;object-fit:contain}
  .brand b{font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:var(--sp-5);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:64rem){.navlinks a:not(.gx-btn){display:none}}

  /* HERO */
  .hero{padding:var(--sp-8) 0 var(--sp-7)}
  .hero-grid{display:grid;grid-template-columns:1.5fr .9fr;gap:var(--sp-7);align-items:center}
  @media(max-width:56rem){.hero-grid{grid-template-columns:1fr}}
  .hero h1{font-family:var(--font-display);font-weight:800;font-size:var(--fs-display-l);line-height:var(--lh-display-l);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:0 0 var(--sp-6)}
  .hero h1 .a{color:var(--brass)}
  .hero .sub{font-size:var(--fs-body-l);line-height:var(--lh-body-l);color:var(--fg-on-dark-1);max-width:38rem;margin:0 0 var(--sp-6)}
  .cta-row{display:flex;gap:var(--sp-3);flex-wrap:wrap}
  .hero-art{display:grid;place-items:center}
  .porthole{width:18rem;height:18rem;border-radius:50%;background:var(--ink-2);border:var(--stroke-1) solid var(--ink-3);overflow:hidden;box-shadow:var(--shadow-pop-lg);position:relative}
  .porthole::after{content:"";position:absolute;inset:0;border-radius:50%;border:var(--stroke-2) solid var(--brass);opacity:.5;pointer-events:none;z-index:2}
  .porthole::before{content:"";position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 4rem rgba(6,12,12,.55);z-index:2;pointer-events:none}
  .porthole img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 1s ease}
  .porthole img.on{opacity:1}

  /* NUMBERS BAND */
  .band{background:var(--ink);border-top:var(--stroke-1) solid var(--ink-3);border-bottom:var(--stroke-1) solid var(--ink-3)}
  .band-in{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--sp-5);padding:var(--sp-6) var(--sp-6)}
  @media(max-width:48rem){.band-in{grid-template-columns:repeat(2,1fr)}}
  .stat .v{font-family:var(--font-display);font-weight:700;font-size:var(--fs-display-m);line-height:1;color:var(--brass)}
  .stat:nth-child(2) .v{color:var(--nebula)}.stat:nth-child(3) .v{color:var(--plasma)}.stat:nth-child(4) .v{color:var(--fg-on-dark-1)}
  .stat .k{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);margin-top:var(--sp-2)}

  /* TRUST */
  .trust{padding:var(--sp-6) 0;text-align:center}
  .trust .lbl{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.18em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 var(--sp-4)}
  .trust .marquee{overflow:hidden;position:relative;margin-top:var(--sp-5);-webkit-mask:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
  .trust .track{display:flex;gap:var(--sp-8);width:max-content;animation:trust-scroll 34s linear infinite}
  .trust:hover .track{animation-play-state:paused}
  .trust .track span{font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);letter-spacing:.04em;text-transform:uppercase;color:var(--fg-on-dark-2);opacity:.62;white-space:nowrap}
  @keyframes trust-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @media(prefers-reduced-motion:reduce){.trust .track{animation:none;flex-wrap:wrap;width:auto;justify-content:center}}

  /* POSITIONING */
  .pos{padding:var(--sp-9) 0;border-top:var(--stroke-1) solid var(--ink-3)}
  .pos h2{font-family:var(--font-display);font-weight:700;font-size:var(--fs-display-m);line-height:var(--lh-display-m);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:0;max-width:30rem}
  .pos h2 .a{color:var(--brass)}.pos h2 .b{color:var(--nebula)}.pos h2 .c{color:var(--plasma)}
  .pos .grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-7);align-items:center}
  @media(max-width:56rem){.pos .grid{grid-template-columns:1fr}}

  /* JOURNEY (sticky rail) */
  .journey{padding:var(--sp-9) 0;background:var(--ink);border-top:var(--stroke-1) solid var(--ink-3);border-bottom:var(--stroke-1) solid var(--ink-3)}
  .j-grid{display:grid;grid-template-columns:14rem 1fr;gap:var(--sp-7)}
  @media(max-width:56rem){.j-grid{grid-template-columns:1fr}}
  .rail{position:sticky;top:6rem;align-self:start}
  .rail .rl{display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3) 0;font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .rail .rl .n{width:1.6rem;height:1.6rem;border-radius:50%;border:var(--stroke-1) solid var(--ink-3);display:grid;place-items:center;font-size:var(--fs-label);flex:none}
  .rail .rl.on{color:var(--fg-on-dark-1)}.rail .rl.on .n{background:var(--brass);border-color:var(--brass);color:var(--on-brass)}
  .j-steps{display:flex;flex-direction:column;gap:var(--sp-5)}
  .step{background:var(--ink-2);border:var(--stroke-1) solid var(--ink-3);border-radius:var(--r-3);padding:var(--sp-6);box-shadow:var(--shadow-pop)}
  .step .sn{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--brass)}
  .step h3{font-family:var(--font-display);font-weight:700;font-size:var(--fs-h2);line-height:var(--lh-h2);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:var(--sp-2) 0 var(--sp-3)}
  .step p{font-size:var(--fs-body);line-height:var(--lh-body);color:var(--fg-on-dark-2);margin:0;max-width:38rem}

  /* CAPABILITY STACK */
  .cap{padding:var(--sp-9) 0}
  .cap-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-4);margin-top:var(--sp-6)}
  @media(max-width:56rem){.cap-grid{grid-template-columns:1fr}}
  .ccard{background:var(--ink-2);border:var(--stroke-1) solid var(--ink-3);border-radius:var(--r-3);padding:var(--sp-6);box-shadow:var(--shadow-pop)}
  .ccard .role{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase}
  .ccard.p .role{color:var(--brass)}.ccard.o .role{color:var(--nebula)}.ccard.t .role{color:var(--plasma)}
  .ccard h3{font-family:var(--font-display);font-weight:700;font-size:var(--fs-h2);line-height:var(--lh-h2);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:var(--sp-2) 0 var(--sp-3)}
  .ccard p{font-size:var(--fs-small);line-height:var(--lh-body);color:var(--fg-on-dark-2);margin:0}
  .ccard .bar{height:3px;border-radius:2px;margin-bottom:var(--sp-4)}
  .ccard.p .bar{background:var(--brass)}.ccard.o .bar{background:var(--nebula)}.ccard.t .bar{background:var(--plasma)}

  /* THE COURSE (strip-map) */
  .course{padding:var(--sp-9) 0;background:var(--ink);border-top:var(--stroke-1) solid var(--ink-3);border-bottom:var(--stroke-1) solid var(--ink-3)}
  .smap{display:flex;gap:0;margin-top:var(--sp-7)}
  @media(max-width:56rem){.smap{flex-direction:column;gap:var(--sp-4)}}
  .stop{flex:1;position:relative;text-align:center;padding-top:var(--sp-7)}
  .stop::before{content:"";position:absolute;top:0.6rem;left:0;width:100%;height:3px;background:var(--ink-3)}
  .stop:first-child::before{left:50%;width:50%}.stop:last-child::before{width:50%}
  .stop.done::before{background:var(--brass)}
  .stop .dot{position:absolute;top:0;left:50%;transform:translateX(-50%);width:1.6rem;height:1.6rem;border-radius:50%;background:var(--void);border:var(--stroke-3) solid var(--ink-3);font-family:var(--font-mono);font-size:var(--fs-label);font-weight:700;color:var(--fg-on-dark-3);display:grid;place-items:center}
  .stop.done .dot{background:var(--brass);border-color:var(--brass);color:var(--on-brass)}
  .stop .nm{font-family:var(--font-display);font-weight:700;font-size:var(--fs-small);text-transform:uppercase;color:var(--fg-on-dark-1);margin-top:var(--sp-1);line-height:1.1}
  @media(max-width:56rem){.smap .stop{text-align:left;padding:0 0 0 var(--sp-6)}.stop::before{top:0;left:0.6rem;width:3px;height:100%}.stop .dot{position:static;transform:none}}

  /* SELECTED WORK */
  .work{padding:var(--sp-9) 0}
  .work-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-4);margin-top:var(--sp-6)}
  @media(max-width:56rem){.work-grid{grid-template-columns:1fr}}
  .wcard .media{height:11rem;border-radius:var(--r-3) var(--r-3) 0 0;display:grid;place-items:center;border:var(--stroke-1) solid var(--ink-3);border-bottom:0;overflow:hidden}
  .wcard .media i{font-size:var(--fs-display-m);color:var(--brass)}
  .wcard .media img{width:100%;height:100%;object-fit:cover;filter:saturate(1.05) contrast(1.04)}
  .wcard .body{background:var(--ink-2);border:var(--stroke-1) solid var(--ink-3);border-radius:0 0 var(--r-3) var(--r-3);padding:var(--sp-5)}
  .wcard h3{font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:0 0 var(--sp-1);line-height:1}
  .wcard .meta{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}

  /* CTA CLOSE */
  .close{padding:var(--sp-10) 0;text-align:center;border-top:var(--stroke-1) solid var(--ink-3)}
  .close h2{font-family:var(--font-display);font-weight:800;font-size:var(--fs-display-l);line-height:var(--lh-display-l);text-transform:uppercase;letter-spacing:var(--tracking-display);margin:0 0 var(--sp-4)}
  .close h2 .a{color:var(--brass)}
  .close .sub{max-width:40rem;margin:0 auto var(--sp-6)}

  footer{background:var(--ink);border-top:var(--stroke-2) solid var(--brass);padding:var(--sp-8) 0 var(--sp-6)}
  .foot-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:var(--sp-6)}
  @media(max-width:48rem){.foot-grid{grid-template-columns:1fr 1fr}}
  .foot-brand .brand{margin-bottom:var(--sp-4)}
  .foot-tag{font-family:var(--font-display);font-weight:700;font-size:var(--fs-h3);line-height:1.15;text-transform:uppercase;letter-spacing:var(--tracking-display);color:var(--brass);margin:0 0 var(--sp-5);max-width:22rem}
  .foot-ports{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0}
  .foot-social{display:flex;gap:var(--sp-3);margin-top:var(--sp-4)}
  .foot-social a{color:var(--fg-on-dark-2);font-size:20px;line-height:1;text-decoration:none}
  .foot-social a:hover{color:var(--brass)}
  .foot-col h5{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3)}
  .foot-col a{display:block;font-size:var(--fs-small);color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:var(--sp-2)}
  .foot-col a:hover{color:var(--bone)}
  .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:var(--sp-3);margin-top:var(--sp-7);padding-top:var(--sp-4);border-top:var(--stroke-1) solid var(--ink-3);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}
/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .nav-inner .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .nav-inner .brand img{width:34px;height:34px}
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
  .site-foot .brand img{width:30px;height:30px}
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
` }} />
      

<header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav><button className="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="gx-nav-drawer"><span className="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span></button>
</div></header>

<main>
<section className="hero"><div className="wrap"><div className="hero-grid">
  <div>
    <p className="eyebrow">Production Management &nbsp;·&nbsp; Operations Leadership &nbsp;·&nbsp; Technology Innovations</p>
    <h1>Beyond<br/>the <span className="a">Scenes.</span></h1>
    <p className="sub">GHXSTSHIP runs experiential production and operations the way a general contractor runs a build —
      one accountable partner managing scope, schedule, budget, crew, and technology end to end. For brands,
      agencies, and venues producing festivals, activations, immersive experiences, and live events.</p>
    <div className="cta-row">
      <a className="gx-btn" href="#close">Start a Project</a>
      <a className="gx-btn gx-btn--ghost" href="#work">See the Archives</a>
    </div>
  </div>
  <div className="hero-art"><div className="porthole" id="porthole">
    <img className="on" alt="GHXSTSHIP work" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop"/>
    <img alt="GHXSTSHIP work" src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop"/>
    <img alt="GHXSTSHIP work" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop"/>
    <img alt="GHXSTSHIP work" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop"/>
  </div></div>
</div></div></section>

<div className="band"><div className="band-in wrap">
  <div className="stat"><div className="v">14+</div><div className="k">Years</div></div>
  <div className="stat"><div className="v">250+</div><div className="k">Experiences</div></div>
  <div className="stat"><div className="v">5</div><div className="k">Home Ports</div></div>
  <div className="stat"><div className="v">3</div><div className="k">In-House Platforms</div></div>
</div></div>

<section className="trust"><div className="wrap">
  <p className="lbl">Trusted by the brands behind the moments</p>
  <div className="marquee"><div className="track" aria-label="Trusted by Red Bull, Heineken, Formula 1, Insomniac, Patrón, Polymarket, Club Space, III Points, Factory Town and EDC">
    <span>Red Bull</span><span>Heineken</span><span>Formula 1</span><span>Insomniac</span><span>Patrón</span><span>Polymarket</span><span>Club Space</span><span>III Points</span><span>Factory Town</span><span>EDC</span>
    <span aria-hidden="true">Red Bull</span><span aria-hidden="true">Heineken</span><span aria-hidden="true">Formula 1</span><span aria-hidden="true">Insomniac</span><span aria-hidden="true">Patrón</span><span aria-hidden="true">Polymarket</span><span aria-hidden="true">Club Space</span><span aria-hidden="true">III Points</span><span aria-hidden="true">Factory Town</span><span aria-hidden="true">EDC</span>
  </div></div>
</div></section>

<section className="pos"><div className="wrap"><div className="grid">
  <h2>The <span className="a">General Contractor</span>, <span className="b">Foreman</span>, and <span className="c">Procore</span> of experiential project management.</h2>
  <p className="lede">GHXSTSHIP manages experiential production and operations leadership the way a general
    contractor manages a build — one accountable partner owning scope, schedule, budget, crew, and
    technology. Not a vendor chain: production management, operations leadership, and the platforms that
    run them, start to launch.</p>
</div></div></section>

<section className="journey" id="journey"><div className="wrap"><div className="j-grid">
  <div className="rail">
    <div className="rl on"><span className="n">1</span>The Destination</div>
    <div className="rl"><span className="n">2</span>The Ship</div>
    <div className="rl"><span className="n">3</span>The Course</div>
    <div className="rl"><span className="n">4</span>The Crew</div>
    <div className="rl"><span className="n">5</span>The Manifest</div>
    <div className="rl"><span className="n">6</span>Launch</div>
  </div>
  <div className="j-steps">
    <div className="step"><p className="sn">Step 01 · The Destination</p><h3>Share Your Vision.</h3><p>Start with the vision — the project goal, the experience worth building. That's the destination, and everything we build is sized to reach it.</p></div>
    <div className="step"><p className="sn">Step 02 · The Ship</p><h3>Build Your Vessel.</h3><p>Pick the hull and the fit-out: a full build, a single discipline, or by the phase. The scope, customized to the destination you're reaching for.</p></div>
    <div className="step"><p className="sn">Step 03 · The Course</p><h3>Chart the Course.</h3><p>Eight phases from first line to launch — Discovery to Close. The route we build to, with deliverables and owners at every stop.</p></div>
    <div className="step"><p className="sn">Step 04 · The Crew</p><h3>Meet the Team.</h3><p>With the course charted, we assign the producers, operations leads, and technologists your build needs — the accountable crew, matched to the route.</p></div>
    <div className="step"><p className="sn">Step 05 · The Manifest</p><h3>Pack Your Bags.</h3><p>Onboarding, approvals, and the know-before-you-go — everything settled and signed off before we go live.</p></div>
    <div className="step"><p className="sn">Step 06 · Launch</p><h3>Anchors Away.</h3><p>The experience goes live. We run the show, hold the standard, and strike clean — then log the build.</p></div>
  </div>
</div></div></section>

<section className="cap" id="cap"><div className="wrap">
  <p className="eyebrow">The Fleet</p>
  <h2 className="sec">Three Vessels. One Yard.</h2>
  <p className="lede">Three disciplines, one accountable yard: Production builds it, Operations runs it, Technology streamlines it. Distinct crews, one standard.</p>
  <div className="cap-grid">
    <div className="ccard p"><div className="bar"></div><p className="role">The General Contractor</p><h3>Production Management</h3><p>We build the ship. Scope, schedule, budget, fabrication, staging, and the finish — owned end to end.</p></div>
    <div className="ccard o"><div className="bar"></div><p className="role">The Foreman</p><h3>Operations Leadership</h3><p>We crew it and run it. Logistics, staffing, safety, and the day-of call — clockwork at any scale.</p></div>
    <div className="ccard t"><div className="bar"></div><p className="role">The Procore</p><h3>Technology Innovations</h3><p>We give the yard its instruments. ATLVS, COMPVSS &amp; GVTEWAY — chart the course, point the crew, open the gate.</p></div>
  </div>
</div></section>

<section className="course" id="course"><div className="wrap">
  <p className="eyebrow">The Course</p>
  <h2 className="sec">8 Phases, from Launch to Landing.</h2>
  <div className="smap">
    <div className="stop done"><div className="dot">1</div><div className="nm">Discovery</div></div>
    <div className="stop done"><div className="dot">2</div><div className="nm">Design</div></div>
    <div className="stop done"><div className="dot">3</div><div className="nm">Advance</div></div>
    <div className="stop done"><div className="dot">4</div><div className="nm">Procurement</div></div>
    <div className="stop"><div className="dot">5</div><div className="nm">Build</div></div>
    <div className="stop"><div className="dot">6</div><div className="nm">Install</div></div>
    <div className="stop"><div className="dot">7</div><div className="nm">Operate</div></div>
    <div className="stop"><div className="dot">8</div><div className="nm">Close</div></div>
  </div>
</div></section>

<section className="work" id="work"><div className="wrap">
  <p className="eyebrow">The Archives</p>
  <h2 className="sec">Selected Work.</h2>
  <p className="lede">Case studies from the Archives — experiential project management we designed, built, crewed, and launched end to end.</p>
  <div className="work-grid">
    <article className="wcard"><div className="media"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80&auto=format&fit=crop" alt="EDC Las Vegas" loading="lazy"/></div><div className="body"><h3>EDC Las Vegas</h3><p className="meta">Festival · Insomniac, Las Vegas · 2025–26</p></div></article>
    <article className="wcard"><div className="media"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=80&auto=format&fit=crop" alt="Black Coffee at the Race Track" loading="lazy"/></div><div className="body"><h3>Black Coffee at the Race Track</h3><p className="meta">Concerts &amp; Tours · Club Space Miami · 2026</p></div></article>
    <article className="wcard"><div className="media"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop" alt="Polymarket Grocery" loading="lazy"/></div><div className="body"><h3>Polymarket Grocery Store</h3><p className="meta">Brand Activation · 2026</p></div></article>
  </div>
</div></section>

<section className="close" id="close"><div className="wrap">
  <p className="eyebrow" style={{justifyContent: 'center'}}>Ready When You Are</p>
  <h2>Start Your <span className="a">Project.</span></h2>
  <p className="sub lede">Tell us the destination. We build the ship, crew it, chart the course, and launch — on time, on budget, beyond the scene.</p>
  <div className="cta-row" style={{justifyContent: 'center'}}>
    <a className="gx-btn gx-btn--lg" href="mailto:hello@ghxstship.tours">Start a Project</a>
    <a className="gx-btn gx-btn--ghost gx-btn--lg" href="#work">See the Archives</a>
  </div>
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
    <nav className="foot-col"><h5>Platforms</h5><a href="https://atlvs.pro">ATLVS</a><a href="https://atlvs.pro/compvss">COMPVSS</a><a href="https://atlvs.pro/gvteway">GVTEWAY</a></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","alternateName":"G H X S T S H I P","legalName":"G H X S T S H I P Industries LLC",
  "url":"https://ghxstship.tours/","logo":"https://ghxstship.tours/logo.svg",
  "description":"GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We produce festivals, concerts and tours, brand activations, immersive experiences, and sporting events for brands, producers, creative directors, and production directors — through three verticals: Production, Operations, and Technology.",
  "audience":{"@type":"Audience","audienceType":"Brands, producers, creative directors, production directors, and project managers in live entertainment, experiential marketing, and arts and culture"},
  "email":"hello@ghxstship.tours",
  "foundingDate":"2022","slogan":"Venture Beyond",
  "address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"},
  "location":[
    {"@type":"Place","name":"GHXSTSHIP Miami (Headquarters)","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"}},
    {"@type":"Place","name":"GHXSTSHIP New York","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","addressCountry":"US"}},
    {"@type":"Place","name":"GHXSTSHIP Chicago","address":{"@type":"PostalAddress","addressLocality":"Chicago","addressRegion":"IL","addressCountry":"US"}},
    {"@type":"Place","name":"GHXSTSHIP Los Angeles","address":{"@type":"PostalAddress","addressLocality":"Los Angeles","addressRegion":"CA","addressCountry":"US"}}
  ],
  "areaServed":"Worldwide",
  "knowsAbout":["Festival production","Concert and tour production","Brand activations","Immersive experience design","Sporting event production","Broadcast and film production","Health and wellness experiences","Premium hospitality","Luxury retail activations","Water and motorsports production","Event production management","Crew management","Event ticketing"],
  "hasOfferCatalog":{"@type":"OfferCatalog","name":"GHXSTSHIP Destinations",
    "itemListElement":[
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Festival Production"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Concert &amp; Tour Production"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Brand Activations"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Immersive Experiences"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Sporting Events"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"TV, Film &amp; Broadcast"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Health &amp; Wellness Experiences"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Premium Hospitality"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Luxury Retail Activations"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Water &amp; Motorsports Production"}}
    ]}
}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"HowTo","name":"The GHXSTSHIP Production Lifecycle",
 "description":"GHXSTSHIP's eight-phase methodology for delivering live experiences, from discovery to strike.",
 "step":[
  {"@type":"HowToStep","position":1,"name":"Project Discovery (Consultation)","text":"Goals, scope, and vision — the consultation that sets the route."},
  {"@type":"HowToStep","position":2,"name":"Research &amp; Development","text":"Feasibility, concepts, and technology and partner exploration."},
  {"@type":"HowToStep","position":3,"name":"Creative Design","text":"Creative direction, design, and experiential storytelling."},
  {"@type":"HowToStep","position":4,"name":"Compliance &amp; Risk Management","text":"Engineering, permits, safety, insurance, and risk planning."},
  {"@type":"HowToStep","position":5,"name":"Production &amp; Build","text":"Fabrication, staging, technical production, and pre-build."},
  {"@type":"HowToStep","position":6,"name":"Operations &amp; Logistics","text":"Logistics, crew, vendors, scheduling, and load-in."},
  {"@type":"HowToStep","position":7,"name":"Live Activation","text":"Show calling and live execution — the experience itself."},
  {"@type":"HowToStep","position":8,"name":"Strike &amp; Post-Production","text":"Load-out, reconciliation, analytics, and the debrief."}
 ]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[
 {"@type":"SoftwareApplication","name":"ATLVS","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Production and resource management platform for experiential production teams.","publisher":{"@type":"Organization","name":"GHXSTSHIP"}},
 {"@type":"SoftwareApplication","name":"COMPVSS","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Enterprise workforce and crew management software for live event production.","publisher":{"@type":"Organization","name":"GHXSTSHIP"}},
 {"@type":"SoftwareApplication","name":"GVTEWAY","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Event ticketing, fan engagement, and community platform.","publisher":{"@type":"Organization","name":"GHXSTSHIP"}}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[
 {"@type":"Service","name":"Festival Production","serviceType":"Festival production","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Multi-stage festival production, infrastructure, staging, and headliner experiences at scale.","audience":{"@type":"Audience","audienceType":"Festival promoters, brands, and production directors"}},
 {"@type":"Service","name":"Concert &amp; Tour Production","serviceType":"Concert touring production","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Concert touring, show production, and multi-city routing for live music.","audience":{"@type":"Audience","audienceType":"Artists, tour managers, and promoters"}},
 {"@type":"Service","name":"Brand Activations","serviceType":"Brand activation &amp; experiential marketing","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Experiential marketing, pop-ups, and brand environments that convert attention.","audience":{"@type":"Audience","audienceType":"Brands, agencies, and creative directors"}},
 {"@type":"Service","name":"Immersive Experiences","serviceType":"Immersive experience design","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Narrative installations and immersive worlds audiences step inside.","audience":{"@type":"Audience","audienceType":"Brands, museums, and cultural institutions"}},
 {"@type":"Service","name":"Sporting Events","serviceType":"Sporting event production","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Stadium activations, fan experiences, and game-day production.","audience":{"@type":"Audience","audienceType":"Leagues, teams, brands, and venues"}},
 {"@type":"Service","name":"TV, Film &amp; Broadcast","serviceType":"Broadcast, film and television production","provider":{"@type":"Organization","name":"GHXSTSHIP"},"areaServed":"Worldwide","description":"Live broadcast, film and TV content capture, and on-air activations.","audience":{"@type":"Audience","audienceType":"Networks, studios, streamers, and brands"}}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ItemList","name":"GHXSTSHIP Selected Work","itemListElement":[
 {"@type":"ListItem","position":1,"item":{"@type":"CreativeWork","name":"Black Coffee at the Race Track","about":"Concert experience production","locationCreated":"Club Space, Miami","datePublished":"2026-03"}},
 {"@type":"ListItem","position":2,"item":{"@type":"CreativeWork","name":"Polymarket Grocery Store","about":"Brand activation","datePublished":"2026-02"}},
 {"@type":"ListItem","position":3,"item":{"@type":"CreativeWork","name":"Salvage City Supper Club","about":"Immersive experience","locationCreated":"Club Space, Miami","datePublished":"2025-05"}},
 {"@type":"ListItem","position":4,"item":{"@type":"CreativeWork","name":"PATRÓN Cristalino x Becky G","about":"Product launch","locationCreated":"Los Angeles","datePublished":"2024-09"}},
 {"@type":"ListItem","position":5,"item":{"@type":"CreativeWork","name":"Heineken Turn 4 Nightclub","about":"Motorsports activation","locationCreated":"F1 Las Vegas Grand Prix","datePublished":"2024-11"}},
 {"@type":"ListItem","position":6,"item":{"@type":"CreativeWork","name":"The Vanguard Orlando","about":"Venue operations","locationCreated":"Orlando","datePublished":"2024-01"}},
 {"@type":"ListItem","position":7,"item":{"@type":"CreativeWork","name":"Factory Town","about":"Venue operations","locationCreated":"Miami","datePublished":"2023-12"}},
 {"@type":"ListItem","position":8,"item":{"@type":"CreativeWork","name":"Formula 1 Las Vegas Grand Prix","about":"Motorsports production","locationCreated":"Las Vegas","datePublished":"2023-11"}},
 {"@type":"ListItem","position":9,"item":{"@type":"CreativeWork","name":"Red Bull Unforeseen Motel","about":"Brand activation","locationCreated":"III Points, Miami","datePublished":"2023"}}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
 {"@type":"Question","name":"What does GHXSTSHIP do?","acceptedAnswer":{"@type":"Answer","text":"GHXSTSHIP is a full-service experiential production, operations, and technology company headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We produce festivals, concerts and tours, brand activations, immersive experiences, and sporting events through three verticals: Production, Operations, and Technology."}},
 {"@type":"Question","name":"How do I work with GHXSTSHIP?","acceptedAnswer":{"@type":"Answer","text":"Working with GHXSTSHIP is a six-step journey: share your vision (the destination), build your vessel (the scope), chart the course (the eight-phase production lifecycle), meet your crew, pack the manifest, and launch. It starts with a consultation."}},
 {"@type":"Question","name":"What is the GHXSTSHIP production lifecycle?","acceptedAnswer":{"@type":"Answer","text":"An eight-phase methodology: Project Discovery, Research and Development, Creative Design, Compliance and Risk Management, Production and Build, Operations and Logistics, Live Activation, and Strike and Post-Production."}},
 {"@type":"Question","name":"Who produces my experience?","acceptedAnswer":{"@type":"Answer","text":"Your experience is delivered by the GHXSTSHIP crew — a senior team of producers, directors, technicians, and logistics specialists who stay with you from consultation to celebration."}},
 {"@type":"Question","name":"What software does GHXSTSHIP build?","acceptedAnswer":{"@type":"Answer","text":"Three platforms: ATLVS for production and resource management, COMPVSS for workforce and crew management, and GVTEWAY for ticketing, fan engagement, and community."}},
 {"@type":"Question","name":"Who does GHXSTSHIP work with?","acceptedAnswer":{"@type":"Answer","text":"GHXSTSHIP partners with brands, producers, creative directors, production directors, and project managers across live entertainment, experiential marketing, and arts and culture — and trains the next generation of experiential producers."}},
 {"@type":"Question","name":"Does GHXSTSHIP produce festivals and concert tours?","acceptedAnswer":{"@type":"Answer","text":"Yes. Festival production and concert and tour production are core destinations, alongside brand activations, immersive experiences, and sporting events."}},
 {"@type":"Question","name":"What are ATLVS, COMPVSS, and GVTEWAY?","acceptedAnswer":{"@type":"Answer","text":"GHXSTSHIP's proprietary software: ATLVS (the Atlas) for production and resource management, COMPVSS (the Compass) for workforce and crew management, and GVTEWAY (the Gateway) for ticketing, fan engagement, and community."}},
 {"@type":"Question","name":"How is GHXSTSHIP different from a traditional experiential or brand activation agency?","acceptedAnswer":{"@type":"Answer","text":"Three ways: we own the full eight-phase production lifecycle end to end (not just creative), we build our own technology (ATLVS, COMPVSS, and GVTEWAY), and Operations — logistics, crew, compliance, and analytics — is a dedicated vertical rather than an afterthought."}},
 {"@type":"Question","name":"Where is GHXSTSHIP based?","acceptedAnswer":{"@type":"Answer","text":"GHXSTSHIP is headquartered in Miami, Florida, with offices in Las Vegas, Chicago, New York, and Los Angeles, and produces experiences worldwide."}}
]}` }} />
      <Script id="inline-index-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
  (function(){
    var imgs=[].slice.call(document.querySelectorAll('#porthole img'));
    if(imgs.length<2)return;var i=0;
    setInterval(function(){imgs[i].classList.remove('on');i=(i+1)%imgs.length;imgs[i].classList.add('on');},4000);
  })();
` }} />
      <Script src="/phase-detail.js" strategy="afterInteractive" />
    </>
  );
}
