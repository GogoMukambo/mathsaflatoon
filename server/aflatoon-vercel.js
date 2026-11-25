const fs = require("fs");
const path = require("path");
const aflatoonDb = require("./aflatoon-db");
const razorpay = require("./razorpay");

const SESSION_SECONDS = 60 * 60 * 24 * 30;

let googleClientId;

function getGoogleClientId() {
  if (googleClientId !== undefined) return googleClientId;
  const candidates = [
    path.join(__dirname, "..", "auth-config.js"),
    path.join(__dirname, "..", "docs", "auth-config.js"),
  ];
  googleClientId = "";
  for (const file of candidates) {
    try {
      const config = fs.readFileSync(file, "utf8");
      const match = config.match(/googleClientId:\s*"([^"]*)"/);
      if (match && match[1]) {
        googleClientId = match[1];
        break;
      }
    } catch (_err) {
      // try next path
    }
  }
  return googleClientId;
}

function json(res, status, payload, extraHeaders) {
  const body = JSON.stringify(payload);
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  if (extraHeaders) {
    Object.keys(extraHeaders).forEach((key) => res.setHeader(key, extraHeaders[key]));
  }
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

function requestBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  return {};
}

function isSecure(req) {
  return req.headers["x-forwarded-proto"] === "https";
}

async function verifyGoogle(credential) {
  const clientId = getGoogleClientId();
  if (!clientId) throw new aflatoonDb.HttpError(400, "Google sign-in is not configured.");
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
  if (payload.aud !== clientId) throw new aflatoonDb.HttpError(401, "Google sign-in was for a different app.");
  const verified = payload.email_verified === true || payload.email_verified === "true";
  if (!verified) throw new aflatoonDb.HttpError(401, "That Google account email is not verified.");
  return {
    email: payload.email || "",
    name: [payload.given_name, payload.family_name].filter(Boolean).join(" "),
    sub: payload.sub || "",
  };
}

async function withAflatoon(req, res, run) {
  try {
    await aflatoonDb.ready;
    await run();
  } catch (err) {
    const status = err.status || 500;
    if (status === 500) console.error(err.message || err);
    const missingDb =
      status === 500 &&
      /DATABASE_URL|needs DATABASE_URL|Could not set up the Maths Aflatoon database/i.test(
        String(err && err.message ? err.message : "")
      );
    json(res, status, {
      error: missingDb
        ? "DATABASE_URL is missing or invalid on this host. Set it in Vercel → Settings → Environment Variables."
        : status === 500
          ? "Something went wrong. Please try again."
          : err.message,
    });
  }
}

async function handleGooglePost(req, res) {
  await withAflatoon(req, res, async () => {
    const body = requestBody(req);
    const profile = await verifyGoogle(body.credential);
    const account = await aflatoonDb.loginWithGoogle(profile);
    json(
      res,
      200,
      {
        email: account.email,
        name: account.name,
        pinHash: account.pinHash,
        progress: account.progress,
      },
      { "Set-Cookie": aflatoonCookie(account.token, SESSION_SECONDS, isSecure(req)) }
    );
  });
}

async function handleLogoutPost(req, res) {
  await withAflatoon(req, res, async () => {
    await aflatoonDb.deletePhoneSession(readCookie(req, "aflatoon_session"));
    json(res, 200, { ok: true }, { "Set-Cookie": aflatoonCookie("", 0, isSecure(req)) });
  });
}

async function handleMeGet(req, res) {
  await withAflatoon(req, res, async () => {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) {
      json(res, 200, { email: "", name: "", pinHash: "", progress: null });
      return;
    }
    json(res, 200, {
      email: account.email,
      name: account.name,
      pinHash: account.pinHash,
      progress: account.progress,
    });
  });
}

async function handleProgressPut(req, res) {
  await withAflatoon(req, res, async () => {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new aflatoonDb.HttpError(401, "Log in with Google to save course progress.");
    const body = requestBody(req);
    await aflatoonDb.saveCourseProgress(account.id, body.state);
    json(res, 200, { ok: true });
  });
}

async function handleFocusPinPut(req, res) {
  await withAflatoon(req, res, async () => {
    const account = await aflatoonDb.accountFromToken(readCookie(req, "aflatoon_session"));
    if (!account) throw new aflatoonDb.HttpError(401, "Log in with Google to save the focus code.");
    const body = requestBody(req);
    await aflatoonDb.saveFocusPasscode(account.id, body.pinHash);
    json(res, 200, { ok: true });
  });
}

function handleHealthGet(req, res) {
  json(res, 200, { ok: true, database: process.env.DATABASE_URL ? "supabase" : "missing" });
}

function handlePaymentsConfigGet(req, res) {
  json(res, 200, {
    configured: razorpay.isConfigured(),
    keyId: razorpay.isConfigured() ? razorpay.keyId() : "",
  });
}

async function handlePaymentsCreateOrderPost(req, res) {
  await withAflatoon(req, res, async () => {
    if (!razorpay.isConfigured()) {
      throw new aflatoonDb.HttpError(503, "Razorpay keys are missing. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET on the host.");
    }
    const body = requestBody(req);
    const order = await razorpay.createOrder({
      amountPaise: body.amountPaise,
      receipt: body.receipt,
      notes: {
        courseId: String(body.courseId || ""),
        source: "aflatoon-upi-intent",
      },
    });
    json(res, 200, order);
  });
}

async function handlePaymentsVerifyPost(req, res) {
  await withAflatoon(req, res, async () => {
    if (!razorpay.isConfigured()) {
      throw new aflatoonDb.HttpError(503, "Razorpay keys are missing.");
    }
    const body = requestBody(req);
    const ok = razorpay.verifyCheckoutSignature({
      orderId: body.razorpay_order_id,
      paymentId: body.razorpay_payment_id,
      signature: body.razorpay_signature,
    });
    if (!ok) throw new aflatoonDb.HttpError(400, "Payment signature could not be verified.");
    json(res, 200, {
      ok: true,
      paymentId: body.razorpay_payment_id,
      orderId: body.razorpay_order_id,
    });
  });
}

module.exports = {
  handleGooglePost,
  handleLogoutPost,
  handleMeGet,
  handleProgressPut,
  handleFocusPinPut,
  handleHealthGet,
  handlePaymentsConfigGet,
  handlePaymentsCreateOrderPost,
  handlePaymentsVerifyPost,
};