/* GHXSTSHIP — interactive 8-Phase Course enhancer.
   Auto-upgrades any phase visualization on the page (.smap, .gx-smap, .seven):
   each phase becomes hover/click/keyboard interactive and drives a detail panel.
   Self-contained: injects its own tokenized CSS. Safe to include on any kit page. */
(function () {
  var PHASES = {
    discovery:   { n: "01", name: "Discovery",   desc: "Goals, scope, budget, and vision. The consultation that sets the route and sizes the build." },
    design:      { n: "02", name: "Design",      desc: "Creative direction, experiential design, and storytelling \u2014 the look, the feel, the narrative." },
    advance:     { n: "03", name: "Advance",     desc: "Feasibility, planning, permits, and partner and technology exploration. The build gets real." },
    procurement: { n: "04", name: "Procurement", desc: "Vendors, sourcing, contracts, and long-lead orders, locked against the schedule." },
    build:       { n: "05", name: "Build",       desc: "Fabrication, scenic, staging, and technical production \u2014 pre-built and tested off-site." },
    install:     { n: "06", name: "Install",     desc: "Logistics, load-in, and on-site install. Crew on the ground, systems up." },
    operate:     { n: "07", name: "Operate",     desc: "Show calling and live execution. We run the show and hold the standard." },
    close:       { n: "08", name: "Close",       desc: "Load-out, reconciliation, analytics, and the debrief. Struck clean, logged." }
  };

  var CSS = '' +
    '.smap .stop,.gx-smap__stop,.seven .dstep{cursor:pointer;outline:none;transition:transform .12s ease}' +
    '.smap .stop:hover,.gx-smap__stop:hover,.seven .dstep:hover{transform:translateY(-3px)}' +
    '.smap .stop .dot{background:var(--void);border-color:var(--ink-3);color:var(--fg-on-dark-3);transition:background .12s ease,border-color .12s ease,color .12s ease}' +
    '.smap .stop.phase-active .dot{background:var(--brass);border-color:var(--brass);color:var(--on-brass)}' +
    '.gx-smap__stop.phase-active .gx-smap__dot{background:var(--brass);border-color:var(--brass);color:var(--on-brass,#0B1314)}' +
    '.seven .dstep.phase-active{outline:3px solid var(--brass);outline-offset:3px}' +
    '.phase-detail{margin-top:28px;display:grid;grid-template-columns:auto 1fr;gap:20px;align-items:start;' +
      'background:var(--ink-2);border:var(--stroke-1,2px) solid var(--ink-3);border-left:4px solid var(--brass);' +
      'border-radius:6px;padding:22px 26px;box-shadow:6px 6px 0 var(--ink,#0B1314)}' +
    '.phase-detail .pd-n{font-family:var(--font-display);font-weight:900;font-size:54px;line-height:.8;color:var(--brass)}' +
    '.phase-detail .pd-eb{font-family:var(--font-mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--fg-on-dark-3);margin:0 0 6px}' +
    '.phase-detail .pd-name{font-family:var(--font-display);font-weight:800;font-size:22px;text-transform:uppercase;letter-spacing:.01em;color:var(--bone);margin:0 0 6px;line-height:1}' +
    '.phase-detail .pd-desc{font-family:var(--font-body);font-size:15.5px;line-height:1.55;color:var(--fg-on-dark-2);margin:0;max-width:60ch}' +
    '@media(max-width:560px){.phase-detail{grid-template-columns:1fr}.phase-detail .pd-n{font-size:40px}}';

  function keyFor(el, nameSel) {
    var t = el.querySelector(nameSel);
    var raw = (t ? t.textContent : el.textContent) || "";
    return raw.trim().toLowerCase().replace(/[^a-z]/g, "");
  }

  function enhance(container, itemSel, nameSel) {
    var items = Array.prototype.slice.call(container.querySelectorAll(itemSel));
    if (!items.length) return;

    var panel = document.createElement("div");
    panel.className = "phase-detail";
    panel.setAttribute("aria-live", "polite");
    panel.innerHTML = '<div class="pd-n"></div><div><p class="pd-eb"></p><p class="pd-name"></p><p class="pd-desc"></p></div>';
    container.parentNode.insertBefore(panel, container.nextSibling);
    var elN = panel.querySelector(".pd-n"), elEb = panel.querySelector(".pd-eb"),
        elNm = panel.querySelector(".pd-name"), elD = panel.querySelector(".pd-desc");

    function activate(item) {
      var p = PHASES[keyFor(item, nameSel)];
      if (!p) return;
      items.forEach(function (i) { i.classList.remove("phase-active"); i.setAttribute("aria-pressed", "false"); });
      item.classList.add("phase-active");
      item.setAttribute("aria-pressed", "true");
      elN.textContent = p.n; elEb.textContent = "Phase " + p.n + " \u00b7 The Course";
      elNm.textContent = p.name; elD.textContent = p.desc;
    }

    items.forEach(function (item, idx) {
      item.classList.remove("done", "is-terminus-skip");
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      var label = item.querySelector(nameSel);
      item.setAttribute("aria-label", "Phase " + (label ? label.textContent.trim() : (idx + 1)) + " \u2014 show detail");
      item.addEventListener("mouseenter", function () { activate(item); });
      item.addEventListener("focus", function () { activate(item); });
      item.addEventListener("click", function () { activate(item); });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(item); }
      });
    });
    activate(items[0]);
  }

  function init() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    document.querySelectorAll(".smap").forEach(function (c) { enhance(c, ".stop", ".nm"); });
    document.querySelectorAll(".gx-smap__line").forEach(function (c) { enhance(c, ".gx-smap__stop", ".gx-smap__name"); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
