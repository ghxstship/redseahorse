/* Shared site footer — rendered once in the root layout. Internal links use
 * next/link; external (atlvs.pro) and social links use plain anchors. */

import Link from "next/link";

const EXPLORE = [
  { href: "/destinations/", label: "Destinations" },
  { href: "/solutions/", label: "Fleet" },
  { href: "/team/", label: "Crew" },
  { href: "/course/", label: "Course" },
  { href: "/work/", label: "Archives" },
  { href: "/resources/blog/", label: "Logs" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/store/", label: "Museum" },
];

const COMPANY = [
  { href: "/about/", label: "The Story" },
  { href: "/locations/", label: "Home Ports" },
  { href: "/resources/glossary/", label: "Glossary" },
  { href: "/careers/", label: "Careers" },
  { href: "/contact/", label: "Contact" },
  { href: "/contact/", label: "Start a Project" },
];

const SOCIAL = [
  { href: "https://www.instagram.com/ghxstship.tours", label: "Instagram", icon: "ph-instagram-logo" },
  { href: "https://www.facebook.com/ghxstship.tours", label: "Facebook", icon: "ph-facebook-logo" },
  { href: "https://www.tiktok.com/@ghxstship.tours", label: "TikTok", icon: "ph-tiktok-logo" },
  { href: "https://www.youtube.com/@ghxstship", label: "YouTube", icon: "ph-youtube-logo" },
  { href: "https://soundcloud.com/ghxstship", label: "SoundCloud", icon: "ph-soundcloud-logo" },
  { href: "https://www.linkedin.com/company/ghxstship", label: "LinkedIn", icon: "ph-linkedin-logo" },
];

const PLATFORMS = [
  { href: "https://atlvs.pro", label: "ATLVS" },
  { href: "https://atlvs.pro/compvss", label: "COMPVSS" },
  { href: "https://atlvs.pro/gvteway", label: "GVTEWAY" },
];

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/">
              <img src="/assets/skull-bone.svg" alt="" width={30} height={30} />
              <b>G H X S T S H I P</b>
            </Link>
            <p className="foot-tag" style={{ color: "var(--bone)" }}>
              The <span style={{ color: "var(--brass)" }}>General Contractor</span>,{" "}
              <span style={{ color: "var(--nebula)" }}>Foreman</span> &amp;{" "}
              <span style={{ color: "var(--plasma)" }}>Procore</span> of experiential project management.
            </p>
            <p className="foot-ports">
              <span>Miami</span>
              <span>Las Vegas</span>
              <span>Chicago</span>
              <span>New York</span>
              <span>Los Angeles</span>
            </p>
            <div className="foot-social">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener">
                  <i className={"ph-bold " + s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <nav className="foot-col">
            <h5>Explore</h5>
            {EXPLORE.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="foot-col">
            <h5>Company</h5>
            {COMPANY.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="foot-col">
            <h5>Platforms</h5>
            {PLATFORMS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-bot">
          <span>&copy; 2026 G H X S T S H I P Industries LLC</span>
          <span>Production Management &middot; Operations Leadership &middot; Technology Innovations</span>
        </div>
      </div>
    </footer>
  );
}
