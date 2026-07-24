import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Manager",
  description: "Production Manager role at GHXSTSHIP \u2014 own on-site load-in, build, crew calls, and the day-of standard for experiential and entertainment productions. Miami, full-time.",
  keywords: ["production manager job", "live event production manager", "festival production jobs", "experiential production careers", "Miami event production jobs"],
  alternates: { canonical: "https://ghxstship.tours/careers/role" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  /* page-specific layout — components come from modernist.css */
  .tag-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 0 0 14px; }
  .jd { display: grid; grid-template-columns: 1.6fr 0.8fr; gap: clamp(28px, 4vw, 56px); align-items: start; }
  @media (max-width: 960px) { .jd { grid-template-columns: 1fr; } }
  .jd-prose h2 { font-size: 20px; margin: 30px 0 10px; }
  .jd-prose h2:first-child { margin-top: 0; }
  .jd-prose p { line-height: 1.7; color: color-mix(in srgb, var(--color-text) 82%, transparent); max-width: 68ch; }
  .jd-prose ul { margin: 0 0 16px; padding-left: 20px; }
  .jd-prose li { margin-bottom: 6px; line-height: 1.65; color: color-mix(in srgb, var(--color-text) 78%, transparent); }
  .jd-meta { border: 1px solid var(--color-divider); background: var(--color-surface); padding: 20px; position: sticky; top: 96px; }
  .jd-meta .r { display: flex; justify-content: space-between; gap: 12px; padding: 9px 0; border-bottom: 1px solid var(--color-divider); font-size: 13px; }
  .jd-meta .r:last-of-type { border-bottom: 0; }
  .jd-meta .k { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; color: color-mix(in srgb, var(--color-text) 55%, transparent); }
  .jd-meta .v { font-weight: 600; text-align: right; }
  .cta-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
` }} />
      


<main id="main">

<section className="wrap" style={{paddingBlock: 'clamp(36px,5vw,64px) 0'}}>
  <p className="kicker">Careers · Open Role</p>
  <div className="tag-row"><span className="tag tag-neutral">Production</span><span className="tag tag-outline">Full-time</span><span className="tag tag-neutral">Miami, FL</span></div>
  <h1 className="page-h1">Production Manager.</h1>
  <p className="lede">The Production Manager runs the floor build and the technical package on site — owning load-in, the crew call, and the day-of standard for festivals, activations, and live events.</p>
  <hr className="hr" style={{marginTop: 'clamp(24px,4vw,40px)'}}/>
</section>

<section className="wrap sec-pad-sm"><div className="jd">
  <div className="jd-prose">
    <h2>About the Role</h2>
    <p>As Production Manager you turn the plan into a built environment. You own the on-site build from load-in to strike: sequencing crew, vendors, and freight, holding the schedule, and keeping the show safe and on standard. You report to the Production Director and work alongside the Project Manager and Technical Director.</p>
    <h2>What You'll Do</h2>
    <ul>
      <li>Own on-site load-in, build, and strike for assigned productions</li>
      <li>Sequence crew calls, freight, and vendor deliveries against the schedule</li>
      <li>Run the floor day-of, holding the standard and solving problems in real time, with safety first</li>
      <li>Manage the technical package with the Technical Director</li>
      <li>Track labor, hours, and on-site spend against the budget</li>
      <li>Close out each build with reconciliation and a debrief</li>
    </ul>
    <h2>What You Bring</h2>
    <ul>
      <li>3+ years in live event, festival, or experiential production</li>
      <li>Fluency with load-in logistics, rigging basics, and crew coordination</li>
      <li>Calm under pressure; relentless on safety and the standard</li>
      <li>Comfort with production software and shared schedules</li>
      <li>Willingness to travel and work nights, weekends, and show days</li>
    </ul>
    <h2>Nice to Have</h2>
    <ul>
      <li>OSHA or safety certification</li>
      <li>Experience across multiple verticals: festivals, activations, sporting</li>
      <li>A network of trusted freelance crew</li>
    </ul>
    <h2>About GHXSTSHIP</h2>
    <p>GHXSTSHIP is a professional services firm for live and experiential projects — experiential design and production, venue and site operations, tour and talent management, and technology and systems implementation — headquartered in Miami, with crews in Las Vegas, Chicago, New York, and Los Angeles. We build festivals, tours, activations, immersive worlds, and sporting events end to end.</p>
    <div className="cta-row">
      <Link href="/careers/apply" className="btn btn-primary btn-lg">Apply for This Role</Link>
      <Link href="/careers" className="btn btn-secondary btn-lg">All Open Roles</Link>
    </div>
  </div>
  <aside aria-label="Role details"><div className="jd-meta">
    <div className="r"><span className="k">Department</span><span className="v">Production</span></div>
    <div className="r"><span className="k">Type</span><span className="v">Full-time</span></div>
    <div className="r"><span className="k">Location</span><span className="v">Miami, FL</span></div>
    <div className="r"><span className="k">Travel</span><span className="v">Frequent</span></div>
    <div className="r"><span className="k">Reports To</span><span className="v">Production Director</span></div>
    <Link href="/careers/apply" className="btn btn-primary btn-block" style={{justifyContent: 'center', textAlign: 'center', marginTop: '16px'}}>Apply Now</Link>
  </div></aside>
</div></section>

</main>



      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"JobPosting","title":"Production Manager","description":"Own on-site load-in, build, crew calls, and the day-of standard for experiential and entertainment productions.","datePosted":"2026-06-06","employmentType":"FULL_TIME","hiringOrganization":{"@type":"Organization","name":"GHXSTSHIP","sameAs":"https://ghxstship.tours/"},"jobLocation":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Miami","addressRegion":"FL","addressCountry":"US"}},"industry":"Experiential Production"}` }} />
    </>
  );
}
