#!/usr/bin/env node
/* Offline test for the api/contact.js rate limiter.
 *
 *     node scripts/test-ratelimit.js
 *
 * Runs in the prebuild chain beside check-assets and normalize-copy --check,
 * because this is the one piece of the codebase that spends money when it is
 * wrong. It stubs fetch, so it never touches Resend and never bills anything.
 *
 * Unlike scripts/test-contact.mjs, which delivers real mail and refuses to run
 * without CONFIRM_LIVE_SEND=yes, this is free and deterministic and therefore
 * safe to gate the build on.
 *
 * The subtle behaviour it pins down: budget is CHECKED on arrival but SPENT on
 * a send. Someone mistyping their email and resubmitting must not lock
 * themselves out, and a bot tripping the honeypot must.
 */

process.env.RESEND_API_KEY = "test_key_not_used";

var sends = 0;
global.fetch = async function () { sends++; return { ok: true, text: async function () { return ""; } }; };

var handler = require("../api/contact.js");

var failures = [];

function check(label, actual, pass) {
  console.log("  " + (pass ? "ok  " : "FAIL") + "  " + label + "  " + actual);
  if (!pass) failures.push(label);
}

function post(ip, body) {
  var res = {
    statusCode: 200, headers: {}, body: null,
    setHeader: function (k, v) { this.headers[k.toLowerCase()] = v; },
    end: function (b) { this.body = b; },
  };
  // A spoofed leading entry, to prove clientIp reads the LAST hop and not the
  // client-supplied one. Every request in this file claims to be 1.2.3.4.
  return handler(
    { method: "POST", headers: { "x-forwarded-for": "1.2.3.4, " + ip }, body: body },
    res
  ).then(function () { return res; });
}

(async function () {
  console.log("rate limiter");
  var good = { email: "a@b.com", name: "Test", message: "hi" };

  var codes = [];
  for (var i = 0; i < 7; i++) codes.push((await post("9.9.9.9", good)).statusCode);
  check("5 through, then 429", codes.join(" "),
    codes.slice(0, 5).every(function (c) { return c === 200; }) &&
    codes.slice(5).every(function (c) { return c === 429; }));

  var limited = await post("9.9.9.9", good);
  check("Retry-After in seconds", limited.headers["retry-after"],
    /^[0-9]+$/.test(limited.headers["retry-after"] || ""));
  // Parse defensively: when the limiter regresses, `limited` is a 200 with no
  // error field, and the test has to report that rather than crash on it.
  var msg;
  try { msg = JSON.parse(limited.body).error; } catch (e) { msg = undefined; }
  check("429 body is JSON with an error", JSON.stringify(msg || null).slice(0, 34) + "…",
    typeof msg === "string");

  var fresh = (await post("8.8.8.8", good)).statusCode;
  check("a different IP is unaffected", fresh, fresh === 200);

  var bad = [];
  for (var j = 0; j < 6; j++) bad.push((await post("7.7.7.7", { email: "nope" })).statusCode);
  var recovered = (await post("7.7.7.7", good)).statusCode;
  check("6 validation failures do not spend budget", bad.join(" ") + " -> " + recovered,
    bad.every(function (c) { return c === 400; }) && recovered === 200);

  var hp = [];
  for (var k = 0; k < 6; k++) hp.push((await post("6.6.6.6", { company_website: "x", email: "a@b.com" })).statusCode);
  check("honeypot trips do spend budget", hp.join(" "), hp[5] === 429);

  var tripped = 0;
  for (var n = 0; n < 60 && !tripped; n++) {
    if ((await post("10.0.0." + n, good)).statusCode === 429) tripped = n + 1;
  }
  check("instance ceiling stops rotating IPs", "after " + tripped + " fresh addresses",
    tripped > 0 && tripped <= 40);

  console.log("  (" + sends + " stubbed provider calls, 0 real)");
  if (failures.length) {
    console.error("\nrate limiter FAILED: " + failures.join("; "));
    process.exit(1);
  }
})();
