/* Theme control — light · dark · system.
 *
 * The whole visual surface is token-driven, so a theme is one attribute on
 * <html>: absent means "follow the OS" (modernist.css does that with a
 * prefers-color-scheme block), "light" or "dark" pins it. This script does
 * three things and nothing else: read the stored choice, cycle it on click,
 * and keep the button's accessible name honest.
 *
 * The first paint is handled by a tiny inline snippet in app/layout.tsx that
 * runs before the body renders — if it waited for this file the page would
 * flash the wrong ground on every load.
 */
(function () {
  "use strict";

  var KEY = "gx-theme";
  var root = document.documentElement;

  // system → light → dark → system. Starting from "follow the OS" means the
  // first click always moves to something the visitor can see change.
  var ORDER = ["system", "light", "dark"];
  var LABEL = {
    system: "Theme: follows your system. Switch to light.",
    light: "Theme: light. Switch to dark.",
    dark: "Theme: dark. Follow your system instead.",
  };

  function stored() {
    try {
      var v = localStorage.getItem(KEY);
      return v === "light" || v === "dark" ? v : "system";
    } catch (e) {
      return "system";
    }
  }

  function apply(mode) {
    if (mode === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", mode);
    try {
      if (mode === "system") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, mode);
    } catch (e) {
      /* private mode — the choice just does not survive the session */
    }
    label(mode);
  }

  function label(mode) {
    var btns = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute("aria-label", LABEL[mode]);
      btns[i].setAttribute("title", LABEL[mode]);
    }
  }

  function next() {
    return ORDER[(ORDER.indexOf(stored()) + 1) % ORDER.length];
  }

  // Delegated, so it survives React re-rendering the header on navigation.
  document.addEventListener("click", function (e) {
    var btn = e.target && e.target.closest && e.target.closest("[data-theme-toggle]");
    if (!btn) return;
    e.preventDefault();
    apply(next());
  });

  label(stored());
  // React mounts the header after this file runs; re-label once it exists.
  document.addEventListener("DOMContentLoaded", function () {
    label(stored());
  });
  window.addEventListener("load", function () {
    label(stored());
  });
})();
