/* GHXSTSHIP — scroll-driven horizontal pin.
 *
 * Turns the journey + course into the "pinned horizontal scroll" effect: the
 * section sticks to the viewport while vertical scrolling drives the track
 * sideways — no manual swipe/click. Progress also updates the journey rail
 * dots and the active course phase (so the detail card follows).
 *
 * Mechanics: the track is laid out as a horizontal row; the section is given a
 * vertical "runway" equal to the track's horizontal overflow; the stage is
 * sticky; scroll progress through the runway maps 1:1 to translateX.
 *
 * Progressive enhancement: with prefers-reduced-motion, no JS, or when the
 * track doesn't overflow, it cleans up and the existing carousel/stack
 * behavior (polish.css) remains. Re-measures on resize + client navigation.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function navHeight() {
    var n = document.querySelector("header.nav");
    return n ? Math.round(n.getBoundingClientRect().height) : 64;
  }

  var CONFIGS = [
    {
      section: ".journey",
      stage: ".j-grid",
      track: ".j-steps",
      onProgress: function (p, prog) {
        var steps = p.track.children, n = steps.length;
        if (!n) return;
        var idx = Math.round(prog * (n - 1));
        if (idx === p.prevIndex) return;
        p.prevIndex = idx;
        var rails = p.section.querySelectorAll(".rail .rl");
        for (var i = 0; i < rails.length; i++) rails[i].classList.toggle("on", i === idx);
      },
    },
    {
      section: ".course",
      stage: ".wrap",
      track: ".smap",
      onProgress: function (p, prog) {
        var stops = p.track.children, n = stops.length;
        if (!n) return;
        var idx = Math.round(prog * (n - 1));
        if (idx === p.prevIndex) return;
        p.prevIndex = idx;
        // phase-detail.js listens for clicks → updates the detail card + active dot.
        if (stops[idx]) stops[idx].click();
      },
    },
  ];

  var pins = [];

  function reset(p) {
    // The runway height lives on the stage's PARENT — sticky only holds within
    // its own parent's box, so that's where the extra scroll length must go.
    var runway = p.stage.parentElement;
    if (runway) runway.style.height = "";
    p.stage.style.position = "";
    p.stage.style.top = "";
    p.stage.removeAttribute("data-hscroll-stage");
    p.track.style.transform = "";
    p.track.removeAttribute("data-hscroll-track");
    p.active = false;
  }

  function layout(p) {
    reset(p);
    if (reduce) return;
    // Tablet and up get the pinned scroll; phones keep the native swipe carousel
    // (polish.css) — touch swipe, not a click-through, and avoids nested-sticky
    // conflicts with the mobile rail.
    if (window.innerWidth < 48 * 16) return;

    // Lay the track out horizontally and measure its overflow.
    p.track.setAttribute("data-hscroll-track", "");
    p.stage.setAttribute("data-hscroll-stage", "");
    var stageW = p.stage.clientWidth;
    var trackW = p.track.scrollWidth;
    var dist = trackW - stageW;
    if (dist <= 24) { reset(p); return; }

    p.runway = p.stage.parentElement;
    p.dist = dist;
    p.top = navHeight() + 16;
    p.stage.style.position = "sticky";
    p.stage.style.top = p.top + "px";
    var stageH = p.stage.offsetHeight;
    p.runway.style.height = stageH + dist + "px";
    p.prevIndex = -1;
    p.active = true;
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      for (var i = 0; i < pins.length; i++) {
        var p = pins[i];
        if (!p.active || !p.runway) continue;
        var rect = p.runway.getBoundingClientRect();
        var prog = (p.top - rect.top) / p.dist;
        prog = prog < 0 ? 0 : prog > 1 ? 1 : prog;
        p.track.style.transform = "translate3d(" + -(prog * p.dist).toFixed(1) + "px,0,0)";
        if (p.cfg.onProgress) p.cfg.onProgress(p, prog);
      }
    });
  }

  function build() {
    pins = [];
    CONFIGS.forEach(function (cfg) {
      var section = document.querySelector(cfg.section);
      if (!section) return;
      var stage = section.querySelector(cfg.stage);
      var track = section.querySelector(cfg.track);
      if (!stage || !track) return;
      var p = { section: section, stage: stage, track: track, cfg: cfg, active: false, dist: 0, top: 0, prevIndex: -1 };
      pins.push(p);
      layout(p);
    });
    onScroll();
  }

  var relayoutPending = false;
  function relayout() {
    if (relayoutPending) return;
    relayoutPending = true;
    setTimeout(function () {
      relayoutPending = false;
      pins.forEach(layout);
      onScroll();
    }, 150);
  }

  function start() {
    build();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", relayout, { passive: true });
    // Fonts/images can change track width after first paint.
    window.addEventListener("load", relayout);
    setTimeout(relayout, 600);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();

  var last = location.pathname;
  setInterval(function () {
    if (location.pathname !== last) { last = location.pathname; setTimeout(build, 120); }
  }, 400);
})();
