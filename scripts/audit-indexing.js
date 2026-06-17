/**
 * Indexing hygiene audit — guards against the three Search Console statuses:
 *   - "Alternative page with proper canonical tag"  (mismatched canonicals)
 *   - "Page with redirect"                          (internal links missing trailing slash)
 *   - "Blocked due to other 4xx issue"              (links to non-existent routes)
 *
 * Cross-checks app routes, sitemap slugs, content canonicals, and every
 * internal link. Exits non-zero if any problem is found, so it can gate CI.
 *
 * Run: node scripts/audit-indexing.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const APP = path.join(ROOT, "src/app");
const CONTENT = path.join(ROOT, "src/content");
const COMPONENTS = path.join(ROOT, "src/components");
const LIB = path.join(ROOT, "src/lib");

function walk(dir, match) {
  let out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p, match));
    else if (match(e.name)) out.push(p);
  }
  return out;
}
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

let problems = 0;
function report(title, rows) {
  console.log(`\n${title}: ${rows.length}`);
  rows.forEach((r) => console.log("  " + r));
  problems += rows.length;
}

// --- Valid routes (folders with a page.tsx) ---
const routes = new Set(
  walk(APP, (n) => n === "page.tsx").map((f) => {
    const r = path.relative(APP, path.dirname(f)).split(path.sep).join("/");
    return "/" + (r === "" ? "" : r + "/");
  })
);

// --- 1. Canonicals must be self-referential ---
const canonRows = [];
for (const f of walk(CONTENT, (n) => n === "_index.md")) {
  const folder = path.dirname(path.relative(CONTENT, f).split(path.sep).join("/"));
  const m = fs.readFileSync(f, "utf-8").match(/^canonical:\s*["']?([^"'\n]+)["']?\s*$/m);
  const canon = m ? m[1].trim() : "MISSING";
  const expected = folder === "homepage" ? "/" : "/" + folder + "/";
  if (canon !== expected) canonRows.push(`${rel(f)}: canonical=${canon} expected=${expected}`);
}
report("Canonical mismatches", canonRows);

// --- 2. Sitemap slugs must map to a real route ---
const pd = fs.readFileSync(path.join(LIB, "page-data.ts"), "utf-8");
const slugs = [...pd.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
report("Sitemap slugs without a route (would 404)", slugs.filter((s) => !routes.has(s)));

// --- 3. Internal links: missing trailing slash or dead target ---
const ASSET = (u) =>
  /^\/(images|api|_next|og)\//.test(u) || /\.[a-z0-9]{2,5}$/i.test(u) ||
  ["/sitemap", "/robots", "/favicon", "/llms.txt"].some((p) => u.startsWith(p));
const linkRe = /href=["'`](\/[^"'`#?\s)]*)["'`]/g;
const mdRe = /\]\((\/[^)#?\s]*)\)/g;
const missingSlash = new Set();
const dead = new Set();
const srcFiles = [
  ...walk(APP, (n) => /\.(tsx|ts)$/.test(n)),
  ...walk(COMPONENTS, (n) => /\.(tsx|ts)$/.test(n)),
  ...walk(LIB, (n) => /\.(tsx|ts)$/.test(n)),
  ...walk(CONTENT, (n) => /\.(md|mdx)$/.test(n)),
];
for (const f of srcFiles) {
  const txt = fs.readFileSync(f, "utf-8");
  const urls = [];
  let m;
  while ((m = linkRe.exec(txt))) urls.push(m[1]);
  while ((m = mdRe.exec(txt))) urls.push(m[1]);
  for (const u of urls) {
    if (u === "/" || ASSET(u)) continue;
    const withSlash = u.endsWith("/") ? u : u + "/";
    if (!u.endsWith("/")) (routes.has(withSlash) ? missingSlash : dead).add(`${u}  (${rel(f)})`);
    else if (!routes.has(u)) dead.add(`${u}  (${rel(f)})`);
  }
}
report("Internal links missing trailing slash (would redirect)", [...missingSlash]);
report("Internal links to non-existent routes (4xx)", [...dead]);

console.log(`\nRoutes: ${routes.size} | Sitemap slugs: ${slugs.length}`);
if (problems === 0) console.log("\nOK — no indexing hygiene problems found.");
else console.log(`\nFAIL — ${problems} problem(s) found.`);
process.exit(problems === 0 ? 0 : 1);
