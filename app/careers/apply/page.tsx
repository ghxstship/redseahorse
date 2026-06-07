import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply \u2014 Careers",
  description: "Apply to join the GHXSTSHIP crew \u2014 production, operations, and technology roles in experiential and entertainment production. Apprenticeships available.",
  alternates: { canonical: "https://ghxstship.tours/careers/apply" },
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
.cgrid{display:grid;grid-template-columns:1.3fr .7fr;gap:var(--space-40);padding:var(--space-36) 0 0}@media(max-width:820px){.cgrid{grid-template-columns:1fr}}
  .frow{display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)}@media(max-width:560px){.frow{grid-template-columns:1fr}}
  .field{display:flex;flex-direction:column;gap:var(--space-6);margin-bottom:var(--sp-4)}
  .field label{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--fg-on-dark-2)}
  .field input,.field select,.field textarea{font-family:var(--font-body);font-size:var(--fs-body);background:var(--ink-2);border:var(--stroke-2) solid var(--ink-3);border-radius:var(--r-1);color:var(--bone);padding:var(--sp-3) var(--space-14)}
  .field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--brass)}
  .field input[type=file]{padding:var(--space-9);cursor:pointer}
  .rail .blk{margin-bottom:var(--space-22)}.rail .lbl{font-family:var(--font-mono);font-size:var(--fs-label);letter-spacing:.12em;text-transform:uppercase;color:var(--brass);margin:0 0 var(--sp-2)}
  .rail ol{margin:0;padding-left:var(--space-18)}.rail li,.rail p{font-size:var(--fs-small);line-height:1.6;color:var(--fg-on-dark-2);margin:0 0 var(--space-7)}
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
      
<div className="wrap"><p className="crumbs"><Link href="/">Home</Link> / <Link href="/careers">Careers</Link> / <span style={{color: 'var(--brass)'}}>Apply</span></p></div>
<main><section className="hero"><div className="wrap">
  <p className="eyebrow">Apply</p>
  <h1>Apply to the <span className="pop">Crew.</span></h1>
  <p className="answer">Tell us who you are and what you&rsquo;ve built. Every application is read by a human on the crew &mdash; not just a bot.</p>
</div></section>
<section className="pad"><div className="wrap"><div className="cgrid">
  <form>
    <input type="hidden" name="form-type" value="application"/>
    <div className="frow"><div className="field"><label htmlFor="fn">First Name</label><input id="fn" type="text" name="first-name"/></div><div className="field"><label htmlFor="ln">Last Name</label><input id="ln" type="text" name="last-name"/></div></div>
    <div className="frow"><div className="field"><label htmlFor="em">Email</label><input id="em" type="email" name="email"/></div><div className="field"><label htmlFor="ph">Phone</label><input id="ph" type="tel" name="phone"/></div></div>
    <div className="frow"><div className="field"><label htmlFor="ro">Role</label><select id="ro" name="role"><option>Production Manager</option><option>Project Coordinator</option><option>Logistics Manager</option><option>Technical Director</option><option>Production Crew</option><option>Production Assistant</option><option>Operations Director</option><option>Hospitality Manager</option><option>General Application</option></select></div><div className="field"><label htmlFor="lo">Based In</label><input id="lo" type="text" placeholder="City, State" name="based-in"/></div></div>
    <div className="field"><label htmlFor="pf">Portfolio / LinkedIn URL</label><input id="pf" type="url" placeholder="https://" name="portfolio-linkedin-url"/></div>
    <div className="field"><label htmlFor="rs">R&eacute;sum&eacute; / CV</label><input id="rs" type="file" accept=".pdf,.doc,.docx" name="resume-cv"/></div>
    <div className="field"><label htmlFor="cv">Why GHXSTSHIP?</label><textarea id="cv" rows={5} placeholder="Tell us what you want to build." name="why-ghxstship"></textarea></div>
    <div className="field"><label style={{display: 'flex', flexDirection: 'row', gap: 'var(--space-9)', alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-small)', letterSpacing: '0', textTransform: 'none', color: 'var(--fg-on-dark-2)'}}><input type="checkbox" style={{width: 'auto', marginTop: 'var(--space-3)'}}/>I&rsquo;m authorized to work in the US and consent to GHXSTSHIP storing this application.</label></div>
    <a className="gx-btn gx-btn--lg" href="#">Submit Application</a>
  </form>
  <aside className="rail">
    <div className="blk"><p className="lbl">What Happens Next</p><ol><li>A human on the crew reviews your application.</li><li>If it&rsquo;s a fit, a 20-minute intro call.</li><li>A practical conversation with the department lead.</li><li>Reference check and offer.</li></ol></div>
    <div className="blk"><p className="lbl">Apprenticeships</p><p>No experience? We train the next generation. Apply to Production Assistant and learn the ropes on real voyages.</p></div>
    <div className="blk"><p className="lbl">Equal Opportunity</p><p>GHXSTSHIP is an equal-opportunity employer. We crew on merit, and we don&rsquo;t gatekeep talent.</p></div>
  </aside>
</div></div></section></main>
    </>
  );
}
