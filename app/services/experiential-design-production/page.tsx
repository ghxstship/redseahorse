import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiential Design & Production",
  description: "GHXSTSHIP Experiential Design &amp; Production builds branded environments end to end: concept, creative development, spatial design, scenic fabrication, technical production, talent, and an accountable producer.",
  keywords: ["experiential design and production", "experiential production company", "branded environments", "scenic fabrication", "spatial design", "show design", "technical production", "event general contractor"],
  alternates: { canonical: "https://ghxstship.tours/services/experiential-design-production" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .svc-fig { aspect-ratio: 4 / 5; overflow: hidden; border: 1px solid var(--color-divider); }
  .svc-fig img { width: 100%; height: 100%; object-fit: cover; }
  .role-tag { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); margin: 10px 0 0; }
  .aud-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .more-svc a.row-line { text-decoration: none; color: inherit; }
  .more-svc .arrow { color: var(--color-accent-700); font-weight: 600; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Services · The General Contractor</p>
  <h1 className="page-h1">Experiential Design &amp; Production.</h1>
  <p className="lede">Experiential design &amp; production is the build. You bring an idea for a branded environment people walk into, and we make it real: concept and creative development, show and spatial design, scenic fabrication, staging and rigging, audio, video, and lighting, the performers and crew who run it, and a producer who owns the budget and the schedule from the first call to load-out. We are the general contractor of the experience.</p>
  <div className="cta-row" style={{marginTop: '20px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/services" className="btn btn-secondary btn-lg">All Services</Link>
  </div>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad" style={{paddingTop: 'clamp(28px,4vw,48px)'}}><div className="split2">
  <figure className="svc-fig grayscale sticky-fig">
    <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" alt="Crowd inside a built experiential environment under production lighting" width="720" height="900"/>
  </figure>
  <div>
    <p className="kicker">What We Build</p>
    <h2 className="sec-h2-sm">The Whole Build, in One Crew.</h2>
    <p className="lede">We run experiential design &amp; production on XPMS 2.5, our Experiential Production Management Standard. Picture a grid: ten department classes down one side, nine gated production phases across the top — the ATLVS Coordinate Matrix, 90 coordinates in all. Every deliverable lives at one address, a class and a phase, so a render from Creative and the steel Production cuts from it never drift apart. Here are the classes this service turns on.</p>
    <div style={{marginTop: '20px'}}>
      <div className="row-line"><span className="row-title">Creative</span><span className="row-sub">Concept, creative direction, creative development, content and show design</span></div>
      <div className="row-line"><span className="row-title">Design</span><span className="row-sub">Experiential, spatial, and scenic design, from first sketch to build drawings</span></div>
      <div className="row-line"><span className="row-title">Production</span><span className="row-sub">Scenic fabrication, staging and rigging, technical production for audio, video, and lighting, plus production management and budgets</span></div>
      <div className="row-line"><span className="row-title">Talent</span><span className="row-sub">Performers, specialty acts, and the crew who build and run the show</span></div>
      <div className="row-line"><span className="row-title">Experience</span><span className="row-sub">The audience journey, moment design, and how the world reads from the floor</span></div>
      <div className="row-line"><span className="row-title">Executive</span><span className="row-sub">The accountable producer who owns the budget and the schedule end to end</span></div>
    </div>
  </div>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">The Process</p>
  <h2 className="sec-h2">Your Build, Nine Phases.</h2>
  <p className="lede">Experiential design &amp; production walks all nine phases, from the first Discover call through Close-out and the final invoice. In Amplify, we lead the capture and coordinate content delivery — media, broadcast, and the post-event campaign — before the books close.</p>
  <div className="phases">
    <div className="phase done"><div className="dot">1</div><div className="nm">Discover</div></div>
    <div className="phase done"><div className="dot">2</div><div className="nm">Design</div></div>
    <div className="phase done"><div className="dot">3</div><div className="nm">Advance</div></div>
    <div className="phase done"><div className="dot">4</div><div className="nm">Procure</div></div>
    <div className="phase done"><div className="dot">5</div><div className="nm">Build</div></div>
    <div className="phase done"><div className="dot">6</div><div className="nm">Install</div></div>
    <div className="phase done"><div className="dot">7</div><div className="nm">Operate</div></div>
    <div className="phase done"><div className="dot">8</div><div className="nm">Amplify</div></div>
    <div className="phase done"><div className="dot">9</div><div className="nm">Close</div></div>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/course" className="btn btn-ghost">Walk the full course →</Link></p>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Who We Build For</p>
  <h2 className="sec-h2">Built for the People Who Build Experiences.</h2>
  <p className="lede">Experiential design &amp; production is for the people on the hook for the room: the brand whose name is on the door, the agency that pitched the idea, the promoter putting it on, and the creative and production directors who have to make it stand up on site.</p>
  <div className="aud-tags">
    <span className="tag tag-neutral">Brands</span><span className="tag tag-neutral">Agencies</span>
    <span className="tag tag-neutral">Promoters</span><span className="tag tag-neutral">Creative Directors</span>
    <span className="tag tag-neutral">Production Directors</span>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Selected Work</p>
  <h2 className="sec-h2">Experiences We've Built.</h2>
  <p className="lede">A few of the worlds we've designed, built, and run, from a sold-out immersive supper club to brand takeovers on the festival floor.</p>
  <div className="more-svc" style={{marginTop: '16px'}}>
    <Link href="/work/salvage-city-supper-club" className="row-line"><span className="row-title">Salvage City Supper Club</span><span className="row-sub">Immersive Experience · Club Space, Miami</span><span className="arrow">→</span></Link>
    <Link href="/work" className="row-line"><span className="row-title">Red Bull Unforeseen Motel</span><span className="row-sub">Brand Activation · Built &amp; Run</span><span className="arrow">→</span></Link>
    <Link href="/work" className="row-line"><span className="row-title">Polymarket Grocery Store</span><span className="row-sub">Brand Activation · Built &amp; Run</span><span className="arrow">→</span></Link>
  </div>
  <p style={{marginTop: '24px'}}><Link href="/work" className="btn btn-ghost">See the work →</Link></p>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">Why GHXSTSHIP</p>
  <h2 className="sec-h2">The Difference.</h2>
  <p className="lede">Most shops design the thing and then hand you a list of vendors to chase. We hold the concept and the fabrication shop and the crew and the producer under one roof, on XPMS, so the person who drew it is talking to the person cutting it. We build the technology that runs it too.</p>
  <div style={{marginTop: '20px'}}>
    <div className="row-line"><span className="row-title">One Accountable Crew</span><span className="row-sub">All 9 phases under one producer, so you're never chasing a vendor relay</span></div>
    <div className="row-line"><span className="row-title">We Design and We Fabricate</span><span className="row-sub">Concept, spatial design, scenic, staging, and rigging built by the crew who install it</span></div>
    <div className="row-line"><span className="row-title">We Build the Tech</span><span className="row-sub">ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, in-house</span></div>
  </div>
</section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">Answers</p>
  <h2 className="sec-h2">Experiential Design &amp; Production FAQ.</h2>
  <div style={{marginTop: '20px', borderTop: '1px solid var(--color-divider)'}}>
    <details className="faq-item" open><summary className="faq-q">What does GHXSTSHIP's experiential design and production cover?</summary><div className="faq-a">The whole build of a branded environment: concept and creative development, creative direction and show design, experiential, spatial, and scenic design, scenic fabrication, staging and rigging, technical production for audio, video, and lighting, performers and crew, the audience experience, and a producer who owns the budget and the schedule from the first call to load-out.</div></details>
    <details className="faq-item"><summary className="faq-q">Do you fabricate and build in-house?</summary><div className="faq-a">Yes. Scenic fabrication, staging, rigging, and technical production sit inside our Production class, so the people who design the build are the same crew accountable for installing and running it on site.</div></details>
    <details className="faq-item"><summary className="faq-q">How does XPMS work?</summary><div className="faq-a">XPMS 2.5 is our Experiential Production Management Standard: nine gated phases — Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close — crossed with the ATLVS Coordinate Matrix, where every work item resolves to one of 90 coordinates, ten department classes across nine phases. Every deliverable lives at one address, a class and a phase, so nothing falls between Creative finishing a render and Production cutting steel. It runs on ATLVS.</div></details>
    <details className="faq-item"><summary className="faq-q">Who runs point on the project?</summary><div className="faq-a">A producer from our Executive class. They own the budget and the schedule end to end, and they are your single accountable contact from Discover through Close.</div></details>
  </div>
</div></section>

<section className="wrap sec-pad-sm more-svc">
  <p className="kicker">More Services</p>
  <h2 style={{fontSize: 'clamp(24px,3vw,36px)'}}>The Other Disciplines.</h2>
  <div style={{marginTop: '12px'}}>
    <Link href="/services/venue-site-operations" className="row-line"><span className="row-title">Venue &amp; Site Operations</span><span className="row-sub">The Foreman</span><span className="arrow">→</span></Link>
    <Link href="/services/tour-talent-management" className="row-line"><span className="row-title">Tour &amp; Talent Management</span><span className="row-sub">The Road Manager</span><span className="arrow">→</span></Link>
    <Link href="/services/technology-systems-implementation" className="row-line"><span className="row-title">Technology &amp; Systems Implementation</span><span className="row-sub">The Procore</span><span className="arrow">→</span></Link>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Build Your <span className="a">Experience.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Bring the idea. We design it, build it, crew it, and run it, with one producer accountable for all of it.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/destinations/immersive-experiences" className="btn btn-secondary btn-lg">Immersive Experiences</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Service","name":"Experiential Design and Production","serviceType":"Experiential design and production","provider":{"@type":"Organization","name":"GHXSTSHIP","url":"https://ghxstship.tours/"},"areaServed":"Worldwide","description":"End-to-end experiential design and production: concept and creative development, show and spatial design, scenic fabrication, staging and rigging, technical production for audio, video, and lighting, performers and production crew, audience experience design, and an accountable producer who owns the budget and the schedule across the nine-phase XPMS 2.5 lifecycle.","audience":{"@type":"Audience","audienceType":"Brands, agencies, promoters, and creative and production directors"},"url":"https://ghxstship.tours/services/experiential-design-production"}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ghxstship.tours/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://ghxstship.tours/services"},{"@type":"ListItem","position":3,"name":"Experiential Design and Production","item":"https://ghxstship.tours/services/experiential-design-production"}]}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What does GHXSTSHIP's experiential design and production cover?","acceptedAnswer":{"@type":"Answer","text":"The whole build of a branded environment: concept and creative development, creative direction and show design, experiential, spatial, and scenic design, scenic fabrication, staging and rigging, technical production for audio, video, and lighting, performers and crew, the audience experience, and an accountable producer who owns the budget and the schedule from first call to load-out."}},{"@type":"Question","name":"Do you fabricate and build in-house?","acceptedAnswer":{"@type":"Answer","text":"Yes. Scenic fabrication, staging, rigging, and technical production sit inside our Production class, so the people who design the build are the same crew accountable for installing and running it on site."}},{"@type":"Question","name":"How does XPMS work?","acceptedAnswer":{"@type":"Answer","text":"XPMS 2.5 is our Experiential Production Management Standard: nine gated phases — Discover, Design, Advance, Procure, Build, Install, Operate, Amplify, and Close — crossed with the ATLVS Coordinate Matrix, where every work item resolves to one of 90 coordinates, ten department classes across nine phases. Every deliverable lives at one address, a class and a phase, so nothing falls between Creative finishing a render and Production cutting steel. It runs on ATLVS."}},{"@type":"Question","name":"Who runs point on the project?","acceptedAnswer":{"@type":"Answer","text":"A producer from our Executive class. They own the budget and the schedule end to end, and they are your single accountable contact from Discover through Close."}}]}` }} />
    </>
  );
}
