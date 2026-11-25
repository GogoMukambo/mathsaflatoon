const fs = require("fs");
const http = require("http");
const path = require("path");
const aflatoonDb = require("./aflatoon-db");

const ROOT = path.resolve(__dirname, "..", "docs");
const PORT = Number(process.env.PORT) || 5180;
const SESSION_SECONDS = 60 * 60 * 24 * 30;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

let googleClientId = "";
try {
  const config = fs.readFileSync(path.join(__dirname, "..", "auth-config.js"), "utf8");
  const match = config.match(/googleClientId:\s*"([^"]*)"/);
  googleClientId = match ? match[1] : "";
} catch (_err) {
  googleClientId = "";
}

function sendJson(res, status, payload, extraHeaders) {
  const body = JSON.stringify(payload);
  res.writeHead(status, Object.assign({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Content-Length": Buffer.byteLength(body),
  }, extraHeaders || {}));
  res.end(body);
}

function aflatoonCookie(token, maxAge, secure) {
  const flag = secure ? "; Secure" : "";
  return [
    `aflatoon_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${flag}`,
    "aflatoon_phone=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0",
  ];
}

function readCookie(req, name) {
  const raw = String(req.headers.cookie || "");
  for (const part of raw.split(";")) {
    const index = part.indexOf("=");
    if (index < 0) continue;
    if (part.slice(0, index).trim() === name) return decodeURIComponent(part.slice(index + 1).trim());
  }
  return "";
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 2_000_000) {
        reject(new aflatoonDb.HttpError(413, "That update is too large."));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!chunks.length) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (_err) {
        reject(new aflatoonDb.HttpError(400, "The request could not be read."));
      }
    });
    req.on("error", () => reject(new aflatoonDb.HttpError(400, "The request could not be read.")));
  });
}

async function verifyGoogle(credential) {
  if (!googleClientId) throw new aflatoonDb.HttpError(400, "Google sign-in is not configured.");
  if (!credential || typeof credential !== "string" || credential.length > 8000) {
    throw new aflatoonDb.HttpError(400, "Google sign-in failed.");
  }
  let payload;
  try {
    const response = await fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(credential));
    payload = await response.json();
    if (!response.ok) throw new Error("invalid");
  } catch (_err) {
    throw new aflatoonDb.HttpError(401, "Google sign-in could not be verified.");
  }
  if (payload.aud !== googleClientId) throw new aflatoonDb.HttpError(401, "Google sign-in was for a different app.");
  const verified = payload.email_verified === true || payload.email_verified === "true";
  if (!verified) throw new aflatoonDb.HttpError(401, "That Google account email is not verified.");
  return {
    email: payload.email || "",
    name: [payload.given_name, payload.family_name].filter(Boolean).join(" "),
    sub: payload.sub || "",
  };
}

async function handleApi(req, res) {
  const route = new URL(req.url, "http://localhost").pathname;
  const secure = req.headers["x-forwarded-proto"] === "https";
  if (req.method === "GET" && route === "/api/health") {
    sendJson(res, 200, { ok: true, database: "supabase" });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/google") {
    const body = await readBody(req);
    const profile = await verifyGoogle(body.credential);
    const account = await aflatoonDb.loginWithGoogle(profile);
    sendJson(res, 200, {
      email: account.email,
      name: account.name,
      pinHash: account.pinHash,
      progress: account.progress,
    }, { "Set-Cookie": aflatoonCookie(account.token, SESSION_SECONDS, secure) });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/logout") {
    await aflatoonDb.deletePhoneSession(readCookie(req, "aflatoon_session"));
    sendJson(res, 200, { ok: true }, { "Set-Cookie": aflatoonCookie("", 0, secure) });
    return;
  }
  if (req.method === "GET" && route === "/api/aflatoon/me") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) {
      sendJson(res, 200, { email: "", name: "", pinHash: "", progress: null });
      return;
    }
    sendJson(res, 200, { email: account.email, name: account.name, pinHash: account.pinHash, progress: account.progress });
    return;
  }
  if (req.method === "PUT" && route === "/api/aflatoon/progress") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new aflatoonDb.HttpError(401, "Log in with Google to save course progress.");
    const body = await readBody(req);
    await aflatoonDb.saveCourseProgress(account.id, body.state);
    sendJson(res, 200, { ok: true });
    return;
  }
  if (req.method === "PUT" && route === "/api/aflatoon/focus-pin") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new aflatoonDb.HttpError(401, "Log in with Google to save the focus code.");
    const body = await readBody(req);
    await aflatoonDb.saveFocusPasscode(account.id, body.pinHash);
    sendJson(res, 200, { ok: true });
    return;
  }
  sendJson(res, 404, { error: "Not found." });
}

function fileForRequest(pathname) {
  let rel = "/";
  try {
    rel = decodeURIComponent(pathname);
  } catch (_err) {
    return null;
  }
  if (rel.includes("\0")) return null;
  rel = rel.replace(/^[/\\]+/, "");
  if (!rel || rel.endsWith("/")) rel += "index.html";
  const full = path.resolve(ROOT, rel);
  const root = path.resolve(ROOT);
  if (full !== root && !full.startsWith(root + path.sep)) return null;
  return full;
}

function serveStatic(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }
  const url = new URL(req.url, "http://localhost");
  let file = fileForRequest(url.pathname);
  if (!file) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  let stat;
  try {
    stat = fs.statSync(file);
  } catch (_err) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  if (stat.isDirectory()) file = path.join(file, "index.html");
  const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Cache-Control": type.startsWith("text/") || type.includes("javascript") ? "no-store" : "public, max-age=3600",
  });
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res);
      return;
    }
    serveStatic(req, res);
  } catch (err) {
    const status = err.status || 500;
    if (status === 500) console.error(err.message || err);
    if (!res.headersSent) sendJson(res, status, { error: status === 500 ? "Something went wrong. Please try again." : err.message });
    else res.end();
  }
});

aflatoonDb.ready().then(() => {
  server.listen(PORT, "0.0.0.0", () => {
    console.log("Maths Aflatoon: http://localhost:" + PORT);
    console.log("Database: supabase");
  });
}).catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
