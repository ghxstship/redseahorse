import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Team",
  description: "Meet the GHXSTSHIP team \u2014 the senior management team of executive producers, production directors, project managers, logistics and operations leads, and technical directors who deliver every experiential project.",
  keywords: ["GHXSTSHIP team", "executive producer", "production director", "project manager", "operations director", "experiential production leadership"],
  alternates: { canonical: "https://ghxstship.tours/team" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .tier {
    font-size: 0.8rem; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600;
    color: var(--color-accent-700); margin: clamp(28px, 4vw, 44px) 0 14px;
    display: flex; align-items: center; gap: 10px;
  }
  .tier::before { content: ""; width: 18px; height: 3px; background: var(--color-accent); }
  .tm { border: 1px solid var(--color-divider); background: var(--color-bg); display: flex; flex-direction: column; }
  .tm .av { aspect-ratio: 5 / 2; display: grid; place-items: center; background: var(--color-neutral-200); border-bottom: 1px solid var(--color-divider); }
  .tm .av img { width: 48px; height: 48px; opacity: 0.85; }
  .tm .body { padding: 18px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
  .tm .role { margin: 0; }
  .tm h3 { font-size: 1.2rem; line-height: 1.05; margin: 0; }
  .tm p { font-size: 0.867rem; line-height: 1.55; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; }
  /* open-role cards link to the live listing; the avatar band carries the flag */
  a.tm { text-decoration: none; color: inherit; }
  a.tm:hover { border-color: var(--color-text); }
  .tm.is-open .av { background: var(--color-accent-100); border-bottom-color: var(--color-accent); }
  .open-mark {
    font-family: var(--font-heading); font-weight: 600; font-size: 0.733rem;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-accent-700);
  }
  .tm .go { margin-top: auto; padding-top: 8px; font-family: var(--font-heading); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-accent-700); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Team</p>
  <h1 className="page-h1">The Team That Runs the Build.</h1>
  <p className="lede">Every build is led by a senior team that stays with you from the first consultation to strike. Ranks map to roles, so you always know who's accountable for your production, operations, and technology. Headshots and full bios drop in as the roster is confirmed.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: '0'}}>
  <p className="kicker">Ranks &amp; Roles</p>
  <h2 className="sec-h2">Who Runs What.</h2>

  <p className="tier">Level 01 · Command</p>
  <div className="grid4">
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Executive</p><h3>Executive Producer</h3><p>Owns the production end to end: vision, budget, and the standard the whole build holds to.</p></div></article>
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Production</p><h3>Production Director</h3><p>Runs the build: creative, scenic, staging, and technical production.</p></div></article>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Operations</p><h3>Operations Director</h3><p>Runs the day-of: logistics, crew, safety, and compliance.</p><span className="go">View the listing →</span></div></Link>
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Support</p><h3>Executive Assistant</h3><p>Keeps the command tier moving: schedules, travel, approvals, and client coordination.</p></div></article>
  </div>
  <p className="tier">Level 02 · Direction</p>
  <div className="grid4">
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Executive</p><h3>Senior Producer</h3><p>Leads the production day to day: scope, schedule, vendors, and the build.</p></div></article>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Production</p><h3>Technical Director</h3><p>Owns the technical design and delivery: systems, rigging, power, and signal.</p><span className="go">View the listing →</span></div></Link>
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Operations</p><h3>Hospitality Director</h3><p>Owns guest experience, VIP, and hospitality operations.</p></div></article>
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Support</p><h3>Project Manager</h3><p>Holds the plan: scope, schedule, deliverables, and owners.</p></div></article>
  </div>
  <p className="tier">Level 03 · Management</p>
  <div className="grid4">
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Executive</p><h3>Producer</h3><p>Carries a project from advance to settlement under the senior producer.</p></div></article>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Production</p><h3>Production Manager</h3><p>Runs the floor build and the technical package on site.</p><span className="go">View the listing →</span></div></Link>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Operations</p><h3>Logistics Manager</h3><p>Moves freight and crew: load-in and out, transport, and vendors.</p><span className="go">View the listing →</span></div></Link>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Support</p><h3>Project Coordinator</h3><p>Keeps the plan moving: documents, comms, and tracking.</p><span className="go">View the listing →</span></div></Link>
  </div>
  <p className="tier">Level 04 · Delivery</p>
  <div className="grid4">
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Executive</p><h3>Associate Producer</h3><p>Supports the production across phases: coordination, tracking, and delivery.</p></div></article>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Production</p><h3>Production Crew</h3><p>The hands that build, rig, run, and strike.</p><span className="go">View the listing →</span></div></Link>
    <article className="tm"><figure className="av grayscale"><img src="/assets/skull-bone.svg" alt="" width="48" height="48" loading="lazy"/></figure><div className="body"><p className="role">Operations</p><h3>Site Coordinator</h3><p>Holds the site day: check-ins, credentials, day sheets, and the radio.</p></div></article>
    <Link href="/careers" className="tm is-open"><figure className="av"><span className="open-mark">Open Role</span></figure><div className="body"><p className="role">Support</p><h3>Production Assistant</h3><p>Supports every department, and learns the ropes.</p><span className="go">View the listing →</span></div></Link>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Join the Team</p>
  <h2 className="sec-h2">Learn the Ropes.</h2>
  <p className="lede">We train the next generation of experiential producers, no experience gatekept. Apprentice on real productions, next to the people who've built them. Bring the hunger; we'll teach the ropes.</p>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Careers</p>
  <h2>Build With the <span className="a">Team.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Producers, operators, and technologists who want to build worlds for a living.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/careers" className="btn btn-primary btn-lg">See Open Roles</Link>
    <Link href="/contact" className="btn btn-secondary btn-lg">Start a Project</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"AboutPage","name":"The Team — GHXSTSHIP","url":"https://ghxstship.tours/team","description":"The senior management team of executive producers, production directors, project managers, logistics and operations leads, and technical directors who deliver every GHXSTSHIP project."}` }} />
    </>
  );
}
