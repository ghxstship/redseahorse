import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "The GHXSTSHIP resource library \u2014 the Log, the Experiential Producer guide, the production glossary, the nine-phase course, and the four in-house platforms.",
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
  a.svc-card { text-decoration: none; color: inherit; }
  a.svc-card:hover { border-color: var(--color-text); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Resources</p>
  <h1 className="page-h1">The Field Library.</h1>
  <p className="lede">Everything we write down between builds. Dispatches from the floor, the guide to the experiential producer model, the glossary of the craft, the nine-phase course, and the platforms that run it all.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: '0'}}>
  <div className="res-grid">
    <Link href="/resources/blog" className="svc-card">
      <div className="bar"></div>
      <p className="role">The Log</p>
      <h2>Notes From the Floor</h2>
      <p>Field notes on experiential production, operations, event technology, and the calls we made when the schedule moved. What the build actually taught us.</p>
      <span className="more">Read the Log →</span>
    </Link>
    <Link href="/resources/the-experiential-producer" className="svc-card">
      <div className="bar"></div>
      <p className="role">Featured Guide</p>
      <h2>The Experiential Producer</h2>
      <p>What an experiential producer actually does — one accountable partner for scope, schedule, budget, crew, and tech, and why the one-producer model beats a vendor chain.</p>
      <span className="more">Read the guide →</span>
    </Link>
    <Link href="/resources/glossary" className="svc-card">
      <div className="bar"></div>
      <p className="role">The Field Guide</p>
      <h2>Production Glossary</h2>
      <p>The industry's terms, defined plainly by the people who produce it. Built for producers, brands, and anyone learning the craft.</p>
      <span className="more">Open the glossary →</span>
    </Link>
    <Link href="/course" className="svc-card">
      <div className="bar"></div>
      <p className="role">The Process</p>
      <h2>The Course</h2>
      <p>The nine-phase XPMS 2.5 production lifecycle every engagement walks, Discover through Close. Every phase has deliverables and a name next to them.</p>
      <span className="more">Walk the course →</span>
    </Link>
    <Link href="/platforms" className="svc-card">
      <div className="bar"></div>
      <p className="role">The Instruments</p>
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
