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
var LOGO = SITE + "/assets/skull-bone.svg";

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
    '<td style="vertical-align:middle"><img src="' + LOGO + '" width="26" height="26" alt="" style="vertical-align:middle">' +
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

/* Studio notification: the submission, as a labeled table. */
function notificationEmail(fields, name, email) {
  var rows = fields
    .map(function (f) {
      return (
        '<tr><td style="padding:7px 16px 7px 0;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:1px;color:' + C.fg3 + ';text-transform:uppercase;vertical-align:top;white-space:nowrap">' + esc(f.label) + "</td>" +
        '<td style="padding:7px 0;font-family:' + FONT_BODY + ';font-size:15px;line-height:1.5;color:' + C.bone + '">' + esc(f.value).replace(/\n/g, "<br>") + "</td></tr>"
      );
    })
    .join("");
  var body =
    para("A new inquiry just came in through the GHXSTSHIP site. Reply directly to this email to reach " + esc(name || "them") + ".") +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 18px;border-top:1px solid ' + C.ink3 + ';border-bottom:1px solid ' + C.ink3 + '">' + rows + "</table>" +
    button("mailto:" + esc(email), "Reply to " + (name ? esc(name.split(" ")[0]) : "sender"));
  return shell({
    stamp: "New Inquiry", eyebrow: "Incoming Transmission", headline: 'New Project <span style="color:' + C.brass + '">Inquiry.</span>',
    preheader: "New inquiry from " + (name || email), body: body,
    footer: "Sent by the GHXSTSHIP contact form · " + esc(email),
  });
}

/* Submitter auto-reply: confirmation + what happens next + connect. */
function receiptEmail(name) {
  var first = name ? name.split(" ")[0] : "there";
  var steps =
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:2px 0 20px">' +
    [
      ["01", "A producer reads your brief", "A human on the crew — not a bot — reviews what you sent."],
      ["02", "We chart a first course", "Within one business day we'll reach out to open Discovery: goals, scope, timeline."],
      ["03", "We build the ship", "Scope it full-build, by discipline, or by phase — sized to your destination."],
    ]
      .map(function (s) {
        return (
          "<tr>" +
          '<td style="padding:0 14px 16px 0;vertical-align:top;width:34px"><span style="font-family:' + FONT_DISPLAY + ';font-weight:800;font-size:22px;color:' + C.brass + '">' + s[0] + "</span></td>" +
          '<td style="padding:0 0 16px;vertical-align:top">' +
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
    para("Thanks, " + esc(first) + " — your brief reached the bridge. Consider this your boarding pass: we've logged it and a producer will be in touch within one business day.") +
    '<p style="margin:0 0 10px;font-family:' + FONT_MONO + ';font-size:11px;letter-spacing:2px;color:' + C.brass + ';text-transform:uppercase">What happens next</p>' +
    steps +
    para("While you wait, see what we've built and where we sail:") +
    '<div style="height:10px"></div>' +
    button(SITE + "/work/", "See the Archives") +
    '<div style="height:4px"></div>' +
    '<a href="' + SITE + '/destinations/" style="font-family:' + FONT_MONO + ';font-size:13px;letter-spacing:1px;color:' + C.plasma + ';text-decoration:none">Explore the Destinations ↗</a>' +
    social;

  return shell({
    stamp: "Boarding Pass", eyebrow: "Now Boarding", headline: "You're <span style=\"color:" + C.brass + "\">Aboard.</span>",
    preheader: "We got your brief — here's what happens next.", body: body,
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

  try {
    var r = await send(key, {
      from: from, to: [to], reply_to: email,
      subject: "New project inquiry — " + (name || email),
      text: "New inquiry\n\n" + fields.map(function (f) { return f.label + ": " + f.value; }).join("\n"),
      html: notificationEmail(fields, name, email),
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
          subject: "You're aboard — we got your brief",
          text: "Thanks, " + (name || "there") + " — your brief reached the bridge. A producer will be in touch within one business day.",
          html: receiptEmail(name),
        });
      } catch (e) { /* ignore receipt failures */ }
    }

    res.statusCode = 200; res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    res.statusCode = 500; res.end(JSON.stringify({ error: "Failed to send.", detail: String(err).slice(0, 300) }));
  }
};
