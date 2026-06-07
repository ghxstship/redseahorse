"use client";

/* Shared site navigation — rendered once in the root layout, so it persists
 * across client-side navigation (no re-mount, no flicker). React owns the
 * drawer state; usePathname closes it on route change. The drawer is a sibling
 * of <header> (not nested) so it sits at z-index 49, just under the z-50 nav —
 * keeping the close (X) button clickable. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/destinations/", label: "Destinations" },
  { href: "/solutions/", label: "Fleet" },
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

  return (
    <>
      <header className={"nav" + (open ? " nav-is-open" : "")}>
        <div className="wrap nav-inner">
          <Link className="brand" href="/" aria-label="GHXSTSHIP home">
            <img src="/assets/skull-bone.svg" alt="GHXSTSHIP" width={34} height={34} />
            <b>G H X S T S H I P</b>
          </Link>
          <nav className="navlinks" aria-label="Primary">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
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
            <Link key={l.href} className="nav-drawer-link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link className="nav-drawer-link is-cta" href="/contact/" onClick={() => setOpen(false)}>
            Start a Project
          </Link>
        </nav>
      </div>
    </>
  );
}
