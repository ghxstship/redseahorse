import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store \u2014 Merch & Gear",
  description: "The GHXSTSHIP Store \u2014 branded apparel, prints, and gear from the experiential production company. Sitewear, Streetwear, and Performancewear. Checkout runs on GVTEWAY.",
  keywords: ["GHXSTSHIP merch", "crew apparel", "event production gear", "branded workwear"],
  alternates: { canonical: "https://ghxstship.tours/store" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .lines { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 18px; }
  .prod-grid { margin-top: clamp(28px, 4vw, 44px); }
  .prod { padding: 0; overflow: hidden; }
  .prod .media { aspect-ratio: 1 / 1; display: grid; place-items: center; background: var(--color-neutral-100); border-bottom: 1px solid var(--color-divider); }
  .prod .media .ph-mark { width: 46%; }
  .prod .body { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 4px; flex: 1; }
  .prod h2 { font-size: 1.133rem; margin: 0; }
  .prod .row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 10px; }
  .prod .price { font-family: var(--font-heading); font-weight: 800; font-size: 1.067rem; }
  .store-note { text-align: center; margin-top: clamp(24px, 4vw, 36px); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; }
` }} />
      


<main id="main">
<svg width="0" height="0" aria-hidden="true" focusable="false" style={{position: 'absolute'}}><symbol id="gx-flag" viewBox="40 54 120 92"><path fill="currentColor" d="m96.482 54.107-24.705 0.0063h-24.703l-0.01013 3.5273-0.01013 3.5293-3.5273 0.01013-3.5273 0.0076v84.703h14.111v-7.0742l14.119 0.0101 14.121 0.008 0.01013 3.5273 0.01013 3.5293h49.41v-7.0742h14.111v-7.0371h14.111v-7.0742h-7.0742v-7.08h-7.0371v-7.0371h7.0371v-7.0742h-7.0371v-14.115h7.0371v-7.037h7.0742v-7.0742h-14.109v-7.0742h14.111v-14.11h-28.22l-0.0101 3.5273-0.0101 3.5273-17.639 0.01013-17.639 0.0076zm-35.296 14.118h7.0352v14.148l-7.0449-0.0114-7.0469-0.0076-0.01013-3.5273-0.0076-3.5293h7.0742zm49.406 0h7.0351v7.0742h7.0742v7.0742h-14.109zm-38.807 10.594 17.629 0.0076 17.639 0.0076 0.0114 3.5293 0.008 3.5273h7.0371v21.184h-7.0371l-0.0101 7.0469-0.0101 7.0469-3.5273 0.0101-3.5273 0.008v-7.0742h-7.072v7.0742h-7.0371v-7.0742h-7.075v7.0742h-7.0371v-14.107l-3.5195-0.006-3.5273-0.0137-0.01013-10.582-0.0076-10.584h7.0742zm7.0312 10.592v14.109h7.0742v-14.11h-3.5371zm14.109 0v14.109h7.0742v-14.11h-3.534zm-38.812 21.179h14.109v14.111h-7.0352l-0.01013-3.5293-0.01013-3.5274-3.5273-0.0101-3.5273-0.008zm63.533 0h7.0566v7.0352l-3.5273 0.0101-3.5293 0.0101-0.0101 3.5273-0.008 3.5274h-7.0371v-14.107z"></path></symbol></svg>


<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Store</p>
  <h1 className="page-h1">Fly the Colors.</h1>
  <p className="lede">Branded apparel and gear in three lines — Sitewear, Streetwear, and Performancewear. The same stuff our crew actually wears on site, held to the same standard as the work. Checkout runs on GVTEWAY; order by email while the line ships.</p>
  <div className="lines">
    <span className="tag tag-neutral">Sitewear</span>
    <span className="tag tag-neutral">Streetwear</span>
    <span className="tag tag-neutral">Performancewear</span>
    <Link href="/contact" className="tag tag-outline" style={{color: 'inherit', textDecoration: 'none', minHeight: '24px'}}>Wholesale &amp; custom crew kit</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <div className="grid4 prod-grid">
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Site Coverall" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Sitewear · GX-SW-AP-001</p><h2>Site Coverall</h2>
      <div className="row"><span className="price">$148</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Site%20Coverall">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Hi-Vis Crew Tee" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Sitewear · GX-SW-AP-002</p><h2>Hi-Vis Crew Tee</h2>
      <div className="row"><span className="price">$44</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Hi-Vis%20Crew%20Tee">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Skull Flag Tee" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AP-001</p><h2>Skull Flag Tee</h2>
      <div className="row"><span className="price">$38</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Skull%20Flag%20Tee">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Reef Night Hoodie" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AP-002</p><h2>Reef Night Hoodie</h2>
      <div className="row"><span className="price">$74</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Reef%20Night%20Hoodie">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Voyage Dad Cap" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AP-004</p><h2>Voyage Dad Cap</h2>
      <div className="row"><span className="price">$32</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Voyage%20Dad%20Cap">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Performance Tee" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Performance · GX-PW-AP-001</p><h2>Performance Tee</h2>
      <div className="row"><span className="price">$42</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Performance%20Tee">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Track Jacket" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Performance · GX-PW-AP-003</p><h2>Track Jacket</h2>
      <div className="row"><span className="price">$88</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Track%20Jacket">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><svg className="ph-mark" role="img" aria-label="GHXSTSHIP skull mark on the Enamel Skull Pin" focusable="false"><use href="#gx-flag"></use></svg></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AC-002</p><h2>Enamel Skull Pin</h2>
      <div className="row"><span className="price">$14</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Enamel%20Skull%20Pin">Order</a></div></div>
    </article>
  </div>
  <p className="store-note text-muted">Secure checkout powered by GVTEWAY · Complimentary crew shipping over $100 · Product photography drops in as the line ships</p>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Crew Kit at Scale</p>
  <h2>Outfit the <span className="a">Whole Crew.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Wholesale and custom crew kit run through the same team that runs your show. Tell us the headcount and the dates.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Store","name":"The GHXSTSHIP Store","url":"https://ghxstship.tours/store","description":"Branded apparel, prints, and gear from GHXSTSHIP.","brand":{"@type":"Brand","name":"GHXSTSHIP"}}` }} />
    </>
  );
}
