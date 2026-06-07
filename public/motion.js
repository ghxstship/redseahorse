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

  // Media gets a clip-wipe reveal instead of the translateY fade.
  var MEDIA_SEL = ".wcard .media img, .work-grid a img, .mu img, .vcard .media img, .destinations img, .dhero img";

  var pending = []; // { el, cls } still to reveal
  var stats = [];   // { el, target, suffix, done }

  function reveal(item) {
    item.el.classList.add(item.cls);
  }

  // Wrap each word of a headline in <span class="gx-word"> with a rising
  // per-word delay, preserving inline elements (e.g. the colored span) and
  // <br>. `wi.n` is a shared running word index for the stagger.
  function wrapWords(node, wi) {
    var kids = [].slice.call(node.childNodes);
    kids.forEach(function (child) {
      if (child.nodeType === 3) {
        var words = (child.textContent || "").split(/(\s+)/);
        if (!words.length) return;
        var frag = document.createDocumentFragment();
        words.forEach(function (w) {
          if (/^\s*$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
          var span = document.createElement("span");
          span.className = "gx-word";
          span.textContent = w;
          span.style.setProperty("--gx-delay", 120 + wi.n * 70 + "ms");
          wi.n++;
          frag.appendChild(span);
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1 && child.tagName !== "BR") {
        wrapWords(child, wi); // recurse into inline elements, keep their styling
      }
    });
  }

  // Subtle cursor attraction on large CTAs.
  function setupMagnetic() {
    if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".gx-btn--lg").forEach(function (btn) {
      if (btn.__gxMag) return;
      btn.__gxMag = true;
      btn.classList.add("gx-magnetic");
      var strength = 0.28, max = 8;
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) * strength;
        var dy = (e.clientY - (r.top + r.height / 2)) * strength;
        dx = Math.max(-max, Math.min(max, dx));
        dy = Math.max(-max, Math.min(max, dy));
        btn.style.setProperty("--mx", dx.toFixed(1) + "px");
        btn.style.setProperty("--my", dy.toFixed(1) + "px");
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.setProperty("--mx", "0px");
        btn.style.setProperty("--my", "0px");
      });
    });
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
      var top = pending[i].el.getBoundingClientRect().top;
      if (top < trigger) {
        reveal(pending[i]);
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
    // Build the reveal set (block-level fade/rise).
    pending = [];
    [].slice.call(document.querySelectorAll(REVEAL_SEL)).forEach(function (el) {
      if (el.__gxReveal) return;
      el.__gxReveal = true;
      el.classList.add("gx-reveal");
      pending.push({ el: el, cls: "gx-in" });
    });

    // Media gets a clip-wipe reveal.
    [].slice.call(document.querySelectorAll(MEDIA_SEL)).forEach(function (el) {
      if (el.__gxReveal) return;
      el.__gxReveal = true;
      el.classList.add("gx-reveal-media");
      pending.push({ el: el, cls: "gx-in" });
    });

    // Stagger cards within a grid.
    [".cap-grid", ".work-grid", ".mu-grid", ".vgrid", ".dgrid"].forEach(function (gsel) {
      document.querySelectorAll(gsel).forEach(function (grid) {
        [].slice.call(grid.children).forEach(function (c, i) {
          c.style.setProperty("--gx-delay", i * 70 + "ms");
        });
      });
    });

    // Hero entrance sequence (h1 handled by word reveal below).
    document
      .querySelectorAll(".hero .eyebrow, .hero .sub, .hero .cta-row, .hero .hero-art")
      .forEach(function (el, i) { el.style.setProperty("--gx-delay", (i + 1) * 85 + "ms"); });

    // Hero headline: wrap words and reveal them in sequence.
    var heroH1 = document.querySelector(".hero h1");
    if (heroH1 && !heroH1.__gxWords) {
      heroH1.__gxWords = true;
      var wi = { n: 0 };
      wrapWords(heroH1, wi);
      pending.push({ el: heroH1, cls: "gx-words-in" });
    }

    // Magnetic CTAs (desktop / fine pointer only).
    setupMagnetic();

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
