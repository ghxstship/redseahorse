/* GHXSTSHIP — contact form handler (Vercel Serverless Function).
 *
 * Receives JSON from the site forms (site-form.js) and emails the submission
 * to the studio via Resend's REST API. The API key is read from the
 * RESEND_API_KEY environment variable — it is NEVER committed to the repo.
 *
 * Works alongside the static Next.js export (output: 'export'): Next ignores
 * the root /api directory, and Vercel deploys this file as a function at
 * /api/contact. If the function is unreachable (e.g. the static GitHub Pages
 * mirror), site-form.js falls back to a mailto: link, so the form still works.
 *
 * Required env var (set in Vercel → Project → Settings → Environment Variables):
 *   RESEND_API_KEY   your Resend key (re_...)
 * Optional:
 *   RESEND_FROM      verified sender, e.g. "GHXSTSHIP <hello@ghxstship.tours>"
 *                    defaults to Resend's shared onboarding@resend.dev sender
 *   CONTACT_TO       recipient, defaults to julian.clarkson@ghxstship.pro
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "GHXSTSHIP <onboarding@resend.dev>";
const DEFAULT_TO = "julian.clarkson@ghxstship.pro";
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Email is not configured on the server." }));
    return;
  }

  // Vercel parses JSON bodies for us, but be defensive.
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body && typeof body === "object" ? body : {};

  // Honeypot — bots fill hidden fields. Pretend success, send nothing.
  if (body.company_website) {
    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  const email = String(body.email || "").trim().slice(0, 250);
  const name = String(body.name || body["first-name"] || "").trim().slice(0, 250);
  if (!email || !EMAIL_RE.test(email)) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: "A valid email address is required." }));
    return;
  }

  // Build a readable email from every submitted field (minus the honeypot).
  const entries = Object.keys(body)
    .filter(function (k) { return k !== "company_website" && body[k] !== "" && body[k] != null; })
    .map(function (k) {
      const label = k.replace(/[-_]/g, " ").replace(/\b\w/g, function (m) { return m.toUpperCase(); });
      return { label: label, value: String(body[k]).slice(0, 5000) };
    });

  const textLines = entries.map(function (e) { return e.label + ": " + e.value; });
  const htmlRows = entries
    .map(function (e) {
      return (
        '<tr><td style="padding:6px 14px 6px 0;color:#7a8a86;font:600 12px/1.4 ui-monospace,monospace;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;white-space:nowrap">' +
        esc(e.label) +
        '</td><td style="padding:6px 0;color:#0b1314;font:400 15px/1.5 system-ui,sans-serif;white-space:pre-wrap">' +
        esc(e.value) +
        "</td></tr>"
      );
    })
    .join("");

  const subject = "New project inquiry — " + (name || email);
  const text = "New inquiry from the GHXSTSHIP site\n\n" + textLines.join("\n");
  const html =
    '<div style="background:#0b1314;padding:28px"><div style="max-width:560px;margin:0 auto;background:#fbfaf6;border-radius:8px;overflow:hidden">' +
    '<div style="background:#0b1314;padding:18px 24px"><span style="color:#fbfaf6;font:700 18px/1 system-ui,sans-serif;letter-spacing:.06em">GHXSTSHIP</span>' +
    '<span style="color:#3fb98e;font:600 12px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;margin-left:10px">New Inquiry</span></div>' +
    '<div style="padding:22px 24px"><table style="border-collapse:collapse;width:100%">' + htmlRows + "</table></div></div></div>";

  try {
    const r = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to: [process.env.CONTACT_TO || DEFAULT_TO],
        reply_to: email,
        subject: subject,
        text: text,
        html: html,
      }),
    });

    if (!r.ok) {
      const detail = await r.text();
      res.statusCode = 502;
      res.end(JSON.stringify({ error: "Email provider rejected the message.", detail: detail.slice(0, 300) }));
      return;
    }

    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
  } catch (err) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to send.", detail: String(err).slice(0, 300) }));
  }
};
