import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers \u2014 Open Roles",
  description: "Open roles at GHXSTSHIP \u2014 production, operations, project management, hospitality, and crew positions for experiential and entertainment production in Miami, Las Vegas, New York, and Los Angeles.",
  alternates: { canonical: "https://ghxstship.tours/careers" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `*{box-sizing:border-box}html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased;scroll-behavior:smooth}a{color:inherit}.wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}.crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}.eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 44px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,6.5vw,76px);line-height:.88;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 16px}h1 .pop{color:var(--brass)}
  .lede{font-size:18px;line-height:1.6;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .answer{font-size:19px;line-height:1.55;color:var(--fg-on-dark-1);max-width:820px;margin:0;font-weight:500}
  .pad{padding:54px 0}h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(28px,4vw,44px);line-height:.96;text-transform:uppercase;margin:0 0 14px}
  .cta{padding:74px 0;text-align:center;border-top:var(--stroke-2) solid var(--ink-3)}.cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(36px,6vw,72px);line-height:.9;text-transform:uppercase;margin:0 0 22px}.cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.filters{display:flex;gap:10px;flex-wrap:wrap;padding:24px 0 0}.filters button{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;background:var(--ink-2);color:var(--fg-on-dark-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-pill);padding:8px 14px;cursor:pointer}.filters button.on,.filters button:hover{border-color:var(--brass);color:var(--brass)}
  .jobs{border-top:var(--stroke-2) solid var(--ink-3);margin-top:26px}
  .job{display:grid;grid-template-columns:1.7fr .8fr .9fr auto;gap:16px;align-items:center;padding:20px 4px;border-bottom:var(--stroke-2) solid var(--ink-3);text-decoration:none;transition:background .12s}
  .job:hover{background:var(--ink-2)}
  .job h3{font-family:var(--font-display);font-weight:800;font-size:21px;text-transform:uppercase;margin:0;line-height:1}
  .job .m{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3)}
  .job .go{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--brass)}
  @media(max-width:720px){.job{grid-template-columns:1fr auto;gap:4px}.job .m.loc{display:none}}
/*__nf__*/
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .nav-inner .brand{display:flex;align-items:center;gap:12px;text-decoration:none}.nav-inner .brand img{width:34px;height:34px;image-rendering:pixelated}
  .nav-inner .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .navlinks{display:flex;gap:17px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}.navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:1100px){.navlinks a:not(.gx-btn){display:none}}
  .site-foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:46px 0 26px}
  .site-foot .foot-grid{display:grid;grid-template-columns:1.7fr 1fr 1fr 1fr;gap:30px}
  @media(max-width:820px){.site-foot .foot-grid{grid-template-columns:1fr 1fr}}
  .site-foot .brand{display:inline-flex;align-items:center;gap:12px;text-decoration:none;margin-bottom:14px}
  .site-foot .brand img{width:30px;height:30px;image-rendering:pixelated}
  .site-foot .brand b{font-family:var(--font-display);font-weight:900;font-size:18px;text-transform:uppercase;white-space:nowrap;color:var(--bone)}
  .site-foot .foot-tag{font-family:var(--font-display);font-weight:700;font-size:17px;line-height:1.2;text-transform:uppercase;color:var(--brass);margin:0 0 12px;max-width:22rem}
  .site-foot .foot-ports{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 14px;display:flex;flex-wrap:nowrap;white-space:nowrap}
  .site-foot .foot-ports span:not(:first-child)::before{content:"\\00b7";margin:0 7px;color:var(--fg-on-dark-3)}
  @media(max-width:560px){.site-foot .foot-ports{flex-direction:column}.site-foot .foot-ports span:not(:first-child)::before{display:none}}
  .site-foot .foot-social{display:flex;gap:14px}.site-foot .foot-social a{color:var(--fg-on-dark-2);font-size:20px;text-decoration:none}.site-foot .foot-social a:hover{color:var(--brass)}
  .site-foot .foot-col h5{font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--brass);margin:0 0 12px}
  .site-foot .foot-col a{display:block;font-size:13px;color:var(--fg-on-dark-2);text-decoration:none;margin-bottom:9px}.site-foot .foot-col a:hover{color:var(--bone)}
  .site-foot .foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:30px;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3);font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--fg-on-dark-3)}` }} />
      <header className="nav"><div className="wrap nav-inner">
  <Link href="/" className="brand" aria-label="GHXSTSHIP home"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP ghost-ship logo"/><b>G H X S T S H I P</b></Link>
  <nav className="navlinks" aria-label="Primary">
    <Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/resources/blog">Logs</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link>
    <Link href="/contact" className="gx-btn gx-btn--sm">Start a Project</Link>
  </nav>
</div></header>
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>Careers</span></p></div>
<main><section className="hero"><div className="wrap">
  <p className="eyebrow">Join the Crew &middot; Careers</p>
  <h1>Open <span className="pop">Roles.</span></h1>
  <p className="answer">GHXSTSHIP hires producers, directors, managers, and crew who build experiential and entertainment productions end to end. Find an open role, read the brief, and apply. We train the next generation &mdash; no experience gatekept.</p>
  <div className="filters"><button className="on">All</button><button>Production</button><button>Operations</button><button>Project</button><button>Hospitality</button><button>Support</button></div>
</div></section>
<section className="pad"><div className="wrap">
  <p className="eyebrow">8 Open Positions</p>
  <h2 className="sec">On the Manifest.</h2>
  <div className="jobs"><Link href="/careers/role" className="job"><h3>Production Manager</h3><span className="m">Production</span><span className="m loc">Miami, FL</span><span className="go">Full-time &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Project Coordinator</h3><span className="m">Project</span><span className="m loc">Las Vegas, NV</span><span className="go">Full-time &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Logistics Manager</h3><span className="m">Operations</span><span className="m loc">Miami, FL</span><span className="go">Full-time &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Technical Director</h3><span className="m">Production</span><span className="m loc">Los Angeles, CA</span><span className="go">Full-time &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Production Crew</h3><span className="m">Production</span><span className="m loc">Multiple</span><span className="go">Freelance &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Production Assistant</h3><span className="m">Support</span><span className="m loc">Miami, FL</span><span className="go">Internship &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Operations Director</h3><span className="m">Operations</span><span className="m loc">New York, NY</span><span className="go">Full-time &#8599;</span></Link><Link href="/careers/role" className="job"><h3>Hospitality Manager</h3><span className="m">Hospitality</span><span className="m loc">Miami, FL</span><span className="go">Full-time &#8599;</span></Link></div>
  <p className="lede" style={{marginTop: '24px'}}>Don&rsquo;t see your role? <Link href="/careers/apply" style={{color: 'var(--brass)', textDecoration: 'none'}}>Send a general application &#8599;</Link></p>
</div></section>
<section className="cta"><div className="wrap"><h2>Learn the Ropes.</h2><div className="row"><Link href="/careers/apply" className="gx-btn gx-btn--lg">Apply Now</Link><Link href="/team" className="gx-btn gx-btn--ghost gx-btn--lg">Meet the Crew</Link></div></div></section></main><footer className="site-foot"><div className="wrap">
  <div className="foot-grid">
    <div className="foot-brand"><Link href="/" className="brand"><img src="/assets/skull-bone.svg" alt=""/><b>G H X S T S H I P</b></Link>
      <p className="foot-tag" style={{color: 'var(--bone)'}}>The <span style={{color: 'var(--brass)'}}>General Contractor</span>, <span style={{color: 'var(--nebula)'}}>Foreman</span> &amp; <span style={{color: 'var(--plasma)'}}>Procore</span> of experiential project management.</p>
      <p className="foot-ports"><span>Miami</span><span>Las Vegas</span><span>Chicago</span><span>New York</span><span>Los Angeles</span></p>
      <div className="foot-social"><a href="https://instagram.com/ghxstship" aria-label="Instagram"><i className="ph-bold ph-instagram-logo"></i></a><a href="https://linkedin.com/company/ghxstship" aria-label="LinkedIn"><i className="ph-bold ph-linkedin-logo"></i></a><a href="https://youtube.com/@ghxstship" aria-label="YouTube"><i className="ph-bold ph-youtube-logo"></i></a><a href="https://tiktok.com/@ghxstship" aria-label="TikTok"><i className="ph-bold ph-tiktok-logo"></i></a><a href="https://x.com/ghxstship" aria-label="X"><i className="ph-bold ph-x-logo"></i></a></div></div>
    <nav className="foot-col"><h5>Explore</h5><Link href="/destinations">Destinations</Link><Link href="/solutions">Fleet</Link><Link href="/team">Crew</Link><Link href="/#course">Course</Link><Link href="/store">Museum</Link><Link href="/gallery">Gallery</Link><Link href="/work">Archives</Link></nav>
    <nav className="foot-col"><h5>Company</h5><Link href="/about">The Story</Link><Link href="/careers">Careers</Link><Link href="/locations">Home Ports</Link><Link href="/contact">Contact</Link><Link href="/contact">Start a Project</Link></nav>
    <nav className="foot-col"><h5>Platforms</h5><Link href="/solutions">ATLVS</Link><Link href="/solutions">COMPVSS</Link><Link href="/solutions">GVTEWAY</Link></nav>
  </div>
  <div className="foot-bot"><span>&copy; 2026 G H X S T S H I P Industries LLC</span><span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span></div>
</div></footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Careers","url":"https://ghxstship.tours/careers"}` }} />
      <Script id="inline-careers-index-0" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
(function(){var btns=[].slice.call(document.querySelectorAll(".filters button")),jobs=[].slice.call(document.querySelectorAll(".jobs .job"));
btns.forEach(function(b){b.addEventListener("click",function(){btns.forEach(function(x){x.classList.remove("on")});b.classList.add("on");
var k=b.textContent.trim().toLowerCase();jobs.forEach(function(j){var d=j.querySelector(".m")?j.querySelector(".m").textContent.trim().toLowerCase():"";j.style.display=(k==="all"||d===k)?"":"none";});});});})();
` }} />
    </>
  );
}
