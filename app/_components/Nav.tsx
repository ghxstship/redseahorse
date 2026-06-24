"use client";

/* Shared site navigation — rendered once in the root layout, so it persists
 * across client-side navigation (no re-mount, no flicker). React owns the
 * drawer state; usePathname closes it on route change. The drawer is a sibling
 * of <header> (not nested) so it sits at z-index 49, just under the z-50 nav —
 * keeping the close (X) button clickable.
 *
 * Destinations and Services carry `children` — rendered as a hover/focus
 * dropdown on desktop and as indented sub-links inside the mobile drawer. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavChild = { href: string; label: string };
type NavLink = { href: string; label: string; children?: NavChild[] };

const LINKS: NavLink[] = [
  {
    href: "/destinations/",
    label: "Destinations",
    children: [
      { href: "/destinations/festival-production/", label: "Festival Production" },
      { href: "/destinations/concert-tour-production/", label: "Concert & Tour Production" },
      { href: "/destinations/brand-activations/", label: "Brand Activations" },
      { href: "/destinations/immersive-experiences/", label: "Immersive Experiences" },
      { href: "/destinations/sporting-events/", label: "Sporting Events" },
      { href: "/destinations/tv-film-broadcast/", label: "TV, Film & Broadcast" },
    ],
  },
  {
    href: "/solutions/",
    label: "Services",
    children: [
      { href: "/services/experiential-production/", label: "Experiential Production" },
      { href: "/services/site-operations/", label: "Site Operations" },
      { href: "/services/venue-management/", label: "Venue Management" },
      { href: "/services/immersive-technologies/", label: "Immersive Technologies" },
    ],
  },
  { href: "/team/", label: "Crew" },
  { href: "/resources/blog/", label: "Logs" },
  { href: "/store/", label: "Museum" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/work/", label: "Archives" },
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

  return (
    <>
      <header className={"nav" + (open ? " nav-is-open" : "")}>
        <div className="wrap nav-inner">
          <Link className="brand" href="/" aria-label="GHXSTSHIP home">
            <img src="/assets/skull-bone.svg" alt="GHXSTSHIP" width={34} height={34} />
            <b>G H X S T S H I P</b>
          </Link>
          <nav className="navlinks" aria-label="Primary">
            {LINKS.map((l) =>
              l.children ? (
                <div key={l.href} className="nav-item">
                  <Link href={l.href} aria-haspopup="true">
                    {l.label}
                    <span className="nav-caret" aria-hidden="true" />
                  </Link>
                  <div className="nav-sub" role="menu" aria-label={l.label}>
                    {l.children.map((c) => (
                      <Link key={c.href} href={c.href} role="menuitem">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              )
            )}
            <Link className="gx-btn gx-btn--sm" href="/contact/">
              Start a Project
            </Link>
          </nav>
          <button
            className={"nav-toggle" + (open ? " is-open" : "")}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="gx-nav-drawer"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="nav-toggle-bars" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
            </span>
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
                  key={c.href}
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
