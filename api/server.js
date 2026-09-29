// TRIBE demo API: the only write path to Supabase. Validates everything, rate-limits by IP,
// and keeps the service-role key on the server. No dependencies (Node 18+ fetch).
"use strict";
const http = require("node:http");
const crypto = require("node:crypto");

const SB = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_ROLE;
const PORT = Number(process.env.PORT || 3010);
if (!SB || !KEY) { console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE are required"); process.exit(1); }

const RESERVED = new Set(["BANANA", "PIZZA", "FROG", "DUCK", "CAT", "ALIEN", "PENGUIN", "TACO", "MOON", "GEM"]);
const MASCOTS = new Set(["banana", "frog", "pizza", "duck", "cat", "alien", "blob"]);
const PALETTES = new Set(["banana", "pizza", "frog", "duck", "cat", "alien", "mint", "night"]);
const SUPPLIES = new Set([100e6, 1e9, 10e9]);
const IMAGE_TYPES = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp" };
const MAX_IMAGE = 800 * 1024;

// Tokenized stocks on Robinhood Chain a tribe can pair with. Prices come from each stock's Uniswap v3 pool
// against WETH, and WETH from the WETH/USDG pool.
const RPCS = ["https://rpc.mainnet.chain.robinhood.com", "https://robinhood.rpc.blxrbdn.com"];
const WETH = "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73";
const ETH_USD_POOL = "0x52e65b17fb6e5ba00ed806f37afcd2daa50271ca";
const STOCKS = [
  { symbol: "NVDA", name: "NVIDIA", address: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", pool: "0xc0be1cb0f674d9737c72b2a63fc542361185b807", wethIs0: true },
  { symbol: "TSLA", name: "Tesla", address: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d", pool: "0xa953ca88ff430e9487c60ca34d757414f4efda07", wethIs0: true },
  { symbol: "AAPL", name: "Apple", address: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", pool: "0x8bb3514e2204e1cdf3ac149efee7ff04d91b719f", wethIs0: true },
  { symbol: "META", name: "Meta Platforms", address: "0xc0D6457C16Cc70d6790Dd43521C899C87ce02f35", pool: "0xa4bdb396a69617eb7f70e2cc1ef526f7340b1b0d", wethIs0: true },
  { symbol: "COIN", name: "Coinbase", address: "0x6330D8C3178a418788dF01a47479c0ce7CCF450b", pool: "0x6707aeac7d0e519b083219d27bb427364363183a", wethIs0: true },
  { symbol: "MSTR", name: "Strategy Inc.", address: "0xec262a75e413fAfD0dF80480274532C79D42da09", pool: "0x70504a6fafdbfb75fe971faa4dd716e79ac5624c", wethIs0: true },
  { symbol: "SPY", name: "SPDR S&P 500 ETF Trust", address: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", pool: "0xddcbba3666f578e3f09516f21ff85bfee859ab5e", wethIs0: true },
  { symbol: "QQQ", name: "Invesco QQQ", address: "0xD5f3879160bc7c32ebb4dC785F8a4F505888de68", pool: "0xa40d00a55d43ba2d188039dcf88bd68f4f133e78", wethIs0: true },
  { symbol: "GLD", name: "SPDR Gold Trust", address: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", pool: "0x98996e833ea35ec17c3645ca7b6dd40d188564c4", wethIs0: true },
];
const PAIRS = new Set(["ETH", ...STOCKS.map((s) => s.symbol)]);

// ---- rate limiting: fixed window per IP and action ----
const hits = new Map();
function limited(ip, action, max, windowMs) {
  const k = ip + "|" + action, now = Date.now(), h = hits.get(k);
  if (!h || now - h.t > windowMs) { hits.set(k, { t: now, n: 1 }); return false; }
  h.n += 1;
  return h.n > max;
}
setInterval(() => { const now = Date.now(); for (const [k, h] of hits) if (now - h.t > 3600e3) hits.delete(k); }, 600e3).unref();

// ---- link normalising: same rules as the site ----
const Links = {
  x(v) { v = String(v || "").trim(); if (!v) return ""; const m = v.match(/^(?:https?:\/\/)?(?:www\.)?(?:x|twitter)\.com\/@?([A-Za-z0-9_]{1,15})\/?$/i) || v.match(/^@?([A-Za-z0-9_]{1,15})$/); return m ? "https://x.com/" + m[1] : null; },
  tg(v) { v = String(v || "").trim(); if (!v) return ""; const m = v.match(/^(?:https?:\/\/)?(?:t|telegram)\.me\/([A-Za-z0-9_+-]{3,64})\/?$/i) || v.match(/^@?([A-Za-z0-9_]{5,32})$/); return m ? "https://t.me/" + m[1] : null; },
  web(v) { v = String(v || "").trim(); if (!v) return ""; if (/\s/.test(v) || v.length > 200) return null; if (!/^https?:\/\//i.test(v)) v = "https://" + v; try { const u = new URL(v); return /^https?:$/.test(u.protocol) && /\.[a-z]{2,}$/i.test(u.hostname) ? u.href : null; } catch (_) { return null; } },
  clean(l) {
    l = l && typeof l === "object" ? l : {};
    const out = { x: Links.x(l.x), web: Links.web(l.web), tg: Links.tg(l.tg) };
    for (const k of ["x", "web", "tg"]) if (out[k] === null) throw new HttpError(400, `invalid ${k} link`);
    return out;
  },
};

class HttpError extends Error { constructor(status, msg) { super(msg); this.status = status; } }

async function sb(path, opts = {}) {
  const res = await fetch(SB + path, {
    ...opts,
    headers: { apikey: KEY, Authorization: "Bearer " + KEY, ...(opts.headers || {}) },
  });
  const text = await res.text();
  let body = null; try { body = text ? JSON.parse(text) : null; } catch (_) { body = text; }
  if (!res.ok) { const e = new HttpError(res.status === 409 ? 409 : 502, (body && (body.message || body.error)) || "database error"); e.code = body && body.code; throw e; }
  return body;
}

const PUBLIC_COLS = "id,ticker,name,mascot,palette,description,supply,pair,image_url,links,creator,created_at";

async function rpcBatch(calls) {
  for (const url of RPCS) {
    try {
      const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, signal: AbortSignal.timeout(8000),
        body: JSON.stringify(calls.map((c, i) => ({ jsonrpc: "2.0", id: i, method: "eth_call", params: [c, "latest"] }))) });
      const out = await res.json();
      if (!Array.isArray(out)) continue;
      const byId = new Map(out.map((x) => [x.id, x.result]));
      return calls.map((_, i) => byId.get(i));
    } catch (_) { /* try the next node */ }
  }
  throw new Error("chain unreachable");
}
// token1 per token0 in raw units, from slot0().sqrtPriceX96
const poolRatio = (hex) => { const q = BigInt("0x" + hex.slice(2, 66)); return Number((q * q * 10n ** 18n) >> 192n) / 1e18; };

async function stockPrices() {
  const r = await rpcBatch([{ to: ETH_USD_POOL, data: "0x3850c7bd" }, { to: ETH_USD_POOL, data: "0x0dfe1681" }, ...STOCKS.map((s) => ({ to: s.pool, data: "0x3850c7bd" }))]);
  const e = poolRatio(r[0]), wethIs0 = ("0x" + r[1].slice(26)).toLowerCase() === WETH.toLowerCase();
  const ethUsd = wethIs0 ? e * 1e12 : 1 / (e * 1e12); // USDG has 6 decimals, WETH 18
  const stocks = STOCKS.map((s, i) => {
    const q = r[i + 2] && r[i + 2].length >= 66 ? poolRatio(r[i + 2]) : 0;
    const inEth = q ? (s.wethIs0 ? 1 / q : q) : 0, usd = inEth * ethUsd;
    return { symbol: s.symbol, name: s.name, address: s.address, usd: usd > 1 && usd < 1e5 ? Math.round(usd * 100) / 100 : null };
  });
  return { ethUsd: Math.round(ethUsd * 100) / 100, stocks, at: new Date().toISOString() };
}
const sha = (s) => crypto.createHash("sha256").update(s).digest("hex");

async function createTribe(b, ip) {
  if (limited(ip, "launch", 5, 3600e3)) throw new HttpError(429, "Too many launches from this network. Try again later.");
  const name = String(b.name || "").trim(), ticker = String(b.ticker || "").trim().toUpperCase();
  const desc = String(b.desc || "").trim(), mascot = String(b.mascot || "blob"), palette = String(b.palette || "mint");
  const supply = Number(b.supply), creator = b.creator ? String(b.creator) : null, pair = String(b.pair || "ETH");
  if (name.length < 3 || name.length > 24) throw new HttpError(400, "Name must be 3 to 24 characters.");
  if (!/^[A-Z0-9]{2,8}$/.test(ticker)) throw new HttpError(400, "Ticker must be 2 to 8 letters or numbers.");
  if (RESERVED.has(ticker)) throw new HttpError(409, `$${ticker} is already taken by another tribe.`);
  if (desc.length < 10 || desc.length > 200) throw new HttpError(400, "Description must be 10 to 200 characters.");
  if (!MASCOTS.has(mascot) || !PALETTES.has(palette)) throw new HttpError(400, "Unknown mascot or palette.");
  if (!SUPPLIES.has(supply)) throw new HttpError(400, "Supply must be 100M, 1B or 10B.");
  if (!PAIRS.has(pair)) throw new HttpError(400, "Pair with ETH or one of the listed stocks.");
  if (creator && !/^0x[0-9a-fA-F]{40}$/.test(creator)) throw new HttpError(400, "Invalid creator address.");
  const links = Links.clean(b.links);
  const id = ticker.toLowerCase();

  let image_url = null;
  if (b.image) {
    const m = String(b.image).match(/^data:(image\/(?:png|jpeg|webp));base64,([A-Za-z0-9+/=]+)$/);
    if (!m) throw new HttpError(400, "Image must be PNG, JPG or WebP.");
    const buf = Buffer.from(m[2], "base64");
    if (buf.length > MAX_IMAGE) throw new HttpError(400, "Image is over 800 KB.");
    const path = `${id}-${crypto.randomBytes(6).toString("hex")}.${IMAGE_TYPES[m[1]]}`;
    await sb(`/storage/v1/object/mascots/${path}`, { method: "POST", headers: { "Content-Type": m[1], "x-upsert": "false" }, body: buf });
    image_url = `${SB}/storage/v1/object/public/mascots/${path}`;
  }

  const editKey = crypto.randomBytes(24).toString("hex");
  try {
    const rows = await sb(`/rest/v1/tribes?select=${PUBLIC_COLS}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Prefer: "return=representation" },
      body: JSON.stringify({ id, ticker, name, mascot, palette, description: desc, supply, pair, image_url, links, creator, edit_key_hash: sha(editKey) }),
    });
    return { tribe: rows[0], editKey };
  } catch (e) {
    if (e.code === "23505") throw new HttpError(409, `$${ticker} is already taken by another tribe.`);
    throw e;
  }
}

async function updateLinks(id, b, editKey, ip) {
  if (limited(ip, "links", 30, 3600e3)) throw new HttpError(429, "Too many edits. Try again later.");
  if (!/^[a-z0-9]{2,8}$/.test(id) || !editKey) throw new HttpError(403, "Not allowed.");
  const rows = await sb(`/rest/v1/tribes?id=eq.${id}&select=edit_key_hash`);
  if (!rows.length) throw new HttpError(404, "Tribe not found.");
  const a = Buffer.from(rows[0].edit_key_hash, "hex"), c = Buffer.from(sha(String(editKey)), "hex");
  if (a.length !== c.length || !crypto.timingSafeEqual(a, c)) throw new HttpError(403, "Only the creator can edit these links.");
  const links = Links.clean(b.links);
  const out = await sb(`/rest/v1/tribes?id=eq.${id}&select=${PUBLIC_COLS}`, { method: "PATCH", headers: { "Content-Type": "application/json", Prefer: "return=representation" }, body: JSON.stringify({ links }) });
  return { tribe: out[0] };
}

async function registerToken(b, ip) {
  if (limited(ip, "rt", 10, 3600e3)) throw new HttpError(429, "Too many registrations. Try again later.");
  const address = String(b.address || "").trim().toLowerCase(), ticker = String(b.ticker || "").trim().toUpperCase().replace(/^\$/, ""), name = String(b.name || "").trim();
  if (!/^0x[0-9a-f]{40}$/.test(address)) throw new HttpError(400, "Enter a token contract address: 0x followed by 40 hex characters.");
  if (!/^[A-Z0-9]{2,10}$/.test(ticker)) throw new HttpError(400, "Ticker: 2 to 10 letters or numbers.");
  if (name.length < 2 || name.length > 32) throw new HttpError(400, "Give the token a name.");
  try {
    const rows = await sb("/rest/v1/rt_tokens?select=address,ticker,name,created_at", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "return=representation" }, body: JSON.stringify({ address, ticker, name }) });
    return { token: rows[0] };
  } catch (e) {
    if (e.code === "23505") throw new HttpError(409, "That token is already registered.");
    throw e;
  }
}

function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on("data", (c) => { size += c.length; if (size > limit) { reject(new HttpError(413, "Request too large.")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {}); } catch (_) { reject(new HttpError(400, "Invalid JSON.")); } });
    req.on("error", reject);
  });
}

// short cache for the public lists
const cache = new Map();
async function cached(key, ms, fn) { const c = cache.get(key); if (c && Date.now() - c.t < ms) return c.v; const v = await fn(); cache.set(key, { t: Date.now(), v }); return v; }

const server = http.createServer(async (req, res) => {
  const ip = req.headers["x-real-ip"] || req.socket.remoteAddress || "?";
  const url = new URL(req.url, "http://x");
  const send = (status, obj) => { res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" }); res.end(JSON.stringify(obj)); };
  try {
    if (req.method === "GET" && url.pathname === "/api/health") return send(200, { ok: true });
    if (req.method === "GET" && url.pathname === "/api/tribes") return send(200, await cached("tribes", 5000, () => sb(`/rest/v1/tribes?select=${PUBLIC_COLS}&order=created_at.desc&limit=500`)));
    if (req.method === "GET" && url.pathname === "/api/stocks") return send(200, await cached("stocks", 60000, stockPrices));
    if (req.method === "GET" && url.pathname === "/api/realtribe") return send(200, await cached("rt", 5000, () => sb("/rest/v1/rt_tokens?select=address,ticker,name,created_at&order=created_at.desc&limit=1000")));
    if (req.method === "POST" && url.pathname === "/api/tribes") { const r = await createTribe(await readBody(req, 1.2e6), ip); cache.delete("tribes"); return send(201, r); }
    if (req.method === "POST" && url.pathname === "/api/realtribe") { const r = await registerToken(await readBody(req, 4096), ip); cache.delete("rt"); return send(201, r); }
    const lm = url.pathname.match(/^\/api\/tribes\/([a-z0-9]{2,8})\/links$/);
    if (req.method === "PATCH" && lm) { const r = await updateLinks(lm[1], await readBody(req, 4096), req.headers["x-edit-key"], ip); cache.delete("tribes"); return send(200, r); }
    send(404, { error: "Not found." });
  } catch (e) {
    const status = e.status || 500;
    if (status >= 500) console.error(new Date().toISOString(), req.method, url.pathname, e.message);
    send(status, { error: status >= 500 ? "Server error." : e.message });
  }
});
server.listen(PORT, "127.0.0.1", () => console.log("tribe-api on 127.0.0.1:" + PORT));
