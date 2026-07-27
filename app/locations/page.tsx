import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description: "GHXSTSHIP is an experiential production company with primary offices in Miami HQ, Chicago, Los Angeles, and New York City, and satellite offices in Nashville, Denver, Las Vegas, and Phoenix \u2014 producing festivals, brand activations, and immersive experiences nationwide.",
  keywords: ["GHXSTSHIP locations", "experiential production Miami", "event production Las Vegas", "event production Chicago", "event production New York", "event production Los Angeles"],
  alternates: { canonical: "https://ghxstship.tours/locations" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .loc { border: 1px solid var(--color-divider); background: var(--color-bg); padding: 24px; display: flex; flex-direction: column; gap: 8px; }
  .loc .tag { align-self: flex-start; }
  .loc h2 { font-size: clamp(24px, 2.6vw, 32px); line-height: 1; margin: 4px 0 2px; }
  .loc p { font-size: 0.867rem; line-height: 1.6; color: color-mix(in srgb, var(--color-text) 72%, transparent); margin: 0; flex: none; }
  .loc .area { font-size: 0.733rem; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin-top: auto; padding-top: 10px; flex: none; }
  .loc .mail { font-size: 0.867rem; font-weight: 600; text-decoration: none; margin-top: 2px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Locations</p>
  <h1 className="page-h1">Eight Cities. One Team.</h1>
  <p className="lede">GHXSTSHIP produces experiential events nationwide from eight locations. Four primary offices carry full production, operations, and technology teams, headquartered in Miami. Four satellite offices put crew and coverage in the markets that run hot. Someone local in the room, the same standard everywhere.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}>
  <p className="kicker">Primary Offices</p>
  <h2 className="sec-h2-sm">Full Teams on the Ground.</h2>
  <p className="lede">Production, operations, and technology staffed in market, with the standard held the same in all four.</p>
  <div className="grid2" style={{marginTop: 'clamp(24px,3vw,36px)'}}>
    <article className="loc"><span className="tag tag-accent">Headquarters</span><h2>Miami</h2><p>Our headquarters. The base for experiential production across the Southeast, Latin America, and the Caribbean, and home to festivals, immersive experiences, and brand activations in one of the world's fastest-growing event markets.</p><p className="area">Serving Miami · Southeast US · LATAM &amp; Caribbean</p><a className="mail" href="mailto:miami@ghxstship.pro">miami@ghxstship.pro</a></article>
    <article className="loc"><span className="tag tag-outline">Primary Office</span><h2>Chicago</h2><p>Our Midwest base, festival, corporate, and live-music production across the central US.</p><p className="area">Serving Chicago · Midwest US</p><a className="mail" href="mailto:chicago@ghxstship.pro">chicago@ghxstship.pro</a></article>
    <article className="loc"><span className="tag tag-outline">Primary Office</span><h2>Los Angeles</h2><p>Our West Coast crew, entertainment, product launches, TV, film &amp; broadcast, and motorsports production.</p><p className="area">Serving LA · West Coast US</p><a className="mail" href="mailto:losangeles@ghxstship.pro">losangeles@ghxstship.pro</a></article>
    <article className="loc"><span className="tag tag-outline">Primary Office</span><h2>New York City</h2><p>Our Northeast crew, producing brand activations, launches, and immersive experiences across the country's most demanding event market.</p><p className="area">Serving NYC · Northeast US</p><a className="mail" href="mailto:newyork@ghxstship.pro">newyork@ghxstship.pro</a></article>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Satellite Offices</p>
  <h2 className="sec-h2-sm">Coverage Where the Work Runs.</h2>
  <p className="lede">Crew and coverage in four more markets, run by the nearest primary office and held to the same standard. Reach any of them through the studio.</p>
  <div className="grid2" style={{marginTop: 'clamp(24px,3vw,36px)'}}>
    <article className="loc"><span className="tag tag-neutral">Satellite</span><h2>Nashville</h2><p>Our Mid-South crew, touring and live-music production in the market that books more of it than anywhere else.</p><p className="area">Serving Nashville · Mid-South US</p></article>
    <article className="loc"><span className="tag tag-neutral">Satellite</span><h2>Denver</h2><p>Our Mountain West crew, outdoor festival and destination-event production at altitude.</p><p className="area">Serving Denver · Mountain West US</p></article>
    <article className="loc"><span className="tag tag-neutral">Satellite</span><h2>Las Vegas</h2><p>Our Las Vegas crew, festival and large-scale live event production in one of the busiest event markets in the country.</p><p className="area">Serving Las Vegas · Southwest US</p></article>
    <article className="loc"><span className="tag tag-neutral">Satellite</span><h2>Phoenix</h2><p>Our Southwest crew, sporting events, brand activations, and cool-season production across the desert markets.</p><p className="area">Serving Phoenix · Southwest US</p></article>
  </div>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build in Your <span className="a">City.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us where it's happening. There's a GHXSTSHIP office within reach, and one team behind all eight.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/destinations" className="btn btn-secondary btn-lg">See the Industries</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/","department":[{"@type":"LocalBusiness","name":"GHXSTSHIP Miami (Headquarters)","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"},"areaServed":"Southeast US, Latin America & Caribbean","email":"miami@ghxstship.pro"},{"@type":"LocalBusiness","name":"GHXSTSHIP Chicago","address":{"@type":"PostalAddress","addressLocality":"Chicago","addressRegion":"IL","addressCountry":"US"},"areaServed":"Midwest US","email":"chicago@ghxstship.pro"},{"@type":"LocalBusiness","name":"GHXSTSHIP Los Angeles","address":{"@type":"PostalAddress","addressLocality":"Los Angeles","addressRegion":"CA","addressCountry":"US"},"areaServed":"West Coast US","email":"losangeles@ghxstship.pro"},{"@type":"LocalBusiness","name":"GHXSTSHIP New York City","address":{"@type":"PostalAddress","addressLocality":"New York","addressRegion":"NY","addressCountry":"US"},"areaServed":"Northeast US","email":"newyork@ghxstship.pro"},{"@type":"LocalBusiness","name":"GHXSTSHIP Nashville","address":{"@type":"PostalAddress","addressLocality":"Nashville","addressRegion":"TN","addressCountry":"US"},"areaServed":"Mid-South US"},{"@type":"LocalBusiness","name":"GHXSTSHIP Denver","address":{"@type":"PostalAddress","addressLocality":"Denver","addressRegion":"CO","addressCountry":"US"},"areaServed":"Mountain West US"},{"@type":"LocalBusiness","name":"GHXSTSHIP Las Vegas","address":{"@type":"PostalAddress","addressLocality":"Las Vegas","addressRegion":"NV","addressCountry":"US"},"areaServed":"Southwest US"},{"@type":"LocalBusiness","name":"GHXSTSHIP Phoenix","address":{"@type":"PostalAddress","addressLocality":"Phoenix","addressRegion":"AZ","addressCountry":"US"},"areaServed":"Southwest US"}]}` }} />
    </>
  );
}
