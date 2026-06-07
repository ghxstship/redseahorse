import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers \u2014 Open Roles",
  description: "Open roles at GHXSTSHIP \u2014 production, operations, and technology roles for experiential and entertainment production in Miami, Las Vegas, New York, and Los Angeles.",
  alternates: { canonical: "https://ghxstship.tours/careers" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}a{color:inherit}.wrap{max-width:var(--container);margin:0 auto;padding:0 var(--sp-6)}
  .crumbs{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:var(--space-20) 0 0}.crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:var(--fs-small);letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--space-14);display:flex;align-items:center;gap:var(--space-10)}.eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:var(--space-40) 0 var(--space-44);border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,6.5vw,76px);line-height:.88;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 var(--sp-4)}h1 .pop{color:var(--brass)}
  .lede{font-size:var(--fs-body-l);line-height:1.6;color:var(--fg-on-dark-2);max-width:var(--measure);margin:0}
  .answer{font-size:var(--fs-body-l);line-height:1.55;color:var(--fg-on-dark-1);max-width:var(--measure-wide);margin:0;font-weight:500}
  .pad{padding:var(--space-56) 0}h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(28px,4vw,44px);line-height:.96;text-transform:uppercase;margin:0 0 var(--space-14)}
  .cta{padding:var(--space-80) 0;text-align:center;border-top:var(--stroke-2) solid var(--ink-3)}.cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,6vw,72px);line-height:.9;text-transform:uppercase;margin:0 0 var(--space-22)}.cta .row{display:flex;gap:var(--space-14);justify-content:center;flex-wrap:wrap}
.filters{display:flex;gap:var(--space-10);flex-wrap:wrap;padding:var(--sp-5) 0 0}.filters button{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;background:var(--ink-2);color:var(--fg-on-dark-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-pill);padding:var(--sp-2) var(--space-14);cursor:pointer}.filters button.on,.filters button:hover{border-color:var(--brass);color:var(--brass)}
  .jobs{border-top:var(--stroke-2) solid var(--ink-3);margin-top:var(--space-26)}
  .job{display:grid;grid-template-columns:1.7fr .8fr .9fr auto;gap:var(--sp-4);align-items:center;padding:var(--space-20) var(--sp-1);border-bottom:var(--stroke-2) solid var(--ink-3);text-decoration:none;transition:background .12s}
  .job:hover{background:var(--ink-2)}
  .job h3{font-family:var(--font-display);font-weight:800;font-size:var(--fs-h3);text-transform:uppercase;margin:0;line-height:1}
  .job .m{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .job .go{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;color:var(--brass)}
  @media(max-width:720px){.job{grid-template-columns:1fr auto;gap:var(--sp-1)}.job .m.loc{display:none}}
/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:var(--nav-h);padding:var(--space-10) 0}
  .nav-inner .brand{display:flex;align-items:center;gap:var(--sp-3);text-decoration:none}.nav-inner .brand img{width:34px;height:34px}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:var(--fs-h3);text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:var(--space-16);align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}}
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
  .site-foot .foot-social{display:flex;gap:var(--space-14)}.site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:var(--fs-body-l);text-decoration:none}.site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-3)}
  .site-foot .foot-col a{display:block;font-size:var(--fs-small);color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:var(--space-9)}.site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:var(--space-10);margin-top:var(--space-30);padding-top:var(--sp-4);border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}` }} />
      
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>Careers</span></p></div>
<main><section className="hero"><div className="wrap">
  <p className="eyebrow">Join the Crew &middot; Careers</p>
  <h1>Open <span className="pop">Roles.</span></h1>
  <p className="answer">GHXSTSHIP hires producers, directors, managers, and crew who build experiential and entertainment productions end to end. Find an open role, read the brief, and apply. We train the next generation &mdash; no experience gatekept.</p>
  <div className="filters"><button className="on">All</button><button>Production</button><button>Operations</button><button>Technology</button></div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">8 Open Positions</p>
  <h2 className="sec">On the Manifest.</h2>
  <div className="jobs"><Link href="/careers/role" className="job"><h3>Production Manager</h3><span className="m">Production</span><span className="m loc">Miami, FL</span><span className="go">Full-time</span></Link><Link href="/careers/role" className="job"><h3>Project Coordinator</h3><span className="m">Operations</span><span className="m loc">Las Vegas, NV</span><span className="go">Full-time</span></Link><Link href="/careers/role" className="job"><h3>Logistics Manager</h3><span className="m">Operations</span><span className="m loc">Miami, FL</span><span className="go">Full-time</span></Link><Link href="/careers/role" className="job"><h3>Technical Director</h3><span className="m">Technology</span><span className="m loc">Los Angeles, CA</span><span className="go">Full-time</span></Link><Link href="/careers/role" className="job"><h3>Production Crew</h3><span className="m">Production</span><span className="m loc">Multiple</span><span className="go">Freelance</span></Link><Link href="/careers/role" className="job"><h3>Production Assistant</h3><span className="m">Production</span><span className="m loc">Miami, FL</span><span className="go">Internship</span></Link><Link href="/careers/role" className="job"><h3>Operations Director</h3><span className="m">Operations</span><span className="m loc">New York, NY</span><span className="go">Full-time</span></Link><Link href="/careers/role" className="job"><h3>Hospitality Manager</h3><span className="m">Operations</span><span className="m loc">Miami, FL</span><span className="go">Full-time</span></Link></div>
  <p className="lede" style={{marginTop: 'var(--sp-5)'}}>Don&rsquo;t see your role? <Link href="/careers/apply" style={{color: 'var(--brass)', textDecoration: 'none'}}>Send a general application</Link></p>
</div></section>
<section className="cta"><div className="wrap"><h2>Learn the Ropes.</h2><div className="row"><Link href="/careers/apply" className="gx-btn gx-btn--lg">Apply Now</Link><Link href="/team" className="gx-btn gx-btn--ghost gx-btn--lg">Meet the Crew</Link></div></div></section></main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Careers","url":"https://ghxstship.tours/careers"}` }} />
      <Script id="inline-careers-index-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
/* Document-delegated so it survives React hydration replacing the buttons/jobs. */
document.addEventListener("click",function(e){var b=e.target.closest(".filters button");if(!b)return;
var f=b.closest(".filters");[].slice.call(f.querySelectorAll("button")).forEach(function(x){x.classList.toggle("on",x===b)});
var k=b.textContent.trim().toLowerCase();
[].slice.call(document.querySelectorAll(".jobs .job")).forEach(function(j){var m=j.querySelector(".m");var d=m?m.textContent.trim().toLowerCase():"";j.style.display=(k==="all"||d===k)?"":"none";});});
` }} />
    </>
  );
}
