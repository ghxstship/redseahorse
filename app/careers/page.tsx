import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles at GHXSTSHIP \u2014 production, operations, and technology roles for experiential and entertainment production in Miami, Las Vegas, New York, and Los Angeles.",
  keywords: ["event production jobs", "experiential production careers", "production manager jobs", "live event operations jobs", "technical director jobs", "festival production careers"],
  alternates: { canonical: "https://ghxstship.tours/careers" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .roles { margin-top: 28px; border-top: 2px solid var(--color-divider); }
  .roles a.row-line { text-decoration: none; color: inherit; }
  .roles a.row-line:hover { background: color-mix(in srgb, var(--color-text) 4%, transparent); }
  .roles a.row-line:hover .row-title { color: var(--color-accent-700); }
  .values-grid { margin-top: 28px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Careers</p>
  <h1 className="page-h1">Open Roles.</h1>
  <p className="lede">We hire producers, directors, managers, and crew who build experiential and entertainment productions end to end. You're not running an event here — you're building a world people live inside for a weekend, then strike by morning. Find a role, read the brief, apply. We train the next generation, and we don't gatekeep experience.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">8 Open Positions</p>
  <h2 className="sec-h2">What We're Hiring.</h2>
  <div className="roles">
    <Link href="/careers/role" className="row-line"><span className="row-title">Production Manager</span><span className="row-sub">Production · Miami, FL</span><span className="row-sub">Full-time</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Project Coordinator</span><span className="row-sub">Operations · Las Vegas, NV</span><span className="row-sub">Full-time</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Logistics Manager</span><span className="row-sub">Operations · Miami, FL</span><span className="row-sub">Full-time</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Technical Director</span><span className="row-sub">Technology · Los Angeles, CA</span><span className="row-sub">Full-time</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Production Crew</span><span className="row-sub">Production · Multiple</span><span className="row-sub">Freelance</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Production Assistant</span><span className="row-sub">Production · Miami, FL</span><span className="row-sub">Internship</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Operations Director</span><span className="row-sub">Operations · New York, NY</span><span className="row-sub">Full-time</span></Link>
    <Link href="/careers/role" className="row-line"><span className="row-title">Hospitality Manager</span><span className="row-sub">Operations · Miami, FL</span><span className="row-sub">Full-time</span></Link>
  </div>
  <p className="lede" style={{marginTop: '20px'}}>Don't see your role? <Link href="/careers/apply">Send a general application</Link>.</p>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">How We Crew</p>
  <h2 className="sec-h2">What You Can Expect.</h2>
  <div className="grid4 values-grid">
    <article className="card">
      <p className="card-kicker">The Work</p>
      <h3 className="card-title">End to End Productions</h3>
      <p className="card-body">Producers, directors, managers, and crew building experiential and entertainment productions end to end — festivals, tours, activations, immersive experiences, and live events.</p>
    </article>
    <article className="card">
      <p className="card-kicker">Apprenticeships</p>
      <h3 className="card-title">We Train the Next Generation</h3>
      <p className="card-body">No experience? We train the next generation and we don't gatekeep experience. Apply to Production Assistant and learn the work on real productions.</p>
    </article>
    <article className="card">
      <p className="card-kicker">The Process</p>
      <h3 className="card-title">A Human Reads Every Application</h3>
      <p className="card-body">A human on the crew reads every application that comes in. If it's a fit, a 20-minute intro call, then a practical conversation with the department lead.</p>
    </article>
    <article className="card">
      <p className="card-kicker">Equal Opportunity</p>
      <h3 className="card-title">Merit, Not Gatekeeping</h3>
      <p className="card-body">GHXSTSHIP is an equal-opportunity employer. We crew on merit, and we don't gatekeep talent.</p>
    </article>
  </div>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Build With Us</p>
  <h2>Come Build <span className="a">Worlds.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Find a role, read the brief, apply. A human on the crew reads every application.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/careers/apply" className="btn btn-primary btn-lg">Apply Now</Link>
    <Link href="/team" className="btn btn-secondary btn-lg">Meet the Team</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"GHXSTSHIP Careers","url":"https://ghxstship.tours/careers","description":"Open roles at GHXSTSHIP — production, operations, and technology roles for experiential and entertainment production."}` }} />
    </>
  );
}
