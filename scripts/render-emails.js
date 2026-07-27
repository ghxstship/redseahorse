#!/usr/bin/env node
/*
 * Renders the transactional email templates from their single source of truth
 * (api/contact.js) into ui_kits/email/ as previewable HTML, plus an index.
 *
 * The templates are JS functions so they can interpolate real submissions.
 * Hand-copying them into the kit would drift the moment either side changed,
 * so the kit is generated instead. Run after touching the email layer:
 *
 *   node scripts/render-emails.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "ui_kits", "email");
const t = require(path.join(ROOT, "api", "contact.js"));

const SAMPLE_FIELDS = [
  { label: "Name", value: "Dana Reyes" },
  { label: "Company", value: "Northwind Live" },
  { label: "Email", value: "dana@northwind.example" },
  { label: "Inquiry Type", value: "New Project" },
  { label: "Destination", value: "Festival" },
  {
    label: "The Brief",
    value:
      "Two-stage festival, 12k cap, Miami, next March.\nNeed production, site ops, and ticketing.",
  },
];

const TEMPLATES = [
  {
    file: "notification.html",
    name: "Studio Notification",
    sent: "To the studio when any form is submitted",
    html: () =>
      t.notificationEmail(SAMPLE_FIELDS, "Dana Reyes", "dana@northwind.example", {}),
  },
  {
    file: "inquiry-receipt.html",
    name: "Inquiry Auto-Reply",
    sent: "To the sender after a contact-form submission",
    html: () => t.receiptEmail("Dana Reyes"),
  },
  {
    file: "application-receipt.html",
    name: "Application Auto-Reply",
    sent: "To the applicant after a careers submission",
    html: () => t.applicationReceiptEmail("Sam Ortiz", "Production Manager"),
  },
];

fs.mkdirSync(OUT, { recursive: true });
for (const tpl of TEMPLATES) {
  fs.writeFileSync(path.join(OUT, tpl.file), tpl.html());
  console.log("  wrote ui_kits/email/" + tpl.file);
}

const cards = TEMPLATES.map(
  (tpl) => `      <a class="svc-card" href="${tpl.file}">
        <div class="bar"></div>
        <p class="role">Transactional</p>
        <h2>${tpl.name}</h2>
        <p>${tpl.sent}</p>
        <span class="more">Open the preview →</span>
      </a>`
).join("\n");

fs.writeFileSync(
  path.join(OUT, "index.html"),
  `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Email Templates — GHXSTSHIP</title>
<link rel="stylesheet" href="../../modernist.css">
<style>
  .note { max-width: 68ch; }
  .note code { font-size: 0.867rem; background: var(--color-surface); padding: 1px 5px; }
</style>
</head>
<body>
<main id="main">

<section class="wrap" style="padding-block:clamp(36px,5vw,64px) 0;">
  <p class="kicker">Email</p>
  <h1 class="page-h1">Transactional Templates.</h1>
  <p class="lede">The three emails the site sends, rendered from their source in <code>api/contact.js</code>. Modernist in email-safe form: table layout, inline styles, literal hex, no custom properties.</p>
  <hr class="hr" style="margin-top:clamp(24px,4vw,40px);">
</section>

<section class="wrap sec-pad-sm">
  <div class="grid3">
${cards}
  </div>
</section>

<section class="wrap sec-pad-sm"><div class="note">
  <p class="kicker">Generated</p>
  <h2 class="sec-h2-sm">Do Not Hand-Edit.</h2>
  <p class="lede">These files are output. Edit the template functions in <code>api/contact.js</code>, then run <code>node scripts/render-emails.js</code> to refresh them. Hand-editing here would drift from what actually sends.</p>
</div></section>

</main>
</body></html>
`
);
console.log("  wrote ui_kits/email/index.html");
console.log("Done.");
