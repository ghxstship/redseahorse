import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .nf { min-height: 58vh; display: grid; place-items: center; text-align: center; padding-block: clamp(56px, 9vw, 120px); }
  .nf .code { font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 600; color: var(--color-accent-700); margin: 0 0 16px; }
  .nf h1 { margin-bottom: 18px; }
  .nf h1 .a { color: var(--color-accent-700); }
  .nf .lede { margin-inline: auto; max-width: 44ch; }
  .nf .cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
  .nf .also { margin-top: 26px; font-size: 13px; color: color-mix(in srgb, var(--color-text) 60%, transparent); }
  .nf .also a { font-family: var(--font-heading); font-weight: 600; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; text-decoration: none; color: var(--color-accent-700); margin-inline: 8px; }
  .nf .also a:hover { color: var(--color-accent-800); }
` }} />
      


<main id="main">

<section className="wrap nf"><div>
  <p className="code">Error 404 · Page Not Found</p>
  <h1 className="display-h1">That Page <span className="a">Isn't Here.</span></h1>
  <p className="lede">Happens. The page moved, got pulled, or never existed. Either way, here's a way back.</p>
  <div className="cta-row">
    <Link href="/" className="btn btn-primary btn-lg">Back to Home</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
  <p className="also">Or head for
    <Link href="/services/experiential-design-production">Services</Link>
    <Link href="/resources">Resources</Link>
    <Link href="/contact">Contact</Link>
  </p>
</div></section>

</main>



    </>
  );
}
