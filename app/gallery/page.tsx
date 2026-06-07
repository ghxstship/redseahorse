import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Gallery \u2014 Photo & Video",
  description: "The GHXSTSHIP Gallery \u2014 photography and video from festivals, concerts and tours, brand activations, immersive experiences, and sporting events produced by GHXSTSHIP.",
  alternates: { canonical: "https://ghxstship.tours/gallery" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 var(--sp-6)}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 40px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 var(--sp-4)}
  h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.6;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .filters{display:flex;gap:10px;flex-wrap:wrap;padding:26px 0 0}
  .filters button{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;background:var(--ink-2);color:var(--fg-on-dark-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-pill);padding:var(--sp-2) 14px;cursor:pointer}
  .filters button.on,.filters button:hover{border-color:var(--brass);color:var(--brass)}
  .pad{padding:34px 0 60px}
  .gal{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:172px;gap:14px}
  @media(max-width:880px){.gal{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.gal{grid-template-columns:1fr;grid-auto-rows:210px}}
  .tile{position:relative;border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);overflow:hidden;display:block}
  .tile.lg{grid-column:span 2;grid-row:span 2}.tile.wide{grid-column:span 2}.tile.tall{grid-row:span 2}
  @media(max-width:520px){.tile.lg,.tile.wide{grid-column:span 1}.tile.lg,.tile.tall{grid-row:span 1}}
  .tile img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(1.05) contrast(1.04)}
  .tile.hide{display:none}
  .tile .tag{position:absolute;left:10px;top:10px;font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;background:var(--ink);color:var(--brass);padding:var(--sp-1) var(--sp-2);border-radius:var(--r-1)}
  .tile .cap{position:absolute;left:0;right:0;bottom:0;font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--bone);background:linear-gradient(transparent,rgba(6,12,12,.9));padding:26px var(--sp-3) 10px}
  .tile .play{position:absolute;inset:0;display:grid;place-items:center;color:var(--bone);font-size:46px;text-shadow:0 2px 12px rgba(0,0,0,.6);pointer-events:none}
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
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}}
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
` }} />
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Gallery</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Gallery</p>
  <h1>Beyond the <span className="pop">Scenes.</span></h1>
  <p className="lede">Photography and video from the GHXSTSHIP yard — festivals, concerts and tours, brand activations, immersive worlds, and game-day production, captured on site.</p>
  <div className="filters">
    <button className="on">All</button><button>Festivals</button><button>Concerts &amp; Tours</button><button>Activations</button><button>Immersive</button><button>Sporting</button><button>Video</button>
  </div>
</div></section>
<section className="pad"><div className="wrap">
  <div className="gal">
    <a className="tile lg" data-cat="festival" href="#"><span className="tag">Festival</span><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" alt="EDC Las Vegas · Main Stage"/><span className="cap">EDC Las Vegas · Main Stage</span></a>
    <a className="tile wide" data-cat="video concerts" href="#"><span className="tag">Video</span><img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&q=80&auto=format&fit=crop" alt="Black Coffee · Aftermovie"/><i className="ph-bold ph-play-circle play"></i><span className="cap">Black Coffee · Aftermovie</span></a>
    <a className="tile" data-cat="immersive" href="#"><span className="tag">Immersive</span><img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=80&auto=format&fit=crop" alt="Salvage City Supper Club"/><span className="cap">Salvage City Supper Club</span></a>
    <a className="tile" data-cat="activation" href="#"><span className="tag">Activation</span><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=900&q=80&auto=format&fit=crop" alt="PATRÓN x Becky G"/><span className="cap">PATRÓN x Becky G</span></a>
    <a className="tile tall" data-cat="sporting" href="#"><span className="tag">Sporting</span><img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80&auto=format&fit=crop" alt="Heineken Turn 4 · F1 Las Vegas"/><span className="cap">Heineken Turn 4 · F1 Las Vegas</span></a>
    <a className="tile" data-cat="video broadcast" href="#"><span className="tag">Video</span><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80&auto=format&fit=crop" alt="On-Air Capture"/><i className="ph-bold ph-play-circle play"></i><span className="cap">On-Air Capture</span></a>
    <a className="tile" data-cat="activation" href="#"><span className="tag">Activation</span><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80&auto=format&fit=crop" alt="Polymarket Grocery Store"/><span className="cap">Polymarket Grocery Store</span></a>
    <a className="tile wide" data-cat="video festival" href="#"><span className="tag">Video</span><img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80&auto=format&fit=crop" alt="Festival Build · Time-lapse"/><i className="ph-bold ph-play-circle play"></i><span className="cap">Festival Build · Time-lapse</span></a>
    <a className="tile" data-cat="festival" href="#"><span className="tag">Festival</span><img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80&auto=format&fit=crop" alt="Factory Town · Miami"/><span className="cap">Factory Town · Miami</span></a>
  </div>
  <p className="lede" style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--fg-on-dark-3)', textAlign: 'center', marginTop: 'var(--sp-2)'}}>Placeholder imagery — real production photography &amp; video drop in here</p>
</div></section>
</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ImageGallery","name":"GHXSTSHIP Gallery","url":"https://ghxstship.tours/gallery","about":"Photography and video from GHXSTSHIP experiential productions."}` }} />
      <Script id="inline-gallery-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
/* Document-delegated so it survives React hydration replacing the buttons/tiles. */
document.addEventListener("click",function(e){var b=e.target.closest(".filters button");if(!b)return;e.preventDefault();
var map={"all":"all","festivals":"festival","concerts & tours":"concerts","activations":"activation","immersive":"immersive","sporting":"sporting","video":"video"};
var f=b.closest(".filters");[].slice.call(f.querySelectorAll("button")).forEach(function(x){x.classList.toggle("on",x===b)});
var k=map[b.textContent.trim().toLowerCase()]||"all";
[].slice.call(document.querySelectorAll(".gal .tile")).forEach(function(t){var c=(t.getAttribute("data-cat")||"").split(" ");t.classList.toggle("hide",k!=="all"&&c.indexOf(k)<0);});});
` }} />
    </>
  );
}
