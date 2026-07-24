import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to join the GHXSTSHIP crew \u2014 production, operations, and technology roles in experiential and entertainment production. Apprenticeships available.",
  keywords: ["apply GHXSTSHIP", "event production application", "experiential production jobs", "production crew application", "live event careers"],
  alternates: { canonical: "https://ghxstship.tours/careers/apply" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .ap-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: clamp(28px, 4vw, 56px); align-items: start; }
  @media (max-width: 960px) { .ap-grid { grid-template-columns: 1fr; } }
  .frow { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 560px) { .frow { grid-template-columns: 1fr; } }
  .field { margin-bottom: 16px; }
  .field .hint { font-size: 0.733rem; letter-spacing: 0.04em; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 6px 0 0; }
  .consent { display: flex; gap: 10px; align-items: flex-start; font-size: 0.867rem; line-height: 1.55; font-weight: 400; letter-spacing: 0; text-transform: none; color: color-mix(in srgb, var(--color-text) 72%, transparent); cursor: pointer; }
  .consent input { width: auto; margin-top: 3px; accent-color: var(--color-accent-700); }
  .rail-blk { border-top: 2px solid var(--color-divider); padding-top: 14px; margin-bottom: 26px; }
  .rail-blk ol { margin: 0; padding-left: 18px; }
  .rail-blk li, .rail-blk p { font-size: 0.867rem; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0 0 7px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Careers · Apply</p>
  <h1 className="page-h1">Apply to the Crew.</h1>
  <p className="lede">Tell us who you are and what you've built. A human on the crew reads every application that comes in.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm"><div className="ap-grid">
  <form>
    <input type="hidden" name="form-type" value="application"/>
    <div className="frow">
      <div className="field"><label htmlFor="fn">First Name</label><input className="input" id="fn" type="text" required autoComplete="given-name" name="first-name"/></div>
      <div className="field"><label htmlFor="ln">Last Name</label><input className="input" id="ln" type="text" required autoComplete="family-name" name="last-name"/></div>
    </div>
    <div className="frow">
      <div className="field"><label htmlFor="em">Email</label><input className="input" id="em" type="email" required autoComplete="email" name="email"/></div>
      <div className="field"><label htmlFor="ph">Phone</label><input className="input" id="ph" type="tel" autoComplete="tel" name="phone"/></div>
    </div>
    <div className="frow">
      <div className="field"><label htmlFor="ro">Role</label><select className="input" id="ro" name="role"><option>Production Manager</option><option>Project Coordinator</option><option>Logistics Manager</option><option>Technical Director</option><option>Production Crew</option><option>Production Assistant</option><option>Operations Director</option><option>Hospitality Manager</option><option>General Application</option></select></div>
      <div className="field"><label htmlFor="lo">Based In</label><input className="input" id="lo" type="text" placeholder="City, State" name="based-in"/></div>
    </div>
    <div className="field"><label htmlFor="pf">Portfolio / LinkedIn URL</label><input className="input" id="pf" type="url" placeholder="https://" name="portfolio-linkedin-url"/></div>
    <div className="field"><label htmlFor="rs">Résumé / CV</label><input className="input" id="rs" type="file" accept=".pdf,.doc,.docx" name="resume-cv"/><p className="hint">PDF or Word · up to 3 MB</p></div>
    <div className="field"><label htmlFor="cv">Why GHXSTSHIP?</label><textarea className="input" id="cv" rows={5} required placeholder="Tell us what you want to build." name="why-ghxstship"></textarea></div>
    <div className="field"><label className="consent"><input type="checkbox" required/>I'm authorized to work in the US and consent to GHXSTSHIP storing this application.</label></div>
    <button className="btn btn-primary btn-lg" type="submit">Submit Application</button>
  </form>
  <aside aria-label="Hiring process">
    <div className="rail-blk"><p className="kicker">What Happens Next</p><ol><li>A human on the crew reviews your application.</li><li>If it's a fit, a 20-minute intro call.</li><li>A practical conversation with the department lead.</li><li>Reference check and offer.</li></ol></div>
    <div className="rail-blk"><p className="kicker">Apprenticeships</p><p>No experience? We train the next generation. Apply to Production Assistant and learn the work on real productions.</p></div>
    <div className="rail-blk"><p className="kicker">Equal Opportunity</p><p>GHXSTSHIP is an equal-opportunity employer. We crew on merit, and we don't gatekeep talent.</p></div>
  </aside>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Apply — GHXSTSHIP Careers","url":"https://ghxstship.tours/careers/apply","description":"Apply to join the GHXSTSHIP crew — production, operations, and technology roles in experiential and entertainment production."}` }} />
    </>
  );
}
