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
  a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}.brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:20px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  .cart{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass)}
  .cart .n{background:var(--brass);color:var(--on-brass);border-radius:var(--r-pill);min-width:20px;height:20px;display:grid;place-items:center;font-size:11px;font-weight:700;padding:0 5px}
  @media(max-width:1040px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 44px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7vw,84px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
  h1 .pop{color:var(--brass)}
  .lede{font-size:18px;line-height:1.62;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .pad{padding:54px 0}
  .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  @media(max-width:980px){.grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.grid{grid-template-columns:1fr}}
  .pc{background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-2);overflow:hidden;display:flex;flex-direction:column}
  .pc .media{height:200px;position:relative;display:grid;place-items:center;border-bottom:var(--stroke-2) solid var(--ink-3);overflow:hidden}
  .pc .media::before{content:"";position:absolute;inset:0;background:radial-gradient(var(--ink-3) 1.5px,transparent 1.6px) 0 0/16px 16px;opacity:.5}
  .pc .media img{position:absolute;width:46%;height:46%;object-fit:contain;opacity:.16;left:50%;top:50%;transform:translate(-50%,-50%);z-index:0}
  .pc .media i{position:absolute;font-size:30px;z-index:1}
  .pc.a .media{background:linear-gradient(140deg,color-mix(in oklab,var(--brass) 22%,var(--ink-2)),var(--ink-2))}.pc.a .media i{color:var(--brass);right:16px;bottom:14px}
  .pc.b .media{background:linear-gradient(140deg,color-mix(in oklab,var(--plasma) 22%,var(--ink-2)),var(--ink-2))}.pc.b .media i{color:var(--plasma);right:16px;bottom:14px}
  .pc.c .media{background:linear-gradient(140deg,color-mix(in oklab,var(--nebula) 22%,var(--ink-2)),var(--ink-2))}.pc.c .media i{color:var(--nebula);right:16px;bottom:14px}
  .pc .body{padding:16px;display:flex;flex-direction:column;gap:4px;flex:1}
  .pc .cat{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .pc h3{font-family:var(--font-display);font-weight:900;font-size:19px;text-transform:uppercase;margin:0;line-height:1.02}
  .pc .row{display:flex;align-items:center;justify-content:space-between;margin-top:12px}
  .pc .price{font-family:var(--font-mono);font-size:15px;color:var(--bone);font-weight:700}
  .pc .add{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;background:var(--brass);color:var(--on-brass);border:0;border-radius:var(--r-1);padding:9px 12px;cursor:pointer;box-shadow:var(--shadow-pop-sm);transition:transform var(--dur-2),filter .12s}
  .pc .add:hover{transform:translateY(-2px);filter:brightness(1.05)}.pc .add:active{transform:translateY(0)}
  .note{font-family:var(--font-mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3);text-align:center;padding:34px 0 0}
  .note b{color:var(--plasma)}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0 30px}
  .foot-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
  .foot-links{display:flex;gap:18px;flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}.foot-links a:hover{color:var(--brass)}
  .foot-social{display:flex;gap:14px;margin-top:14px}.foot-social a{color:var(--fg-on-dark-2);font-size:20px;text-decoration:none}.foot-social a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3)}
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
    <span className="cart" aria-live="polite"><i className="ph-bold ph-shopping-cart-simple"></i><span className="n" id="cartN">0</span></span>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>The Museum</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">The Museum</p>
  <h1>Fly the <span className="pop">Colors.</span></h1>
  <p className="lede">Branded apparel and gear from the GHXSTSHIP yard across three lines &mdash; <span style={{color: 'var(--brass)'}}>Sitewear</span>, <span style={{color: 'var(--plasma)'}}>Streetwear</span>, and <span style={{color: 'var(--nebula)'}}>Performancewear</span>. Crew-grade goods, built to the same standard as the work. Checkout runs on GVTEWAY.</p>
  <p style={{fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', margin: '16px 0 0'}}><Link href="/contact" style={{color: 'var(--brass)', textDecoration: 'none'}}>Wholesale <Link href="/contact" style={{color: 'var(--brass)', textDecoration: 'none'}}>Wholesale &amp; custom crew kit &#8599;</Link>amp; custom crew kit <Link href="/contact" style={{color: 'var(--brass)', textDecoration: 'none'}}>Wholesale &amp; custom crew kit &#8599;</Link>#8599;</Link></p>
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


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Store","name":"The GHXSTSHIP Museum","url":"https://ghxstship.tours/store","description":"Branded apparel, prints, and gear from GHXSTSHIP.","brand":{"@type":"Brand","name":"GHXSTSHIP"}}` }} />
      <Script id="inline-store-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
  (function(){var n=0;var el=document.getElementById('cartN');
   document.getElementById('grid').addEventListener('click',function(e){
     var b=e.target.closest('.add');if(!b)return;n++;el.textContent=n;
     b.textContent='Added';b.style.background='var(--nebula)';
     setTimeout(function(){b.textContent='Add';b.style.background='';},900);
   });})();
` }} />
    </>
  );
}
