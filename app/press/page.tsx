import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "Press and media coverage of GHXSTSHIP projects \u2014 49 articles, galleries and features across festival production, brand activations, venue operations and event technology, catalogued by project.",
  keywords: ["GHXSTSHIP press", "event production press coverage", "experiential production media", "case study coverage", "festival production press"],
  alternates: { canonical: "https://ghxstship.tours/press" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  .press-rows { margin-top: clamp(16px, 2vw, 22px); }
  .press-rows .row-line { text-decoration: none; color: inherit; }
  .press-rows .row-line:hover .row-title { color: var(--color-accent-700); }
  .note { max-width: 66ch; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Press &amp; Media</p>
  <h1 className="page-h1">What Was Written.</h1>
  <p className="lede">Independent coverage of the projects we have worked on — 49 articles, features and galleries, catalogued by project. The public record of what was built.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Premium Hospitality</p>
  <h2 className="sec-h2-sm">Salvage City Supper Club.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>EDC Las Vegas · Las Vegas · 2025–26 — <Link href="/work/salvage-city-supper-club">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://lasvegas.electricdaisycarnival.com/tickets/salvage-city/" target="_blank" rel="noopener"><span className="row-title">Salvage City Supper Club — EDC Las Vegas</span><span className="row-sub">Insomniac / EDC Las Vegas</span><span className="row-sub">2026</span></a>
    <a className="row-line" href="https://gayety.com/salvage-city-edc-immersive-dinner-show" target="_blank" rel="noopener"><span className="row-title">Salvage City: EDC&#x27;s Decadent Post-Apocalyptic Dinner Show</span><span className="row-sub">Gayety</span><span className="row-sub">2025</span></a>
    <a className="row-line" href="https://whatnow.com/las-vegas/restaurants/salvage-city-supper-club-returns-to-edc-las-vegas/" target="_blank" rel="noopener"><span className="row-title">Salvage City Supper Club Returns to EDC Las Vegas</span><span className="row-sub">What Now Las Vegas</span><span className="row-sub">2025</span></a>
    <a className="row-line" href="https://www.salvagecitysupperclub.com/" target="_blank" rel="noopener"><span className="row-title">Salvage City Supper Club</span><span className="row-sub">Salvage City Supper Club</span><span className="row-sub">current</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Technology Implementation</p>
  <h2 className="sec-h2-sm">L-Acoustics DJ.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>III Points · Miami · 2025–present — <Link href="/work/l-acoustics-dj">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://fohonline.com/featured/l-acoustics-dj-makes-its-us-festival-debut-at-miamis-iii-points-festival/" target="_blank" rel="noopener"><span className="row-title">L-Acoustics DJ Deployed at Miami&#x27;s III Points Festival</span><span className="row-sub">FOH (Front of House)</span><span className="row-sub">2026</span></a>
    <a className="row-line" href="https://www.mixonline.com/the-wire/l-acoustics-dj-makes-its-us-festival-debut-at-miamis-iii-points" target="_blank" rel="noopener"><span className="row-title">L-Acoustics DJ Makes Its US Festival Debut at Miami&#x27;s III Points</span><span className="row-sub">Mix</span><span className="row-sub">2026</span></a>
    <a className="row-line" href="https://www.avnation.tv/2026/03/06/l-acoustics-dj-makes-its-us-festival-debut-at-miamis-iii-points/" target="_blank" rel="noopener"><span className="row-title">L-Acoustics DJ Makes U.S. Festival Debut at Miami&#x27;s III Points with Immersive Spatial Audio</span><span className="row-sub">AVNation</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://www.l-acoustics.com/stories/live-sound-innovation-at-iii-points-festival-2025-in-miami/" target="_blank" rel="noopener"><span className="row-title">L-Acoustics DJ: Bringing Real-Time Spatial Audio to Miami&#x27;s III Points Festival Sound System</span><span className="row-sub">L-Acoustics</span><span className="row-sub">2025-10</span></a>
    <a className="row-line" href="https://www.l-acoustics.com/press-releases/l-acoustics-dj-makes-its-us-festival-debut-at-miamis-iii-points/" target="_blank" rel="noopener"><span className="row-title">L-Acoustics DJ Makes Its US Festival Debut at Miami&#x27;s III Points</span><span className="row-sub">L-Acoustics</span><span className="row-sub">2026</span></a>
    <a className="row-line" href="https://magneticmag.com/2025/12/kujo-interview/" target="_blank" rel="noopener"><span className="row-title">Kujo on Performing at III Points With L-Acoustics DJ</span><span className="row-sub">Magnetic Magazine</span><span className="row-sub">2025-12</span></a>
    <a className="row-line" href="https://www.usitt.org/news/l-acoustics-dj-makes-its-us-festival-debut-at-miamis-iii-points" target="_blank" rel="noopener"><span className="row-title">L-Acoustics DJ Makes Its US Festival Debut at Miami&#x27;s III Points</span><span className="row-sub">USITT</span><span className="row-sub">2026</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Concert &amp; Tour Production</p>
  <h2 className="sec-h2-sm">Black Coffee at the Race Track.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>Hialeah Park · Miami · 2026 — <Link href="/work/black-coffee-race-track">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://www.bizbash.com/event-production-planning/miami-music-week-2026-inside-wmc-ultra-edm-marathons-and-standout-activations" target="_blank" rel="noopener"><span className="row-title">Inside Miami Music Week 2026</span><span className="row-sub">BizBash</span><span className="row-sub">2026</span></a>
    <a className="row-line" href="https://worldredeye.com/2026/03/miami-music-week-2026-black-coffee-carlita-at-the-racetrack/" target="_blank" rel="noopener"><span className="row-title">Miami Music Week 2026: Black Coffee &amp; Carlita at the Racetrack</span><span className="row-sub">World Red Eye</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://www.miaminewtimes.com/music/black-coffee-will-turn-hialeah-race-track-into-dance-floor-40532738/" target="_blank" rel="noopener"><span className="row-title">Black Coffee Will Turn Hialeah Race Track Into Dance Floor</span><span className="row-sub">Miami New Times</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://www.timeout.com/miami/things-to-do/black-coffee-at-hialeah-racetrack" target="_blank" rel="noopener"><span className="row-title">Black Coffee at Hialeah Racetrack</span><span className="row-sub">Time Out Miami</span><span className="row-sub">2026-03</span></a>
    <a className="row-line" href="https://magneticmag.com/2026/04/miami-music-week-2026-recap/" target="_blank" rel="noopener"><span className="row-title">Miami Music Week 2026 Recap: Factory Town, WMC, Club Space + More</span><span className="row-sub">Magnetic Magazine</span><span className="row-sub">2026-04</span></a>
    <a className="row-line" href="https://www.edmtunes.com/2026/03/black-coffee-hialeah-park-racetrack-mmw/" target="_blank" rel="noopener"><span className="row-title">Black Coffee Brings Open Air Show to Historic Hialeah Racetrack for MMW</span><span className="row-sub">EDMTunes</span><span className="row-sub">2026-03</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Brand Activations</p>
  <h2 className="sec-h2-sm">The Polymarket.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>7th Avenue and Charles Street · New York City · 2026 — <Link href="/work/polymarket-free-grocery-store">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://www.newsweek.com/new-york-city-opens-first-free-grocery-store-11523713" target="_blank" rel="noopener"><span className="row-title">New York City opens first free grocery store</span><span className="row-sub">Newsweek</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.newsweek.com/new-york-city-gets-first-free-grocery-store-polymarket-11460498" target="_blank" rel="noopener"><span className="row-title">New York City gets first free grocery store</span><span className="row-sub">Newsweek</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.foxbusiness.com/markets/betting-company-polymarket-opens-nycs-first-free-grocery-store-downtown-manhattan" target="_blank" rel="noopener"><span className="row-title">Polymarket creates NYC&#x27;s first free grocery store in downtown Manhattan</span><span className="row-sub">Fox Business</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.fox5ny.com/news/polymarket-free-grocery-store-opens-nyc-heres-how-work" target="_blank" rel="noopener"><span className="row-title">Polymarket free grocery store opens in NYC — here&#x27;s how it works</span><span className="row-sub">FOX 5 New York</span><span className="row-sub">2026-02</span></a>
    <a className="row-line" href="https://www.vice.com/en/article/cryptocurrency-firm-launches-free-supermarket/" target="_blank" rel="noopener"><span className="row-title">There&#x27;s a Free Grocery Store in NYC Now. Here&#x27;s How It Works.</span><span className="row-sub">Vice</span><span className="row-sub">2026-02</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Venue &amp; Site Operations</p>
  <h2 className="sec-h2-sm">Factory Town.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>Factory Town · Miami · 2023–25 — <Link href="/work/factory-town">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://worldredeye.com/factory-town/" target="_blank" rel="noopener"><span className="row-title">Factory Town — the World Red Eye archive</span><span className="row-sub">World Red Eye</span><span className="row-sub"></span></a>
    <a className="row-line" href="https://magneticmag.com/2026/04/miami-music-week-2026-recap/" target="_blank" rel="noopener"><span className="row-title">Miami Music Week 2026 Recap: Factory Town, WMC, Club Space + More</span><span className="row-sub">Magnetic Magazine</span><span className="row-sub">2026-04</span></a>
    <a className="row-line" href="https://worldredeye.com/2024/12/factory-basel-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">GOLFOS, Carlita &amp; Ben Sterling at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2024-12</span></a>
    <a className="row-line" href="https://worldredeye.com/2024/03/dom-dolla-green-velvet-mau-p-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">Dom Dolla, Green Velvet &amp; Mau P at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2024-03</span></a>
    <a className="row-line" href="https://en.wikipedia.org/wiki/Factory_Town" target="_blank" rel="noopener"><span className="row-title">Factory Town</span><span className="row-sub">Wikipedia</span><span className="row-sub">current</span></a>
    <a className="row-line" href="https://worldredeye.com/2023/12/zhu-hayden-james-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">ZHU &amp; Hayden James at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2023-12</span></a>
    <a className="row-line" href="https://worldredeye.com/2023/12/factory-town-basel/" target="_blank" rel="noopener"><span className="row-title">Factory Town: Basel</span><span className="row-sub">World Red Eye</span><span className="row-sub">2023-12</span></a>
    <a className="row-line" href="https://worldredeye.com/2023/03/black-coffee-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">Black Coffee at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2023-03</span></a>
    <a className="row-line" href="https://worldredeye.com/2023/03/elrow-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">Elrow at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2023-03</span></a>
    <a className="row-line" href="https://worldredeye.com/2023/01/solomun-at-factory-town/" target="_blank" rel="noopener"><span className="row-title">Solomun at Factory Town</span><span className="row-sub">World Red Eye</span><span className="row-sub">2023-01</span></a>
    <a className="row-line" href="https://www.factorytown.com/" target="_blank" rel="noopener"><span className="row-title">Factory Town · Miami</span><span className="row-sub">Factory Town</span><span className="row-sub">current</span></a>
    <a className="row-line" href="https://grayarea.co/venues/factory-town-miami" target="_blank" rel="noopener"><span className="row-title">Factory Town — venue profile</span><span className="row-sub">Gray Area</span><span className="row-sub">current</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Auto &amp; Motorsports</p>
  <h2 className="sec-h2-sm">Heineken Turn 4 Nightclub.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>Formula 1 Las Vegas Grand Prix · Las Vegas · 2024 — <Link href="/work/heineken-turn-4-nightclub">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://www.bizbash.com/sporting-events/40-adrenaline-filled-event-moments-from-2024-s-formula-1-las-vegas-grand-prix" target="_blank" rel="noopener"><span className="row-title">Formula 1 Las Vegas Grand Prix 2024&#x27;s Biggest Events and Activations</span><span className="row-sub">BizBash</span><span className="row-sub">2024-11</span></a>
    <a className="row-line" href="https://www.hollywoodreporter.com/lifestyle/lifestyle-news/what-to-do-las-vegas-f1-grand-prix-best-events-2024-1236062087/" target="_blank" rel="noopener"><span className="row-title">F1 Las Vegas Grand Prix 2024: Best Ticket Deals, Parties, Events</span><span className="row-sub">The Hollywood Reporter</span><span className="row-sub">2024-11</span></a>
    <a className="row-line" href="https://www.f1lasvegasgp.com/2024/11/formula-1-heineken-silver-las-vegas-grand-prix-sets-new-standard-with-2024-race/" target="_blank" rel="noopener"><span className="row-title">Formula 1 Heineken Silver Las Vegas Grand Prix Sets New Standard With 2024 Race</span><span className="row-sub">Formula 1 Las Vegas Grand Prix</span><span className="row-sub">2024-11</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Brand Activations</p>
  <h2 className="sec-h2-sm">Red Bull Unforeseen Motel.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>III Points · Miami · 2024 — <Link href="/work/red-bull-unforeseen-motel">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://edmidentity.com/2025/10/31/red-bull-unforeseen-iii-points-festival-miami/" target="_blank" rel="noopener"><span className="row-title">Red Bull Unforeseen Put Miami&#x27;s Vibrant Dance Music Culture On Display At III Points Festival</span><span className="row-sub">EDM Identity</span><span className="row-sub">2025-10-31</span></a>
    <a className="row-line" href="https://worldredeye.com/2024/10/iii-points-2024/" target="_blank" rel="noopener"><span className="row-title">III Points 2024</span><span className="row-sub">World Red Eye</span><span className="row-sub">2024-10</span></a>
    <a className="row-line" href="https://worldredeye.com/2025/10/qa-how-iii-points-became-miamis-cultural-pulse/" target="_blank" rel="noopener"><span className="row-title">Q&amp;A: How III Points Became Miami&#x27;s Cultural Pulse</span><span className="row-sub">World Red Eye</span><span className="row-sub">2025-10</span></a>
    <a className="row-line" href="https://www.miaminewtimes.com/music/iii-points-lineup-and-set-times-15491232/" target="_blank" rel="noopener"><span className="row-title">Here Are the Set Times for III Points 2024</span><span className="row-sub">Miami New Times</span><span className="row-sub">2024-10</span></a>
    <a className="row-line" href="https://www.iiipoints.com/2024-lineup/" target="_blank" rel="noopener"><span className="row-title">III Points 2024 Lineup</span><span className="row-sub">III Points</span><span className="row-sub">2024</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm">
  <p className="kicker">Product Launch</p>
  <h2 className="sec-h2-sm">PATRÓN Cristalino x Becky G.</h2>
  <p className="lede" style={{maxWidth: '62ch'}}>Olvera Street · Los Angeles · 2024 — <Link href="/work/patron-cristalino-becky-g">read the case study →</Link></p>
  <div className="press-rows">
    <a className="row-line" href="https://wwd.com/pop-culture/culture-news/gallery/becky-g-bryan-hearns-custom-sequins-outfit-patron-photos-1236615778/" target="_blank" rel="noopener"><span className="row-title">Becky G Sparkles in Silver Sequins With Custom Look &amp; More Arrivals for Patrón Cristalino Launch</span><span className="row-sub">WWD</span><span className="row-sub">2024-09</span></a>
    <a className="row-line" href="https://www.hola.com/us/entertainment/20240916718613/becky-g-pays-tribute-to-selena-quintanilla-in-los-angeles/" target="_blank" rel="noopener"><span className="row-title">Becky G pays tribute to Selena Quintanilla in Los Angeles</span><span className="row-sub">¡HOLA! US</span><span className="row-sub">2024-09-16</span></a>
    <a className="row-line" href="https://theknockturnal.com/becky-g-lights-up-stage/" target="_blank" rel="noopener"><span className="row-title">Becky G Lights Up Stage at PATRÓN CRISTALINO Launch</span><span className="row-sub">The Knockturnal</span><span className="row-sub">2024-09</span></a>
    <a className="row-line" href="https://loopmag.co/becky-g-gabito-ballesteros-more-celebrate-the-launch-of-patron-cristalino/" target="_blank" rel="noopener"><span className="row-title">Inside The PATRÓN CRISTALINO Launch With Becky G &amp; More</span><span className="row-sub">Loop</span><span className="row-sub">2024-09</span></a>
    <a className="row-line" href="https://www.identifyla.com/thelatest/becky-g-patron-cristalino-launch" target="_blank" rel="noopener"><span className="row-title">Becky G, Gabito Ballesteros, Tito Double P Perform at Patrón Cristalino Launch</span><span className="row-sub">identify LA</span><span className="row-sub">2024-09</span></a>
    <a className="row-line" href="https://laguestlist.com/becky-g-gabito-ballesteros-tito-double-p-perform-at-patron-cristalino-launch/" target="_blank" rel="noopener"><span className="row-title">Becky G, Gabito Ballesteros, Tito Double P Perform at PATRÓN CRISTALINO Launch</span><span className="row-sub">LA Guestlist</span><span className="row-sub">2024-09</span></a>
    <a className="row-line" href="https://www.maxim.com/food-drink/patron-silver-becky-g-launch-limited-edition-tequila-bottle/" target="_blank" rel="noopener"><span className="row-title">Patrón Silver &amp; Becky G Launch Limited-Edition Tequila</span><span className="row-sub">Maxim</span><span className="row-sub">2024</span></a>
  </div>
</section>

<section className="wrap sec-pad-sm"><div className="note">
  <p className="kicker">Working Press</p>
  <h2 className="sec-h2-sm">For Editors.</h2>
  <p className="lede">Writing about a project on this page and need detail, imagery or a name to quote? Reach the studio directly and we will come back the same day.</p>
  <p style={{marginTop: '14px'}}><Link href="/contact" className="btn btn-secondary">Contact the Studio</Link></p>
</div></section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Yours <span className="a">Next.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"CollectionPage","name":"Press & Media","description":"Coverage of GHXSTSHIP projects, catalogued by project.","url":"https://ghxstship.tours/press","isPartOf":{"@type":"WebSite","name":"GHXSTSHIP","url":"https://ghxstship.tours/"}}` }} />
    </>
  );
}
