/* GHXSTSHIP — contact form handler (Vercel Serverless Function).
 *
 * Emails the studio when a form is submitted AND sends the submitter a branded
 * auto-reply receipt with next steps + social links. Both emails use the
 * GHXSTSHIP email-kit design (ui_kits/email), rendered with inline styles for
 * email-client compatibility, via Resend's REST API.
 *
 * Env (Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY  (required)  Resend key, re_...
 *   RESEND_FROM     (optional)  verified sender, e.g. "GHXSTSHIP <hello@ghxstship.tours>".
 *                               Defaults to onboarding@resend.dev (delivers only to the
 *                               Resend account owner — fine for the studio notification;
 *                               the submitter auto-reply requires a verified domain, so it
 *                               is only sent when RESEND_FROM is set).
 *   CONTACT_TO      (optional)  recipient, defaults to julian.clarkson@ghxstship.pro
 */

var RESEND_ENDPOINT = "https://api.resend.com/emails";
var DEFAULT_FROM = "GHXSTSHIP <onboarding@resend.dev>";
var DEFAULT_TO = "julian.clarkson@ghxstship.pro";
var SITE = "https://ghxstship.tours";
var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Brand palette (literal hex — email clients don't support CSS variables).
var C = {
  void: "#0B1314", ink: "#101A1B", ink2: "#18262A", ink3: "#243234",
  bone: "#EDF1EF", brass: "#22B083", brassDeep: "#14835F", nebula: "#FFC24A",
  plasma: "#2E84D4", onBrass: "#06140E", fg2: "#A6B4B1", fg3: "#76847F",
};
var FONT_DISPLAY = "'Arial Black', 'Helvetica Neue', Impact, sans-serif";
var FONT_MONO = "'Courier New', Courier, monospace";
var FONT_BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif";
var LOGO = SITE + "/assets/skull-bone.png"; // PNG, not SVG — most email clients don't render SVG

function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

/* Shared email shell matching the kit: dark header (logo + wordmark + stamp),
   dark body (eyebrow, display headline, content), CTA, footer. */
function shell(opts) {
  var accent = opts.accent || C.brass;
  return (
    '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1"></head>' +
    '<body style="margin:0;padding:0;background:' + C.void + ';">' +
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0">' + esc(opts.preheader || "") + "</div>" +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + C.void + ';padding:28px 16px">' +
    "<tr><td align=\"center\">" +
    '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:' + C.ink + ';border-radius:10px;overflow:hidden">' +
    // header
    '<tr><td style="background:' + C.void + ';padding:22px 28px;border-bottom:3px solid ' + accent + '">' +
    '<table role="presentation" width="100%"><tr>' +
    '<td style="vertical-align:middle"><img src="' + LOGO + '" width="26" height="26" alt="GHXSTSHIP" style="vertical-align:middle;border:0;outline:none">' +
    '<span style="font-family:' + FONT_DISPLAY + ';font-weight:800;font-size:15px;letter-spacing:2px;color:' + C.bone + ';text-transform:uppercase;vertical-align:middle;margin-left:10px">G H X S T S H I P</span></td>' +
    '<td align="right" style="font-family:' + FONT_MONO + ';font-size:9px;letter-spacing:2px;color:' + accent + ';text-transform:uppercase">' + esc(opts.stamp || "Dispatch") + "</td>" +
    "</tr></table></td></tr>" +
    // body
    '<tr><td style="padding:32px 28px">' +
    '<p style="margin:0 0 12px;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:3px;color:' + accent + ';text-transform:uppercase">◆ ' + esc(opts.eyebrow || "") + "</p>" +
    '<h1 style="margin:0 0 16px;font-family:' + FONT_DISPLAY + ';font-weight:800;font-size:34px;line-height:1.02;letter-spacing:-0.5px;color:' + C.bone + ';text-transform:uppercase">' + opts.headline + "</h1>" +
    opts.body +
    "</td></tr>" +
    // footer
    '<tr><td style="background:' + C.void + ';padding:18px 28px;border-top:1px solid ' + C.ink3 + ';font-family:' + FONT_MONO + ';font-size:10px;letter-spacing:1px;color:' + C.fg3 + ';text-transform:uppercase;text-align:center">' +
    (opts.footer || "G H X S T S H I P · Miami // Las Vegas // Chicago // NY // LA · Venture Beyond") +
    "</td></tr>" +
    "</table></td></tr></table></body></html>"
  );
}

function para(text) {
  return '<p style="margin:0 0 16px;font-family:' + FONT_BODY + ';font-size:15px;line-height:1.6;color:' + C.fg2 + '">' + text + "</p>";
}
function button(href, label) {
  return (
    '<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 8px"><tr><td style="background:' + C.brass + ';border:2px solid ' + C.ink + '">' +
    '<a href="' + href + '" style="display:inline-block;padding:13px 24px;font-family:' + FONT_DISPLAY + ';font-weight:800;font-size:14px;letter-spacing:1px;text-transform:uppercase;color:' + C.onBrass + ';text-decoration:none">' + esc(label) + " ↗</a>" +
    "</td></tr></table>"
  );
}

/* Studio notification: the submission, as a labeled table. opts lets the
   application flow override the stamp/eyebrow/headline/intro. */
function notificationEmail(fields, name, email, opts) {
  opts = opts || {};
  var rows = fields
    .map(function (f) {
      return (
        '<tr><td style="padding:7px 16px 7px 0;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:1px;color:' + C.fg3 + ';text-transform:uppercase;vertical-align:top;white-space:nowrap">' + esc(f.label) + "</td>" +
        '<td style="padding:7px 0;font-family:' + FONT_BODY + ';font-size:15px;line-height:1.5;color:' + C.bone + '">' + esc(f.value).replace(/\n/g, "<br>") + "</td></tr>"
      );
    })
    .join("");
  var body =
    para(opts.intro || ("A new inquiry just came in through the GHXSTSHIP site. Reply directly to this email to reach " + esc(name || "them") + ".")) +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 18px;border-top:1px solid ' + C.ink3 + ';border-bottom:1px solid ' + C.ink3 + '">' + rows + "</table>" +
    button("mailto:" + esc(email), "Reply to " + (name ? esc(name.split(" ")[0]) : "sender"));
  return shell({
    stamp: opts.stamp || "New Inquiry",
    eyebrow: opts.eyebrow || "Incoming Transmission",
    headline: opts.headline || ('New Project <span style="color:' + C.brass + '">Inquiry.</span>'),
    preheader: opts.preheader || ("New inquiry from " + (name || email)), body: body,
    footer: "Sent by the GHXSTSHIP site · " + esc(email),
  });
}

/* Applicant auto-reply: confirmation + the hiring path + connect. */
function applicationReceiptEmail(name, role) {
  var first = name ? name.split(" ")[0] : "there";
  var steps =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:2px 0 20px">' +
    [
      ["1", "A crew lead reviews it", "A human on the crew — not a bot — reads every application."],
      ["2", "A short intro call", "If it's a fit, we'll set up a 20-minute call to learn what you want to build."],
      ["3", "A working conversation", "A practical session with the department lead — the real work, not trivia."],
      ["4", "References & offer", "A quick reference check, then we welcome you aboard."],
    ]
      .map(function (s) {
        return (
          "<tr>" +
          '<td style="padding:0 14px 14px 0;vertical-align:top;width:30px"><span style="display:inline-block;width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;border:2px solid ' + C.ink3 + ';font-family:' + FONT_MONO + ';font-size:12px;font-weight:700;color:' + C.fg3 + '">' + s[0] + "</span></td>" +
          '<td style="padding:0 0 14px;vertical-align:top">' +
          '<div style="font-family:' + FONT_DISPLAY + ';font-weight:800;font-size:15px;letter-spacing:.3px;color:' + C.bone + ';text-transform:uppercase">' + esc(s[1]) + "</div>" +
          '<div style="font-family:' + FONT_BODY + ';font-size:14px;line-height:1.55;color:' + C.fg2 + ';margin-top:3px">' + esc(s[2]) + "</div>" +
          "</td></tr>"
        );
      })
      .join("") +
    "</table>";
  var social =
    '<p style="margin:22px 0 8px;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:2px;color:' + C.fg3 + ';text-transform:uppercase">Follow the voyage</p>' +
    '<p style="margin:0">' +
    [["Instagram", "https://instagram.com/ghxstship"], ["LinkedIn", "https://linkedin.com/company/ghxstship"], ["YouTube", "https://youtube.com/@ghxstship"], ["X", "https://x.com/ghxstship"]]
      .map(function (s) { return '<a href="' + s[1] + '" style="font-family:' + FONT_MONO + ';font-size:13px;letter-spacing:1px;color:' + C.plasma + ';text-decoration:none;margin-right:16px">' + s[0] + "</a>"; })
      .join("") + "</p>";
  var body =
    para("Thanks, " + esc(first) + " — your application" + (role ? " for <strong style=\"color:" + C.bone + "\">" + esc(role) + "</strong>" : "") + " reached the crew. A human reads every one; if there's a fit we'll be in touch.") +
    '<p style="margin:0 0 10px;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:2px;color:' + C.brass + ';text-transform:uppercase">How hiring works</p>' +
    steps +
    para("No experience? We train the next generation — apply to Production Assistant and learn the ropes on real builds.") +
    '<div style="height:6px"></div>' +
    button(SITE + "/team/", "Meet the Crew") +
    social;
  return shell({
    stamp: "Crew Manifest", eyebrow: "Application Logged", headline: "Application <span style=\"color:" + C.brass + "\">Received.</span>",
    preheader: "We got your application — here's how hiring works.", body: body,
    footer: "G H X S T S H I P · You're receiving this because you applied · Venture Beyond",
  });
}

/* Submitter auto-reply: pre-booking confirmation framed around THE JOURNEY —
   the six stages from the marketing site. The Destination (the brief they just
   sent) is marked complete; the rest is the route ahead. */
function receiptEmail(name) {
  var first = name ? name.split(" ")[0] : "there";
  var steps =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:2px 0 20px">' +
    [
      ["1", "The Destination", "Share your vision — the brief you just sent.", true],
      ["2", "The Ship", "Build your vessel: a full build, a single discipline, or by the phase.", false],
      ["3", "The Course", "Chart the route — eight phases from first line to launch.", false],
      ["4", "The Crew", "Meet the producers and leads matched to your build.", false],
      ["5", "The Manifest", "Onboarding, approvals, and the know-before-you-go.", false],
      ["6", "Launch", "Anchors away — we run the show and strike clean.", false],
    ]
      .map(function (s) {
        var done = s[3];
        var dotColor = done ? C.brass : C.ink3;
        var dotText = done ? C.onBrass : C.fg3;
        return (
          "<tr>" +
          '<td style="padding:0 14px 14px 0;vertical-align:top;width:30px">' +
          '<span style="display:inline-block;width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:' + (done ? C.brass : "transparent") + ';border:2px solid ' + dotColor + ';font-family:' + FONT_MONO + ';font-size:12px;font-weight:700;color:' + dotText + '">' + s[0] + "</span></td>" +
          '<td style="padding:0 0 14px;vertical-align:top">' +
          '<div style="font-family:' + FONT_DISPLAY + ';font-weight:800;font-size:15px;letter-spacing:.3px;color:' + C.bone + ';text-transform:uppercase">' + esc(s[1]) + (done ? ' <span style="font-family:' + FONT_MONO + ';font-size:10px;letter-spacing:1px;color:' + C.brass + '">· YOU ARE HERE</span>' : "") + "</div>" +
          '<div style="font-family:' + FONT_BODY + ';font-size:14px;line-height:1.55;color:' + C.fg2 + ';margin-top:3px">' + esc(s[2]) + "</div>" +
          "</td></tr>"
        );
      })
      .join("") +
    "</table>";

  var social =
    '<p style="margin:22px 0 8px;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:2px;color:' + C.fg3 + ';text-transform:uppercase">Follow the voyage</p>' +
    '<p style="margin:0">' +
    [
      ["Instagram", "https://instagram.com/ghxstship"],
      ["LinkedIn", "https://linkedin.com/company/ghxstship"],
      ["YouTube", "https://youtube.com/@ghxstship"],
      ["X", "https://x.com/ghxstship"],
    ]
      .map(function (s) {
        return '<a href="' + s[1] + '" style="font-family:' + FONT_MONO + ';font-size:13px;letter-spacing:1px;color:' + C.plasma + ';text-decoration:none;margin-right:16px">' + s[0] + "</a>";
      })
      .join("") +
    "</p>";

  var body =
    para("Thanks, " + esc(first) + " — your vision reached the bridge. This is your confirmation: we've logged your brief and charted the first waypoint. A producer will reach out within one business day to set the course.") +
    '<p style="margin:0 0 10px;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:2px;color:' + C.brass + ';text-transform:uppercase">The journey ahead</p>' +
    steps +
    para("While you prepare, see where we sail and what we've built:") +
    '<div style="height:10px"></div>' +
    button(SITE + "/destinations/", "Explore the Destinations") +
    '<div style="height:4px"></div>' +
    '<a href="' + SITE + '/work/" style="font-family:' + FONT_MONO + ';font-size:13px;letter-spacing:1px;color:' + C.plasma + ';text-decoration:none">See the Archives ↗</a>' +
    social;

  return shell({
    stamp: "Pre-Departure", eyebrow: "Prepare to Board", headline: "Prepare for Your <span style=\"color:" + C.brass + "\">Journey.</span>",
    preheader: "We've logged your brief — here's the journey ahead.", body: body,
    footer: "G H X S T S H I P · You're receiving this because you contacted us · Venture Beyond",
  });
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

  var email = String(body.email || "").trim().slice(0, 250);
  var name = String(body.name || body["first-name"] || "").trim().slice(0, 250);
  if (body["last-name"] && body["first-name"]) name = (body["first-name"] + " " + body["last-name"]).trim();
  if (!email || !EMAIL_RE.test(email)) { res.statusCode = 400; res.end(JSON.stringify({ error: "A valid email address is required." })); return; }

  var fields = Object.keys(body)
    .filter(function (k) { return k !== "company_website" && body[k] !== "" && body[k] != null; })
    .map(function (k) {
      return { label: k.replace(/[-_]/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); }), value: String(body[k]).slice(0, 5000) };
    });

  var from = process.env.RESEND_FROM || DEFAULT_FROM;
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
    var r = await send(key, {
      from: from, to: [to], reply_to: email,
      subject: notifSubject,
      text: notifSubject + "\n\n" + fields.map(function (f) { return f.label + ": " + f.value; }).join("\n"),
      html: notificationEmail(fields, name, email, notifOpts),
    });
    if (!r.ok) {
      var detail = await r.text();
      res.statusCode = 502; res.end(JSON.stringify({ error: "Email provider rejected the message.", detail: detail.slice(0, 300) })); return;
    }

    // Auto-reply receipt to the submitter. Requires a verified domain
    // (RESEND_FROM); skipped on the shared onboarding sender, which can't
    // deliver to arbitrary addresses. Best-effort — never fails the request.
    if (process.env.RESEND_FROM) {
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
