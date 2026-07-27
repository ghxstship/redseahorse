import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story",
  description: "GHXSTSHIP is a professional services firm for live and experiential projects \u2014 experiential design and production, venue and site operations, tour and talent management, and technology and systems implementation \u2014 in Miami, Las Vegas, Chicago, New York, and Los Angeles.",
  keywords: ["about GHXSTSHIP", "experiential production company", "experiential design and production", "venue and site operations", "tour and talent management", "technology and systems implementation"],
  alternates: { canonical: "https://ghxstship.tours/about" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .stats-in { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 28px; }
  @media (max-width: 720px) { .stats-in { grid-template-columns: repeat(2, 1fr); } }
  .story-fig { aspect-ratio: 4 / 3; overflow: hidden; border: 1px solid var(--color-divider); }
  .story-fig img { width: 100%; height: 100%; object-fit: cover; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">The Company</p>
  <h1 className="page-h1">We Build the Whole Thing.</h1>
  <p className="lede">GHXSTSHIP is a professional services firm for live and experiential projects, headquartered in Miami, with offices in Las Vegas, Chicago, New York, and Los Angeles. We deliver four services, Experiential Design &amp; Production, Venue &amp; Site Operations, Tour &amp; Talent Management, and Technology &amp; Systems Implementation, as one team you can hold accountable for scope, schedule, budget, crew, and technology, from the first line to the night it opens.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad"><div className="split2">
  <figure className="story-fig grayscale">
    <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80&auto=format&fit=crop" alt="Crowd at a live event under production lighting" width="900" height="675"/>
  </figure>
  <div>
    <p className="kicker">Beyond the Scenes</p>
    <h2 className="sec-h2-sm">One Accountable Partner.</h2>
    <p className="lede">You're not running an event, you're building a world that exists for one weekend and strikes by morning. GHXSTSHIP runs the whole thing with you, one partner who owns scope, schedule, budget, crew, and the technology, instead of six vendors who blame each other when something slips.</p>
    <p style={{marginTop: '16px'}}><Link href="/services/experiential-design-production" className="btn btn-ghost">Explore the services →</Link></p>
  </div>
</div></section>

<section className="band"><div className="wrap sec-pad">
  <p className="kicker">How We're Built</p>
  <h2 className="sec-h2">Four Disciplines. One Team.</h2>
  <p className="lede">Four services run by one team: we design and produce the experience, operate the venue and the site, manage the tour and the talent, and implement the technology. Different crews doing each, held to the same standard.</p>
  <div className="grid4" style={{marginTop: '28px'}}>
    <article className="svc-card"><div className="bar"></div><p className="role">The Experiential Producer</p><h3>Experiential Design &amp; Production</h3><p>We design and build the experience: concept, scope, schedule, budget, fabrication, staging, and the finish, owned end to end.</p><Link href="/services/experiential-design-production" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Operations Director</p><h3>Venue &amp; Site Operations</h3><p>We run the room and the ground: programming, bookings, logistics, staffing, safety, facility and vendor operations, clockwork at any scale.</p><Link href="/services/venue-site-operations" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Tour Manager</p><h3>Tour &amp; Talent Management</h3><p>We move the show and the people in it: routing, advancing, artist relations, travel, settlement, and the run of show, city after city.</p><Link href="/services/tour-talent-management" className="more">Explore the service →</Link></article>
    <article className="svc-card"><div className="bar"></div><p className="role">The Production OS</p><h3>Technology &amp; Systems Implementation</h3><p>We give the team its instruments: ATLVS, COMPVSS, GVTEWAY &amp; LEG3ND, the console, the field app, the public interface, and the knowledge layer, plus the show technology we specify and install.</p><Link href="/services/technology-systems-implementation" className="more">Explore the service →</Link></article>
  </div>
</div></section>

<section className="wrap sec-pad">
  <p className="kicker">The Track Record</p>
  <h2 className="sec-h2">The Receipts.</h2>
  <div className="stats-in">
    <div className="stat"><div className="v">14+</div><div className="k">Years</div></div>
    <div className="stat"><div className="v">250+</div><div className="k">Experiences</div></div>
    <div className="stat"><div className="v">5M+</div><div className="k">Memories</div></div>
    <div className="stat"><div className="v">5</div><div className="k">Offices</div></div>
  </div>
</section>

<section className="band-dark close-cta"><div className="wrap">
  <p className="kicker">Ready When You Are</p>
  <h2>Let's Build <span className="a">Something.</span></h2>
  <p className="lede" style={{marginInline: 'auto'}}>Tell us what you're building. We scope it, crew it, run the nine phases, and go live, on time and on budget.</p>
  <div className="cta-row" style={{justifyContent: 'center', marginTop: '22px'}}>
    <Link href="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
    <Link href="/work" className="btn btn-secondary btn-lg">See the Work</Link>
  </div>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"AboutPage","name":"The Story — GHXSTSHIP","url":"https://ghxstship.tours/about","description":"GHXSTSHIP is a professional services firm for live and experiential projects: experiential design and production, venue and site operations, tour and talent management, and technology and systems implementation."}` }} />
    </>
  );
}
