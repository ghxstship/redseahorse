import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations \u2014 Miami \u00b7 Las Vegas \u00b7 Chicago \u00b7 New York \u00b7 Los Angeles",
  description: "GHXSTSHIP is an experiential production company with offices in Miami (HQ), Las Vegas, Chicago, New York, and Los Angeles \u2014 producing festivals, brand activations, and immersive experiences nationwide.",
  alternates: { canonical: "https://ghxstship.tours/locations" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  .wrap{max-width:1100px;margin:0 auto;padding:0 var(--sp-6)}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--brass)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) var(--sp-6)}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap}
  .nav-cta{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--brass);text-decoration:none}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .hero{padding:var(--space-30) 0 var(--space-44);border-bottom:var(--stroke-2) solid var(--ink-3)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}
  .eyebrow::before{content:"◆";color:var(--nebula)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,72px);line-height:.88;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 var(--sp-4)}
  .lede{font-size:var(--fs-body-l);line-height:1.6;color:var(--fg-on-dark-2);max-width:720px;margin:0}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--space-18);padding:var(--space-44) 0 var(--space-64)}
  @media(max-width:680px){.grid{grid-template-columns:1fr}}
  .loc{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:var(--space-26);transition:transform var(--dur-2),border-color var(--dur-2),box-shadow .12s}
  .loc:hover{transform:translate(-3px,-3px);border-color:var(--brass);box-shadow:var(--shadow-hard-lg)}
  .loc .tag{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--brass)}
  .loc h2{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h1);text-transform:uppercase;margin:var(--space-6) 0 var(--space-10);line-height:.95}
  .loc p{font-size:var(--fs-small);line-height:1.6;color:var(--fg-on-dark-2);margin:0}
  .loc .area{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3);margin-top:var(--sp-3)}
  footer{padding:var(--space-32) 0;text-align:center;font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);border-top:var(--stroke-2) solid var(--ink-3)}
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
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>Locations</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">Home Ports · Coast to Coast</p>
  <h1>Five Cities.<br/>One Crew.</h1>
  <p className="lede">GHXSTSHIP produces experiential events nationwide from five home ports — headquartered in Miami, with crews in Las Vegas, Chicago, New York, and Los Angeles. Local presence, national reach, one accountable standard.</p>
</div></section>
<section><div className="wrap"><div className="grid">
  <article className="loc"><span className="tag">Headquarters</span><h2>Miami</h2><p>Our flagship home port. The base for experiential production across the Southeast, Latin America, and the Caribbean — and home to festivals, immersive experiences, and brand activations in one of the world's fastest-growing event markets.</p><p className="area">Serving Miami · Southeast US · LATAM &amp; Caribbean</p></article>
  <article className="loc"><span className="tag">Office</span><h2>New York</h2><p>Our Northeast crew — producing brand activations, launches, and immersive experiences across the country's most demanding event market.</p><p className="area">Serving NYC · Northeast US</p></article>
  <article className="loc"><span className="tag">Office</span><h2>Chicago</h2><p>Our Midwest base — festival, corporate, and live-music production across the central US.</p><p className="area">Serving Chicago · Midwest US</p></article>
  <article className="loc"><span className="tag">Office</span><h2>Los Angeles</h2><p>Our West Coast crew — entertainment, product launches, TV/film &amp; broadcast, and motorsports production.</p><p className="area">Serving LA · West Coast US</p></article>
</div></div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","department":[
 {"@type":"LocalBusiness","name":"GHXSTSHIP Miami (Headquarters)","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"},"areaServed":"Southeast US, Latin America & Caribbean","email":"hello@ghxstship.tours"},
 {"@type":"LocalBusiness","name":"GHXSTSHIP New York","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","addressCountry":"US"},"areaServed":"Northeast US"},
 {"@type":"LocalBusiness","name":"GHXSTSHIP Chicago","address":{"@type":"PostalAddress","addressLocality":"Chicago","addressRegion":"IL","addressCountry":"US"},"areaServed":"Midwest US"},
 {"@type":"LocalBusiness","name":"GHXSTSHIP Los Angeles","address":{"@type":"PostalAddress","addressLocality":"Los Angeles","addressRegion":"CA","addressCountry":"US"},"areaServed":"West Coast US"}
]}` }} />
    </>
  );
}
