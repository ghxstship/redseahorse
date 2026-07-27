import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Start a project with GHXSTSHIP, experiential design and production, venue and site operations, tour and talent management, and technology and systems engineering. Tell us what you're building and we'll scope it, crew it, and run it.",
  keywords: ["contact GHXSTSHIP", "start a project", "experiential production inquiry", "event production consultation"],
  alternates: { canonical: "https://ghxstship.tours/contact" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout; components come from modernist.css */
  .cgrid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: clamp(28px, 5vw, 64px); align-items: start; }
  @media (max-width: 960px) { .cgrid { grid-template-columns: 1fr; } }
  .contact-form .field { margin-bottom: 16px; }
  .rail .blk { margin-bottom: 28px; }
  .rail .lbl { font-size: 0.8rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); margin: 0 0 8px; }
  .rail a { text-decoration: none; font-weight: 600; }
  .rail .office { padding: 10px 0; border-bottom: 1px solid var(--color-divider); }
  .rail .office:first-of-type { border-top: 1px solid var(--color-divider); }
  .rail .office .city { font-family: var(--font-heading); font-weight: 800; font-size: 0.933rem; text-transform: uppercase; margin: 0 0 2px; }
  .rail .office a { font-size: 0.867rem; color: color-mix(in srgb, var(--color-text) 72%, transparent); }
  .rail .office a:hover { color: var(--color-accent-700); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Contact</p>
  <h1 className="page-h1">Start a Project.</h1>
  <p className="lede">Tell us what you're building. We'll crew it, build it, run it, and stay on the standard the whole way. It starts with a consultation, which is just a real conversation about what you're trying to pull off.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}>
  <div className="cgrid">
    <form className="contact-form">
      <div className="field"><label htmlFor="n">Name</label><input className="input" id="n" type="text" placeholder="Your name" required name="name"/></div>
      <div className="field"><label htmlFor="co">Company</label><input className="input" id="co" type="text" placeholder="Company / organization" name="company"/></div>
      <div className="field"><label htmlFor="e">Email</label><input className="input" id="e" type="email" placeholder="you@company.com" required name="email"/></div>
      <div className="field"><label htmlFor="it">Inquiry Type</label><select className="input" id="it" name="inquiry-type"><option>General Inquiry</option><option>New Project</option><option>Partnerships</option><option>Media</option><option>Press</option><option>Talent &amp; Vendors</option><option>Careers</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="t">Destination</label><select className="input" id="t" name="destination"><option>Festival</option><option>Concert / Tour</option><option>Brand Activation</option><option>Immersive Experience</option><option>Cruise Ship</option><option>Amusement Park</option><option>Sporting Event</option><option>TV, Film &amp; Broadcast</option><option>Not Sure Yet</option></select></div>
      <div className="field"><label htmlFor="m">The Brief</label><textarea className="input" id="m" rows={5} placeholder="Tell us what you're building, who it's for, and when it has to happen." required name="the-brief"></textarea></div>
      <a className="btn btn-primary btn-lg gx-btn" role="button" href="mailto:sos@ghxstship.pro">Send the Brief</a>
    </form>
    <aside className="rail">
      <div className="blk"><p className="lbl">Email</p><a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></div>
      <div className="blk"><p className="lbl">Headquarters &amp; Regional</p>
        <div className="office"><p className="city">Miami HQ</p><a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></div>
        <div className="office"><p className="city">Chicago</p><a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></div>
        <div className="office"><p className="city">Los Angeles</p><a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></div>
        <div className="office"><p className="city">New York City</p><a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></div>
      </div>
      <div className="blk"><p className="lbl">Satellite Offices</p>
        <div className="office"><p className="city">Nashville · Denver · Las Vegas · Phoenix</p><a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></div>
      </div>
      <div className="blk"><p className="lbl">Elsewhere</p><Link href="/locations" style={{display: 'block', fontSize: '13px', padding: '4px 0'}}>All locations</Link><Link href="/careers" style={{display: 'block', fontSize: '13px', padding: '4px 0'}}>Careers</Link><Link href="/pricing" style={{display: 'block', fontSize: '13px', padding: '4px 0'}}>Engagement models</Link></div>
    </aside>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Before You Ask</p>
  <h2 className="sec-h2">Frequently Asked.</h2>
  <div style={{maxWidth: '55rem', marginTop: '20px'}}>
    <details className="faq-item"><summary className="faq-q">What happens after I send the brief?</summary><div className="faq-a">We read it and come back to set up a consultation, a real conversation about what you're trying to pull off, who it's for, and when it has to happen. From there we scope it: services, schedule, budget, and the crew that owns it.</div></details>
    <details className="faq-item"><summary className="faq-q">What services do you provide?</summary><div className="faq-a">Four: Experiential Design &amp; Production, Venue &amp; Site Operations, Tour &amp; Talent Management, and Technology &amp; Systems Engineering. Engage one, or all four as one accountable partner.</div></details>
    <details className="faq-item"><summary className="faq-q">What kinds of projects do you take on?</summary><div className="faq-a">Festivals, concerts and tours, brand activations, immersive experiences, cruise ships, amusement parks, sporting events, and TV, film &amp; broadcast, from single-night shows to multi-weekend builds.</div></details>
    <details className="faq-item"><summary className="faq-q">Where do you operate?</summary><div className="faq-a">Nationwide, from eight locations. The headquarters is Miami, with regional offices in Los Angeles, Chicago, and New York City; satellite offices are Nashville, Denver, Las Vegas, and Phoenix. Someone local in the room, the same standard everywhere.</div></details>
    <details className="faq-item"><summary className="faq-q">How do engagements run?</summary><div className="faq-a">Every engagement runs the same nine-phase XPMS 2.6 lifecycle: Discover through Close. Every phase has deliverables and a name next to them, so you always know who owns what.</div></details>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"ContactPage","name":"Start a Project | GHXSTSHIP","url":"https://ghxstship.tours/contact","description":"Start a project with GHXSTSHIP: experiential design and production, venue and site operations, tour and talent management, and technology and systems engineering."}` }} />
    </>
  );
}
