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
  .prod .media img { width: 44%; height: 44%; object-fit: contain; opacity: 0.85; }
  .prod .body { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 4px; flex: 1; }
  .prod h2 { font-size: 1.133rem; margin: 0; }
  .prod .row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: auto; padding-top: 10px; }
  .prod .price { font-family: var(--font-heading); font-weight: 800; font-size: 1.067rem; }
  .store-note { text-align: center; margin-top: clamp(24px, 4vw, 36px); font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Store</p>
  <h1 className="page-h1">Fly the Colors.</h1>
  <p className="lede">Branded apparel and gear in three lines — Sitewear, Streetwear, and Performancewear. The same stuff our crew actually wears on site, held to the same standard as the work. Checkout runs on GVTEWAY; order by email while the line ships.</p>
  <div className="lines">
    <span className="tag tag-neutral">Sitewear</span>
    <span className="tag tag-neutral">Streetwear</span>
    <span className="tag tag-neutral">Performancewear</span>
    <span className="tag tag-outline"><Link href="/contact" style={{color: 'inherit', textDecoration: 'none'}}>Wholesale &amp; custom crew kit</Link></span>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <div className="grid4 prod-grid">
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Site Coverall" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Sitewear · GX-SW-AP-001</p><h2>Site Coverall</h2>
      <div className="row"><span className="price">$148</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Site%20Coverall">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Hi-Vis Crew Tee" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Sitewear · GX-SW-AP-002</p><h2>Hi-Vis Crew Tee</h2>
      <div className="row"><span className="price">$44</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Hi-Vis%20Crew%20Tee">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Skull Flag Tee" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AP-001</p><h2>Skull Flag Tee</h2>
      <div className="row"><span className="price">$38</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Skull%20Flag%20Tee">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Reef Night Hoodie" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AP-002</p><h2>Reef Night Hoodie</h2>
      <div className="row"><span className="price">$74</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Reef%20Night%20Hoodie">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Voyage Dad Cap" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AP-004</p><h2>Voyage Dad Cap</h2>
      <div className="row"><span className="price">$32</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Voyage%20Dad%20Cap">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Performance Tee" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Performance · GX-PW-AP-001</p><h2>Performance Tee</h2>
      <div className="row"><span className="price">$42</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Performance%20Tee">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Track Jacket" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Performance · GX-PW-AP-003</p><h2>Track Jacket</h2>
      <div className="row"><span className="price">$88</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Track%20Jacket">Order</a></div></div>
    </article>
    <article className="card prod">
      <figure className="media grayscale"><img src="/assets/skull-bone.svg" alt="GHXSTSHIP skull mark on the Enamel Skull Pin" loading="lazy" width="200" height="200"/></figure>
      <div className="body"><p className="card-kicker">Streetwear · GX-ST-AC-002</p><h2>Enamel Skull Pin</h2>
      <div className="row"><span className="price">$14</span><a className="btn btn-secondary" href="mailto:hello@ghxstship.tours?subject=Store%20order%20-%20Enamel%20Skull%20Pin">Order</a></div></div>
    </article>
  </div>
  <p className="store-note text-muted">Secure checkout powered by GVTEWAY · Free crew shipping over $100 · Product photography drops in as the line ships</p>
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
