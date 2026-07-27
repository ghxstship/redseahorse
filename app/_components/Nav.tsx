"use client";

/* Shared site navigation — Modernist chrome (greyscale + GHXSTSHIP Green).
 * Rendered once in the root layout so it persists across client-side
 * navigation. React owns the drawer state; usePathname closes it on route
 * change. Dropdowns are hover/focus on desktop, flattened sub-links in the
 * mobile drawer. Styles live in modernist.css (header.nav / .nav-drawer). */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";

type NavChild = { href: string; label: string };
type NavLink = { href: string; label: string; children?: NavChild[] };

const LINKS: NavLink[] = [
  {
    href: "/services/",
    label: "Services",
    children: [
      { href: "/services/", label: "All Services" },
      { href: "/services/experiential-design-production/", label: "Experiential Design & Production" },
      { href: "/services/venue-site-operations/", label: "Venue & Site Operations" },
      { href: "/services/tour-talent-management/", label: "Tour & Talent Management" },
      { href: "/services/technology-systems-engineering/", label: "Technology & Systems Engineering" },
      { href: "/pricing/", label: "Engagement Models" },
    ],
  },
  {
    href: "/destinations/",
    label: "Industries",
    children: [
      { href: "/destinations/", label: "All Industries" },
      { href: "/destinations/festival-production/", label: "Festival Production" },
      { href: "/destinations/concert-tour-production/", label: "Concert & Tour Production" },
      { href: "/destinations/brand-activations/", label: "Brand Activations" },
      { href: "/destinations/immersive-experiences/", label: "Immersive Experiences" },
      { href: "/destinations/cruise-ships/", label: "Cruise Ships" },
      { href: "/destinations/amusement-parks/", label: "Amusement Parks" },
      { href: "/destinations/sporting-events/", label: "Sporting Events" },
      { href: "/destinations/tv-film-broadcast/", label: "TV, Film & Broadcast" },
    ],
  },
  { href: "/work/", label: "Work" },
  { href: "/platforms/", label: "Platforms" },
  {
    href: "/about/",
    label: "Company",
    children: [
      { href: "/about/", label: "About" },
      { href: "/team/", label: "Team" },
      { href: "/locations/", label: "Locations" },
      { href: "/careers/", label: "Careers" },
      { href: "/gallery/", label: "Gallery" },
      { href: "/store/", label: "Store" },
    ],
  },
  {
    href: "/resources/",
    label: "Resources",
    children: [
      { href: "/resources/", label: "All Resources" },
      { href: "/resources/blog/", label: "Blog" },
      { href: "/resources/the-experiential-producer/", label: "The Experiential Producer" },
      { href: "/resources/glossary/", label: "Glossary" },
      { href: "/course/", label: "The Course" },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + wire Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  // aria-current for the active route (trailing-slash tolerant).
  const norm = (p: string) => (p.endsWith("/") ? p : p + "/");
  const current = (href: string) =>
    norm(pathname || "/") === norm(href) ? ("page" as const) : undefined;

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link className="brand" href="/" aria-label="GHXSTSHIP home">
            <BrandMark />
            <b>GHXSTSHIP</b>
          </Link>
          <nav className="desk-nav" aria-label="Primary">
            {LINKS.map((l) =>
              l.children ? (
                <div key={l.href} className="nav-item">
                  <Link href={l.href} aria-haspopup="true" aria-current={current(l.href)}>
                    {l.label}
                    <span className="nav-caret" aria-hidden="true" />
                  </Link>
                  <div className="nav-sub" role="menu" aria-label={l.label}>
                    {l.children.map((c) => (
                      <Link key={c.href + c.label} href={c.href} role="menuitem" aria-current={current(c.href)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href} aria-current={current(l.href)}>
                  {l.label}
                </Link>
              )
            )}
            <Link className="btn btn-primary nav-cta" href="/contact/">
              Start a Project
            </Link>
          </nav>
          <ThemeToggle />
          <button
            className={"burger btn btn-icon" + (open ? " is-open" : "")}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="gx-nav-drawer"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div
        id="gx-nav-drawer"
        className={"nav-drawer" + (open ? " is-open" : "")}
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <nav className="nav-drawer-panel" aria-label="Mobile">
          {LINKS.map((l) => (
            <div key={l.href} className="nav-drawer-group">
              <Link className="nav-drawer-link" href={l.href} onClick={close}>
                {l.label}
              </Link>
              {l.children?.map((c) => (
                <Link
                  key={c.href + c.label}
                  className="nav-drawer-link nav-drawer-sublink"
                  href={c.href}
                  onClick={close}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <Link className="nav-drawer-link is-cta" href="/contact/" onClick={close}>
            Start a Project
          </Link>
        </nav>
      </div>
    </>
  );
}
