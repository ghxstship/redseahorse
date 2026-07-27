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
 *                               domain. Defaults to "GHXSTSHIP <ghxstship@atlvs.pro>" —
 *                               deliberately atlvs.pro, not ghxstship.tours: an inquiry
 *                               becomes a project tracked in ATLVS, so the sending identity
 *                               matches the system that owns the record. atlvs.pro is the
 *                               verified domain in Resend; ghxstship.tours is NOT verified
 *                               there, so do not "correct" this to a .tours address —
 *                               Resend would reject every send. Must be bare
 *                               "email@example.com" or "Name <email@example.com>", with no
 *                               surrounding quotes (Vercel stores the value literally, and
 *                               a stray quote or newline 422s every send).
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
// Images must be served from a host that answers 200 directly: email image
// proxies commonly refuse to follow redirects, and a redirected asset renders
// as a broken image. Since D1 landed (2026-07-27) the apex IS canonical and
// www 308s to it, so assets and links share one host. If the canonical host
// ever flips again, this is the line that has to move with it.
var ASSET_BASE = SITE;
// Tight-cropped master of the white flag: 480x368 transparent PNG whose artwork
// touches all four edges. The older skull-bone.png sits on a 64x64 canvas with
// ~47% empty padding, so every nominal size rendered about half as large as it
// read on paper. Cropping the frame is what actually fixes "the logo looks small".
var LOGO = ASSET_BASE + "/assets/skull-bone-mark.png"; // PNG — most clients won't render SVG
// The flag matches the cap height of the letters beside it, as it does in the
// site chrome: Bebas Neue caps are 0.72em, so 30px wordmark → 22px mark, and
// the width follows the 1.304:1 crop. Native 480x368 keeps it crisp on retina.
var WORDMARK_PX = 30;
var LOGO_H = Math.round(WORDMARK_PX * 0.72); // 22
var LOGO_W = Math.round(LOGO_H * 1.3043); // 29

/* Dark mode. Email has no custom properties and no color-mix, and every style
   here is inline, so the only lever is a <style> block of !important overrides
   keyed to a class on each element. Apple Mail, iOS Mail, Outlook.com and
   Outlook for Mac honour prefers-color-scheme this way. Gmail does not — it
   runs its own partial inversion on the light palette, which the black
   masthead and the green button already survive. The values mirror the dark
   tokens in modernist.css. */
var EMAIL_CSS =
  ":root{color-scheme:light dark;supported-color-schemes:light dark}" +
  "@media (prefers-color-scheme:dark){" +
  ".e-outer{background:#0b0b0b!important}" +
  ".e-card{background:#131313!important;border-color:#3a3a3a!important}" +
  ".e-ink{color:#f2f2f2!important}" +
  ".e-copy{color:#d4d4d4!important}" +
  ".e-muted{color:#a8a8a8!important}" +
  ".e-faint{color:#8f8f8f!important}" +
  ".e-accent{color:#2edb3a!important}" +
  ".e-hair{border-color:#333!important}" +
  ".e-foot{background:#1a1a1a!important;border-color:#3a3a3a!important}" +
  ".e-step{background:#131313!important;border-color:#5a5a5a!important;color:#8f8f8f!important}" +
  "}";

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

/* Shared shell — Modernist in email-safe form: 600px column, 2px rules
   instead of shadows, radius 0 everywhere, uppercase headings. The masthead
   is black in both schemes, exactly as the site header is. */
function shell(opts) {
  return (
    '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="color-scheme" content="light dark"><meta name="supported-color-schemes" content="light dark">' +
    '<link href="' + ASSET_BASE + '/fonts/wordmark.css" rel="stylesheet">' +
    "<style>" + EMAIL_CSS + "</style></head>" +
    '<body class="e-outer" style="margin:0;padding:0;background:' + C.surface + ';">' +
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0">' + esc(opts.preheader || "") + "</div>" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="e-outer" style="background:' + C.surface + ';padding:24px 12px">' +
    "<tr><td align=\"center\">" +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" class="e-card" style="width:600px;max-width:100%;background:' + C.bg + ';border:1px solid ' + C.rule + '">' +

    // masthead: solid black band carrying the white mark and wordmark. No tile —
    // the mark is transparent, so the band itself is its ground. The flag is
    // set to the cap height of the letters and both cells align on that box.
    '<tr><td style="background:' + C.ink + ';padding:20px 28px">' +
    '<table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
    '<td style="vertical-align:middle;line-height:' + LOGO_H + 'px" width="' + LOGO_W + '">' +
    '<img src="' + LOGO + '" width="' + LOGO_W + '" height="' + LOGO_H + '" alt="GHXSTSHIP" style="display:block;border:0"></td>' +
    '<td style="padding-left:12px;font-family:' + FONT_WORDMARK + ";font-size:" + WORDMARK_PX + "px;line-height:" + LOGO_H + 'px;letter-spacing:2px;color:' + C.bg + ';text-transform:uppercase;vertical-align:middle">GHXSTSHIP</td>' +
    "</tr></table></td></tr>" +

    // body
    '<tr><td style="padding:30px 28px 26px">' +
    (opts.eyebrow
      ? '<p class="e-accent" style="margin:0 0 10px;font-family:' + FONT + ';font-weight:600;font-size:12px;letter-spacing:2px;color:' + C.accentText + ';text-transform:uppercase">' + esc(opts.eyebrow) + "</p>"
      : "") +
    '<h1 class="e-ink" style="margin:0 0 14px;font-family:' + FONT + ';font-weight:800;font-size:32px;line-height:1.02;letter-spacing:-0.5px;color:' + C.ink + ';text-transform:uppercase">' + opts.headline + "</h1>" +
    opts.body +
    "</td></tr>" +

    // footer
    '<tr><td class="e-foot e-faint" style="background:' + C.surface + ';padding:18px 28px;border-top:2px solid ' + C.rule + ';font-family:' + FONT + ';font-size:12px;line-height:1.6;color:' + C.faint + ';text-align:center">' +
    wordmark(opts.footer || "") + "</td></tr>" +

    "</table></td></tr></table></body></html>"
  );
}

/* Headline in the site's shape: plain lead, green tail. Green is the accent
   text role, so it flips to base green in dark exactly like .kicker does. */
function accentWord(lead, tail) {
  return (
    esc(lead) + ' <span class="e-accent" style="color:' + C.accentText + '">' + esc(tail) + "</span>"
  );
}

function para(text) {
  return '<p class="e-copy" style="margin:0 0 16px;font-family:' + FONT + ';font-size:15px;line-height:1.65;color:' + C.body + '">' + text + "</p>";
}

function label(text) {
  return '<p class="e-accent" style="margin:22px 0 10px;font-family:' + FONT + ';font-weight:600;font-size:12px;letter-spacing:2px;color:' + C.accentText + ';text-transform:uppercase">' + esc(text) + "</p>";
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
          '<span' + (done ? "" : ' class="e-step"') + ' style="display:inline-block;width:24px;height:24px;line-height:24px;text-align:center;background:' + (done ? C.accent : C.bg) + ';border:2px solid ' + (done ? C.accent : C.rule) + ';font-family:' + FONT + ';font-size:12px;font-weight:800;color:' + (done ? C.onAccent : C.faint) + '">' + s[0] + "</span></td>" +
          '<td style="padding:0 0 14px;vertical-align:top">' +
          '<div class="e-ink" style="font-family:' + FONT + ';font-weight:800;font-size:15px;color:' + C.ink + ';text-transform:uppercase">' + esc(s[1]) +
          (done ? ' <span class="e-accent" style="font-weight:600;font-size:11px;letter-spacing:1px;color:' + C.accentText + '">— you are here</span>' : "") + "</div>" +
          '<div class="e-muted" style="font-family:' + FONT + ';font-size:14px;line-height:1.55;color:' + C.muted + ';margin-top:3px">' + esc(s[2]) + "</div>" +
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
        return '<a class="e-accent" href="' + s[1] + '" style="font-family:' + FONT + ';font-weight:600;font-size:13px;color:' + C.accentText + ';text-decoration:none;margin-right:18px">' + s[0] + "</a>";
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
        '<tr><td class="e-hair e-faint" style="padding:9px 16px 9px 0;border-top:1px solid ' + C.hair + ';font-family:' + FONT + ';font-weight:600;font-size:12px;letter-spacing:1px;color:' + C.faint + ';text-transform:uppercase;vertical-align:top;white-space:nowrap">' + esc(f.label) + "</td>" +
        '<td class="e-hair e-ink" style="padding:9px 0;border-top:1px solid ' + C.hair + ';font-family:' + FONT + ';font-size:15px;line-height:1.55;color:' + C.ink + '">' + esc(f.value).replace(/\n/g, "<br>") + "</td></tr>"
      );
    })
    .join("");
  var body =
    para(opts.intro || "A new inquiry came in through the site.") +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="e-hair" style="margin:6px 0 20px;border-bottom:1px solid ' + C.hair + '">' + rows + "</table>" +
    button("mailto:" + esc(email), "Reply to " + (name ? esc(name.split(" ")[0]) : "sender"));
  return shell({
    eyebrow: opts.eyebrow || "New Inquiry",
    headline: opts.headline || accentWord("New", "Inquiry."),
    preheader: (name ? name + " — " : "") + (opts.preheader || "new inquiry from the site"),
    body: body,
    footer: FOOT_TAG + " · Sent from the site contact form",
  });
}

/* Applicant auto-reply. */
function applicationReceiptEmail(name, role) {
  var first = name ? name.split(" ")[0] : "there";
  var body =
    para("Thanks, " + esc(first) + " — your application" + (role ? ' for <strong class="e-ink" style="color:' + C.ink + '">' + esc(role) + "</strong>" : "") + " is in. A person reads every one, and if there is a fit you will hear from us directly.") +
    label("How hiring works") +
    steps([
      ["1", "The Read", "A lead on the team reads it. Not a filter, not a keyword match — the person you would actually work for.", false],
      ["2", "The Call", "Twenty minutes to hear what you want to build and to tell you honestly what the work is like.", false],
      ["3", "The Working Session", "A practical conversation with the department lead about real problems from real builds. No trivia, no whiteboard theatre.", false],
      ["4", "The Offer", "References, terms, a start date, and the name of the person you report to.", false],
    ]) +
    para("No experience yet? We train the next generation. Apply to Production Assistant and learn it on a live build.") +
    button(SITE + "/team/", "Meet the Team") +
    social();
  return shell({
    eyebrow: "Application Received",
    headline: accentWord("Application", "Received."),
    preheader: "Your application is with the team. Here is how hiring works.",
    body: body,
    footer: FOOT_TAG + " · You are receiving this because you applied",
  });
}

/* Inquiry auto-reply. The four steps are what actually happens next, matching
   the process described on the contact page. Named as the four things rather
   than described as four actions — the site labels sections literally, and a
   noun the reader can hold ("The Proposal") beats a verb phrase they have to
   parse. The last step is the work itself, so it carries the work's name. */
function receiptEmail(name) {
  var first = name ? name.split(" ")[0] : "there";
  var body =
    para("Thanks, " + esc(first) + " — your brief is in, and a producer has it now. You will hear back within one business day.") +
    label("What happens next") +
    steps([
      ["1", "The Brief", "What you just sent. It is logged, it is read by a person, and it is already with the producer who will own it.", true],
      ["2", "The Consultation", "A real conversation, not a pitch. What you are building, who it is for, what it has to do, and the date it cannot move.", false],
      ["3", "The Proposal", "Scope, schedule, budget, and the name of the lead who is accountable for the build. Written down, nothing implied.", false],
      ["4", "The Production", "Nine gated phases, Discover through Close, each with deliverables to hand over and a gate to clear before the next one opens.", false],
    ]) +
    para("Until then, the work speaks for itself:") +
    button(SITE + "/work/", "See the Work") +
    '<p style="margin:4px 0 0"><a class="e-accent" href="' + SITE + '/destinations/" style="font-family:' + FONT + ';font-weight:600;font-size:13px;color:' + C.accentText + ';text-decoration:none">Explore the industries</a></p>' +
    social();
  return shell({
    eyebrow: "Brief Received",
    headline: accentWord("We Have Your", "Brief."),
    preheader: "Your brief is with a producer. Here is what happens next.",
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

  /* Subjects. The two auto-replies are deliberately parallel and short — the
     From line already says GHXSTSHIP, so repeating it in the subject spends
     the only characters a phone will show. Plain, confident, no filler and no
     travel metaphor: the reader wants to know we have the thing. The two
     studio notifications stay front-loaded for scanning in a full inbox. */
  var notifSubject, notifOpts, receiptSubject, receiptText, receiptHtml;
  if (isApplication) {
    notifSubject = "New application — " + (role || "General") + " — " + (name || email);
    notifOpts = {
      eyebrow: "New Application",
      headline: accentWord("New", "Application."),
      preheader: "New application" + (role ? " for " + role : "") + " from " + (name || email),
      intro: "A new application just came in" + (role ? " for " + esc(role) : "") + ". Reply directly to reach " + esc(name || "them") + ".",
    };
    receiptSubject = "We have your application.";
    receiptText =
      "Thanks, " + (name || "there") + " — your application" + (role ? " for " + role : "") + " is in.\n\n" +
      "How hiring works:\n" +
      "1. The Read — a lead on the team reads it. Not a filter, not a keyword match.\n" +
      "2. The Call — twenty minutes to hear what you want to build.\n" +
      "3. The Working Session — a practical conversation with the department lead.\n" +
      "4. The Offer — references, terms, a start date, and who you report to.\n\n" +
      "GHXSTSHIP · Venture Beyond.";
    receiptHtml = applicationReceiptEmail(name, role);
  } else {
    notifSubject = "New brief — " + (inquiryType ? inquiryType + " — " : "") + (name || email);
    notifOpts = inquiryType
      ? { eyebrow: inquiryType, preheader: inquiryType + " from " + (name || email) }
      : {};
    receiptSubject = "We have your brief.";
    receiptText =
      "Thanks, " + (name || "there") + " — your brief is in, and a producer has it now. " +
      "You will hear back within one business day.\n\n" +
      "What happens next:\n" +
      "1. The Brief — logged, read by a person, already with the producer who will own it.\n" +
      "2. The Consultation — a real conversation, not a pitch.\n" +
      "3. The Proposal — scope, schedule, budget, and the lead accountable for the build.\n" +
      "4. The Production — nine gated phases, Discover through Close.\n\n" +
      "GHXSTSHIP · Venture Beyond.";
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
