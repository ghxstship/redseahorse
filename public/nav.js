/* GHXSTSHIP — mobile navigation.
 *
 * The hamburger button is now rendered server-side in every page's nav
 * (.nav-toggle), so it is present from first paint and survives both React
 * hydration AND client-side (next/link) navigation — no flicker. This script
 * only WIRES the existing toggle: it builds the full-screen drawer (appended to
 * <body>, outside the React root) from the page's .navlinks and handles open/
 * close. Re-runs on navigation to wire each freshly-mounted toggle.
 */
(function () {
  "use strict";

  // Module-level handle to the currently-wired drawer, so the one-time global
  // listeners (Escape / resize) always act on the live instance.
  var current = null;
  var globalBound = false;

  function init() {
    var header = document.querySelector("header.nav");
    if (!header) return;
    var links = header.querySelector(".navlinks");
    var toggle = header.querySelector(".nav-toggle"); // server-rendered
    if (!links || !toggle) return;
    if (toggle.__wired) return; // already wired this instance
    toggle.__wired = true;

    // (Re)build the drawer from this page's nav links. Remove any drawer left
    // over from a previous page so links stay in sync.
    var stale = document.getElementById("gx-nav-drawer");
    if (stale) stale.remove();

    var drawer = document.createElement("div");
    drawer.className = "nav-drawer";
    drawer.id = "gx-nav-drawer";
    drawer.setAttribute("aria-hidden", "true");

    var panel = document.createElement("nav");
    panel.className = "nav-drawer-panel";
    panel.setAttribute("aria-label", "Mobile");

    [].slice.call(links.querySelectorAll("a")).forEach(function (a) {
      var item = document.createElement("a");
      item.href = a.getAttribute("href");
      item.textContent = a.textContent.trim();
      item.className = "nav-drawer-link" + (a.classList.contains("gx-btn") ? " is-cta" : "");
      panel.appendChild(item);
    });

    drawer.appendChild(panel);
    document.body.appendChild(drawer);

    var state = { open: false };
    function setOpen(next) {
      state.open = next;
      header.classList.toggle("nav-is-open", next);
      drawer.classList.toggle("is-open", next);
      drawer.style.opacity = next ? "1" : "";
      drawer.style.visibility = next ? "visible" : "";
      drawer.style.pointerEvents = next ? "auto" : "";
      toggle.classList.toggle("is-open", next);
      toggle.setAttribute("aria-expanded", next ? "true" : "false");
      toggle.setAttribute("aria-label", next ? "Close menu" : "Open menu");
      drawer.setAttribute("aria-hidden", next ? "false" : "true");
      document.documentElement.style.overflow = next ? "hidden" : "";
      if (next) { var first = panel.querySelector("a"); if (first) first.focus(); }
    }

    toggle.addEventListener("click", function () { setOpen(!state.open); });
    drawer.addEventListener("click", function (e) { if (e.target === drawer) setOpen(false); });
    panel.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });

    current = { toggle: toggle, setOpen: setOpen, state: state };

    if (!globalBound) {
      globalBound = true;
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && current && current.state.open) { current.setOpen(false); current.toggle.focus(); }
      });
      window.addEventListener("resize", function () {
        if (current && current.state.open && window.innerWidth > 1100) current.setOpen(false);
      });
    }
  }

  // Wire on load + after hydration; the __wired flag makes repeats no-ops.
  function boot() {
    init();
    [120, 400, 900].forEach(function (d) { setTimeout(init, d); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", init);

  // Re-wire the freshly-mounted toggle on client-side navigations.
  var last = location.pathname;
  setInterval(function () {
    if (location.pathname !== last) { last = location.pathname; setTimeout(init, 60); }
  }, 200);
})();
