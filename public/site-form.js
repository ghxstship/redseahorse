/* Generic form handler for the kit's decorative forms.
 *
 * Source HTML forms have no `name` attributes and `onsubmit="return false"`.
 * This script:
 *  - assigns a stable `name` to every form control (derived from id, then label),
 *  - intercepts submit, validates required fields by heuristic (email/textarea/file),
 *  - POSTs JSON to window.__GHXST_FORM_ENDPOINT if set (Formspree, etc.),
 *  - else opens a mailto: with the form contents as the body,
 *  - shows an inline status line and disables the submit button while in flight.
 *
 * Configure at runtime via a <meta name="ghxst-form-endpoint" content="https://...">
 * tag (set this on the contact page if you want a real backend later).
 */
(function () {
  "use strict";

  // Default backend: the Vercel serverless function that emails via Resend.
  // Overridable per-page via window.__GHXST_FORM_ENDPOINT or a
  // <meta name="ghxst-form-endpoint"> tag. On hosts without the function
  // (e.g. a static mirror) the POST fails and we fall back to mailto:.
  var DEFAULT_ENDPOINT = "/api/contact";

  function getEndpoint() {
    if (window.__GHXST_FORM_ENDPOINT) return window.__GHXST_FORM_ENDPOINT;
    var m = document.querySelector('meta[name="ghxst-form-endpoint"]');
    if (m && m.getAttribute("content")) return m.getAttribute("content");
    return DEFAULT_ENDPOINT;
  }

  function getMailto() {
    var m = document.querySelector('meta[name="ghxst-form-mailto"]');
    return (m && m.getAttribute("content")) || "hello@ghxstship.tours";
  }

  function labelText(field) {
    if (field.id) {
      var lbl = document.querySelector('label[for="' + CSS.escape(field.id) + '"]');
      if (lbl) return lbl.textContent.trim();
    }
    var parent = field.closest("label");
    if (parent) return parent.textContent.trim();
    return field.name || field.id || field.type || "Field";
  }

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  // Inject a visually-hidden honeypot. Bots fill it; the server drops any
  // submission where it's non-empty. Kept out of the tab order and a11y tree.
  function addHoneypot(form) {
    if (form.querySelector('input[name="company_website"]')) return;
    var hp = document.createElement("input");
    hp.type = "text";
    hp.name = "company_website";
    hp.tabIndex = -1;
    hp.autocomplete = "off";
    hp.setAttribute("aria-hidden", "true");
    hp.style.cssText =
      "position:absolute!important;left:-9999px!important;width:1px;height:1px;opacity:0;pointer-events:none";
    form.appendChild(hp);
  }

  function attachNames(form) {
    var seen = {};
    form.querySelectorAll("input, select, textarea").forEach(function (el) {
      if (el.name) return;
      // Prefer the label text — the kit uses short ids like "n", "co", "e".
      var base = slug(labelText(el) || el.id || el.type || "field") || "field";
      var n = base;
      var i = 2;
      while (seen[n]) n = base + "-" + i++;
      seen[n] = true;
      el.name = n;
    });
  }

  function collect(form) {
    var fd = new FormData(form);
    var data = {};
    fd.forEach(function (v, k) {
      if (v instanceof File) {
        data[k] = v.name ? "[file: " + v.name + "]" : "";
      } else {
        data[k] = v;
      }
    });
    return data;
  }

  function isImplicitlyRequired(el) {
    if (el.required) return true;
    // Email and message/textarea fields are required by default for contact-style forms.
    if (el.type === "email") return true;
    if (el.tagName === "TEXTAREA") return true;
    // Treat the first text input (typically "Name") as required if no `name` field
    // is otherwise enforced.
    if (el.dataset && el.dataset.implicitRequired === "1") return true;
    return false;
  }

  function markImplicitRequireds(form) {
    var firstText = form.querySelector('input[type="text"]');
    if (firstText) firstText.dataset.implicitRequired = "1";
  }

  function basicValidate(form) {
    var ok = true;
    form.querySelectorAll("input, textarea, select").forEach(function (el) {
      if (el.type === "hidden" || el.type === "submit" || el.disabled) return;
      var v = (el.value || "").trim();
      el.setCustomValidity("");
      if (isImplicitlyRequired(el) && !v) {
        el.setCustomValidity("Required.");
        ok = false;
        return;
      }
      if (el.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        el.setCustomValidity("Enter a valid email.");
        ok = false;
        return;
      }
    });
    return ok && form.reportValidity();
  }

  function setStatus(form, msg, kind) {
    var s = form.querySelector("[data-form-status]");
    if (!s) {
      s = document.createElement("p");
      s.setAttribute("data-form-status", "");
      s.style.cssText = "font-family:var(--font-mono);font-size:12px;letter-spacing:.06em;margin:12px 0 0;";
      form.appendChild(s);
    }
    s.textContent = msg;
    s.style.color = kind === "err" ? "var(--plasma, #ff8da1)" : kind === "ok" ? "var(--brass, #c8a44c)" : "var(--fg-on-dark-2, #cfd8d4)";
  }

  function buildMailto(form, data) {
    var subject = "Project Inquiry — " + (data.name || data.email || "GHXSTSHIP site");
    var lines = Object.keys(data).map(function (k) {
      return k.replace(/-/g, " ") + ": " + data[k];
    });
    var body = lines.join("\n");
    return (
      "mailto:" + encodeURIComponent(getMailto()) +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body)
    );
  }

  function findSubmitTrigger(form) {
    return form.querySelector('button[type="submit"], input[type="submit"], .gx-btn, a.gx-btn');
  }

  function bind(form) {
    if (form.__ghxstBound) return;
    form.__ghxstBound = true;
    form.removeAttribute("onsubmit");
    attachNames(form);
    markImplicitRequireds(form);
    addHoneypot(form);

    // The kit uses <a class="gx-btn"> as the "Submit" trigger. Treat it as submit.
    var fauxSubmit = form.querySelector("a.gx-btn, .gx-btn[role='button']");
    if (fauxSubmit && fauxSubmit.tagName === "A") {
      fauxSubmit.setAttribute("role", "button");
      fauxSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit", { cancelable: true }));
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!basicValidate(form)) {
        setStatus(form, "Check the highlighted fields.", "err");
        return;
      }
      var endpoint = getEndpoint();
      var data = collect(form);
      setStatus(form, "Sending…", "");
      var btn = findSubmitTrigger(form);
      if (btn) btn.setAttribute("aria-busy", "true");

      function done(ok, msg) {
        if (btn) btn.removeAttribute("aria-busy");
        setStatus(form, msg, ok ? "ok" : "err");
        if (ok) form.reset();
      }

      if (endpoint) {
        fetch(endpoint, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then(function (res) {
            if (res.ok) {
              done(true, "Sent. We'll be in touch.");
            } else {
              // Server unreachable/misconfigured (e.g. a static mirror with no
              // function) — degrade gracefully to the user's mail client.
              done(false, "Opening your mail client…");
              window.location.href = buildMailto(form, data);
            }
          })
          .catch(function () {
            done(false, "Opening your mail client…");
            window.location.href = buildMailto(form, data);
          });
      } else {
        // No endpoint configured — open the user's mail client with the brief.
        window.location.href = buildMailto(form, data);
        done(true, "Opening your mail client…");
      }
    });
  }

  function bindAll() {
    document.querySelectorAll("form").forEach(bind);
  }

  // Bind now, then again after React hydration settles. If hydration replaces
  // a form node, its __ghxstBound flag is lost and bindAll re-binds it; if the
  // node is patched in place, the flag persists and bind() no-ops. This makes
  // the handler reliable on direct page loads (not just client navigations).
  function boot() {
    bindAll();
    [120, 400, 900, 1600].forEach(function (d) { setTimeout(bindAll, d); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", bindAll);

  // Re-bind on client-side navigations (next/link).
  var lastPath = location.pathname;
  setInterval(function () {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      setTimeout(bindAll, 80);
    }
  }, 300);
})();
