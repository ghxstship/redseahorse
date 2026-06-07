/* Live end-to-end test of the contact handler:
 * - invokes api/contact.js with a mock POST,
 * - captures the rendered email HTML to /tmp for visual inspection,
 * - forwards to the real Resend API so both emails actually deliver.
 * Run: RESEND_API_KEY=... node scripts/test-contact.mjs
 */
import { createRequire } from "module";
import { writeFileSync } from "fs";
const require = createRequire(import.meta.url);

const handler = require("../api/contact.js");

// Capture outgoing Resend payloads, then forward to the real API.
const realFetch = globalThis.fetch;
let n = 0;
globalThis.fetch = async (url, opts) => {
  try {
    const payload = JSON.parse(opts.body);
    const tag = payload.to && payload.to[0];
    const file = `/tmp/ghxst-email-${++n}-${(payload.subject || "").slice(0, 24).replace(/\W+/g, "-")}.html`;
    if (payload.html) writeFileSync(file, payload.html);
    console.log(`→ Resend send #${n}: to=${tag}  subject="${payload.subject}"  from=${payload.from}`);
    console.log(`   html saved: ${file}`);
  } catch (e) { console.log("capture error", e.message); }
  const res = await realFetch(url, opts);
  console.log(`   Resend status: ${res.status}`);
  return res;
};

const body = {
  name: "Jane Mariner",
  company: "Reef Records",
  email: process.env.TEST_EMAIL || "julian.clarkson@ghxstship.pro",
  destination: "Festival",
  "the-brief": "We're launching a two-day festival in Miami and need full production + crew. Targeting 15k/day.",
};

const req = { method: "POST", body };
const res = {
  statusCode: 200,
  _headers: {},
  setHeader(k, v) { this._headers[k] = v; },
  end(payload) { console.log(`\nHandler responded: ${this.statusCode} ${payload}`); },
};

await handler(req, res);
console.log("\nDone. Open the saved HTML files to inspect the branded templates.");
