import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement Models",
  description: "How GHXSTSHIP engagements work: Full Production, Single Discipline, or Embedded and Phase-based. Every engagement is priced as a scoped proposal \u2014 tell us what you're building and we'll put a number on it.",
  keywords: ["event production pricing", "production company engagement models", "experiential production proposal", "event production general contractor", "production management services", "hire event production company"],
  alternates: { canonical: "https://ghxstship.tours/pricing" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .model-card { border: 1px solid var(--color-divider); background: var(--color-bg); padding: 28px 24px; display: flex; flex-direction: column; }
  .model-card .bar { height: 3px; width: 44px; background: var(--color-accent); margin-bottom: 16px; }
  .model-card h2 { font-size: 24px; line-height: 1.02; margin: 0 0 6px; }
  .model-card .who { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0 0 14px; }
  .model-card .lbl { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 14px 0 2px; }
  .model-card .row-line { padding: 10px 0; grid-template-columns: 1fr; }
  .model-card .row-line .row-title { font-size: 14px; }
  .model-card .row-line .row-sub { font-size: 12px; }
  .model-card .how { font-size: 13px; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: none; }
  .model-card .act { margin: auto 0 0; padding-top: 14px; }
  .model-card .act { margin-top: 20px; }
  .cmp-wrap { overflow-x: auto; margin-top: 28px; }
  .cmp-wrap .table { min-width: 680px; }
  .cmp-wrap .table tbody th[scope="row"] { font-family: var(--font-heading); font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.02em; color: var(--color-text); border-bottom: 1px solid var(--color-divider); }
  .yes { color: var(--color-accent-700); font-weight: 600; }
  .faq-wrap { max-width: 780px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Engagement Models</p>
  <h1 className="page-h1">Three Ways to Engage.</h1>
  <p className="lede">Professional services don't come off a rate card, and we won't insult you with a fake one. Every GHXSTSHIP engagement is priced as a scoped proposal against a defined scope of work. What changes is the shape: the whole production, one discipline, or a phase of the lifecycle. Here's how each works.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" id="models">
  <div className="grid3">
    <article className="model-card">
      <div className="bar"></div>
      <h2>Full Production</h2>
      <p className="who">For festivals, tours, activations, and venues that want one accountable partner end to end. We act as the general contractor: all four disciplines, all nine phases, one contract, one name on the hook.</p>
      <p className="lbl">What's Included</p>
      <div className="row-line"><span className="row-title">All Four Disciplines</span><span className="row-sub">Design &amp; production, site operations, tour &amp; talent, technology &amp; systems</span></div>
      <div className="row-line"><span className="row-title">The Full 9-Phase Lifecycle</span><span className="row-sub">Discover through Close, every deliverable owned</span></div>
      <div className="row-line"><span className="row-title">Dedicated Production Team</span><span className="row-sub">Executive producer down to the site leads</span></div>
      <div className="row-line"><span className="row-title">The Platforms</span><span className="row-sub">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, wired in from day one</span></div>
      <p className="lbl">How It's Priced</p>
      <p className="how">A scoped proposal covering the full production budget and our fee, built in Discover and locked before Design. You see the whole number before we spend the first dollar.</p>
      <p className="act"><Link href="/contact" className="btn btn-primary btn-block">Scope a Full Production</Link></p>
    </article>
    <article className="model-card">
      <div className="bar"></div>
      <h2>Single Discipline</h2>
      <p className="who">For teams that have most of it handled and need one vertical run properly: site operations for a show you're producing, tour management for a routing you've booked, or the technology layer under an existing operation.</p>
      <p className="lbl">What's Included</p>
      <div className="row-line"><span className="row-title">One Vertical, Defined Scope</span><span className="row-sub">Any of the four disciplines, deliverables in writing</span></div>
      <div className="row-line"><span className="row-title">A Named Lead</span><span className="row-sub">One person accountable to you for the scope</span></div>
      <div className="row-line"><span className="row-title">Lifecycle Alignment</span><span className="row-sub">Our phases mapped to your master schedule</span></div>
      <div className="row-line"><span className="row-title">Relevant Platform Access</span><span className="row-sub">The platforms that serve the discipline you hired</span></div>
      <p className="lbl">How It's Priced</p>
      <p className="how">A scoped proposal for the discipline and duration, fixed fee or monthly retainer depending on the shape of the work. Scope changes are priced before they happen, not after.</p>
      <p className="act"><Link href="/contact" className="btn btn-secondary btn-block">Scope a Discipline</Link></p>
    </article>
    <article className="model-card">
      <div className="bar"></div>
      <h2>Embedded / Phase</h2>
      <p className="who">For organizations that need a phase of the lifecycle done right or senior specialists inside their own team: a Discover and Design package, an advance, a load-in, or an embedded producer for the season.</p>
      <p className="lbl">What's Included</p>
      <div className="row-line"><span className="row-title">A Phase of the Lifecycle</span><span className="row-sub">Any of the nine, with its deliverables and handoff</span></div>
      <div className="row-line"><span className="row-title">Embedded Specialists</span><span className="row-sub">Senior people inside your team, your tools or ours</span></div>
      <div className="row-line"><span className="row-title">Defined Handoff</span><span className="row-sub">What we leave behind is documented, not tribal</span></div>
      <div className="row-line"><span className="row-title">A Path to More</span><span className="row-sub">Extend to another phase or discipline without re-contracting from zero</span></div>
      <p className="lbl">How It's Priced</p>
      <p className="how">A scoped proposal for the phase or the seat: fixed fee for phase work, weekly or monthly rates for embedded roles. Short by design, renewed on results.</p>
      <p className="act"><Link href="/contact" className="btn btn-secondary btn-block">Scope a Phase</Link></p>
    </article>
  </div>
</section>

<section className="band"><div className="wrap sec-pad" id="compare">
  <p className="kicker">Side by Side</p>
  <h2 className="sec-h2">What Each Model Covers.</h2>
  <p className="lede">The same four disciplines and the same lifecycle sit under every model. What changes is how much of it we own.</p>
  <div className="cmp-wrap" tabIndex={0} role="region" aria-label="Engagement model comparison table">
    <table className="table">
      <thead><tr><th scope="col">Included</th><th scope="col">Full Production</th><th scope="col">Single Discipline</th><th scope="col">Embedded / Phase</th></tr></thead>
      <tbody>
        <tr><th scope="row">Experiential Design &amp; Production</th><td><span className="yes">Included</span></td><td>If chosen</td><td>By phase or role</td></tr>
        <tr><th scope="row">Venue &amp; Site Operations</th><td><span className="yes">Included</span></td><td>If chosen</td><td>By phase or role</td></tr>
        <tr><th scope="row">Tour &amp; Talent Management</th><td><span className="yes">Included</span></td><td>If chosen</td><td>By phase or role</td></tr>
        <tr><th scope="row">Technology &amp; Systems Implementation</th><td><span className="yes">Included</span></td><td>If chosen</td><td>By phase or role</td></tr>
        <tr><th scope="row">9-Phase Lifecycle Coverage</th><td>All nine phases</td><td>Phases in your scope</td><td>The phase you hire</td></tr>
        <tr><th scope="row">Accountable Lead</th><td>Executive producer</td><td>Discipline lead</td><td>Phase or seat lead</td></tr>
        <tr><th scope="row">Platform Access</th><td>All four platforms</td><td>Discipline-relevant</td><td>Scope-relevant</td></tr>
        <tr><th scope="row">Pricing Basis</th><td>Scoped proposal, full budget</td><td>Fixed fee or retainer</td><td>Fixed fee or weekly rate</td></tr>
      </tbody>
    </table>
  </div>
</div></section>

<section className="wrap sec-pad" id="faq">
  <p className="kicker">Straight Answers</p>
  <h2 className="sec-h2">Engagement FAQ.</h2>
  <div className="faq-wrap" style={{marginTop: '20px'}}>
    <details className="faq-item">
      <summary className="faq-q">How do you price an engagement?</summary>
      <div className="faq-a">Every engagement is priced as a scoped proposal. We hear what you're building, define scope and deliverables against the nine-phase XPMS 2.5 lifecycle, and return a written proposal with a fee structure that fits the shape of the work. No rate card on a website can honestly price a festival and a single-room activation the same way, so we don't pretend one can.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Is there a minimum engagement?</summary>
      <div className="faq-a">No hard minimum. The practical floor is a defined scope we can be accountable for — a phase, a discipline, or a defined consulting block. If the honest answer is that you don't need us yet, we'll say so and point you at what you do need.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Do you travel?</summary>
      <div className="faq-a">Yes. We're headquartered in Miami with offices in Las Vegas, Chicago, New York, and Los Angeles, and we take work wherever the project is. Travel and per diem are line items in the proposal, not surprises on the invoice.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Are you insured and licensed?</summary>
      <div className="faq-a">We carry the insurance the work requires and provide certificates during contracting. Permits, licensing, and compliance specific to your venue and market are handled as part of the advance, phase three of the lifecycle, before anything loads in.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">How fast can you mobilize?</summary>
      <div className="faq-a">It depends on the scope. An embedded specialist or a single-phase engagement can move quickly once the proposal is signed. A full production engagement follows the nine-phase lifecycle from Discover, and the calendar is set by your date, not ours. Either way you'll have a named lead and a schedule in the first conversation after signing.</div>
    </details>
    <details className="faq-item">
      <summary className="faq-q">Do you work with our existing vendors?</summary>
      <div className="faq-a">Yes. As the general contractor we manage the vendors you already trust alongside the ones we bring, under one scope and one schedule. We don't require you to drop relationships that work — we require everyone to hit their dates.</div>
    </details>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Get a <span className="a">Real Number.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building, when it opens, and what keeps you up at night. We'll come back with a scoped proposal, not a sales deck.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Engagement Models — GHXSTSHIP","url":"https://ghxstship.tours/pricing","description":"Three ways to engage GHXSTSHIP: Full Production, Single Discipline, or Embedded and Phase-based. Every engagement is priced as a scoped proposal."}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you price an engagement?","acceptedAnswer":{"@type":"Answer","text":"Every engagement is priced as a scoped proposal. We hear what you're building, define scope and deliverables against the nine-phase XPMS 2.5 lifecycle, and return a written proposal with a fee structure that fits the shape of the work. No rate card on a website can honestly price a festival and a single-room activation the same way, so we don't pretend one can."}},{"@type":"Question","name":"Is there a minimum engagement?","acceptedAnswer":{"@type":"Answer","text":"No hard minimum. The practical floor is a defined scope we can be accountable for — a phase, a discipline, or a defined consulting block. If the honest answer is that you don't need us yet, we'll say so and point you at what you do need."}},{"@type":"Question","name":"Do you travel?","acceptedAnswer":{"@type":"Answer","text":"Yes. We're headquartered in Miami with offices in Las Vegas, Chicago, New York, and Los Angeles, and we take work wherever the project is. Travel and per diem are line items in the proposal, not surprises on the invoice."}},{"@type":"Question","name":"Are you insured and licensed?","acceptedAnswer":{"@type":"Answer","text":"We carry the insurance the work requires and provide certificates during contracting. Permits, licensing, and compliance specific to your venue and market are handled as part of the advance, phase three of the lifecycle, before anything loads in."}},{"@type":"Question","name":"How fast can you mobilize?","acceptedAnswer":{"@type":"Answer","text":"It depends on the scope. An embedded specialist or a single-phase engagement can move quickly once the proposal is signed. A full production engagement follows the nine-phase lifecycle from Discover, and the calendar is set by your date, not ours. Either way you'll have a named lead and a schedule in the first conversation after signing."}},{"@type":"Question","name":"Do you work with our existing vendors?","acceptedAnswer":{"@type":"Answer","text":"Yes. As the general contractor we manage the vendors you already trust alongside the ones we bring, under one scope and one schedule. We don't require you to drop relationships that work — we require everyone to hit their dates."}}]}` }} />
    </>
  );
}
