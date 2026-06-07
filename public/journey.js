/* GHXSTSHIP — journey rail enhancer.
 *
 * The homepage `.journey` section pairs a numbered rail (`.rail .rl`) with a set
 * of step cards (`.j-steps .step`). The static export never wired the rail's
 * active state, so it sat permanently on step 1. This script:
 *   - Desktop (vertical steps): scroll-spies the step nearest the viewport
 *     center and lights the matching sticky rail dot.
 *   - Mobile (horizontal scroll-snap carousel, see polish.css): tracks the
 *     centered card and lights the matching dot in the sticky progress strip.
 *   - Makes each rail dot a button that scrolls its step into view.
 * Pure progressive enhancement: without JS the carousel still scrolls freely.
 */
(function () {
  "use strict";

  function init() {
    var journey = document.querySelector(".journey");
    if (!journey) return;
    var stepsWrap = journey.querySelector(".j-steps");
    var steps = [].slice.call(journey.querySelectorAll(".j-steps .step"));
    var rails = [].slice.call(journey.querySelectorAll(".rail .rl"));
    if (!steps.length || !rails.length) return;

    var activeIndex = -1;
    function setActive(i) {
      if (i === activeIndex || i < 0 || i >= rails.length) return;
      activeIndex = i;
      for (var r = 0; r < rails.length; r++) rails[r].classList.toggle("on", r === i);
    }

    // Rail dots become controls that bring their step into view.
    rails.forEach(function (rl, idx) {
      if (rl.__jBound) return;
      rl.__jBound = true;
      rl.style.cursor = "pointer";
      rl.setAttribute("role", "button");
      rl.setAttribute("tabindex", "0");
      rl.setAttribute("aria-label", "Go to step " + (idx + 1));
      function go() {
        var s = steps[idx];
        if (!s) return;
        var horizontal = getComputedStyle(stepsWrap).flexDirection === "row";
        if (horizontal) {
          stepsWrap.scrollTo({ left: s.offsetLeft - (stepsWrap.clientWidth - s.clientWidth) / 2, behavior: "smooth" });
        } else {
          s.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
      rl.addEventListener("click", go);
      rl.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });

    // Pick the step whose center is nearest a reference line.
    function nearestVertical() {
      var mid = window.innerHeight / 2, best = 0, bestD = Infinity;
      steps.forEach(function (s, i) {
        var r = s.getBoundingClientRect();
        var d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    }
    function nearestHorizontal() {
      var mid = stepsWrap.scrollLeft + stepsWrap.clientWidth / 2, best = 0, bestD = Infinity;
      steps.forEach(function (s, i) {
        var c = s.offsetLeft + s.offsetWidth / 2;
        var d = Math.abs(c - mid);
        if (d < bestD) { bestD = d; best = i; }
      });
      return best;
    }

    var ticking = false;
    function update() {
      ticking = false;
      // When the scroll-driven pin is active, hscroll.js owns the active dot.
      if (stepsWrap.hasAttribute("data-hscroll-track")) return;
      var horizontal = getComputedStyle(stepsWrap).flexDirection === "row";
      setActive(horizontal ? nearestHorizontal() : nearestVertical());
    }
    function onScroll() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }

    stepsWrap.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  // Re-init across client-side navigations.
  var last = location.pathname;
  setInterval(function () {
    if (location.pathname !== last) { last = location.pathname; setTimeout(init, 80); }
  }, 400);
})();
