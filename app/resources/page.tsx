import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "The GHXSTSHIP resource library \u2014 the Log, the Experiential GC guide, the production glossary, the nine-phase course, and the four in-house platforms.",
  keywords: ["experiential production resources", "event production blog", "production glossary", "production lifecycle course", "event production software"],
  alternates: { canonical: "https://ghxstship.tours/resources" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .res-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 28px; }
  @media (max-width: 960px) { .res-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .res-grid { grid-template-columns: 1fr; } }
  .res-card { border: 1px solid var(--color-divider); background: var(--color-bg); padding: 24px; display: flex; flex-direction: column; gap: 10px; text-decoration: none; color: inherit; }
  .res-card:hover { border-color: var(--color-text); color: inherit; }
  .res-card .bar { height: 3px; width: 44px; background: var(--color-accent); }
  .res-card .cat { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); margin: 0; }
  .res-card h2 { font-size: 21px; line-height: 1.05; margin: 0; }
  .res-card p { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: 1; }
  .res-card .more { font-family: var(--font-heading); font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-accent-700); }
  .close-cta { text-align: center; padding-block: clamp(56px, 8vw, 110px); }
  .close-cta h2 { font-size: clamp(36px, 5.5vw, 72px); letter-spacing: -0.025em; line-height: 0.96; margin-bottom: 18px; }
  .close-cta h2 .a { color: var(--color-accent); }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Resources</p>
  <h1 className="page-h1">The Field Library.</h1>
  <p className="lede">Everything we write down between builds. Dispatches from the floor, the guide to the experiential GC model, the glossary of the craft, the nine-phase course, and the platforms that run it all.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: '0'}}>
  <div className="res-grid">
    <Link href="/resources/blog" className="res-card">
      <div className="bar"></div>
      <p className="cat">The Log</p>
      <h2>Notes From the Floor</h2>
      <p>Field notes on experiential production, operations, event technology, and the calls we made when the schedule moved. What the build actually taught us.</p>
      <span className="more">Read the Log →</span>
    </Link>
    <Link href="/resources/the-experiential-gc" className="res-card">
      <div className="bar"></div>
      <p className="cat">Featured Guide</p>
      <h2>The Experiential GC</h2>
      <p>What an experiential general contractor actually does — one accountable partner for scope, schedule, budget, crew, and tech, and why the GC model beats a vendor chain.</p>
      <span className="more">Read the guide →</span>
    </Link>
    <Link href="/resources/glossary" className="res-card">
      <div className="bar"></div>
      <p className="cat">The Field Guide</p>
      <h2>Production Glossary</h2>
      <p>The industry's terms, defined plainly by the people who produce it. Built for producers, brands, and anyone learning the craft.</p>
      <span className="more">Open the glossary →</span>
    </Link>
    <Link href="/course" className="res-card">
      <div className="bar"></div>
      <p className="cat">The Process</p>
      <h2>The Course</h2>
      <p>The nine-phase XPMS 2.5 production lifecycle every engagement walks, Discover through Close. Every phase has deliverables and a name next to them.</p>
      <span className="more">Walk the course →</span>
    </Link>
    <Link href="/platforms" className="res-card">
      <div className="bar"></div>
      <p className="cat">The Instruments</p>
      <h2>The Platforms</h2>
      <p>ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND. Four in-house platforms that wire every engagement together, from the production plan to the crew to the gate.</p>
      <span className="more">See the platforms →</span>
    </Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build With <span className="a">GHXSTSHIP.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Done reading and ready to build? Tell us what you're making and we'll scope it with you.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Resources","url":"https://ghxstship.tours/resources","description":"Field notes, guides, the production glossary, the nine-phase course, and the GHXSTSHIP platforms."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://ghxstship.tours/resources"}]}` }} />
    </>
  );
}
