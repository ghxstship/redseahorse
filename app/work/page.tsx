import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work \u2014 The Archives",
  description: "The Archives are the GHXSTSHIP record of selected work \u2014 festivals, concerts and tours, brand activations, immersive experiences, and sporting events designed, built, crewed, and launched end to end.",
  alternates: { canonical: "https://ghxstship.tours/work/" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1180px;margin:0 auto;padding:0 var(--sp-6)}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}
  .brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:22px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:980px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 56px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7.5vw,88px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
  h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.62;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .answer{font-size:var(--fs-body-l);line-height:1.55;color:var(--fg-on-dark-1);max-width:820px;margin:0;font-weight:500}
  .pad{padding:var(--sp-8) 0}
  .pad.alt{background:var(--ink);border-top:var(--stroke-3) solid var(--ink-3);border-bottom:var(--stroke-3) solid var(--ink-3)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(32px,4.4vw,52px);line-height:.94;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 14px}
  .cta{padding:84px 0;text-align:center;position:relative;overflow:hidden;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.1}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,84px);line-height:.9;text-transform:uppercase;margin:0 0 22px;position:relative}
  .cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0 30px}
  .foot-top{display:flex;justify-content:space-between;gap:var(--sp-5);flex-wrap:wrap;align-items:center}
  .foot-links{display:flex;gap:18px;flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .foot-links a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3)}
  .wgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding:var(--sp-7) 0 0}
  @media(max-width:880px){.wgrid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.wgrid{grid-template-columns:1fr}}
  .wc{display:block;text-decoration:none;border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);overflow:hidden;background:var(--ink-2);transition:transform var(--dur-2),border-color var(--dur-2),box-shadow .12s}
  .wc:hover{transform:translate(-3px,-3px);border-color:var(--brass);box-shadow:var(--shadow-hard-lg)}
  .wc .media{height:170px;overflow:hidden;border-bottom:var(--stroke-2) solid var(--ink-3)}
  .wc .media img{width:100%;height:100%;object-fit:cover;filter:saturate(1.04) contrast(1.04)}
  .wc .body{padding:18px}
  .wc h3{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;margin:0 0 6px;line-height:1}
  .wc .meta{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3)}
/*__nf__*/
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
  /* Archives bento */
  .wgrid{grid-template-columns:repeat(3,1fr);grid-auto-flow:dense}
  .wgrid .wc:first-child{grid-column:span 2}
  .wgrid .wc:first-child .media{height:300px}
  .wgrid .wc:nth-child(6){grid-column:span 2}
  @media(max-width:880px){.wgrid{grid-template-columns:1fr 1fr}.wgrid .wc:first-child,.wgrid .wc:nth-child(6){grid-column:span 2}.wgrid .wc:first-child .media{height:200px}}
  @media(max-width:560px){.wgrid{grid-template-columns:1fr}.wgrid .wc:first-child,.wgrid .wc:nth-child(6){grid-column:span 1}}
` }} />
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Archives</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Archives</p>
  <h1>Every Voyage,<br/><span className="pop">Logged.</span></h1>
  <p className="answer">The Archives are our case studies &mdash; featured past projects we designed, built, crewed, and launched end to end. Real outcomes, no vanity metrics.</p>
</div></section>
<section className="pad"><div className="wrap">
  <div className="wgrid"><a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format&fit=crop" alt="EDC Las Vegas" loading="lazy"/></div><div className="body"><h3>EDC Las Vegas</h3><p className="meta">Festival &middot; Insomniac, Las Vegas &middot; 2025&ndash;26</p></div></a>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&auto=format&fit=crop" alt="Black Coffee at the Race Track" loading="lazy"/></div><div className="body"><h3>Black Coffee at the Race Track</h3><p className="meta">Concerts &amp; Tours &middot; Club Space Miami &middot; 2026</p></div></a>
  <Link href="/work/salvage-city-supper-club" className="wc"><div className="media"><img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop" alt="Salvage City Supper Club" loading="lazy"/></div><div className="body"><h3>Salvage City Supper Club</h3><p className="meta">Immersive &middot; Club Space Miami &middot; 2025</p></div></Link>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop" alt="Polymarket Grocery Store" loading="lazy"/></div><div className="body"><h3>Polymarket Grocery Store</h3><p className="meta">Brand Activation &middot; 2026</p></div></a>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80&auto=format&fit=crop" alt="PATRÓN Cristalino x Becky G" loading="lazy"/></div><div className="body"><h3>PATR&Oacute;N Cristalino x Becky G</h3><p className="meta">Product Launch &middot; Los Angeles &middot; 2024</p></div></a>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80&auto=format&fit=crop" alt="Heineken Turn 4 Nightclub" loading="lazy"/></div><div className="body"><h3>Heineken Turn 4 Nightclub</h3><p className="meta">Motorsports &middot; F1 Las Vegas &middot; 2024</p></div></a>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80&auto=format&fit=crop" alt="Formula 1 Las Vegas Grand Prix" loading="lazy"/></div><div className="body"><h3>Formula 1 Las Vegas Grand Prix</h3><p className="meta">Motorsports &middot; Las Vegas &middot; 2023</p></div></a>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80&auto=format&fit=crop" alt="Factory Town" loading="lazy"/></div><div className="body"><h3>Factory Town</h3><p className="meta">Operations Leadership &middot; Miami &middot; 2023</p></div></a>
  <a className="wc" href="#" aria-disabled="true"><div className="media"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop" alt="Red Bull Unforeseen Motel" loading="lazy"/></div><div className="body"><h3>Red Bull Unforeseen Motel</h3><p className="meta">Brand Activation &middot; III Points Miami &middot; 2023</p></div></a></div>
</div></section>
<section className="cta"><div className="wrap">
  <h2>Add Your Voyage<br/>to the Archives.</h2>
  <div className="row"><Link href="/contact" className="gx-btn gx-btn--lg">Start a Project</Link><Link href="/destinations" className="gx-btn gx-btn--ghost gx-btn--lg">See the Destinations</Link></div>
</div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Selected Work","url":"https://ghxstship.tours/work/"}` }} />
    </>
  );
}
