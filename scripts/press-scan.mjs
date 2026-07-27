#!/usr/bin/env node
/*
 * Press scanner — sweeps the web for coverage of every case study in
 * data/press/entries.json and merges what it finds into
 * data/press/inventory.json, ranked.
 *
 *   node scripts/press-scan.mjs              # scan everything
 *   node scripts/press-scan.mjs --entry=slug # scan one
 *   node scripts/press-scan.mjs --dry-run    # print, do not write
 *
 * Requires a search provider. There is no way to do this without one — a
 * plain fetch of a search engine gets blocked, and scraping SERPs violates
 * their terms. Set both:
 *
 *   PRESS_SEARCH_PROVIDER=brave   (or: serper)
 *   PRESS_SEARCH_KEY=...
 *
 * Brave's free tier is 2,000 queries/month; this scan uses roughly
 * 3 per entry, so a monthly full sweep of nine entries costs ~27.
 *
 * Sentiment is the one thing a keyword heuristic gets wrong in exactly the
 * cases that matter — a piece can be entirely negative without using a
 * negative word about the product. So the heuristic only ever downgrades to
 * "review", never promotes to "positive". If ANTHROPIC_API_KEY is set, new
 * items get a real read instead.
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRIES = join(ROOT, "data/press/entries.json");
const INVENTORY = join(ROOT, "data/press/inventory.json");

const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const ONLY = (args.find((a) => a.startsWith("--entry=")) || "").split("=")[1];

/* ── scoring ──────────────────────────────────────────────────────────────
 * 0-100. Deliberately weighted so that a nobody blog saying our name beats a
 * national outlet that does not: attribution is the whole point of the
 * inventory. Negative sentiment zeroes the score and sets usable:false — it
 * stays in the file so we are never surprised by it, and never cite it.
 */
const TIER_SCORE = {
  "national": 40, "national-trade": 40, "regional-broadcast": 30,
  "regional-alt-weekly": 28, "regional": 26, "niche-vertical": 24,
  "niche-lifestyle": 22, "primary-partner": 22, "reference": 20,
  // A photo agency is not authority, it is ASSETS. World Red Eye galleries
  // are the most reusable thing in the inventory for this kind of work, so
  // they rank above their editorial weight on purpose.
  "photo-agency": 26,
  "primary-project": 16, "listing": 10, "blog": 10, "student-press": 8,
  "reviews": 6, "unknown": 12,
};
const ATTRIBUTION_SCORE = {
  "named": 25,            // the article says GHXSTSHIP
  "partner-primary": 14,  // the client's own page for the project
  "project-primary": 10,  // the project's own site
  "project-only": 12,     // covers the project, does not name us
  "context-only": 6,      // covers the event around the project
  "adjacent": 3,          // same partner, different moment
};
const SENTIMENT_SCORE = {
  positive: 20, "neutral-positive": 16, neutral: 12,
  review: 6, unreviewed: 6, mixed: 4, negative: 0,
};

// Outlets we have already placed on the ladder. Anything unseen lands in
// "unknown" and gets flagged for a human to tier — guessing authority from a
// domain name is how a content farm ends up cited as a national.
const OUTLET_TIERS = {
  "newsweek.com": ["Newsweek", "national"],
  "foxbusiness.com": ["Fox Business", "national"],
  "foxnews.com": ["Fox News", "national"],
  "fox5ny.com": ["FOX 5 New York", "regional-broadcast"],
  "vice.com": ["Vice", "national"],
  "wwd.com": ["WWD", "national-trade"],
  "bizbash.com": ["BizBash", "national-trade"],
  "hollywoodreporter.com": ["The Hollywood Reporter", "national-trade"],
  "maxim.com": ["Maxim", "national"],
  "hola.com": ["¡HOLA! US", "national"],
  "billboard.com": ["Billboard", "national-trade"],
  "rollingstone.com": ["Rolling Stone", "national"],
  "eventmarketer.com": ["Event Marketer", "national-trade"],
  "livedesignonline.com": ["Live Design", "national-trade"],
  "prosoundweb.com": ["ProSoundWeb", "national-trade"],
  "mixonline.com": ["Mix", "national-trade"],
  "miaminewtimes.com": ["Miami New Times", "regional-alt-weekly"],
  "edmidentity.com": ["EDM Identity", "niche-vertical"],
  "grayarea.co": ["Gray Area", "niche-vertical"],
  "gayety.com": ["Gayety", "niche-lifestyle"],
  "theknockturnal.com": ["The Knockturnal", "niche-lifestyle"],
  "loopmag.co": ["Loop", "niche-lifestyle"],
  "laguestlist.com": ["LA Guestlist", "regional"],
  "identifyla.com": ["identify LA", "regional"],
  "whatnow.com": ["What Now", "regional"],
  "en.wikipedia.org": ["Wikipedia", "reference"],
  "yelp.com": ["Yelp", "reviews"],
  "nyunews.com": ["Washington Square News", "student-press"],
  "worldredeye.com": ["World Red Eye", "photo-agency"],
  "fohonline.com": ["FOH (Front of House)", "national-trade"],
  "avnation.tv": ["AVNation", "national-trade"],
  "usitt.org": ["USITT", "reference"],
  "l-acoustics.com": ["L-Acoustics", "primary-partner"],
  "magneticmag.com": ["Magnetic Magazine", "niche-vertical"],
  "edmtunes.com": ["EDMTunes", "niche-vertical"],
  "timeout.com": ["Time Out", "regional"],
  "miamiandbeaches.com": ["Greater Miami CVB", "listing"],
  "iedm.com": ["iEDM", "blog"],
  "soundforums.net": ["Sound Forums", "blog"],
  "exronmusic.com": ["Exron Music", "blog"],
};

// Never inventory ourselves, and never inventory a SERP wrapper.
const DROP_HOSTS = [
  "ghxstship.tours", "atlvs.pro", "ghxstship.pro",
  "google.", "bing.com", "duckduckgo.com", "facebook.com", "instagram.com",
  "x.com", "twitter.com", "pinterest.", "reddit.com", "tiktok.com",
  "linkedin.com", "youtube.com",
];

// Only ever downgrades. A hit here means "a human or a model must read this
// before it is quotable", not "this is negative".
const REVIEW_FLAGS = [
  "chaos", "chaotic", "backlash", "criticis", "slam", "blast", "lawsuit",
  "sue", "injur", "evacuat", "cancel", "refund", "outrage", "controvers",
  "scandal", "probe", "investigat", "fail", "collaps", "stampede", "arrest",
  "shut down", "shuttered", "in pain", "stunt", "publicity",
];

const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return ""; } };
const tierOf = (u) => {
  const h = host(u);
  for (const [d, v] of Object.entries(OUTLET_TIERS)) if (h === d || h.endsWith("." + d)) return v;
  return [h || "unknown", "unknown"];
};
const dropped = (u) => { const h = host(u); return DROP_HOSTS.some((d) => h.includes(d)); };

function recencyScore(dateish) {
  const y = Number(String(dateish || "").slice(0, 4));
  if (!y) return 4;
  const age = new Date().getUTCFullYear() - y;
  return age <= 1 ? 10 : age <= 2 ? 7 : age <= 4 ? 4 : 2;
}

function score(item) {
  if (item.sentiment === "negative") return 0;
  return Math.min(100,
    (TIER_SCORE[item.tier] ?? TIER_SCORE.unknown) +
    (ATTRIBUTION_SCORE[item.attribution] ?? 6) +
    (SENTIMENT_SCORE[item.sentiment] ?? 6) +
    recencyScore(item.date));
}

/* ── search providers ─────────────────────────────────────────────────── */
async function searchBrave(q, key) {
  const r = await fetch("https://api.search.brave.com/res/v1/web/search?q=" + encodeURIComponent(q) + "&count=20",
    { headers: { Accept: "application/json", "X-Subscription-Token": key } });
  if (!r.ok) throw new Error(`Brave ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const j = await r.json();
  return (j.web?.results || []).map((x) => ({ url: x.url, title: x.title, snippet: x.description, date: x.page_age || x.age }));
}

async function searchSerper(q, key) {
  const r = await fetch("https://google.serper.dev/search", {
    method: "POST", headers: { "X-API-KEY": key, "Content-Type": "application/json" },
    body: JSON.stringify({ q, num: 20 }),
  });
  if (!r.ok) throw new Error(`Serper ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const j = await r.json();
  return (j.organic || []).map((x) => ({ url: x.link, title: x.title, snippet: x.snippet, date: x.date }));
}

function provider() {
  const name = (process.env.PRESS_SEARCH_PROVIDER || "").toLowerCase();
  const key = process.env.PRESS_SEARCH_KEY;
  if (!name || !key) {
    console.error(
      "No search provider configured.\n\n" +
      "  PRESS_SEARCH_PROVIDER=brave|serper\n" +
      "  PRESS_SEARCH_KEY=...\n\n" +
      "Brave: https://brave.com/search/api/ (free tier 2,000 queries/month;\n" +
      "this scan uses about 3 per entry). The scanner cannot run without one —\n" +
      "search engines block unkeyed automated queries, and scraping their\n" +
      "results pages is against their terms."
    );
    process.exit(2);
  }
  if (name === "brave") return (q) => searchBrave(q, key);
  if (name === "serper") return (q) => searchSerper(q, key);
  console.error(`Unknown PRESS_SEARCH_PROVIDER "${name}" — expected brave or serper.`);
  process.exit(2);
}

/* ── sentiment + attribution ──────────────────────────────────────────── */
function heuristicSentiment(text) {
  const t = (text || "").toLowerCase();
  return REVIEW_FLAGS.some((f) => t.includes(f)) ? "review" : "unreviewed";
}

// Reads the actual page rather than the snippet, because the snippet is
// chosen by the search engine and is systematically the most dramatic
// sentence on the page.
async function classify(item, entry, brand) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return { sentiment: heuristicSentiment(item.title + " " + item.snippet), attribution: "project-only", classifier: "heuristic" };
  let page = "";
  try {
    const r = await fetch(item.url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; ghxstship-press-scan/1)" }, signal: AbortSignal.timeout(20000) });
    if (r.ok) page = (await r.text()).replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 12000);
  } catch { /* fall through to the snippet */ }
  const body = page || `${item.title}\n${item.snippet}`;
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      messages: [{
        role: "user",
        content:
          `Article about "${entry.title}" (${entry.partner}, ${entry.venue}, ${entry.year}).\n\n` +
          `Answer as JSON only: {"sentiment":"positive|neutral-positive|neutral|mixed|negative",` +
          `"attribution":"named|project-only|context-only|adjacent","quote":"<one quotable sentence, or empty>"}\n` +
          `"named" ONLY if the text contains "${brand.name}". Judge sentiment toward the event/brand, ` +
          `not toward the world. If the piece leads on chaos, criticism or political framing, that is ` +
          `mixed or negative even when the facts are flattering.\n\n${body}`,
      }],
    }),
  });
  if (!r.ok) return { sentiment: heuristicSentiment(item.title + " " + item.snippet), attribution: "project-only", classifier: "heuristic (api " + r.status + ")" };
  const j = await r.json();
  try {
    const out = JSON.parse((j.content?.[0]?.text || "{}").replace(/^```json|```$/g, "").trim());
    return { ...out, classifier: "claude-haiku-4.5" };
  } catch {
    return { sentiment: "unreviewed", attribution: "project-only", classifier: "unparsed" };
  }
}

/* ── main ─────────────────────────────────────────────────────────────── */
const cfg = JSON.parse(await readFile(ENTRIES, "utf8"));
const inv = JSON.parse(await readFile(INVENTORY, "utf8"));
const search = provider();
const entries = cfg.entries.filter((e) => !ONLY || e.slug === ONLY);
if (ONLY && !entries.length) { console.error(`No entry with slug "${ONLY}".`); process.exit(1); }

let added = 0, seen = 0;
for (const entry of entries) {
  const bucket = (inv.entries[entry.slug] ||= { title: entry.title, coverageStrength: "unscanned", sentimentOverall: null, note: "", items: [] });
  const known = new Set(bucket.items.map((i) => i.url.replace(/\/$/, "")));
  console.log(`\n${entry.slug}`);

  for (const q of entry.queries) {
    let hits = [];
    try { hits = await search(q); } catch (e) { console.log(`  ! ${q} — ${e.message}`); continue; }
    console.log(`  ? ${q} — ${hits.length} results`);
    for (const hit of hits) {
      seen++;
      const url = hit.url.replace(/\/$/, "");
      if (dropped(url) || known.has(url)) continue;
      known.add(url);
      const [outlet, tier] = tierOf(url);
      const cls = await classify(hit, entry, cfg.brand);
      const item = {
        url: hit.url, outlet, tier,
        sentiment: cls.sentiment || "unreviewed",
        attribution: cls.attribution || "project-only",
        date: (hit.date || "").slice(0, 7) || null,
        title: hit.title,
        quote: cls.quote || undefined,
        classifier: cls.classifier,
        firstSeen: new Date().toISOString().slice(0, 10),
        needsReview: tier === "unknown" || cls.sentiment === "unreviewed" || cls.sentiment === "review",
      };
      item.score = score(item);
      if (item.sentiment === "negative" || item.sentiment === "mixed") item.usable = false;
      bucket.items.push(item);
      added++;
      console.log(`    + [${item.score}] ${outlet} — ${hit.title?.slice(0, 64)}`);
    }
  }

  // Locked items keep their hand-written verdict; everything else re-ranks.
  for (const i of bucket.items) if (!i.locked) i.score = score(i);
  bucket.items.sort((a, b) => b.score - a.score);
  const usable = bucket.items.filter((i) => i.usable !== false);
  bucket.coverageStrength = usable.length ? bucket.coverageStrength : "none-found";
}

inv.generated = new Date().toISOString().slice(0, 10);
inv.generatedBy = `press-scan.mjs (${process.env.PRESS_SEARCH_PROVIDER})`;
const all = Object.values(inv.entries).flatMap((e) => e.items);
inv.summary = {
  ...inv.summary,
  entriesTracked: cfg.entries.length,
  entriesWithCoverage: Object.values(inv.entries).filter((e) => e.items.length).length,
  entriesWithNoCoverageFound: Object.values(inv.entries).filter((e) => !e.items.length).length,
  itemsTotal: all.length,
  itemsAttributedToGhxstship: all.filter((i) => i.attribution === "named").length,
  itemsNeedingReview: all.filter((i) => i.needsReview).length,
};

console.log(`\n${added} new of ${seen} results seen · ${inv.summary.itemsTotal} in inventory · ${inv.summary.itemsAttributedToGhxstship} name ${cfg.brand.name}`);
if (DRY) { console.log("(dry run — nothing written)"); process.exit(0); }
await writeFile(INVENTORY, JSON.stringify(inv, null, 2) + "\n");
console.log(`wrote ${INVENTORY.replace(ROOT + "/", "")}`);
