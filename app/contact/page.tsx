import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project \u2014 Contact",
  description: "Start an experiential production project with GHXSTSHIP \u2014 the general contractor, foreman, and Procore of experiential project management. Tell us the destination and we will build, crew, and launch it.",
  alternates: { canonical: "https://ghxstship.tours/contact" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  *{box-sizing:border-box}
  html,body{margin:0;background:var(--void);color:var(--bone);font-family:var(--font-body);-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .wrap{max-width:1180px;margin:0 auto;padding:0 32px}
  header.nav{position:sticky;top:0;z-index:50;background:var(--void);border-bottom:var(--stroke-3) solid var(--ink-3)}
  .nav-inner{display:flex;align-items:center;justify-content:space-between;min-height:72px;padding:10px 0}
  .brand{display:flex;align-items:center;gap:12px;text-decoration:none}
  .brand img{width:34px;height:34px}
  .brand b{font-family:var(--font-display);font-weight:900;font-size:21px;text-transform:uppercase;white-space:nowrap}
  .navlinks{display:flex;gap:22px;align-items:center}
  .navlinks a{font-family:var(--font-mono);font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .navlinks a:hover{color:var(--brass)}
  .navlinks a.gx-btn{color:var(--on-brass)}
  @media(max-width:980px){.navlinks a:not(.gx-btn){display:none}}
  .crumbs{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-3);padding:20px 0 0}
  .crumbs a{text-decoration:none}.crumbs a:hover{color:var(--brass)}
  .eyebrow{font-family:var(--font-mono);font-size:13px;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);margin:0 0 14px;display:flex;align-items:center;gap:10px}
  .eyebrow::before{content:"\\25C6";color:var(--nebula)}
  .hero{padding:40px 0 56px;border-bottom:var(--stroke-2) solid var(--ink-3)}
  h1{font-family:var(--font-display);font-weight:900;font-size:clamp(44px,7.5vw,88px);line-height:.86;text-transform:uppercase;letter-spacing:-.015em;margin:0 0 18px}
  h1 .pop{color:var(--brass)}
  .lede{font-size:18px;line-height:1.62;color:var(--fg-on-dark-2);max-width:760px;margin:0}
  .answer{font-size:20px;line-height:1.55;color:var(--fg-on-dark-1);max-width:820px;margin:0;font-weight:500}
  .pad{padding:64px 0}
  .pad.alt{background:var(--ink);border-top:var(--stroke-3) solid var(--ink-3);border-bottom:var(--stroke-3) solid var(--ink-3)}
  h2.sec{font-family:var(--font-display);font-weight:900;font-size:clamp(32px,4.4vw,52px);line-height:.94;text-transform:uppercase;letter-spacing:-.01em;margin:0 0 14px}
  .cta{padding:84px 0;text-align:center;position:relative;overflow:hidden;border-top:var(--stroke-2) solid var(--ink-3)}
  .cta::before{content:"";position:absolute;inset:0;background:var(--halftone-brass);background-size:18px 18px;opacity:.1}
  .cta h2{font-family:var(--font-display);font-weight:900;font-size:clamp(40px,7vw,84px);line-height:.9;text-transform:uppercase;margin:0 0 22px;position:relative}
  .cta .row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;position:relative}
  .foot{background:var(--ink);border-top:var(--stroke-4) solid var(--brass);padding:40px 0 30px}
  .foot-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:center}
  .foot-links{display:flex;gap:18px;flex-wrap:wrap}
  .foot-links a{font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;color:var(--fg-on-dark-2)}
  .foot-links a:hover{color:var(--brass)}
  .foot-bot{font-family:var(--font-mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:22px 0 0;padding-top:16px;border-top:var(--stroke-2) solid var(--ink-3)}
  .cgrid{display:grid;grid-template-columns:1.2fr .8fr;gap:40px;padding:44px 0 0}@media(max-width:820px){.cgrid{grid-template-columns:1fr}}
  .field{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
  .field label{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-2)}
  .field input,.field select,.field textarea{font-family:var(--font-body);font-size:15px;background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-1);color:var(--bone);padding:12px 14px}
  .field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--brass)}
  .rail .blk{margin-bottom:24px}
  .rail .lbl{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--brass);margin:0 0 6px}
  .rail a,.rail p{font-size:15px;color:var(--fg-on-dark-1);text-decoration:none;margin:0;line-height:1.6;display:block}
  .rail a:hover{color:var(--brass)}
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
      

<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <span style={{color: 'var(--brass)'}}>Start a Project</span></p></div>
<main>
<section className="hero"><div className="wrap">
  <p className="eyebrow">Set Your Course</p>
  <h1>Start a<br/><span className="pop">Project.</span></h1>
  <p className="answer">Tell us the destination &mdash; the experience worth building. We'll build the ship, crew it, chart the course, and launch. Every voyage starts with a consultation.</p>
</div></section>
<section className="pad"><div className="wrap"><div className="cgrid">
  <form className="form">
    <div className="field"><label htmlFor="n">Name</label><input id="n" type="text" placeholder="Your name" name="name"/></div>
    <div className="field"><label htmlFor="co">Company</label><input id="co" type="text" placeholder="Company / organization" name="company"/></div>
    <div className="field"><label htmlFor="e">Email</label><input id="e" type="email" placeholder="you@company.com" name="email"/></div>
    <div className="field"><label htmlFor="it">Inquiry Type</label><select id="it" name="inquiry-type"><option>General Inquiry</option><option>New Project</option><option>Partnerships</option><option>Media</option><option>Press</option><option>Talent &amp; Vendors</option><option>Careers</option><option>Other</option></select></div>
    <div className="field"><label htmlFor="t">Destination</label><select id="t" name="destination"><option>Festival</option><option>Concert / Tour</option><option>Brand Activation</option><option>Immersive Experience</option><option>Sporting Event</option><option>TV, Film &amp; Broadcast</option><option>Not Sure Yet</option></select></div>
    <div className="field"><label htmlFor="m">The Brief</label><textarea id="m" rows={5} placeholder="Tell us about the experience you want to build." name="the-brief"></textarea></div>
    <a className="gx-btn gx-btn--lg" href="mailto:hello@ghxstship.tours">Send the Brief</a>
  </form>
  <aside className="rail">
    <div className="blk"><p className="lbl">Hail the Bridge</p><a href="mailto:hello@ghxstship.tours">hello@ghxstship.tours</a></div>
    <div className="blk"><p className="lbl">Home Ports</p><p>Miami HQ &middot; Las Vegas &middot; Chicago &middot; New York &middot; Los Angeles</p></div>
  </aside>
</div></div></section>
</main>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ContactPage","name":"Start a Project \\u2014 GHXSTSHIP","url":"https://ghxstship.tours/contact"}` }} />
    </>
  );
}
