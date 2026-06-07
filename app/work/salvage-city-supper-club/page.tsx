import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salvage City Supper Club \u2014 Immersive Experience Case Study",
  description: "How GHXSTSHIP designed, built, and ran Salvage City Supper Club \u2014 an immersive supper-club experience at Club Space, Miami. The challenge, the 8-phase approach, and the results.",
  alternates: { canonical: "https://ghxstship.tours/work/salvage-city-supper-club" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  .wrap{max-width:1000px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--brass)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 32px}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap}
  .nav-cta{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass);text-decoration:none}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .hero{padding:30px 0 0}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"◆";color:var(--nebula)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,76px);line-height:.86;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 16px}
  .meta{display:flex;gap:22px;flex-wrap:wrap;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3);margin-bottom:26px}
  .meta b{color:var(--bone)}
  .coverimg{height:300px;border:var(--stroke-3) solid var(--ink);border-radius:var(--r-2);background:repeating-linear-gradient(45deg,#18262A 0 18px,#101A1B 18px 36px);position:relative;display:grid;place-items:center;margin-bottom:50px}
  .coverimg i{font-size:64px;color:var(--brass)}
  .coverimg .ph{position:absolute;left:16px;bottom:14px;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .results{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:50px}
  @media(max-width:680px){.results{grid-template-columns:repeat(2,1fr)}}
  .res{border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);padding:18px;background:var(--ink)}
  .res .v{font-family:var(--font-display);font-weight:900;font-size:40px;line-height:.85;color:var(--brass)}
  .res:nth-child(2) .v{color:var(--nebula)}.res:nth-child(3) .v{color:var(--plasma)}.res:nth-child(4) .v{color:var(--bone)}
  .res .k{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin-top:8px}
  .block{padding:0 0 44px;border-bottom:var(--stroke-2) solid var(--ink-3);margin-bottom:44px}
  .block:last-of-type{border-bottom:0}
  .block h2{font-family:var(--font-display);font-weight:900;font-size:30px;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 16px}
  .block p{font-size:17px;line-height:1.7;color:var(--fg-on-dark-2);margin:0 0 14px;max-width:820px}
  .block p strong{color:var(--bone)}
  .pull{font-family:var(--font-display);font-weight:800;font-size:28px;line-height:1.1;text-transform:uppercase;color:var(--bone);border-left:var(--stroke-4) solid var(--brass);padding-left:20px;margin:24px 0}
  .cta{padding:64px 0;text-align:center;border-top:var(--stroke-3) solid var(--brass);background:var(--ink)}
  .cta h3{font-family:var(--font-display);font-weight:900;font-size:40px;text-transform:uppercase;margin:0 0 18px}
  footer{padding:34px 0;text-align:center;font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3)}
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
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/#work">Work</Link> / <span style={{color: 'var(--brass)'}}>Salvage City Supper Club</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">Case Study · Immersive Experience</p>
  <h1>Salvage City<br/>Supper Club</h1>
  <div className="meta"><span>Client <b>Insomniac</b></span><span>Venue <b>Club Space, Miami</b></span><span>Year <b>2025</b></span><span>Scope <b>Full Voyage · 8 Phases</b></span></div>
  <div className="coverimg"><i className="ph-fill ph-confetti"></i><span className="ph">[ Hero image — drop production photography here ]</span></div>
</div></section>
<div className="wrap">
  <div className="results">
    <div className="res"><div className="v">[00K]</div><div className="k">Guests Hosted</div></div>
    <div className="res"><div className="v">[00M]</div><div className="k">Social Impressions</div></div>
    <div className="res"><div className="v">[00%]</div><div className="k">Capacity Sell-Through</div></div>
    <div className="res"><div className="v">[00]</div><div className="k">Days Concept-to-Live</div></div>
  </div>
  <div className="block"><h2>The Challenge</h2>
    <p>[Client] needed an immersive supper-club experience that could live inside <strong>Club Space, Miami</strong> — a venue with its own identity, technical constraints, and an audience that has seen everything. The brief: a fully-realized world that felt discovered, not built, and that could be installed, run, and struck without disrupting the venue's ongoing programming.</p>
    <p>The constraints were real: a fixed footprint, a hard load-in window, and a guest experience that had to feel intimate at scale.</p>
  </div>
  <div className="block"><h2>The Approach</h2>
    <p>GHXSTSHIP ran the full <strong>eight-phase production lifecycle</strong>. Discovery and R&amp;D defined the narrative world and tested it against the venue. Creative Design delivered the scenic language; Compliance &amp; Risk cleared the build against venue and fire-code requirements.</p>
    <p>Production &amp; Build fabricated a modular scenic package designed for the load-in window. Operations &amp; Logistics sequenced crew and freight around the venue's calendar. Live Activation ran the room nightly; Strike returned the space clean — with a full reconciliation and analytics report.</p>
    <p className="pull">"A world that felt discovered, not built — installed, run, and struck on the venue's clock."</p>
  </div>
  <div className="block"><h2>The Result</h2>
    <p>[Outcome paragraph — what it drove for the client: attendance, social reach, earned media, repeat booking. Replace bracketed metrics above with real figures.]</p>
    <p>Salvage City is now a repeatable GHXSTSHIP format — proof that an immersive world can be delivered to a working venue without compromise.</p>
  </div>
</div>
<section className="cta"><div className="wrap">
  <h3>Chart Your Experience.</h3>
  <Link href="/#close" className="gx-btn">Start a Project</Link>
</div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CreativeWork","name":"Salvage City Supper Club","creator":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"about":"Immersive experience production","locationCreated":{"@type":"Place","name":"Club Space, Miami"},"datePublished":"2025-05","genre":"Immersive Experience","keywords":"immersive experience, experiential production, supper club, Miami, Club Space","url":"https://ghxstship.tours/work/salvage-city-supper-club"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},
 {"@type":"ListItem","position":2,"name":"Work","item":"https://ghxstship.tours/work"},
 {"@type":"ListItem","position":3,"name":"Salvage City Supper Club","item":"https://ghxstship.tours/work/salvage-city-supper-club"}
]}` }} />
    </>
  );
}
