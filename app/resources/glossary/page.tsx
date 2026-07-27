import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Production Glossary",
  description: "The definitive glossary of experiential production, operations, and event technology terms, by GHXSTSHIP. Plain-language definitions of festival production, the production lifecycle, load-in, run of show, and more.",
  keywords: ["experiential production glossary", "event production terms", "load-in definition", "run of show", "strike", "production lifecycle"],
  alternates: { canonical: "https://ghxstship.tours/resources/glossary" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout; components come from modernist.css */
  .gl-sec { display: grid; grid-template-columns: 96px 1fr; gap: 8px clamp(24px, 4vw, 56px); padding-block: clamp(24px, 3.5vw, 40px); border-top: 2px solid var(--color-divider); }
  @media (max-width: 720px) { .gl-sec { grid-template-columns: 1fr; } }
  .gl-letter { font-size: clamp(34px, 4vw, 56px); line-height: 1; letter-spacing: -0.02em; color: var(--color-accent-700); margin: 0; }
  .gl-terms { margin: 0; }
  .gl-term { padding-block: 14px 18px; border-bottom: 1px solid var(--color-divider); }
  .gl-term:last-child { border-bottom: 0; }
  .gl-term dt { font-family: var(--font-heading); font-weight: var(--font-heading-weight); font-size: 1.2rem; text-transform: uppercase; margin: 0 0 6px; }
  .gl-term dd { margin: 0; font-size: 0.933rem; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 72%, transparent); max-width: 68ch; }
  .gl-term .x { display: inline-block; margin-top: 8px; font-size: 0.733rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Resources · The Field Guide</p>
  <h1 className="page-h1">The Experiential Production Glossary.</h1>
  <p className="lede">The industry's terms, defined plainly by the people who produce it. Built for producers, brands, and anyone learning the craft, because we train experiential producers and they kept asking what half of this meant.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: '0'}}>

  <div className="gl-sec" style={{borderTop: '0'}}>
    <h2 className="gl-letter" id="a">A</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Activation Footprint</dt>
        <dd>The total physical space and spatial layout a brand activation or installation occupies within a venue or site, including audience flow and technical zones.</dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="b">B</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Brand Activation</dt>
        <dd>A live, experiential marketing engagement that brings a brand to life through physical or immersive interaction with an audience, designed to drive awareness, affinity, and measurable action.</dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="e">E</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Experiential Production</dt>
        <dd>The end-to-end creative and physical production of live experiences, festivals, concerts and tours, brand activations, immersive experiences, and sporting events, from concept through strike.
        <span className="x">Related: Production Lifecycle · Brand Activation</span></dd>
      </div>
      <div className="gl-term">
        <dt>Experiential Technology</dt>
        <dd>The software and integrated systems that power live experience production and audience engagement, including the ATLVS operator console for ERP, CRM, and project management, site and venue operations for deskless crews with COMPVSS, the public interface and marketplace with GVTEWAY, and the knowledge layer of standard, courses, certifications, and catalog with LEG3ND, alongside the show technology we specify and install.</dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="i">I</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Immersive Experience</dt>
        <dd>A designed environment that audiences step inside and move through, using narrative, spatial design, and interactive technology to surround and engage them.</dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="l">L</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Load-In</dt>
        <dd>The scheduled process of transporting, installing, and assembling all production elements, staging, scenic, audio, lighting, video, and rigging, at a venue ahead of a live event.</dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="p">P</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Production Lifecycle</dt>
        <dd>The structured, repeatable phases a live experience moves through from start to finish. GHXSTSHIP uses the nine-phase XPMS 2.6 lifecycle: Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close. Under XPMS 2.6, every work item resolves to one of 90 coordinates on the ATLVS Coordinate Matrix, ten department classes across the nine phases.
        <span className="x">The GHXSTSHIP methodology · XPMS 2.6</span></dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="r">R</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Run of Show</dt>
        <dd>The minute-by-minute master document that sequences every cue, transition, and responsibility across departments during a live event, used by the show caller to run the event.</dd>
      </div>
    </dl>
  </div>

  <div className="gl-sec">
    <h2 className="gl-letter" id="s">S</h2>
    <dl className="gl-terms">
      <div className="gl-term">
        <dt>Show Caller</dt>
        <dd>The person who directs a live event in real time, calling cues to audio, lighting, video, and stage departments from the run of show.</dd>
      </div>
      <div className="gl-term">
        <dt>Strike</dt>
        <dd>The controlled teardown, removal, and load-out of all production elements after a live event concludes, including reconciliation and site restoration. In the XPMS 2.6 lifecycle, strike lives inside the Operate phase, it is never a phase of its own.</dd>
      </div>
    </dl>
  </div>

</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Keep Learning</p>
  <h2>Learn the <span className="a">Ropes.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>We train the next generation of experiential producers on real builds. Chart the nine-phase course or join the crew.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/careers" className="btn btn-primary btn-lg">Join the Crew</Link>
    <Link href="/course" className="btn btn-secondary btn-lg">Chart the Course</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"DefinedTermSet","name":"GHXSTSHIP Experiential Production Glossary","url":"https://ghxstship.tours/resources/glossary","hasDefinedTerm":[
 {"@type":"DefinedTerm","name":"Experiential Production","description":"The end-to-end creative and physical production of live experiences, festivals, concerts and tours, brand activations, immersive experiences, and sporting events, from concept through strike."},
 {"@type":"DefinedTerm","name":"Production Lifecycle","description":"The structured, repeatable phases a live experience moves through from start to finish. GHXSTSHIP uses the nine-phase XPMS 2.6 lifecycle: Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close. Under XPMS 2.6, every work item resolves to one of 90 coordinates on the ATLVS Coordinate Matrix, ten department classes across the nine phases."},
 {"@type":"DefinedTerm","name":"Brand Activation","description":"A live, experiential marketing engagement that brings a brand to life through physical or immersive interaction with an audience, designed to drive awareness, affinity, and measurable action."},
 {"@type":"DefinedTerm","name":"Load-In","description":"The scheduled process of transporting, installing, and assembling all production elements, staging, scenic, audio, lighting, video, and rigging, at a venue ahead of a live event."},
 {"@type":"DefinedTerm","name":"Run of Show","description":"The minute-by-minute master document that sequences every cue, transition, and responsibility across departments during a live event, used by the show caller to run the event."},
 {"@type":"DefinedTerm","name":"Strike","description":"The controlled teardown, removal, and load-out of all production elements after a live event concludes, including reconciliation and site restoration."},
 {"@type":"DefinedTerm","name":"Activation Footprint","description":"The total physical space and spatial layout a brand activation or installation occupies within a venue or site, including audience flow and technical zones."},
 {"@type":"DefinedTerm","name":"Show Caller","description":"The person who directs a live event in real time, calling cues to audio, lighting, video, and stage departments from the run of show."},
 {"@type":"DefinedTerm","name":"Experiential Technology","description":"The software and integrated systems that power live experience production and audience engagement, including the ATLVS operator console for ERP, CRM, and project management, site and venue operations for deskless crews with COMPVSS, the public interface and marketplace with GVTEWAY, and the knowledge layer of standard, courses, certifications, and catalog with LEG3ND, alongside the show technology we specify and install."},
 {"@type":"DefinedTerm","name":"Immersive Experience","description":"A designed environment that audiences step inside and move through, using narrative, spatial design, and interactive technology to surround and engage them."}
]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
 {"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},
 {"@type":"ListItem","position":2,"name":"Resources","item":"https://ghxstship.tours/resources"},
 {"@type":"ListItem","position":3,"name":"Glossary","item":"https://ghxstship.tours/resources/glossary"}
]}` }} />
    </>
  );
}
