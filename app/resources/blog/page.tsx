import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Log \u2014 Dispatches on Experiential Production",
  description: "The GHXSTSHIP Log \u2014 field notes on experiential production management, operations leadership, event technology, and the nine-phase XPMS 2.5 production lifecycle.",
  keywords: ["experiential production blog", "event production field notes", "production lifecycle", "venue operations", "event technology"],
  alternates: { canonical: "https://ghxstship.tours/resources/blog" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .feat { display: block; border: 1px solid var(--color-divider); border-left: 4px solid var(--color-accent); background: var(--color-bg); padding: clamp(24px, 4vw, 40px); text-decoration: none; color: inherit; margin-top: 28px; }
  .feat:hover { border-color: var(--color-text); border-left-color: var(--color-accent); color: inherit; }
  .feat .cat { font-size: 0.733rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); margin: 0 0 8px; }
  .feat h2 { font-size: clamp(26px, 3.4vw, 40px); line-height: 1.02; margin: 0 0 12px; max-width: 24ch; }
  .feat p { font-size: 1rem; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0 0 14px; max-width: 62ch; }
  .feat .meta { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
  .feat .d { font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); }
  .post-row { text-decoration: none; color: inherit; }
  .post-row:hover .row-title { color: var(--color-accent-700); }
  .post-row .ex { grid-column: 1 / -1; font-size: 0.867rem; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 65%, transparent); max-width: 68ch; }
  .post-row .d { font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Resources · The Log</p>
  <h1 className="page-h1">Notes From the Floor.</h1>
  <p className="lede">The Log is where we write down what the build actually taught us: experiential production, operations, event tech, and the calls we made when the schedule moved.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: '0'}}>
  <p className="kicker">Featured Dispatch</p>
  <Link href="/resources/the-experiential-producer" className="feat">
    <p className="cat">Field Notes</p>
    <h2>What an Experiential Producer Actually Does</h2>
    <p>One accountable partner for scope, schedule, budget, crew, and tech — and why the one-producer model beats a vendor chain for live experiences.</p>
    <span className="meta"><span className="d">Jun 2026</span><span className="more">Read the dispatch →</span></span>
  </Link>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Latest Dispatches</p>
  <h2 className="sec-h2">From the Log.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)'}}>
    <a className="row-line post-row" href="#">
      <span className="row-title">The 9-Phase Production Lifecycle, Explained</span>
      <span className="tag tag-neutral">Operations</span>
      <span className="d">May 2026</span>
      <span className="ex">Discover to Close. How the XPMS 2.5 course keeps a build on schedule and on budget when every phase wants to slip.</span>
    </a>
    <a className="row-line post-row" href="#">
      <span className="row-title">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND: The Instruments</span>
      <span className="tag tag-neutral">Technology</span>
      <span className="d">May 2026</span>
      <span className="ex">The production, crew, and ticketing software we built ourselves, and how they keep a whole build talking to itself.</span>
    </a>
    <a className="row-line post-row" href="#">
      <span className="row-title">Running a Venue to One Standard</span>
      <span className="tag tag-neutral">Venue Ops</span>
      <span className="d">Apr 2026</span>
      <span className="ex">Programming, staffing, compliance, the day-of call. The operations playbook for holding every date to the same bar.</span>
    </a>
    <a className="row-line post-row" href="#">
      <span className="row-title">GHXSTSHIP Breaks Ground on New Immersive Work in Miami</span>
      <span className="tag tag-neutral">Press</span>
      <span className="d">Apr 2026</span>
      <span className="ex">A look at the newest build on the board and the crew behind it.</span>
    </a>
    <a className="row-line post-row" href="#">
      <span className="row-title">Learn the Ropes: Join the Crew</span>
      <span className="tag tag-neutral">Crew Call</span>
      <span className="d">Mar 2026</span>
      <span className="ex">We train the next generation of experiential producers on real builds. Here's how to join one.</span>
    </a>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/resources" className="btn btn-ghost">Back to all resources →</Link></p>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build With <span className="a">GHXSTSHIP.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Blog","name":"GHXSTSHIP Log","url":"https://ghxstship.tours/resources/blog","description":"Field notes on experiential production management, operations leadership, event technology, and the nine-phase XPMS 2.5 production lifecycle."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://ghxstship.tours/resources"},{"@type":"ListItem","position":3,"name":"The Log","item":"https://ghxstship.tours/resources/blog"}]}` }} />
    </>
  );
}
