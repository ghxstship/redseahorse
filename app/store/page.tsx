import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Museum \u2014 Merch & Gear",
  description: "The GHXSTSHIP Museum \u2014 branded apparel, prints, and gear from the experiential production company. Checkout runs on GVTEWAY.",
  alternates: { canonical: "https://ghxstship.tours/store" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}.wrap{max-width:var(--container);margin:0 auto;padding:0 var(--sp-6)}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) 0}
  .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:var(--space-20);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  .cart{display:flex;align-items:center;gap:var(--space-7);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--brass)}
  .cart .n{background:var(--brass);color:var(--on-brass);border-radius:var(--r-pill);min-width:20px;height:20px;display:grid;place-items:center;font-size:var(--fs-label);font-weight:700;padding:0 var(--space-5)}
  @media(max-width:1040px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:var(--space-40) 0 var(--space-44);border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 var(--space-18)}
  h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.62;color:var(--fg-on-dark-2);max-width:var(--measure);margin:0}
  .pad{padding:var(--space-56) 0}
  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-18)}
  @media(max-width:980px){.grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.grid{grid-template-columns:1fr}}
  .pc{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);overflow:hidden;display:flex;flex-direction:column}
  .pc .media{height:200px;position:relative;display:grid;place-items:center;border-bottom:var(--stroke-2) solid var(--ink-3);overflow:hidden}
  .pc .media::before{content:"";position:absolute;inset:0;background:radial-gradient(var(--ink-3) 1.5px,transparent 1.6px) 0 0/16px 16px;opacity:.5}
  .pc .media img{position:absolute;width:46%;height:46%;object-fit:contain;opacity:.16;left:50%;top:50%;transform:translate(-50%,-50%);z-index:0}
  .pc .media i{position:absolute;font-size:var(--fs-h2);z-index:1}
  .pc.a .media{background:linear-gradient(140deg,color-mix(in oklab,var(--brass) 22%,var(--ink-2)),var(--ink-2))}.pc.a .media i{color:var(--brass);right:var(--sp-4);bottom:var(--space-14)}
  .pc.b .media{background:linear-gradient(140deg,color-mix(in oklab,var(--plasma) 22%,var(--ink-2)),var(--ink-2))}.pc.b .media i{color:var(--plasma);right:var(--sp-4);bottom:var(--space-14)}
  .pc.c .media{background:linear-gradient(140deg,color-mix(in oklab,var(--nebula) 22%,var(--ink-2)),var(--ink-2))}.pc.c .media i{color:var(--nebula);right:var(--sp-4);bottom:var(--space-14)}
  .pc .body{padding:var(--sp-4);display:flex;flex-direction:column;gap:var(--sp-1);flex:1}
  .pc .cat{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .pc h3{font-family:var(--font-display);font-weight:900;font-size:var(--fs-body-l);text-transform:uppercase;margin:0;line-height:1.02}
  .pc .row{display:flex;align-items:center;justify-content:space-between;margin-top:var(--sp-3)}
  .pc .price{font-family:var(--font-mono);font-size:var(--fs-body);color:var(--bone);font-weight:700}
  .pc .add{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;background:var(--brass);color:var(--on-brass);border:0;border-radius:var(--r-1);padding:var(--space-9) var(--sp-3);cursor:pointer;box-shadow:var(--shadow-pop-sm);transition:transform var(--dur-2),filter .12s}
  .pc .add:hover{transform:translateY(-2px);filter:brightness(1.05)}.pc .add:active{transform:translateY(0)}
  .note{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3);text-align:center;padding:var(--space-32) 0 0}
  .note b{color:var(--plasma)}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:var(--space-40) 0 var(--space-30)}
  .foot-top{display:flex;justify-content:space-between;gap:var(--sp-5);flex-wrap:wrap;align-items:flex-start}
  .foot-links{display:flex;gap:var(--space-18);flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}.foot-links a:hover{color:var(--brass)}
  .foot-social{display:flex;gap:var(--space-14);margin-top:var(--space-14)}.foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);text-decoration:none}.foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:var(--space-22) 0 0;padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3)}
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
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Museum</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Museum</p>
  <h1>Fly the <span className="pop">Colors.</span></h1>
  <p className="lede">Branded apparel and gear from the GHXSTSHIP yard across three lines &mdash; <span style={{color: 'var(--brass)'}}>Sitewear</span>, <span style={{color: 'var(--plasma)'}}>Streetwear</span>, and <span style={{color: 'var(--nebula)'}}>Performancewear</span>. Crew-grade goods, built to the same standard as the work. Checkout runs on GVTEWAY.</p>
  <p style={{fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', letterSpacing: '.1em', textTransform: 'uppercase', margin: 'var(--sp-4) 0 0'}}><Link href="/contact" style={{color: 'var(--brass)', textDecoration: 'none'}}>Wholesale &amp; custom crew kit</Link></p>
</div></section>
<section className="pad"><div className="wrap">
  <div className="grid" id="grid">
    <article className="pc a"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Sitewear &middot; GX-SW-AP-001</p><h3>Site Coverall</h3><div className="row"><span className="price">$148</span><button className="add" data-name="Site Coverall">Add</button></div></div></article>
    <article className="pc a"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Sitewear &middot; GX-SW-AP-002</p><h3>Hi-Vis Crew Tee</h3><div className="row"><span className="price">$44</span><button className="add" data-name="Hi-Vis Crew Tee">Add</button></div></div></article>
    <article className="pc b"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Streetwear &middot; GX-ST-AP-001</p><h3>Skull Flag Tee</h3><div className="row"><span className="price">$38</span><button className="add" data-name="Skull Flag Tee">Add</button></div></div></article>
    <article className="pc b"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Streetwear &middot; GX-ST-AP-002</p><h3>Reef Night Hoodie</h3><div className="row"><span className="price">$74</span><button className="add" data-name="Reef Night Hoodie">Add</button></div></div></article>
    <article className="pc b"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Streetwear &middot; GX-ST-AP-004</p><h3>Voyage Dad Cap</h3><div className="row"><span className="price">$32</span><button className="add" data-name="Voyage Dad Cap">Add</button></div></div></article>
    <article className="pc c"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Performance &middot; GX-PW-AP-001</p><h3>Performance Tee</h3><div className="row"><span className="price">$42</span><button className="add" data-name="Performance Tee">Add</button></div></div></article>
    <article className="pc c"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Performance &middot; GX-PW-AP-003</p><h3>Track Jacket</h3><div className="row"><span className="price">$88</span><button className="add" data-name="Track Jacket">Add</button></div></div></article>
    <article className="pc b"><div className="media"><img src="/assets/skull-bone.svg" alt=""/></div><div className="body"><p className="cat">Streetwear &middot; GX-ST-AC-002</p><h3>Enamel Skull Pin</h3><div className="row"><span className="price">$14</span><button className="add" data-name="Enamel Skull Pin">Add</button></div></div></article>
  </div>
  <p className="note">Secure checkout powered by <b>GVTEWAY</b> &middot; Free crew shipping over $100 &middot; Product photography drops in as the line ships</p>
</div></section>
</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Store","name":"The GHXSTSHIP Museum","url":"https://ghxstship.tours/store","description":"Branded apparel, prints, and gear from GHXSTSHIP.","brand":{"@type":"Brand","name":"GHXSTSHIP"}}` }} />
      <Script id="inline-store-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
  (function(){var n=0;var el=document.getElementById('cartN');var grid=document.getElementById('grid');if(!grid)return;
   grid.addEventListener('click',function(e){
     var b=e.target.closest('.add');if(!b)return;n++;if(el)el.textContent=n;
     b.textContent='Added';b.style.background='var(--nebula)';
     setTimeout(function(){b.textContent='Add';b.style.background='';},900);
   });})();
` }} />
    </>
  );
}
