import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Platforms",
  description: "ATLVS, COMPVSS, GVTEWAY, and LEG3ND, the four in-house platforms behind GHXSTSHIP engagements: the operator console, site and venue operations, the public interface and marketplace, and the knowledge layer.",
  keywords: ["event production software", "production ERP", "crew management software", "deskless workforce app", "event marketplace", "production knowledge base", "ATLVS", "COMPVSS", "GVTEWAY", "LEG3ND"],
  alternates: { canonical: "https://ghxstship.tours/platforms" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout, components come from modernist.css */
  .plat-sec { padding-block: clamp(40px, 6vw, 80px); }
  .plat-name { font-size: clamp(34px, 4.6vw, 56px); line-height: 0.98; letter-spacing: -0.02em; margin-bottom: 12px; }
  .plat-aud { display: flex; gap: 8px; flex-wrap: wrap; margin: 0 0 16px; }
  .plat-body p { font-size: 1rem; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 78%, transparent); max-width: 52ch; }
  .plat-rows { margin-top: 4px; }
  .plat-status { font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); max-width: 52ch; }
  .fit-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 32px; }
  @media (max-width: 960px) { .fit-row { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .fit-row { grid-template-columns: 1fr; } }
  .fit { border: 1px solid var(--color-divider); padding: 20px; background: var(--color-bg); }
  .fit .n { font-family: var(--font-heading); font-weight: 800; font-size: 0.8rem; letter-spacing: 0.1em; color: var(--color-accent-700); }
  .fit h3 { font-size: 1.267rem; line-height: 1.05; margin: 6px 0 4px; }
  .fit .sys { font-size: 0.733rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 0 0 8px; }
  .fit p { font-size: 0.867rem; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 70%, transparent); margin: 0; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Platforms</p>
  <h1 className="page-h1">Software We Run On.</h1>
  <p className="lede">Four in-house platforms carry a GHXSTSHIP engagement: the operator console, the field and venue app, the public interface, and the knowledge layer. We built them because the tools we needed didn't exist, and we run them on our own projects before we ask anyone else to. Some are live today and some are still in build, and it says so below. No screenshots here, just what each one does and who it's for.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap plat-sec" id="atlvs">
  <div className="split2">
    <div>
      <p className="kicker">01 · The Console</p>
      <h2 className="plat-name">ATLVS</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Producers</span><span className="tag tag-neutral">For Executives</span><span className="tag tag-outline">In Build</span></div>
      <div className="plat-body">
        <p>ATLVS is the operator console for experiential productions: ERP, CRM, and project management on one record store. Sales and pipeline sit next to project, program, venue, design, estimating, production, finance, procurement, and asset and logistics management, so an engagement lives in one place from the first line of the estimate to the final settlement. It runs on the Sell to Settle spine, with the Coordinate Matrix as the task lens, every work item filed to a department class and a phase.</p>
        <p className="plat-status">Status: in build. Early access opens to production partners first.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro" target="_blank" rel="noopener">Visit ATLVS →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Sell to Settle</span><span className="row-sub">Pipeline, estimate, production, and settlement on one record</span></div>
      <div className="row-line"><span className="row-title">Finance &amp; Procurement</span><span className="row-sub">Budgets, costs, and purchasing tracked against the estimate</span></div>
      <div className="row-line"><span className="row-title">Assets &amp; Logistics</span><span className="row-sub">Crews, gear, and vendors assigned and moved against the plan</span></div>
      <div className="row-line"><span className="row-title">Coordinate Matrix</span><span className="row-sub">Every work item filed to a department class and a phase</span></div>
    </div>
  </div>
</section>

<section className="band"><div className="wrap plat-sec" id="compvss">
  <div className="split2">
    <div>
      <p className="kicker">02 · The Field</p>
      <h2 className="plat-name">COMPVSS</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Crew</span><span className="tag tag-neutral">For Venues</span><span className="tag tag-neutral">For Vendors</span><span className="tag tag-outline">Live</span></div>
      <div className="plat-body">
        <p>COMPVSS runs site and venue operations for deskless crews. Rosters, schedules, advancing, and day-of coordination live in the crew's pocket instead of a binder, and every call, credential, and check-in traces back to the same record the producer is working from. It installs from a link and runs full screen on the home screen, so there's no app store review the morning of the show.</p>
        <p className="plat-status">Status: live today.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro/compvss" target="_blank" rel="noopener">Visit COMPVSS →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Rosters &amp; Scheduling</span><span className="row-sub">Who's on, where, and when, at any scale</span></div>
      <div className="row-line"><span className="row-title">Advancing</span><span className="row-sub">Day sheets, riders, and credentials before doors</span></div>
      <div className="row-line"><span className="row-title">Site &amp; Venue Ops</span><span className="row-sub">Scopes, calls, and check-ins across every position</span></div>
      <div className="row-line"><span className="row-title">Timesheets &amp; Certifications</span><span className="row-sub">Hours and compliance captured as the day runs</span></div>
    </div>
  </div>
</div></section>

<section className="wrap plat-sec" id="gvteway">
  <div className="split2">
    <div>
      <p className="kicker">03 · The Public Interface</p>
      <h2 className="plat-name">GVTEWAY</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Talent &amp; Crew</span><span className="tag tag-neutral">For Vendors</span><span className="tag tag-neutral">For Guests</span><span className="tag tag-outline">Marketplace Live</span></div>
      <div className="plat-body">
        <p>GVTEWAY faces outward. It's the public interface and marketplace for the ecosystem: gigs and open calls, talent EPKs and crew profiles, vendor directories, and published RFQs, plus the host and commerce console behind them. Ticketing and the stakeholder portals are the next surfaces, so clients and guests eventually read status off the same record the producer is working from.</p>
        <p className="plat-status">Status: the marketplace is open today. Ticketing and stakeholder portals are in build.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro/gvteway" target="_blank" rel="noopener">Visit GVTEWAY →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Gigs &amp; Open Calls</span><span className="row-sub">Work posted, applied for, and awarded in the open</span></div>
      <div className="row-line"><span className="row-title">Profiles &amp; Directories</span><span className="row-sub">Talent EPKs, crew profiles, and vendor directories</span></div>
      <div className="row-line"><span className="row-title">RFQs &amp; Commerce</span><span className="row-sub">Published RFQs, stores, and the host console</span></div>
      <div className="row-line"><span className="row-title">Ticketing &amp; Portals</span><span className="row-sub">Stakeholder access and ticketing, in build</span></div>
    </div>
  </div>
</section>

<section className="band"><div className="wrap plat-sec" id="leg3nd">
  <div className="split2">
    <div>
      <p className="kicker">04 · The Standard</p>
      <h2 className="plat-name">LEG3ND</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Crew</span><span className="tag tag-neutral">For Institutions</span><span className="tag tag-outline">Live</span></div>
      <div className="plat-body">
        <p>LEG3ND is the knowledge layer: the organization hub, the standard, and the academy. It holds the XPMS standard itself, courses and certifications, the resources hub, the priced catalog of atoms and URIDs that estimates are built from, the signage library, and the compliance engine that checks a plan against code. It's how the way we work gets written down, taught, and verified, so the next build starts from what the last one learned instead of from zero.</p>
        <p className="plat-status">Status: live today. The catalog and credential verification are public; the rest opens with your organization.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro/legend" target="_blank" rel="noopener">Visit LEG3ND →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">The Standard</span><span className="row-sub">The XPMS knowledge base every engagement works from</span></div>
      <div className="row-line"><span className="row-title">Courses &amp; Certifications</span><span className="row-sub">The academy, with credentials that verify publicly</span></div>
      <div className="row-line"><span className="row-title">Catalog &amp; Signage</span><span className="row-sub">Priced atoms and URIDs, plus the signage library</span></div>
      <div className="row-line"><span className="row-title">Compliance Engine</span><span className="row-sub">Capacity, egress, power, and permits checked against code</span></div>
    </div>
  </div>
</div></section>

<section className="wrap sec-pad" id="how-they-fit">
  <p className="kicker">How They Fit Together</p>
  <h2 className="sec-h2">Plan. Field. Public. Standard.</h2>
  <p className="lede">Each platform owns a job, and they share one source of truth. Change the schedule in ATLVS and the crew sees it in COMPVSS, the public side reads it through GVTEWAY, and the standard, catalog, and certifications behind all of it live in LEG3ND. That's the point: no re-keying, no version drift, no vendor blaming another vendor's spreadsheet.</p>
  <div className="fit-row">
    <div className="fit"><span className="n">01</span><h3>Plan</h3><p className="sys">ATLVS</p><p>The producer sets scope, schedule, and budget. Everything downstream reads from here.</p></div>
    <div className="fit"><span className="n">02</span><h3>Field</h3><p className="sys">COMPVSS</p><p>The plan becomes rosters, calls, and day sheets in the hands of the people building it.</p></div>
    <div className="fit"><span className="n">03</span><h3>Public</h3><p className="sys">GVTEWAY</p><p>The outward face. Gigs, directories, RFQs, and commerce run against the same record.</p></div>
    <div className="fit"><span className="n">04</span><h3>Standard</h3><p className="sys">LEG3ND</p><p>The standard, the catalog, and the certifications every other surface is measured against.</p></div>
  </div>
  <p style={{marginTop: '28px'}}><Link href="/services/technology-systems-engineering" className="btn btn-ghost">See how we implement them →</Link></p>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Run on the <span className="a">Same System.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Every GHXSTSHIP engagement comes wired with the platforms that are ready, and the rest as they ship. Tell us what you're building and we'll show you what it looks like running on them.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/pricing" className="btn btn-secondary btn-lg">See Engagement Models</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"The Platforms | GHXSTSHIP","url":"https://ghxstship.tours/platforms","description":"The four in-house platforms behind GHXSTSHIP engagements: ATLVS, COMPVSS, GVTEWAY, and LEG3ND."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ItemList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"SoftwareApplication","name":"ATLVS","url":"https://atlvs.pro","applicationCategory":"BusinessApplication","description":"The operator console for experiential productions: ERP, CRM, and project management on one record, from estimate to settlement. In build."}},{"@type":"ListItem","position":2,"item":{"@type":"SoftwareApplication","name":"COMPVSS","url":"https://atlvs.pro/compvss","applicationCategory":"BusinessApplication","description":"Site and venue operations for deskless crews: rosters, advancing, credentials, and day-of coordination in an installable field app."}},{"@type":"ListItem","position":3,"item":{"@type":"SoftwareApplication","name":"GVTEWAY","url":"https://atlvs.pro/gvteway","applicationCategory":"BusinessApplication","description":"The public interface and marketplace: gigs, open calls, talent and crew profiles, vendor directories, and RFQs, with ticketing and stakeholder portals in build."}},{"@type":"ListItem","position":4,"item":{"@type":"SoftwareApplication","name":"LEG3ND","url":"https://atlvs.pro/legend","applicationCategory":"BusinessApplication","description":"The knowledge layer: the standard, courses and certifications, the priced catalog, signage, and the compliance engine."}}]}` }} />
    </>
  );
}
