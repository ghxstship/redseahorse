import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GHXSTSHIP privacy policy: what we collect through this site, how contact form submissions are handled, the third-party services we rely on, and how to reach us about your data.",
  keywords: ["GHXSTSHIP privacy policy", "privacy", "data", "contact form data"],
  alternates: { canonical: "https://ghxstship.tours/privacy" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
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
  <h1 className="page-h1">Privacy Policy.</h1>
  <p className="lede">This site is a marketing site. It exists so you can learn what we do and get in touch. We collect as little as that requires, and this page tells you plainly what that is.</p>
  <p className="eff" style={{marginTop: '16px'}}>Effective July 27, 2026</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm"><div className="legal">

  <h2>Who We Are</h2>
  <p>This site is operated by GHXSTSHIP Industries LLC, a professional services firm headquartered in Miami, Florida. When this policy says we, us, or GHXSTSHIP, it means GHXSTSHIP Industries LLC. Questions about this policy or your data go to <a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a>.</p>

  <h2>What We Collect</h2>
  <p>The only personal information this site collects is what you choose to send us through its forms:</p>
  <ul>
    <li><strong>Contact form submissions</strong> — your name, email address, and message, plus any project details you include.</li>
    <li><strong>Careers applications</strong> — the same fields, plus an optional resume attachment you choose to upload.</li>
  </ul>
  <p>There are no user accounts on this site, no login, and nothing to register for. If you never submit a form, you never hand us personal information directly.</p>

  <h2>How Form Submissions Are Handled</h2>
  <p>When you submit a form, its contents are delivered to our team as email through Resend, a third-party email delivery service. Your submission travels through Resend's infrastructure to reach our inbox. We use what you send us to respond to your inquiry or application and for no other purpose. We do not sell your information, rent it, or add you to a marketing list you didn't ask for.</p>

  <h2>Third-Party Services This Site Uses</h2>
  <p>Like most websites, this site relies on a small set of outside services to function. Each may technically process your IP address and standard request metadata as part of serving you the page:</p>
  <ul>
    <li><strong>Vercel</strong> — hosts the site and keeps standard server logs.</li>
    <li><strong>Resend</strong> — delivers form submissions to us as email.</li>
    <li><strong>Google Fonts</strong> — serves the typefaces the site is set in.</li>
    <li><strong>Unsplash</strong> — serves some of the photography on the site.</li>
  </ul>
  <p>Each of these providers operates under its own privacy policy, which governs what it does with request data on its side.</p>

  <h2>Cookies and Local Storage</h2>
  <p><strong>This site sets no cookies.</strong> Not for analytics, not for advertising, not for sessions. There is nothing here to consent to, which is why you are not being asked to dismiss a banner.</p>
  <p>One thing is stored in your browser, and only if you ask for it. If you use the light/dark control in the header, your choice is saved in your browser's local storage under the key <code>gx-theme</code> so the site opens the way you left it. It holds one word — <code>light</code> or <code>dark</code> — it never leaves your device, and we cannot read it. Set the control back to <em>system</em> and it is deleted. Under the EU ePrivacy Directive this is storage strictly necessary to provide a feature you explicitly requested, so it is exempt from the consent requirement; we are telling you about it anyway.</p>
  <p>If you never touch the control, nothing is stored at all.</p>

  <h2>Why We Are Allowed to Hold It</h2>
  <p>For visitors in the UK, the EU, and anywhere else the GDPR reaches, our legal bases under Article 6 are:</p>
  <ul>
    <li><strong>Consent</strong> — you chose to fill in a form and send it. You can withdraw at any time by asking us to delete the submission.</li>
    <li><strong>Steps prior to a contract</strong> — where your message is an enquiry about engaging us.</li>
    <li><strong>Legitimate interests</strong> — keeping the site up, secure, and free of abuse, and answering the people who write to us. We think you would expect all three.</li>
  </ul>
  <p>We do not use your information for automated decision-making or profiling, and we never have.</p>

  <h2>Where Your Information Goes</h2>
  <p>We are a United States company and our providers are United States companies, so a submission sent from outside the US is transferred to the US. Where that transfer is from the UK or the European Economic Area, it is made under the European Commission's Standard Contractual Clauses and the UK Addendum, which our providers incorporate into their terms. You can ask us for details of the safeguards that apply to you.</p>

  <h2>What We Don't Do</h2>
  <p>We do not run advertising trackers, ad pixels, or cross-site tracking on this site. We do not build advertising profiles of visitors, and we do not sell personal information to anyone.</p>

  <h2>Retention</h2>
  <p>We keep form submissions for as long as they're useful for the purpose you sent them: an active inquiry, an open role, or an ongoing business relationship. If you'd like a submission deleted sooner, email us and we'll remove it from our systems unless we're required to keep it for legal or accounting reasons.</p>

  <h2>Your Rights</h2>
  <p>Whoever and wherever you are, you can ask us what personal information we hold about you, ask us to correct it, ask us to delete it, ask for a copy in a portable format, or object to what we are doing with it. Write to <a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a>. We answer within <strong>30 days</strong>, we do not charge for it, and we honour valid requests regardless of which country they come from — we do not think rights should depend on your postcode.</p>
  <p><strong>UK and EEA.</strong> The rights above are yours under the UK GDPR and the EU GDPR, along with the right to restrict processing and the right to withdraw consent at any time without affecting what was lawful before. If we get it wrong, you can complain to your national supervisory authority — in the UK, the Information Commissioner's Office at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a>. We would rather you told us first, but it is your call.</p>
  <p><strong>California.</strong> Under the CCPA as amended by the CPRA you may request the categories and specific pieces of personal information we have collected, request deletion or correction, and know that we will not discriminate against you for asking. In the last twelve months we collected identifiers and professional information, only from forms you submitted, only to answer you. <strong>We have never sold or shared personal information</strong> as those terms are defined, and we do not process sensitive personal information for inferring characteristics — so there is no opt-out to offer you. An authorised agent may act for you with written proof.</p>
  <p><strong>Elsewhere.</strong> Canada, Brazil, Australia, Japan and a growing list of US states give you comparable rights. Same address, same 30 days.</p>

  <h2>Children</h2>
  <p>This site is a business site directed at working professionals. It is not directed at children, and we do not knowingly collect personal information from anyone under 16. If you believe a child has submitted information to us, email us and we'll delete it.</p>

  <h2>Changes to This Policy</h2>
  <p>If our practices change, we'll update this page and the effective date at the top. Material changes won't be applied retroactively to information collected under an earlier version.</p>

  <h2>Contact</h2>
  <p>GHXSTSHIP Industries LLC · Miami, Florida<br/>
  <a href="mailto:sos@ghxstship.pro">sos@ghxstship.pro</a></p>

</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Privacy Policy — GHXSTSHIP","url":"https://ghxstship.tours/privacy","description":"GHXSTSHIP privacy policy: what this marketing site collects, how contact form submissions are handled, and how to reach us about your data.","dateModified":"2026-07-24"}` }} />
    </>
  );
}
