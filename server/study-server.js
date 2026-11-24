const fs = require("fs");
const http = require("http");
const path = require("path");
const db = require("./db");
const aflatoonDb = require("./aflatoon-db");
const razorpay = require("./razorpay");
const email = require("./email");

const ROOT = path.resolve(__dirname, "..");
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
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json",
};

let googleClientId = "";
try {
  const config = fs.readFileSync(path.join(ROOT, "auth-config.js"), "utf8");
  const match = config.match(/googleClientId:\s*"([^"]*)"/);
  googleClientId = match ? match[1] : "";
} catch (_err) {
  googleClientId = "";
}

function sendJson(res, status, payload, extraHeaders) {
  const body = JSON.stringify(payload);
  const headers = Object.assign(
    {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "Content-Length": Buffer.byteLength(body),
    },
    extraHeaders || {}
  );
  res.writeHead(status, headers);
  res.end(body);
}

function sessionCookie(token, maxAge) {
  return `session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}

function aflatoonCookie(token, maxAge) {
  const session = `aflatoon_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
  const retired = "aflatoon_phone=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0";
  return [session, retired];
}

function readCookie(req, name) {
  const raw = String(req.headers.cookie || "");
  const parts = raw.split(";");
  for (const part of parts) {
    const index = part.indexOf("=");
    if (index < 0) continue;
    if (part.slice(0, index).trim() === name) {
      return decodeURIComponent(part.slice(index + 1).trim());
    }
  }
  return "";
}

function readToken(req) {
  const header = String(req.headers.authorization || "");
  if (header.startsWith("Bearer ")) return header.slice(7).trim();
  const raw = String(req.headers.cookie || "");
  const parts = raw.split(";");
  for (const part of parts) {
    const index = part.indexOf("=");
    if (index < 0) continue;
    if (part.slice(0, index).trim() === "session") {
      return decodeURIComponent(part.slice(index + 1).trim());
    }
  }
  return "";
}

async function requireUser(req) {
  const userId = await db.userIdFromToken(readToken(req));
  if (!userId) throw new db.HttpError(401, "Please sign in first.");
  return userId;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 2_000_000) {
        reject(new db.HttpError(413, "That update is too large."));
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
        reject(new db.HttpError(400, "The request could not be read."));
      }
    });
    req.on("error", () => reject(new db.HttpError(400, "The request could not be read.")));
  });
}

async function verifyGoogle(credential) {
  if (!googleClientId) throw new db.HttpError(400, "Google sign-in is not configured.");
  if (!credential || typeof credential !== "string" || credential.length > 8000) {
    throw new db.HttpError(400, "Google sign-in failed.");
  }
  let payload;
  try {
    const response = await fetch(
      "https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(credential)
    );
    payload = await response.json();
    if (!response.ok) throw new Error("invalid");
  } catch (_err) {
    throw new db.HttpError(401, "Google sign-in could not be verified.");
  }
  if (payload.aud !== googleClientId) throw new db.HttpError(401, "Google sign-in was for a different app.");
  const verified = payload.email_verified === true || payload.email_verified === "true";
  if (!verified) throw new db.HttpError(401, "That Google account email is not verified.");
  return {
    email: payload.email || "",
    firstName: payload.given_name || "",
    surname: payload.family_name || "",
    sub: payload.sub || "",
  };
}

async function signedIn(res, account) {
  const token = await db.createSession(account.user.id);
  sendJson(res, 200, account, { "Set-Cookie": sessionCookie(token, SESSION_SECONDS) });
}

async function handleApi(req, res, url) {
  const route = url.pathname;
  if (req.method === "GET" && route === "/api/health") {
    sendJson(res, 200, { ok: true, database: db.engineName() });
    return;
  }
  if (req.method === "GET" && route === "/api/me") {
    const userId = await requireUser(req);
    sendJson(res, 200, await db.accountPayload(userId));
    return;
  }
  if (req.method === "POST" && route === "/api/auth/register") {
    const body = await readBody(req);
    await signedIn(res, await db.createEmailUser(body));
    return;
  }
  if (req.method === "POST" && route === "/api/auth/login") {
    const body = await readBody(req);
    await signedIn(res, await db.loginEmail(body));
    return;
  }
  if (req.method === "POST" && route === "/api/auth/google") {
    const body = await readBody(req);
    const profile = await verifyGoogle(body.credential);
    await signedIn(res, await db.upsertGoogleUser(profile));
    return;
  }
  if (req.method === "POST" && route === "/api/auth/logout") {
    await db.deleteSession(readToken(req));
    sendJson(res, 200, { ok: true }, { "Set-Cookie": sessionCookie("", 0) });
    return;
  }
  if (req.method === "POST" && route === "/api/auth/profile") {
    const userId = await requireUser(req);
    const body = await readBody(req);
    sendJson(res, 200, await db.updateProfile(userId, body));
    return;
  }
  if (req.method === "POST" && route === "/api/children") {
    const userId = await requireUser(req);
    const body = await readBody(req);
    sendJson(res, 200, await db.addChild(userId, body));
    return;
  }
  if (req.method === "POST" && route === "/api/active-child") {
    const userId = await requireUser(req);
    const body = await readBody(req);
    sendJson(res, 200, await db.setActiveChild(userId, body.childId));
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/google") {
    const body = await readBody(req);
    const profile = await verifyGoogle(body.credential);
    const account = await aflatoonDb.loginWithGoogle({
      email: profile.email,
      sub: profile.sub,
      name: [profile.firstName, profile.surname].filter(Boolean).join(" "),
    });
    sendJson(res, 200, {
      email: account.email,
      name: account.name,
      pinHash: account.pinHash,
      progress: account.progress,
    }, {
      "Set-Cookie": aflatoonCookie(account.token, SESSION_SECONDS),
    });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/logout") {
    await aflatoonDb.deletePhoneSession(readCookie(req, "aflatoon_session"));
    sendJson(res, 200, { ok: true }, { "Set-Cookie": aflatoonCookie("", 0) });
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
    if (!account) throw new db.HttpError(401, "Log in with Google to save course progress.");
    const body = await readBody(req);
    await aflatoonDb.saveCourseProgress(account.id, body.state);
    sendJson(res, 200, { ok: true });
    return;
  }
  if (req.method === "PUT" && route === "/api/aflatoon/focus-pin") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new db.HttpError(401, "Log in with Google to save the focus code.");
    const body = await readBody(req);
    await aflatoonDb.saveFocusPasscode(account.id, body.pinHash);
    sendJson(res, 200, { ok: true });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/focus-pin/email-code") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new db.HttpError(401, "Log in with Google to email a temporary Focus code.");
    const code = await aflatoonDb.createFocusTempCode(account.id);
    const mail = email.focusTempEmail(code);
    await email.sendMail({
      to: account.email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    sendJson(res, 200, {
      ok: true,
      emailedTo: email.maskEmail(account.email),
    });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/focus-pin/verify-email-code") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new db.HttpError(401, "Log in with Google to use the email Focus code.");
    const body = await readBody(req);
    await aflatoonDb.consumeFocusTempCode(account.id, body.code);
    sendJson(res, 200, { ok: true });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/course-welcome") {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new db.HttpError(401, "Log in with Google to send the welcome email.");
    const body = await readBody(req);
    const courseId = String(body.courseId || "").trim();
    if (!["beginner", "foundation", "advanced"].includes(courseId)) {
      throw new db.HttpError(400, "Choose a valid course.");
    }
    const courseUrl = email.courseLink(req, courseId);
    const mail = email.welcomeCourseEmail({
      name: account.name,
      courseId,
      courseUrl,
    });
    await email.sendMail({
      to: account.email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    sendJson(res, 200, { ok: true, emailedTo: email.maskEmail(account.email), courseUrl });
    return;
  }
  if (req.method === "GET" && route === "/api/aflatoon/payments/config") {
    sendJson(res, 200, {
      configured: razorpay.isConfigured(),
      keyId: razorpay.isConfigured() ? razorpay.keyId() : "",
    });
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/payments/upi-qr") {
    if (!razorpay.isConfigured()) {
      throw new db.HttpError(503, "Razorpay keys are missing. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET on the host.");
    }
    const body = await readBody(req);
    const amountPaise = Number(body.amountPaise);
    const session = await razorpay.createUpiQrSession({
      amountPaise,
      name: body.name || "Maths Aflatoon",
      description: body.description || "Course unlock",
      notes: {
        courseId: String(body.courseId || ""),
        source: "aflatoon-upi-qr",
      },
    });
    sendJson(res, 200, session);
    return;
  }
  if (req.method === "GET" && route.startsWith("/api/aflatoon/payments/upi-qr/")) {
    if (!razorpay.isConfigured()) {
      throw new db.HttpError(503, "Razorpay keys are missing.");
    }
    const qrId = decodeURIComponent(route.slice("/api/aflatoon/payments/upi-qr/".length));
    sendJson(res, 200, await razorpay.getUpiQrStatus(qrId));
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/payments/create-order") {
    if (!razorpay.isConfigured()) {
      throw new db.HttpError(503, "Razorpay keys are missing. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET on the host.");
    }
    const body = await readBody(req);
    const order = await razorpay.createOrder({
      amountPaise: body.amountPaise,
      receipt: body.receipt,
      notes: {
        courseId: String(body.courseId || ""),
        source: "aflatoon-upi-intent",
      },
    });
    sendJson(res, 200, order);
    return;
  }
  if (req.method === "POST" && route === "/api/aflatoon/payments/verify") {
    if (!razorpay.isConfigured()) {
      throw new db.HttpError(503, "Razorpay keys are missing.");
    }
    const body = await readBody(req);
    const ok = razorpay.verifyCheckoutSignature({
      orderId: body.razorpay_order_id,
      paymentId: body.razorpay_payment_id,
      signature: body.razorpay_signature,
    });
    if (!ok) throw new db.HttpError(400, "Payment signature could not be verified.");
    sendJson(res, 200, {
      ok: true,
      paymentId: body.razorpay_payment_id,
      orderId: body.razorpay_order_id,
    });
    return;
  }
  if (req.method === "PUT" && route === "/api/progress") {
    const userId = await requireUser(req);
    const body = await readBody(req);
    await db.saveProgressItems(userId, body.childId, body.items);
    const active = (await db.accountPayload(userId)).activeChildId;
    sendJson(res, 200, { ok: true, progress: active ? await db.progressForChild(active) : null });
    return;
  }
  sendJson(res, 404, { error: "Not found." });
}

function fileForRequest(pathname) {
  let rel;
  try {
    rel = decodeURIComponent(pathname);
  } catch (_err) {
    return null;
  }
  if (rel.includes("\0")) return null;
  rel = rel.replace(/^[/\\]+/, "");
  const full = path.resolve(ROOT, rel || ".");
  const root = path.resolve(ROOT);
  if (full !== root && !full.startsWith(root + path.sep)) return null;
  const inside = path.relative(root, full).replace(/\\/g, "/");
  if (inside === "server" || inside.startsWith("server/")) return null;
  if (inside.startsWith(".git")) return null;
  if (inside.startsWith("data/") && inside.includes("sqlite")) return null;
  const base = inside.split("/").pop() || "";
  if (base === ".env" || base.startsWith(".env.")) return null;
  return full;
}

function serveStatic(req, res, url) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    res.end();
    return;
  }
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
  if (stat.isDirectory()) {
    file = path.join(file, "index.html");
    try {
      stat = fs.statSync(file);
    } catch (_err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
  }
  const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Cache-Control": type.startsWith("text/") || type.includes("javascript") || type.includes("json") ? "no-store" : "public, max-age=3600",
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
      await handleApi(req, res, url);
      return;
    }
    serveStatic(req, res, url);
  } catch (err) {
    const status = err.status || 500;
    if (status === 500) console.error(err);
    if (!res.headersSent) {
      sendJson(res, status, {
        error: status === 500 ? "Something went wrong. Please try again." : err.message,
      });
    } else {
      res.end();
    }
  }
});

Promise.all([db.ready, aflatoonDb.ready])
  .then(() => {
    server.listen(PORT, "0.0.0.0", () => {
      console.log("Website: http://localhost:" + PORT);
      if (db.engineName() === "sqlite") console.log("SQLite database: " + db.DB_PATH);
      else console.log("Science database: " + db.engineName());
      console.log("Maths Aflatoon database: supabase");
    });
  })
  .catch((err) => {
    console.error(err.message || err);
    process.exit(1);
  });
