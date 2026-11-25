require("./load-env");

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { HttpError } = require("./http-error");

const SCHEMA_PATH = path.join(__dirname, "..", "db", "aflatoon.pg.sql");

function now() {
  return new Date().toISOString();
}

function expiresAt() {
  return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
}

function id(prefix) {
  return prefix + crypto.randomBytes(8).toString("hex");
}

function validPinHash(value) {
  return /^(?:[a-f0-9]{64}|fnv:[a-f0-9]{1,16})$/.test(String(value || ""));
}

function splitSql(script) {
  const statements = [];
  let current = "";
  let dollar = null;
  let i = 0;
  while (i < script.length) {
    if (!dollar && script.startsWith("--", i)) {
      const end = script.indexOf("\n", i);
      i = end === -1 ? script.length : end + 1;
      continue;
    }
    if (script[i] === "$") {
      const tag = script.slice(i).match(/^\$[A-Za-z0-9_]*\$/);
      if (tag) {
        if (!dollar) dollar = tag[0];
        else if (dollar === tag[0]) dollar = null;
        current += tag[0];
        i += tag[0].length;
        continue;
      }
    }
    if (!dollar && script[i] === ";") {
      const statement = current.trim();
      if (statement) statements.push(statement);
      current = "";
      i += 1;
      continue;
    }
    current += script[i];
    i += 1;
  }
  const tail = current.trim();
  if (tail) statements.push(tail);
  return statements;
}

function redact(error) {
  return String(error && error.message ? error.message : "Unknown database error").replace(
    /postgres(?:ql)?:\/\/\S+/gi,
    "postgresql://…"
  );
}

let pool;

const ready = (async () => {
  const connectionString = process.env.DATABASE_URL || "";
  if (!connectionString) {
    throw new Error("Maths Aflatoon needs DATABASE_URL for its Supabase database.");
  }
  if (/:6543(\/|$|\?)/.test(connectionString)) {
    throw new Error("Use the Supabase Session pooler on port 5432 for Maths Aflatoon.");
  }
  const { Pool } = require("pg");
  pool = new Pool({
    connectionString: connectionString,
    ssl: /localhost|127\.0\.0\.1/i.test(connectionString) ? false : { rejectUnauthorized: false },
    max: 5,
    connectionTimeoutMillis: 15000,
    idleTimeoutMillis: 30000,
    application_name: "maths-aflatoon",
  });
  try {
    await pool.query("SELECT 1");
    if (!fs.existsSync(SCHEMA_PATH)) {
      throw new Error("Schema file missing at " + SCHEMA_PATH);
    }
    const statements = splitSql(fs.readFileSync(SCHEMA_PATH, "utf8"));
    for (const statement of statements) await pool.query(statement);
  } catch (err) {
    await pool.end().catch(() => {});
    pool = null;
    throw new Error("Could not set up the Maths Aflatoon database. " + redact(err));
  }
})();
// Keep module load alive on Vercel/Node when DATABASE_URL is not set yet.
ready.catch(() => {});
// Keep module load alive on Vercel/Node when DATABASE_URL is not set yet.
ready.catch(() => {});

async function query(sql, params) {
  await ready;
  return pool.query(sql, params || []);
}

async function one(sql, params) {
  const result = await query(sql, params);
  return result.rows[0] || null;
}

async function loginWithGoogle(profile) {
  const sub = String(profile.sub || "").trim();
  const email = String(profile.email || "").trim().toLowerCase();
  const name = String(profile.name || "").trim().slice(0, 120);
  if (!sub || sub.length > 255 || !email.includes("@") || email.length > 320) {
    throw new HttpError(400, "Google did not return an account email.");
  }
  const stamp = now();
  let account = await one("SELECT id FROM aflatoon.accounts WHERE google_sub = $1", [sub]);
  if (!account) {
    const accountId = id("gg");
    await query(
      "INSERT INTO aflatoon.accounts (id, google_sub, email, name, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6)",
      [accountId, sub, email, name, stamp, stamp]
    );
    account = { id: accountId };
  } else {
    await query(
      "UPDATE aflatoon.accounts SET email = $1, name = $2, updated_at = $3 WHERE id = $4",
      [email, name, stamp, account.id]
    );
  }
  const token = crypto.randomBytes(24).toString("hex");
  await query(
    "INSERT INTO aflatoon.phone_sessions (token, account_id, created_at, expires_at) VALUES ($1, $2, $3, $4)",
    [token, account.id, stamp, expiresAt()]
  );
  const extras = await accountExtras(account.id);
  return { token: token, email: email, name: name, pinHash: extras.pinHash, progress: extras.progress };
}

function safeProgress(payload) {
  try {
    const parsed = JSON.parse(payload);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (_err) {
    return null;
  }
}

async function accountExtras(accountId) {
  const pin = await one("SELECT pin_hash FROM aflatoon.focus_passcodes WHERE account_id = $1", [accountId]);
  const progress = await one("SELECT payload FROM aflatoon.course_progress WHERE account_id = $1", [accountId]);
  return {
    pinHash: pin && pin.pin_hash ? pin.pin_hash : "",
    progress: progress && progress.payload ? safeProgress(progress.payload) : null,
  };
}

async function accountFromToken(token) {
  if (!token) return null;
  const row = await one(
    `SELECT a.id, a.email, a.name
     FROM aflatoon.phone_sessions s
     JOIN aflatoon.accounts a ON a.id = s.account_id
     WHERE s.token = $1 AND s.expires_at > $2`,
    [token, now()]
  );
  if (!row) return null;
  const extras = await accountExtras(row.id);
  return { id: row.id, email: row.email, name: row.name, pinHash: extras.pinHash, progress: extras.progress };
}

async function deletePhoneSession(token) {
  if (!token) return;
  await query("DELETE FROM aflatoon.phone_sessions WHERE token = $1", [token]);
}

async function saveFocusPasscode(accountId, pinHash) {
  if (!validPinHash(pinHash)) throw new HttpError(400, "That focus code could not be saved.");
  await query(
    `INSERT INTO aflatoon.focus_passcodes (account_id, pin_hash, updated_at)
     VALUES ($1, $2, $3)
     ON CONFLICT (account_id) DO UPDATE SET pin_hash = EXCLUDED.pin_hash, updated_at = EXCLUDED.updated_at`,
    [accountId, pinHash, now()]
  );
}

function hashTempFocusCode(code) {
  return crypto.createHash("sha256").update("aflatoon-focus-temp:" + String(code || "")).digest("hex");
}

function makeTempFocusCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

async function createFocusTempCode(accountId) {
  const recent = await one(
    "SELECT sent_at FROM aflatoon.focus_temp_codes WHERE account_id = $1",
    [accountId]
  );
  if (recent && recent.sent_at) {
    const ageMs = Date.now() - Date.parse(recent.sent_at);
    if (Number.isFinite(ageMs) && ageMs < 45000) {
      throw new HttpError(429, "A temporary code was just emailed. Wait a moment, then try again.");
    }
  }
  const code = makeTempFocusCode();
  const stamp = now();
  const expires = new Date(Date.now() + 10 * 60 * 1000).toISOString();
  await query(
    `INSERT INTO aflatoon.focus_temp_codes (account_id, code_hash, expires_at, sent_at)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (account_id) DO UPDATE
       SET code_hash = EXCLUDED.code_hash, expires_at = EXCLUDED.expires_at, sent_at = EXCLUDED.sent_at`,
    [accountId, hashTempFocusCode(code), expires, stamp]
  );
  return code;
}

async function consumeFocusTempCode(accountId, code) {
  const pin = String(code || "").trim();
  if (!/^\d{4}$/.test(pin)) throw new HttpError(400, "Enter the 4-digit code from your email.");
  const row = await one(
    "SELECT code_hash, expires_at FROM aflatoon.focus_temp_codes WHERE account_id = $1",
    [accountId]
  );
  if (!row) throw new HttpError(400, "No temporary code is waiting. Ask for a new email code.");
  if (Date.parse(row.expires_at) <= Date.now()) {
    await query("DELETE FROM aflatoon.focus_temp_codes WHERE account_id = $1", [accountId]);
    throw new HttpError(400, "That temporary code has expired. Ask for a new email code.");
  }
  if (row.code_hash !== hashTempFocusCode(pin)) {
    throw new HttpError(400, "That temporary code is not right.");
  }
  await query("DELETE FROM aflatoon.focus_temp_codes WHERE account_id = $1", [accountId]);
  return true;
}

async function saveCourseProgress(accountId, state) {
  if (!state || typeof state !== "object" || Array.isArray(state)) {
    throw new HttpError(400, "Course progress could not be saved.");
  }
  const payload = JSON.stringify(state);
  if (payload.length > 500000) throw new HttpError(413, "That progress update is too large.");
  await query(
    `INSERT INTO aflatoon.course_progress (account_id, payload, updated_at)
     VALUES ($1, $2, $3)
     ON CONFLICT (account_id) DO UPDATE SET payload = EXCLUDED.payload, updated_at = EXCLUDED.updated_at`,
    [accountId, payload, now()]
  );
}

module.exports = {
  HttpError,
  ready,
  loginWithGoogle,
  accountFromToken,
  deletePhoneSession,
  saveFocusPasscode,
  createFocusTempCode,
  consumeFocusTempCode,
  saveCourseProgress,
};
