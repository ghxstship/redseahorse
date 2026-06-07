/* GHXSTSHIP — mobile navigation.
 *
 * The kit nav hides every link below ~64rem with no replacement, leaving
 * phones with only the logo + CTA. This builds an accessible hamburger →
 * full-screen drawer from the existing .navlinks, on every page, with no
 * per-page markup changes. Desktop is untouched (the drawer/toggle only
 * appear below the breakpoint, controlled by polish.css).
 */
(function () {
  "use strict";

  function init() {
    var header = document.querySelector("header.nav");
    if (!header) return;
    var navInner = header.querySelector(".nav-inner") || header.querySelector(".wrap");
    var links = header.querySelector(".navlinks");
    // Idempotent by presence (not a flag) — React hydration can strip the
    // injected toggle, so we must be able to rebuild it afterward.
    if (!navInner || !links || navInner.querySelector(".nav-toggle")) return;

    // Remove any orphaned drawer from a prior build whose toggle was stripped.
    var stale = document.getElementById("gx-nav-drawer");
    if (stale) stale.remove();

    // --- Hamburger toggle ---
    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "nav-toggle";
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<span class="nav-toggle-bars" aria-hidden="true"><i></i><i></i><i></i></span>';
    navInner.appendChild(toggle);

    // --- Drawer ---
    var drawer = document.createElement("div");
    drawer.className = "nav-drawer";
    drawer.id = "gx-nav-drawer";
    drawer.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-controls", drawer.id);

    var panel = document.createElement("nav");
    panel.className = "nav-drawer-panel";
    panel.setAttribute("aria-label", "Mobile");

    // Clone every link from the primary nav (including the CTA, styled larger).
    [].slice.call(links.querySelectorAll("a")).forEach(function (a) {
      var item = document.createElement("a");
      item.href = a.getAttribute("href");
      item.textContent = a.textContent.trim();
      item.className = "nav-drawer-link" + (a.classList.contains("gx-btn") ? " is-cta" : "");
      panel.appendChild(item);
    });

    drawer.appendChild(panel);
    document.body.appendChild(drawer);

    var open = false;
    function setOpen(next) {
      open = next;
      header.classList.toggle("nav-is-open", open);
      drawer.classList.toggle("is-open", open);
      // Belt-and-suspenders alongside the .is-open CSS (transition still applies).
      drawer.style.opacity = open ? "1" : "";
      drawer.style.visibility = open ? "visible" : "";
      drawer.style.pointerEvents = open ? "auto" : "";
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      document.documentElement.style.overflow = open ? "hidden" : "";
      if (open) {
        var first = panel.querySelector("a");
        if (first) first.focus();
      }
    }

    toggle.addEventListener("click", function () { setOpen(!open); });
    drawer.addEventListener("click", function (e) {
      if (e.target === drawer) setOpen(false); // backdrop
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false); // navigate → close
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && open) { setOpen(false); toggle.focus(); }
    });
    // Close if the viewport grows back to desktop.
    window.addEventListener("resize", function () {
      if (open && window.innerWidth > 1100) setOpen(false);
    });
  }

  // Build now, again after React hydration settles, and on full load. The
  // drawer is appended to <body> (outside the React root) so it survives;
  // the toggle lives in the nav, so we re-run init until it sticks.
  function boot() {
    init();
    [120, 400, 900, 1600].forEach(function (d) { setTimeout(init, d); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", init);

  // Re-init across client-side navigations (next/link swaps the header).
  var last = location.pathname;
  setInterval(function () {
    if (location.pathname !== last) { last = location.pathname; setTimeout(init, 120); }
  }, 400);
})();
