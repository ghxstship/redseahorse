/* GHXSTSHIP — contact form handler (Vercel Serverless Function).
 *
 * Emails the studio when a form is submitted AND sends the submitter a branded
 * auto-reply receipt with next steps + social links. Both emails use the
 * GHXSTSHIP email-kit design (ui_kits/email), rendered with inline styles for
 * email-client compatibility, via Resend's REST API.
 *
 * Env (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY  (required)  Resend key, re_...
 *   RESEND_FROM     (optional)  overrides the sender; must be on a Resend-verified
 *                               domain. Defaults to "GHXSTSHIP <ghxstship@atlvs.pro>".
 *                               Defaults to onboarding@resend.dev (delivers only to the
 *                               Resend account owner — fine for the studio notification;
 *                               the submitter auto-reply requires a verified domain, so it
 *                               is only sent when RESEND_FROM is set).
 *   CONTACT_TO      (optional)  recipient, defaults to julian.clarkson@ghxstship.pro
 */

var RESEND_ENDPOINT = "https://api.resend.com/emails";
// bare address, or display name + <address>
var FROM_RE = /^(?:[^<>@\s]+@[^<>@\s.]+\.[^<>@\s]+|[^<>]{1,64}<\s*[^<>@\s]+@[^<>@\s.]+\.[^<>@\s]+\s*>)$/;
// Sender must be on a domain verified in Resend. The plan covers atlvs.pro,
// so that is the built-in default — RESEND_FROM is now optional and only
// needed to override it.
var BRAND = "GHXSTSHIP";
var DEFAULT_FROM = BRAND + " <ghxstship@atlvs.pro>";
// Resend's shared onboarding sender can only deliver to the account owner,
// so auto-replies to third parties are suppressed if we ever fall back to it.
var SHARED_SENDER_RE = /@resend\.dev>?\s*$/i;
var DEFAULT_TO = "julian.clarkson@ghxstship.pro";
var SITE = "https://ghxstship.tours";
var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Brand palette — literal hex, because email clients support neither CSS
// custom properties nor color-mix(). Mirrors modernist.css: grayscale ground,
// GHXSTSHIP green as the only accent, fill vs text roles kept distinct.
var C = {
  bg: "#fcfcfc",         // --color-bg
  surface: "#efefef",    // --color-surface
  ink: "#000000",        // --color-text
  rule: "#9a9a9a",       // --color-divider, flattened from 40% black
  hair: "#d4d4d4",       // 1px inner rules
  accent: "#2edb3a",     // --color-accent — FILLS ONLY
  accentText: "#1b7c21", // --color-accent-700 — AA text on light
  onAccent: "#001800",   // --color-on-accent — ink on green
  body: "#2b2b2b",       // body copy
  muted: "#5f5f5f",      // supporting
  faint: "#767676",      // labels
};
// One family, as on the site. Email clients broadly ignore @font-face, so the
// grotesque fallback is what most recipients actually see.
var FONT = "'Archivo','Helvetica Neue',Helvetica,Arial,sans-serif";
// The wordmark is always Bebas Neue, as in the site chrome. Clients that
// honour the webfont link get it; the rest fall back to a condensed face so
// the lockup keeps its proportions rather than collapsing into body text.
var FONT_WORDMARK = "'Bebas Neue','Arial Narrow','Helvetica Neue',Arial,sans-serif";
// Images must be served from a host that answers 200 directly. The apex
// 308-redirects to www, and email image proxies commonly refuse to follow
// redirects — which renders the mark as a broken image. Links can keep the
// apex (browsers follow the hop); assets cannot.
var ASSET_BASE = "https://www.ghxstship.tours";
// Tight-cropped master of the white flag: 480x368 transparent PNG whose artwork
// touches all four edges. The older skull-bone.png sits on a 64x64 canvas with
// ~47% empty padding, so every nominal size rendered about half as large as it
// read on paper. Cropping the frame is what actually fixes "the logo looks small".
var LOGO = ASSET_BASE + "/assets/skull-bone-mark.png"; // PNG — most clients won't render SVG
var LOGO_W = 44; // display size; native 480x368 keeps it crisp on retina
var LOGO_H = 34;

/* The wordmark is always Bebas — in the masthead and in the footer signature.
   Everything around it stays in the body face, so only the mark switches. */
function wordmark(text) {
  var i = String(text).indexOf(BRAND);
  if (i === -1) return esc(text);
  return (
    esc(text.slice(0, i)) +
    '<span style="font-family:' + FONT_WORDMARK + ';font-size:14px;letter-spacing:1px">' + BRAND + "</span>" +
    esc(text.slice(i + BRAND.length))
  );
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

/* Shared shell — Modernist in email-safe form: light ground, 600px column,
   2px rules instead of shadows, radius 0 everywhere, uppercase headings. */
function shell(opts) {
  return (
    '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">' +
    '<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></head>' +
    '<body style="margin:0;padding:0;background:' + C.surface + ';">' +
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0">' + esc(opts.preheader || "") + "</div>" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + C.surface + ';padding:24px 12px">' +
    "<tr><td align=\"center\">" +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:' + C.bg + ';border:1px solid ' + C.rule + '">' +

    // masthead: solid black band carrying the white mark and wordmark. No tile —
    // the mark is transparent, so the band itself is its ground.
    '<tr><td style="background:' + C.ink + ';padding:20px 28px">' +
    '<table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
    '<td style="vertical-align:middle" width="' + LOGO_W + '">' +
    '<img src="' + LOGO + '" width="' + LOGO_W + '" height="' + LOGO_H + '" alt="GHXSTSHIP" style="display:block;border:0"></td>' +
    '<td style="padding-left:12px;font-family:' + FONT_WORDMARK + ';font-size:30px;line-height:34px;letter-spacing:2px;color:' + C.bg + ';text-transform:uppercase;vertical-align:middle">GHXSTSHIP</td>' +
    "</tr></table></td></tr>" +

    // body
    '<tr><td style="padding:30px 28px 26px">' +
    (opts.eyebrow
      ? '<p style="margin:0 0 10px;font-family:' + FONT + ';font-weight:600;font-size:12px;letter-spacing:2px;color:' + C.accentText + ';text-transform:uppercase">' + esc(opts.eyebrow) + "</p>"
      : "") +
    '<h1 style="margin:0 0 14px;font-family:' + FONT + ';font-weight:800;font-size:32px;line-height:1.02;letter-spacing:-0.5px;color:' + C.ink + ';text-transform:uppercase">' + opts.headline + "</h1>" +
    opts.body +
    "</td></tr>" +

    // footer
    '<tr><td style="background:' + C.surface + ';padding:18px 28px;border-top:2px solid ' + C.rule + ';font-family:' + FONT + ';font-size:12px;line-height:1.6;color:' + C.faint + ';text-align:center">' +
    wordmark(opts.footer || "") + "</td></tr>" +

    "</table></td></tr></table></body></html>"
  );
}

function para(text) {
  return '<p style="margin:0 0 16px;font-family:' + FONT + ';font-size:15px;line-height:1.65;color:' + C.body + '">' + text + "</p>";
}

function label(text) {
  return '<p style="margin:22px 0 10px;font-family:' + FONT + ';font-weight:600;font-size:12px;letter-spacing:2px;color:' + C.accentText + ';text-transform:uppercase">' + esc(text) + "</p>";
}

/* Primary button — green fill, dark ink, square. Matches .btn-primary. */
function button(href, labelText) {
  return (
    '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 8px"><tr>' +
    '<td style="background:' + C.accent + '">' +
    '<a href="' + href + '" style="display:inline-block;padding:14px 26px;font-family:' + FONT + ';font-weight:800;font-size:15px;letter-spacing:0.5px;text-transform:uppercase;color:' + C.onAccent + ';text-decoration:none">' + esc(labelText) + "</a>" +
    "</td></tr></table>"
  );
}

/* Numbered step list. `done` fills the marker green, matching the site's
   phase strip. Square markers — the system carries no border radius. */
function steps(rows) {
  return (
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:2px 0 18px">' +
    rows
      .map(function (s) {
        var done = !!s[3];
        return (
          "<tr>" +
          '<td style="padding:0 14px 14px 0;vertical-align:top;width:30px">' +
          '<span style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;background:' + (done ? C.accent : C.bg) + ';border:2px solid ' + (done ? C.accent : C.rule) + ';font-family:' + FONT + ';font-size:12px;font-weight:800;color:' + (done ? C.onAccent : C.faint) + '">' + s[0] + "</span></td>" +
          '<td style="padding:0 0 14px;vertical-align:top">' +
          '<div style="font-family:' + FONT + ';font-weight:800;font-size:15px;color:' + C.ink + ';text-transform:uppercase">' + esc(s[1]) +
          (done ? ' <span style="font-weight:600;font-size:11px;letter-spacing:1px;color:' + C.accentText + '">— you are here</span>' : "") + "</div>" +
          '<div style="font-family:' + FONT + ';font-size:14px;line-height:1.55;color:' + C.muted + ';margin-top:3px">' + esc(s[2]) + "</div>" +
          "</td></tr>"
        );
      })
      .join("") +
    "</table>"
  );
}

/* Social row — matches the four channels in the site footer. */
function social() {
  return (
    label("Follow along") +
    '<p style="margin:0">' +
    [
      ["Instagram", "https://www.instagram.com/ghxstship.tours"],
      ["LinkedIn", "https://www.linkedin.com/company/ghxstship"],
      ["YouTube", "https://www.youtube.com/@ghxstship"],
      ["TikTok", "https://www.tiktok.com/@ghxstship.tours"],
    ]
      .map(function (s) {
        return '<a href="' + s[1] + '" style="font-family:' + FONT + ';font-weight:600;font-size:13px;color:' + C.accentText + ';text-decoration:none;margin-right:18px">' + s[0] + "</a>";
      })
      .join("") +
    "</p>"
  );
}

var FOOT_TAG = "GHXSTSHIP · Venture Beyond.";

/* Studio notification — the lead itself. Optimised for scanning: every
   submitted field as a labelled row, reply-to wired to the sender. */
function notificationEmail(fields, name, email, opts) {
  opts = opts || {};
  var rows = fields
    .map(function (f) {
      return (
        '<tr><td style="padding:9px 16px 9px 0;border-top:1px solid ' + C.hair + ';font-family:' + FONT + ';font-weight:600;font-size:12px;letter-spacing:1px;color:' + C.faint + ';text-transform:uppercase;vertical-align:top;white-space:nowrap">' + esc(f.label) + "</td>" +
        '<td style="padding:9px 0;border-top:1px solid ' + C.hair + ';font-family:' + FONT + ';font-size:15px;line-height:1.55;color:' + C.ink + '">' + esc(f.value).replace(/\n/g, "<br>") + "</td></tr>"
      );
    })
    .join("");
  var body =
    para(opts.intro || "A new inquiry came in through the site.") +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 20px;border-bottom:1px solid ' + C.hair + '">' + rows + "</table>" +
    button("mailto:" + esc(email), "Reply to " + (name ? esc(name.split(" ")[0]) : "sender"));
  return shell({
    eyebrow: opts.eyebrow || "New Inquiry",
    headline: opts.headline || 'New <span style="color:' + C.accentText + '">Inquiry.</span>',
    preheader: (name ? name + " — " : "") + (opts.preheader || "new inquiry from the site"),
    body: body,
    footer: FOOT_TAG + " · Sent from the site contact form",
  });
}

/* Applicant auto-reply. */
function applicationReceiptEmail(name, role) {
  var first = name ? name.split(" ")[0] : "there";
  var body =
    para("Thanks, " + esc(first) + " — your application" + (role ? ' for <strong style="color:' + C.ink + '">' + esc(role) + "</strong>" : "") + " reached the team. A person reads every one, and if there is a fit we will be in touch.") +
    label("How hiring works") +
    steps([
      ["1", "A team lead reviews it", "A human on the team, not a filter, reads every application.", false],
      ["2", "A short intro call", "If it is a fit, we set up a twenty-minute call to hear what you want to build.", false],
      ["3", "A working conversation", "A practical session with the department lead. The real work, not trivia.", false],
      ["4", "References and offer", "A quick reference check, then we get you started.", false],
    ]) +
    para("No experience yet? We train the next generation. Apply to Production Assistant and learn on real builds.") +
    button(SITE + "/team/", "Meet the Team") +
    social();
  return shell({
    eyebrow: "Application Received",
    headline: 'Application <span style="color:' + C.accentText + '">Received.</span>',
    preheader: "We got your application — here is how hiring works.",
    body: body,
    footer: FOOT_TAG + " · You are receiving this because you applied",
  });
}

/* Inquiry auto-reply. The four steps are what actually happens next, matching
   the process described on the contact page. */
function receiptEmail(name) {
  var first = name ? name.split(" ")[0] : "there";
  var body =
    para("Thanks, " + esc(first) + " — your brief is in. A producer will come back to you within one business day.") +
    label("What happens next") +
    steps([
      ["1", "We read the brief", "Your brief is logged and with a producer now.", true],
      ["2", "A consultation", "A real conversation about what you are building, who it is for, and when it has to happen.", false],
      ["3", "Scope and proposal", "Services, schedule, budget, and the named lead who owns the build.", false],
      ["4", "The nine phases", "Discover through Close on the XPMS 2.6 lifecycle, with a gate to clear at each.", false],
    ]) +
    para("In the meantime, see the work and the industries we build in:") +
    button(SITE + "/work/", "See the Work") +
    '<p style="margin:4px 0 0"><a href="' + SITE + '/destinations/" style="font-family:' + FONT + ';font-weight:600;font-size:13px;color:' + C.accentText + ';text-decoration:none">Explore the industries</a></p>' +
    social();
  return shell({
    eyebrow: "Brief Received",
    headline: 'We Got Your <span style="color:' + C.accentText + '">Brief.</span>',
    preheader: "We have your brief — here is what happens next.",
    body: body,
    footer: FOOT_TAG + " · You are receiving this because you contacted us",
  });
}

/* Attachment guardrails. The client (site-form.js) enforces the same limits;
   these re-checks protect the Resend quota from direct POSTs. */
var MAX_ATTACHMENTS = 2;
var MAX_ATTACH_BYTES = 3.5 * 1024 * 1024; // decoded size; body itself caps at 4.5 MB
var ATTACH_NAME_RE = /\.(pdf|doc|docx)$/i;

function sanitizeAttachments(raw) {
  if (!Array.isArray(raw)) return [];
  var out = [];
  for (var i = 0; i < raw.length && out.length < MAX_ATTACHMENTS; i++) {
    var a = raw[i];
    if (!a || typeof a.filename !== "string" || typeof a.content !== "string") continue;
    var name = a.filename.replace(/[\/\\]/g, "").trim().slice(-100);
    if (!name || !ATTACH_NAME_RE.test(name)) continue;
    if (!/^[A-Za-z0-9+/=\s]+$/.test(a.content)) continue;
    if (a.content.length * 0.75 > MAX_ATTACH_BYTES) continue;
    out.push({ filename: name, content: a.content.replace(/\s+/g, "") });
  }
  return out;
}

function send(key, payload) {
  return fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.method !== "POST") { res.statusCode = 405; res.end(JSON.stringify({ error: "Method not allowed" })); return; }

  var key = process.env.RESEND_API_KEY;
  if (!key) { res.statusCode = 500; res.end(JSON.stringify({ error: "Email is not configured on the server." })); return; }

  var body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body && typeof body === "object" ? body : {};

  if (body.company_website) { res.statusCode = 200; res.end(JSON.stringify({ ok: true })); return; } // honeypot

  var attachments = sanitizeAttachments(body.attachments);
  delete body.attachments;

  var email = String(body.email || "").trim().slice(0, 250);
  var name = String(body.name || body["first-name"] || "").trim().slice(0, 250);
  if (body["last-name"] && body["first-name"]) name = (body["first-name"] + " " + body["last-name"]).trim();
  if (!email || !EMAIL_RE.test(email)) { res.statusCode = 400; res.end(JSON.stringify({ error: "A valid email address is required." })); return; }

  var fields = Object.keys(body)
    .filter(function (k) { return k !== "company_website" && body[k] !== "" && body[k] != null; })
    .map(function (k) {
      return { label: k.replace(/[-_]/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); }), value: String(body[k]).slice(0, 5000) };
    });

  // RESEND_FROM must be "email@example.com" or "Name <email@example.com>".
  // A malformed value makes Resend 422 every send, which silently takes the
  // whole form down, so validate it and fall back to the known-good default
  // rather than trusting the environment.
  var rawFrom = String(process.env.RESEND_FROM || "").trim().replace(/^["']|["']$/g, "");
  var customFrom = FROM_RE.test(rawFrom) ? rawFrom : "";
  // A bare address sends with no display name, so recipients see the raw
  // mailbox instead of the brand. Wrap it in the lockup so the sender always
  // reads "GHXSTSHIP <address>" however the variable happens to be set.
  if (customFrom && customFrom.indexOf("<") === -1) customFrom = BRAND + " <" + customFrom + ">";
  if (rawFrom && !customFrom) {
    console.error("RESEND_FROM is malformed; falling back to the default sender. Value:", JSON.stringify(rawFrom));
  }
  var from = customFrom || DEFAULT_FROM;
  var to = process.env.CONTACT_TO || DEFAULT_TO;

  // Branch: a careers application vs a general/contact inquiry.
  var isApplication = String(body["form-type"] || "").toLowerCase() === "application" ||
    (!!body["why-ghxstship"] && (!!body.role || !!body["resume-cv"]));
  var role = String(body.role || "").trim();
  var inquiryType = String(body["inquiry-type"] || "").trim();

  var notifSubject, notifOpts, receiptSubject, receiptText, receiptHtml;
  if (isApplication) {
    notifSubject = "New application — " + (role || "General") + " — " + (name || email);
    notifOpts = {
      stamp: "New Application", eyebrow: "Crew Manifest",
      headline: 'New <span style="color:' + C.brass + '">Application.</span>',
      preheader: "New application" + (role ? " for " + role : "") + " from " + (name || email),
      intro: "A new application just came in" + (role ? " for " + esc(role) : "") + ". Reply directly to reach " + esc(name || "them") + ".",
    };
    receiptSubject = "Application received — GHXSTSHIP";
    receiptText = "Thanks, " + (name || "there") + " — your application" + (role ? " for " + role : "") + " reached the crew. A human reads every one; if there's a fit we'll be in touch.";
    receiptHtml = applicationReceiptEmail(name, role);
  } else {
    notifSubject = "New " + (inquiryType || "inquiry").toLowerCase() + " — " + (name || email);
    notifOpts = inquiryType ? { stamp: inquiryType, preheader: inquiryType + " from " + (name || email) } : {};
    receiptSubject = "Prepare for the journey — we've logged your brief";
    receiptText = "Thanks, " + (name || "there") + " — your vision reached the bridge. We've logged your brief; a producer will reach out within one business day to set the course.";
    receiptHtml = receiptEmail(name);
  }

  try {
    var notifPayload = {
      from: from, to: [to], reply_to: email,
      subject: notifSubject,
      text: notifSubject + "\n\n" + fields.map(function (f) { return f.label + ": " + f.value; }).join("\n"),
      html: notificationEmail(fields, name, email, notifOpts),
    };
    if (attachments.length) notifPayload.attachments = attachments;
    var r = await send(key, notifPayload);
    if (!r.ok) {
      var detail = await r.text();
      res.statusCode = 502; res.end(JSON.stringify({ error: "Email provider rejected the message.", detail: detail.slice(0, 300) })); return;
    }

    // Auto-reply receipt to the submitter. Deliverable from any verified
    // domain — including the default — and suppressed only on Resend's shared
    // onboarding sender. Best-effort: never fails the request.
    if (!SHARED_SENDER_RE.test(from)) {
      try {
        await send(key, {
          from: from, to: [email], reply_to: to,
          subject: receiptSubject, text: receiptText, html: receiptHtml,
        });
      } catch (e) { /* ignore receipt failures */ }
    }

    res.statusCode = 200; res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    res.statusCode = 500; res.end(JSON.stringify({ error: "Failed to send.", detail: String(err).slice(0, 300) }));
  }
};

// Template functions exposed for the preview generator (scripts/render-emails.js).
// Vercel invokes the handler above; these are inert at runtime.
module.exports.notificationEmail = notificationEmail;
module.exports.receiptEmail = receiptEmail;
module.exports.applicationReceiptEmail = applicationReceiptEmail;
