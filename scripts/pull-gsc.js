#!/usr/bin/env node
/**
 * GOOGLE SEARCH CONSOLE — DAILY DATA PULL
 * Fetches real search performance data (clicks, impressions, CTR, position)
 * and merges into the daily analytics snapshot.
 *
 * Usage: node scripts/pull-gsc.js
 * Requires: scripts/gsc-service-account.json
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const SA_PATH = process.env.GSC_SERVICE_ACCOUNT || path.join(__dirname, 'gsc-service-account.json');
const SITE_URL = 'sc-domain:ein.so';
const GSC_API = 'https://www.googleapis.com/webmasters/v3/sites';
const DAILY_DIR = path.join(__dirname, '..', 'data', 'analytics', 'daily');
const today = new Date().toISOString().split('T')[0];

if (!fs.existsSync(SA_PATH)) {
  console.error('❌ Missing service account file:', SA_PATH);
  process.exit(1);
}

const sa = JSON.parse(fs.readFileSync(SA_PATH, 'utf8'));

// ─── AUTH ─────────────────────────────────────────────────────

async function getAccessToken() {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: sa.token_uri,
    iat: now,
    exp: now + 3600,
  })).toString('base64url');

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(sa.private_key, 'base64url');

  const res = await fetch(sa.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${header}.${payload}.${signature}`,
  });

  const data = await res.json();
  if (!data.access_token) throw new Error(`Auth failed: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function gscQuery(token, body) {
  const encodedSite = encodeURIComponent(SITE_URL);
  const res = await fetch(`${GSC_API}/${encodedSite}/searchAnalytics/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GSC API (${res.status}): ${await res.text()}`);
  return res.json();
}

// ─── MAIN ─────────────────────────────────────────────────────

async function pullGSC() {
  console.log(`\n🔍 Pulling Google Search Console data — ${today}\n`);

  const token = await getAccessToken();
  console.log('  ✅ Authenticated with GSC');

  const errors = [];
  const gscData = {
    date: today,
    pulled_at: new Date().toISOString(),
    queries: [],
    pages: [],
    countries: [],
    devices: [],
    totals: {},
  };

  // GSC data has a 2-3 day delay. Pull the last 7 days of available data.
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - 2); // 2 days ago (latest reliable data)
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 6); // 7-day window

  const dateRange = {
    startDate: startDate.toISOString().split('T')[0],
    endDate: endDate.toISOString().split('T')[0],
  };

  gscData.date_range = dateRange;
  console.log(`  📅 Date range: ${dateRange.startDate} → ${dateRange.endDate}`);

  // 1: Top queries (keywords)
  try {
    const data = await gscQuery(token, {
      ...dateRange,
      dimensions: ['query'],
      rowLimit: 100,
      type: 'web',
    });
    gscData.queries = (data.rows || []).map(r => ({
      query: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Math.round(r.ctr * 10000) / 100, // as percentage
      position: Math.round(r.position * 10) / 10,
    }));
    console.log(`  ✅ Queries: ${gscData.queries.length} keywords`);
  } catch (err) {
    console.log(`  ❌ Queries: ${err.message}`);
    errors.push(`queries: ${err.message}`);
  }

  // 2: Top pages
  try {
    const data = await gscQuery(token, {
      ...dateRange,
      dimensions: ['page'],
      rowLimit: 100,
      type: 'web',
    });
    gscData.pages = (data.rows || []).map(r => ({
      page: r.keys[0].replace('https://www.ein.so', '').replace(/\/$/, '') || '/',
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Math.round(r.ctr * 10000) / 100,
      position: Math.round(r.position * 10) / 10,
    }));
    console.log(`  ✅ Pages: ${gscData.pages.length} pages`);
  } catch (err) {
    console.log(`  ❌ Pages: ${err.message}`);
    errors.push(`pages: ${err.message}`);
  }

  // 3: Countries
  try {
    const data = await gscQuery(token, {
      ...dateRange,
      dimensions: ['country'],
      rowLimit: 50,
      type: 'web',
    });
    gscData.countries = (data.rows || []).map(r => ({
      country: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Math.round(r.ctr * 10000) / 100,
      position: Math.round(r.position * 10) / 10,
    }));
    console.log(`  ✅ Countries: ${gscData.countries.length} countries`);
  } catch (err) {
    console.log(`  ❌ Countries: ${err.message}`);
    errors.push(`countries: ${err.message}`);
  }

  // 4: Devices
  try {
    const data = await gscQuery(token, {
      ...dateRange,
      dimensions: ['device'],
      type: 'web',
    });
    gscData.devices = (data.rows || []).map(r => ({
      device: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Math.round(r.ctr * 10000) / 100,
      position: Math.round(r.position * 10) / 10,
    }));
    console.log(`  ✅ Devices: ${gscData.devices.length} types`);
  } catch (err) {
    console.log(`  ❌ Devices: ${err.message}`);
    errors.push(`devices: ${err.message}`);
  }

  // 5: Totals (no dimensions)
  try {
    const data = await gscQuery(token, {
      ...dateRange,
      type: 'web',
    });
    if (data.rows && data.rows[0]) {
      gscData.totals = {
        clicks: data.rows[0].clicks,
        impressions: data.rows[0].impressions,
        ctr: Math.round(data.rows[0].ctr * 10000) / 100,
        position: Math.round(data.rows[0].position * 10) / 10,
      };
      console.log(`  ✅ Totals: ${gscData.totals.clicks} clicks, ${gscData.totals.impressions} impressions, ${gscData.totals.ctr}% CTR`);
    }
  } catch (err) {
    console.log(`  ❌ Totals: ${err.message}`);
    errors.push(`totals: ${err.message}`);
  }

  gscData.errors = errors;

  // Merge into existing daily snapshot
  const dailyFile = path.join(DAILY_DIR, `${today}.json`);
  if (fs.existsSync(dailyFile)) {
    const existing = JSON.parse(fs.readFileSync(dailyFile, 'utf8'));
    existing.gsc = gscData;
    fs.writeFileSync(dailyFile, JSON.stringify(existing, null, 2));
    console.log(`\n💾 Merged GSC data into: ${dailyFile}`);
  } else {
    fs.mkdirSync(DAILY_DIR, { recursive: true });
    fs.writeFileSync(dailyFile, JSON.stringify({ date: today, gsc: gscData }, null, 2));
    console.log(`\n💾 Saved: ${dailyFile}`);
  }

  if (errors.length > 0) {
    console.log(`\n⚠️  ${errors.length} endpoint(s) failed`);
  } else {
    console.log(`\n✅ GSC pull complete`);
  }
}

pullGSC().catch(err => {
  console.error(`\n❌ Fatal error: ${err.message}`);
  process.exit(1);
});
