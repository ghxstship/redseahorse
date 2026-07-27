import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the GHXSTSHIP website: content ownership, trademarks, acceptable use, disclaimers, limitation of liability, and governing law.",
  keywords: ["GHXSTSHIP terms of use", "terms", "website terms", "trademarks"],
  alternates: { canonical: "https://ghxstship.tours/terms" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout; components come from modernist.css */
  .legal { max-width: 72ch; }
  .legal h2 { font-size: 1.467rem; margin: clamp(32px, 4vw, 44px) 0 10px; }
  .legal p, .legal li { line-height: 1.7; color: color-mix(in srgb, var(--color-text) 82%, transparent); }
  .legal ul { margin: 0 0 12px; padding-left: 20px; }
  .legal li { margin-bottom: 6px; }
  .eff { font-size: 0.867rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Legal</p>
  <h1 className="page-h1">Terms of Use.</h1>
  <p className="lede">These terms govern your use of this website. Reading a website shouldn't require a law degree, so we've kept them short and in plain language. By using the site, you agree to them.</p>
  <p className="eff" style={{marginTop: '16px'}}>Effective July 27, 2026</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm"><div className="legal">

  <h2>Who These Terms Are With</h2>
  <p>This website is operated by GHXSTSHIP Industries LLC, a professional services firm headquartered in Miami, Florida. These terms are an agreement between you and GHXSTSHIP Industries LLC. They apply to this website only; work we do for clients is governed by separate written agreements, not by this page.</p>

  <h2>Our Content</h2>
  <p>Everything on this site that we created, the text, layouts, graphics, logos, and the design system it's built in, belongs to GHXSTSHIP Industries LLC or its licensors and is protected by copyright and other intellectual property laws. You may browse the site and share links to it. You may not copy, republish, scrape, or use our content commercially without our written permission. Photography sourced from third parties remains the property of its respective owners.</p>

  <h2>Trademarks</h2>
  <p>GHXSTSHIP, ATLVS, COMPVSS, GVTEWAY, and LEG3ND, along with the associated logos and marks, are trademarks of GHXSTSHIP Industries LLC. Nothing on this site grants you a license to use them. Don't use our marks in a way that suggests endorsement, affiliation, or sponsorship that doesn't exist.</p>

  <h2>Acceptable Use</h2>
  <p>Use the site like a professional. In particular, you agree not to:</p>
  <ul>
    <li>Attempt to breach, probe, or circumvent the site's security or interfere with its operation.</li>
    <li>Use the contact or careers forms to send spam, malware, or unlawful content.</li>
    <li>Misrepresent who you are when contacting us.</li>
    <li>Scrape or harvest content or data from the site by automated means without permission.</li>
    <li>Use the site for any purpose that violates applicable law.</li>
  </ul>

  <h2>Third-Party Links and Services</h2>
  <p>The site links to external sites and services, including our platform sites. Those destinations have their own terms and privacy policies, and we're not responsible for their content or practices. A link from us is not an endorsement of everything at the other end.</p>

  <h2>No Warranty</h2>
  <p>The site and its content are provided as is and as available. We work to keep the information current and accurate, but we make no warranties of any kind, express or implied, about the site, including its availability, accuracy, or fitness for a particular purpose. Content on this site is general information, not professional advice for your specific project; that's what an engagement is for.</p>

  <h2>Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, GHXSTSHIP Industries LLC will not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of your use of, or inability to use, this website. Where liability cannot be excluded, it is limited to the maximum extent the law allows. Nothing in these terms limits liability that cannot lawfully be limited.</p>

  <h2>Changes to the Site and These Terms</h2>
  <p>We may change, suspend, or retire any part of the site at any time. We may also update these terms; when we do, we'll post the new version here with a new effective date. Your continued use of the site after a change means you accept the updated terms.</p>

  <h2>Governing Law</h2>
  <p>These terms are governed by the laws of the State of Florida, without regard to its conflict of law rules. Any dispute arising from these terms or your use of the site will be brought in the state or federal courts located in Miami-Dade County, Florida, and you consent to their jurisdiction.</p>

  <h2>If You Are a Consumer in the UK, EU, or Elsewhere</h2>
  <p>Consumer protection law in your country may give you rights that a contract cannot take away. Nothing on this page removes them. Where local mandatory law conflicts with the governing-law and venue clause above, local law wins for you, and the rest of these terms stay in force. The limitations of liability apply only as far as your law permits.</p>

  <h2>Reporting a Security Issue</h2>
  <p>If you find a vulnerability in this site, tell us at <a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a> and give us reasonable time to fix it before disclosing it publicly. Our machine-readable policy is at <span>/.well-known/security.txt</span>. Testing that stays within the acceptable-use rules above, does not touch other people's data, and does not degrade the service for anyone else is welcome, and we will not pursue you for it.</p>

  <h2>Contact</h2>
  <p>Questions about these terms go to <a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a>.<br/>
  GHXSTSHIP Industries LLC · Miami, Florida</p>

</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Terms of Use | GHXSTSHIP","url":"https://ghxstship.tours/terms","description":"Terms of use for the GHXSTSHIP website: content ownership, trademarks, acceptable use, disclaimers, and governing law.","dateModified":"2026-07-24"}` }} />
    </>
  );
}
