/* Shared site footer. Modernist chrome (greyscale + GHXSTSHIP Green).
 * Rendered once in the root layout. Internal links use next/link; external
 * (atlvs.pro) and social links use plain anchors with inline Lucide-style
 * SVGs (no icon-font dependency). Styles live in modernist.css. */

import Link from "next/link";
import BrandMark from "./BrandMark";

const SERVICES = [
  { href: "/services/experiential-design-production/", label: "Experiential Design & Production" },
  { href: "/services/venue-site-operations/", label: "Venue & Site Operations" },
  { href: "/services/tour-talent-management/", label: "Tour & Talent Management" },
  { href: "/services/technology-systems-engineering/", label: "Technology & Systems Engineering" },
  { href: "/destinations/", label: "Industries" },
  { href: "/pricing/", label: "Engagement Models" },
];

const COMPANY = [
  { href: "/about/", label: "About" },
  { href: "/team/", label: "Team" },
  { href: "/locations/", label: "Locations" },
  { href: "/careers/", label: "Careers" },
  { href: "/work/", label: "Work" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/press/", label: "Press & Media" },
  { href: "/store/", label: "Store" },
  { href: "/contact/", label: "Contact" },
];

const RESOURCES = [
  { href: "/resources/", label: "All Resources" },
  { href: "/resources/blog/", label: "Blog" },
  { href: "/resources/the-experiential-producer/", label: "The Experiential Producer" },
  { href: "/resources/glossary/", label: "Glossary" },
  { href: "/course/", label: "The Course" },
  { href: "/platforms/", label: "Platforms" },
];

const PLATFORMS = [
  { href: "https://atlvs.pro", label: "ATLVS" },
  { href: "https://atlvs.pro/compvss", label: "COMPVSS" },
  { href: "https://atlvs.pro/gvteway", label: "GVTEWAY" },
  { href: "https://atlvs.pro/legend", label: "LEG3ND" },
];

const SOCIAL = [
  {
    href: "https://www.instagram.com/ghxstship.tours",
    label: "Instagram",
    d: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  },
  {
    href: "https://www.linkedin.com/company/ghxstship",
    label: "LinkedIn",
    d: "M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM10 9h3v1.7A3.8 3.8 0 0 1 16.3 9C19 9 21 10.8 21 14v7h-3v-6.4c0-1.8-.8-2.8-2.2-2.8-1.5 0-2.3 1-2.3 2.8V21h-3z",
  },
  {
    href: "https://www.youtube.com/@ghxstship",
    label: "YouTube",
    d: "M22 12s0-3.3-.4-4.9a2.6 2.6 0 0 0-1.8-1.8C18.2 4.9 12 4.9 12 4.9s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7C2 8.7 2 12 2 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.9.4-4.9zM10 15.5v-7l6 3.5z",
  },
  {
    href: "https://www.tiktok.com/@ghxstship.tours",
    label: "TikTok",
    d: "M16.6 3c.4 2.1 1.8 3.5 4 3.7v3c-1.5 0-2.9-.5-4-1.3v6.2a5.9 5.9 0 1 1-5.9-5.9c.3 0 .7 0 1 .1v3.1a2.8 2.8 0 1 0 1.9 2.7V3h3z",
  },
];

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="foot-brand-name" href="/">
              <BrandMark />
              GHXSTSHIP
            </Link>
            <p className="foot-lede">Venture Beyond.</p>
            <dl className="foot-loc">
              <dt>Headquarters</dt>
              <dd>Miami</dd>
              <dt>Regional</dt>
              <dd>Los Angeles &middot; Chicago &middot; New York City</dd>
              <dt>Satellite</dt>
              <dd>Nashville &middot; Denver &middot; Las Vegas &middot; Phoenix</dd>
            </dl>
            <div className="foot-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <nav className="foot-col" aria-label="Services">
            <h6>Services</h6>
            {SERVICES.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="foot-col" aria-label="Company">
            <h6>Company</h6>
            {COMPANY.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="foot-col" aria-label="Resources and platforms">
            <h6>Resources</h6>
            {RESOURCES.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
            <h6 style={{ marginTop: 20 }}>Platforms</h6>
            {PLATFORMS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-legal">
          <span>&copy; 2026 GHXSTSHIP Industries LLC. All rights reserved.</span>
          <span>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
            <Link href="/accessibility/">Accessibility</Link>
            <Link href="/contact/">Start a Project</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
