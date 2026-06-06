/* GHXSTSHIP — premium motion layer.
 *
 * Progressive enhancement only. Adds `.gx-motion` to <html> (which arms the
 * reveal styles in polish.css) then wires:
 *   1. Scroll-reveal — eyebrows, headlines, ledes, and cards rise/fade in as
 *      they enter the viewport, staggered within a group.
 *   2. Hero entrance — eyebrow → headline → sub → CTAs rise in sequence on load.
 *   3. Stat count-up — the numbers band counts 0→target when first seen.
 *   4. Nav condense — the sticky header gains a blurred, elevated bar on scroll.
 *
 * Reveal/count-up use a rAF-throttled scroll check (getBoundingClientRect)
 * rather than IntersectionObserver, so behavior is identical across every
 * engine. If JS is off OR the user prefers reduced motion, `.gx-motion` is
 * never added and every element stays visible and static.
 */
(function () {
  "use strict";

  var reduce =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  document.documentElement.classList.add("gx-motion");

  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  var REVEAL_SEL = [
    ".hero .eyebrow", ".hero h1", ".hero .sub", ".hero .cta-row", ".hero .hero-art",
    "section .eyebrow", "h2.sec", ".lede",
    ".pos h2", ".pos .lede",
    ".ccard", ".wcard", ".step", ".mu", ".vcard", ".dcard",
    ".smap", ".phase-detail",
    ".foot-brand", ".foot-col",
    ".crumbs", ".rail",
  ].join(",");

  var pending = []; // {el} still to reveal
  var stats = [];   // {el, target, suffix, done}

  function reveal(el) {
    el.classList.add("gx-in");
  }

  function runCountUp(s) {
    s.done = true;
    var dur = 1000, startTs = null;
    s.el.style.fontVariantNumeric = "tabular-nums";
    function tick(ts) {
      if (startTs === null) startTs = ts;
      var p = Math.min((ts - startTs) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      s.el.textContent = Math.round(s.target * eased).toLocaleString() + s.suffix;
      if (p < 1) requestAnimationFrame(tick);
      else s.el.textContent = s.target.toLocaleString() + s.suffix;
    }
    requestAnimationFrame(tick);
  }

  var ticking = false;
  function check() {
    ticking = false;
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var trigger = vh * 0.92; // reveal a touch before fully in view

    for (var i = pending.length - 1; i >= 0; i--) {
      var el = pending[i];
      var top = el.getBoundingClientRect().top;
      if (top < trigger) {
        reveal(el);
        pending.splice(i, 1);
      }
    }
    for (var j = 0; j < stats.length; j++) {
      var s = stats[j];
      if (!s.done && s.el.getBoundingClientRect().top < vh * 0.85) runCountUp(s);
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(check); }
  }

  function setup() {
    // Build the reveal set.
    pending = [];
    [].slice.call(document.querySelectorAll(REVEAL_SEL)).forEach(function (el) {
      if (el.__gxReveal) return;
      el.__gxReveal = true;
      el.classList.add("gx-reveal");
      pending.push(el);
    });

    // Stagger cards within a grid.
    [".cap-grid", ".work-grid", ".mu-grid", ".vgrid", ".dgrid"].forEach(function (gsel) {
      document.querySelectorAll(gsel).forEach(function (grid) {
        [].slice.call(grid.children).forEach(function (c, i) {
          c.style.setProperty("--gx-delay", i * 70 + "ms");
        });
      });
    });

    // Hero entrance sequence.
    document
      .querySelectorAll(".hero .eyebrow, .hero h1, .hero .sub, .hero .cta-row, .hero .hero-art")
      .forEach(function (el, i) { el.style.setProperty("--gx-delay", i * 85 + "ms"); });

    // Count-up targets.
    stats = [];
    [].slice.call(document.querySelectorAll(".band .stat .v")).forEach(function (el) {
      if (el.__gxStat) return;
      el.__gxStat = true;
      var m = (el.textContent || "").trim().match(/^(\d[\d,]*)(.*)$/);
      if (!m) return;
      var target = parseInt(m[1].replace(/,/g, ""), 10);
      if (!isFinite(target)) return;
      stats.push({ el: el, target: target, suffix: m[2] || "", done: false });
    });

    // Nav condense.
    var nav = document.querySelector("header.nav");
    if (nav && !nav.__gxNav) {
      nav.__gxNav = true;
      var navScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 12); };
      navScroll();
      window.addEventListener("scroll", navScroll, { passive: true });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Initial pass (reveals everything already above the fold).
    requestAnimationFrame(check);
    // Safety net: if anything is still pending after 2.5s (e.g. a layout race),
    // reveal it so no content can get stuck hidden.
    setTimeout(function () { pending.slice().forEach(reveal); pending = []; }, 2500);
  }

  onReady(setup);

  var last = location.pathname;
  setInterval(function () {
    if (location.pathname !== last) { last = location.pathname; setTimeout(setup, 90); }
  }, 400);
})();
