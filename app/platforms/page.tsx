import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Platforms",
  description: "ATLVS, COMPVSS, GVTEWAY, and LEG3ND \u2014 the four in-house platforms GHXSTSHIP runs every engagement on: the production plan, the crew, the gate, and the show.",
  keywords: ["event production software", "production management platform", "crew management software", "workforce management for events", "event ticketing platform", "show control systems", "ATLVS", "COMPVSS", "GVTEWAY", "LEG3ND"],
  alternates: { canonical: "https://ghxstship.tours/platforms" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .plat-sec { padding-block: clamp(40px, 6vw, 80px); }
  .plat-name { font-size: clamp(34px, 4.6vw, 56px); line-height: 0.98; letter-spacing: -0.02em; margin-bottom: 12px; }
  .plat-aud { display: flex; gap: 8px; flex-wrap: wrap; margin: 0 0 16px; }
  .plat-body p { font-size: 15px; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 78%, transparent); max-width: 52ch; }
  .plat-rows { margin-top: 4px; }
  .fit-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 32px; }
  @media (max-width: 960px) { .fit-row { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .fit-row { grid-template-columns: 1fr; } }
  .fit { border: 1px solid var(--color-divider); padding: 20px; background: var(--color-bg); }
  .fit .n { font-family: var(--font-heading); font-weight: 800; font-size: 12px; letter-spacing: 0.1em; color: var(--color-accent-700); }
  .fit h3 { font-size: 19px; line-height: 1.05; margin: 6px 0 4px; }
  .fit .sys { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 0 0 8px; }
  .fit p { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 70%, transparent); margin: 0; }
  .close-cta { text-align: center; padding-block: clamp(56px, 8vw, 110px); }
  .close-cta h2 { font-size: clamp(36px, 5.5vw, 72px); letter-spacing: -0.025em; line-height: 0.96; margin-bottom: 18px; }
  .close-cta h2 .a { color: var(--color-accent); }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Platforms</p>
  <h1 className="page-h1">Software We Run On.</h1>
  <p className="lede">Four in-house platforms wire every GHXSTSHIP engagement together, from the production plan to the crew to the gate to the show. We built them because the tools we needed didn't exist, and we run them on our own projects before we ask anyone else to. No screenshots here, just what each one does and who it's for.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap plat-sec" id="atlvs">
  <div className="split2">
    <div>
      <p className="kicker">01 · The Plan</p>
      <h2 className="plat-name">ATLVS</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Producers</span><span className="tag tag-neutral">For Executives</span></div>
      <div className="plat-body">
        <p>ATLVS is the operator system, project management built for the people who own scope, schedule, and budget. It's where an engagement lives from the first line of the estimate to the final reconciliation: every deliverable mapped to a phase, every cost tracked against the plan, every decision on the record.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro">Visit ATLVS →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Project Management</span><span className="row-sub">Scope, schedule, and deliverables in one workspace</span></div>
      <div className="row-line"><span className="row-title">Budget Control</span><span className="row-sub">Costs tracked against the estimate as they land</span></div>
      <div className="row-line"><span className="row-title">Resource Allocation</span><span className="row-sub">Crews, gear, and vendors assigned against the plan</span></div>
      <div className="row-line"><span className="row-title">Reporting</span><span className="row-sub">The numbers on one screen for the people accountable</span></div>
    </div>
  </div>
</section>

<section className="band"><div className="wrap plat-sec" id="compvss">
  <div className="split2">
    <div>
      <p className="kicker">02 · The Crew</p>
      <h2 className="plat-name">COMPVSS</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Crew</span><span className="tag tag-neutral">For Vendors</span><span className="tag tag-neutral">For Talent</span></div>
      <div className="plat-body">
        <p>COMPVSS is the field side of the same system, built for the people doing the work. Rosters, schedules, advancing, and day-of coordination live in the crew's pocket instead of a binder, and every call, credential, and check-in traces back to the same plan the producer is holding in ATLVS.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro/compvss">Visit COMPVSS →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Rosters &amp; Scheduling</span><span className="row-sub">Who's on, where, and when, at any scale</span></div>
      <div className="row-line"><span className="row-title">Advancing</span><span className="row-sub">Day sheets, riders, and credentials before doors</span></div>
      <div className="row-line"><span className="row-title">Vendor Coordination</span><span className="row-sub">Scopes, calls, and check-ins in one channel</span></div>
      <div className="row-line"><span className="row-title">Timesheets &amp; Certifications</span><span className="row-sub">Hours and compliance captured as the day runs</span></div>
    </div>
  </div>
</div></section>

<section className="wrap plat-sec" id="gvteway">
  <div className="split2">
    <div>
      <p className="kicker">03 · The Gate</p>
      <h2 className="plat-name">GVTEWAY</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Guests</span><span className="tag tag-neutral">For Clients</span></div>
      <div className="plat-body">
        <p>GVTEWAY faces outward. It runs the guest and client side of an experience: access and credentials at the gate, integrations with the ticketing stack you already use, and front of house operations from guest list to will call. Clients see status without having to ask for it, and the gate reconciles against the plan instead of a spreadsheet.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro/gvteway">Visit GVTEWAY →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Access &amp; Credentials</span><span className="row-sub">Who gets in, where, verified at the gate</span></div>
      <div className="row-line"><span className="row-title">Ticketing Integrations</span><span className="row-sub">Meets your ticketing stack where it is</span></div>
      <div className="row-line"><span className="row-title">Front of House</span><span className="row-sub">Guest list, will call, and VIP operations</span></div>
      <div className="row-line"><span className="row-title">Client Visibility</span><span className="row-sub">Status your client can see without asking</span></div>
    </div>
  </div>
</section>

<section className="band"><div className="wrap plat-sec" id="leg3nd">
  <div className="split2">
    <div>
      <p className="kicker">04 · The Show</p>
      <h2 className="plat-name">LEG3ND</h2>
      <div className="plat-aud"><span className="tag tag-accent">For Show Teams</span><span className="tag tag-neutral">For Media Teams</span></div>
      <div className="plat-body">
        <p>LEG3ND is the show and media layer, the newest of the four, and home to the Amplify phase of the nine-phase XPMS 2.5 lifecycle: content capture, broadcast, and post-event campaigns. It carries immersive content from studio to screen, runs playback and show control in the room, and writes the production down as it happens, so the next show starts from what the last one learned instead of from zero.</p>
        <p><a className="btn btn-ghost" href="https://atlvs.pro/legend">Visit LEG3ND →</a></p>
      </div>
    </div>
    <div className="plat-rows">
      <div className="row-line"><span className="row-title">Immersive Content</span><span className="row-sub">Content pipelines for LED, projection, and interactive</span></div>
      <div className="row-line"><span className="row-title">Playback &amp; Control</span><span className="row-sub">Cueing and show control in the room</span></div>
      <div className="row-line"><span className="row-title">Media Systems</span><span className="row-sub">From the studio to the screen, one pipeline</span></div>
      <div className="row-line"><span className="row-title">The Production Record</span><span className="row-sub">The show written down as it runs</span></div>
    </div>
  </div>
</div></section>

<section className="wrap sec-pad" id="how-they-fit">
  <p className="kicker">How They Fit Together</p>
  <h2 style={{fontSize: 'clamp(30px,4.2vw,48px)'}}>Plan. Crew. Gate. Show.</h2>
  <p className="lede">Each platform owns a job, and they share one source of truth. Change the schedule in ATLVS and the crew sees it in COMPVSS, the gate holds in GVTEWAY, and the show file in LEG3ND stays current. That's the point: no re-keying, no version drift, no vendor blaming another vendor's spreadsheet.</p>
  <div className="fit-row">
    <div className="fit"><span className="n">01</span><h3>Plan</h3><p className="sys">ATLVS</p><p>The producer sets scope, schedule, and budget. Everything downstream reads from here.</p></div>
    <div className="fit"><span className="n">02</span><h3>Crew</h3><p className="sys">COMPVSS</p><p>The plan becomes rosters, calls, and day sheets in the hands of the people building it.</p></div>
    <div className="fit"><span className="n">03</span><h3>Gate</h3><p className="sys">GVTEWAY</p><p>Doors open. Access, ticketing, and front of house run against the same record.</p></div>
    <div className="fit"><span className="n">04</span><h3>Show</h3><p className="sys">LEG3ND</p><p>Content plays, cues fire, and the production writes itself down for the next one.</p></div>
  </div>
  <p style={{marginTop: '28px'}}><Link href="/services/technology-systems-implementation" className="btn btn-ghost">See how we implement them →</Link></p>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Run on the <span className="a">Same System.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Every GHXSTSHIP engagement comes wired with the platforms. Tell us what you're building and we'll show you what it looks like running on them.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/pricing" className="btn btn-secondary btn-lg">See Engagement Models</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"The Platforms — GHXSTSHIP","url":"https://ghxstship.tours/platforms","description":"The four in-house platforms GHXSTSHIP runs every engagement on: ATLVS, COMPVSS, GVTEWAY, and LEG3ND."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ItemList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"SoftwareApplication","name":"ATLVS","url":"https://atlvs.pro","applicationCategory":"BusinessApplication","description":"Project management platform for producers and executives: the plan, the budget, the schedule."}},{"@type":"ListItem","position":2,"item":{"@type":"SoftwareApplication","name":"COMPVSS","url":"https://atlvs.pro/compvss","applicationCategory":"BusinessApplication","description":"Crew, vendor, and talent operations: rosters, advancing, day-of coordination."}},{"@type":"ListItem","position":3,"item":{"@type":"SoftwareApplication","name":"GVTEWAY","url":"https://atlvs.pro/gvteway","applicationCategory":"BusinessApplication","description":"Guest and client experience: access, ticketing integrations, front of house."}},{"@type":"ListItem","position":4,"item":{"@type":"SoftwareApplication","name":"LEG3ND","url":"https://atlvs.pro/legend","applicationCategory":"BusinessApplication","description":"Show and media systems: immersive content, playback, and control."}}]}` }} />
    </>
  );
}
