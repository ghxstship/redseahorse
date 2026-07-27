import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "GHXSTSHIP's accessibility statement: our WCAG 2.2 AA conformance target, what we've built for access, known limitations, and how to reach us if something isn't working for you.",
  keywords: ["accessibility statement", "WCAG 2.2 AA", "GHXSTSHIP accessibility", "inclusive design"],
  alternates: { canonical: "https://ghxstship.tours/accessibility" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  .read { max-width: 72ch; }
  .read h2 { font-size: 1.6rem; margin-top: clamp(28px, 4vw, 44px); }
  .read p, .read li { line-height: 1.7; color: color-mix(in srgb, var(--color-text) 82%, transparent); }
  .read ul { padding-left: 20px; margin: 0 0 12px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Accessibility</p>
  <h1 className="page-h1">Built for Everyone.</h1>
  <p className="lede">We build rooms everyone can walk into. The website should work the same way. This statement covers what we've done, what we're still fixing, and how to tell us when something isn't working for you.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm"><div className="read">
  <h2>Our Standard</h2>
  <p>ghxstship.tours targets conformance with the <strong>Web Content Accessibility Guidelines (WCAG) 2.2, Level AA</strong>. That single standard is what the rules in most of our markets point at: the Americans with Disabilities Act and Section 508 in the United States, the <strong>European Accessibility Act</strong> and EN 301 549 across the EU, the Accessibility for Ontarians with Disabilities Act in Canada, and comparable law elsewhere.</p>
  <p><strong>Conformance status: partially conformant.</strong> Partially conformant means most of the site meets the standard and the exceptions are named below rather than hidden. This is a self-assessment, carried out by the team that built the site; we have not yet commissioned an independent audit.</p>

  <h2>What We've Built</h2>
  <ul>
    <li>Text and interface colors are checked against WCAG contrast minimums, including the green accent, which uses a darker text-safe shade wherever it carries words.</li>
    <li>Every page has a logical heading structure, a skip-to-content link, and consistent landmarks for navigation, content, and footer.</li>
    <li>The site works with a keyboard alone: visible focus outlines, no keyboard traps, and menus and accordions that open and close with standard keys.</li>
    <li>Forms have visible labels tied to their fields, clear required-field marking, and status messages announced to screen readers.</li>
    <li>Images carry alternative text; decorative images are hidden from assistive technology.</li>
    <li>Animation respects your reduced-motion system setting, and nothing flashes or autoplays with sound.</li>
    <li>The layout reflows for small screens and up to 400 percent zoom without horizontal scrolling.</li>
  </ul>

  <h2>Known Limitations</h2>
  <ul>
    <li>Some photography is placeholder imagery with general descriptions; alternative text becomes more specific as final project photography lands.</li>
    <li>Third-party services we link out to, including our platform sites and social networks, are outside this statement's scope.</li>
  </ul>

  <h2>Tell Us</h2>
  <p>If any part of this site is hard to use with assistive technology, or you need content in another format, email <a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a> with the page address and what went wrong. A human reads every message and we aim to reply within <strong>five business days</strong>. Access issues go to the front of the line, ahead of feature work.</p>
  <p>If our answer does not resolve it, say so and it escalates to the person who owns the site rather than going quiet. You also keep whatever right of complaint your national law gives you.</p>
  <p>Assessed against WCAG 2.2 Level AA by self-evaluation, using automated contrast measurement across every route in both themes, keyboard-only walkthroughs, and manual inspection of headings, landmarks, labels, and target sizes.</p>
  <p>This statement was prepared and last reviewed on <strong>27 July 2026</strong>, following the addition of light, dark, and system theming.</p>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Start Your <span className="a">Project.</span></h2>
  <div className="cta-row">
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Accessibility Statement | GHXSTSHIP","url":"https://ghxstship.tours/accessibility","description":"GHXSTSHIP's accessibility conformance statement for ghxstship.tours."}` }} />
    </>
  );
}
