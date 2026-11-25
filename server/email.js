require("./load-env");

const { HttpError } = require("./http-error");

function fromAddress() {
  return process.env.EMAIL_FROM || "Maths Aflatoon <onboarding@resend.dev>";
}

function publicBaseUrl(req) {
  const configured = String(process.env.PUBLIC_BASE_URL || "").replace(/\/$/, "");
  if (configured) return configured;
  if (!req || !req.headers) return "";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "";
  if (!host) return "";
  const proto = req.headers["x-forwarded-proto"] || "https";
  return String(proto).split(",")[0].trim() + "://" + String(host).split(",")[0].trim();
}

function courseLink(req, courseId) {
  const base = publicBaseUrl(req) || "https://mathsaflatoon.com";
  const id = encodeURIComponent(String(courseId || "").trim());
  return base.replace(/\/$/, "") + "/maths-aflatoon.html" + (id ? "#" + id : "");
}

function courseLabel(courseId) {
  const map = {
    beginner: "Beginner Course",
    foundation: "Foundation Course",
    advanced: "Advanced Course",
  };
  return map[String(courseId || "").trim()] || "Maths Aflatoon Course";
}

async function sendWithResend({ to, subject, text, html }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.RESEND_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress(),
      to: [to],
      subject,
      text,
      html,
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new HttpError(502, payload.message || "The email could not be sent. Try again.");
  }
}

function senderEmail() {
  const raw = String(fromAddress() || "");
  const angled = raw.match(/<([^>]+)>/);
  const email = (angled ? angled[1] : raw).trim();
  return email.includes("@") ? email : "hello@mathsaflatoon.com";
}

async function sendWithBrevo({ to, subject, text, html }) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Maths Aflatoon", email: senderEmail() },
      to: [{ email: to }],
      subject,
      textContent: text,
      htmlContent: html,
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new HttpError(502, payload.message || "The email could not be sent. Try again.");
  }
}

async function sendMail(details) {
  const to = String(details.to || "").trim().toLowerCase();
  if (!to || !to.includes("@")) throw new HttpError(400, "No registered email address was found.");
  const subject = String(details.subject || "").trim();
  const text = String(details.text || "");
  const html = String(details.html || text.replace(/\n/g, "<br>"));
  if (process.env.RESEND_API_KEY) {
    await sendWithResend({ to, subject, text, html });
    return { ok: true, provider: "resend" };
  }
  if (process.env.BREVO_API_KEY) {
    await sendWithBrevo({ to, subject, text, html });
    return { ok: true, provider: "brevo" };
  }
  if (process.env.EMAIL_DEV_LOG === "1") {
    console.log("[email:dev]", { to, subject, text });
    return { ok: true, provider: "dev-log" };
  }
  throw new HttpError(
    503,
    "Email is not set up yet. Add RESEND_API_KEY or BREVO_API_KEY and restart the site."
  );
}

function maskEmail(email) {
  const value = String(email || "").trim().toLowerCase();
  const at = value.indexOf("@");
  if (at < 1) return "your email";
  const name = value.slice(0, at);
  const domain = value.slice(at + 1);
  const shown = name.length <= 2 ? name[0] + "*" : name.slice(0, 2) + "***";
  return shown + "@" + domain;
}

function focusTempEmail(code) {
  const text =
    "Your Maths Aflatoon temporary Focus Mode code is " +
    code +
    ". It expires in 10 minutes. Use it once to turn Focus Mode off or leave a sprint early.";
  const html =
    "<div style=\"font-family:Nunito,Arial,sans-serif;line-height:1.5;color:#0f172a\">" +
    "<h2 style=\"font-family:Fredoka,Arial,sans-serif;color:#4f46e5;margin:0 0 12px\">Focus Mode unlock code</h2>" +
    "<p>Use this temporary 4-digit code to turn Focus Mode off or leave a sprint early:</p>" +
    "<p style=\"font-size:28px;letter-spacing:8px;font-weight:800;margin:16px 0\">" +
    code +
    "</p>" +
    "<p style=\"color:#475569\">It expires in 10 minutes and works once.</p>" +
    "<p style=\"color:#64748b;font-size:13px\">If you did not ask for this, you can ignore this email. Your parent Focus code is unchanged.</p>" +
    "</div>";
  return {
    subject: "Your temporary Focus Mode code — Maths Aflatoon",
    text,
    html,
  };
}

function welcomeCourseEmail({ name, courseId, courseUrl }) {
  const courseName = courseLabel(courseId);
  const who = String(name || "").trim() || "Maths explorer";
  const link = courseUrl || "https://mathsaflatoon.com/maths-aflatoon.html";
  const text = [
    "Welcome, " + who + "!",
    "",
    "Welcome to the journey of becoming a Maths Wizard.",
    "",
    "Your " + courseName + " is unlocked and ready. Open your course here:",
    link,
    "",
    "Each day brings one visual trick and a rapid sprint. Stick with the 60-day path, collect your medals, and watch mental maths become second nature.",
    "",
    "We are thrilled to have you on this adventure.",
    "",
    "— Team Maths Aflatoon",
  ].join("\n");
  const html =
    "<div style=\"font-family:Nunito,Arial,sans-serif;line-height:1.55;color:#0f172a;max-width:560px\">" +
    "<h1 style=\"font-family:Fredoka,Arial,sans-serif;font-size:28px;color:#072654;margin:0 0 8px\">Welcome, " +
    escapeHtml(who) +
    "!</h1>" +
    "<p style=\"font-size:18px;font-weight:800;color:#4f46e5;margin:0 0 16px\">Welcome to the journey of becoming a Maths Wizard.</p>" +
    "<p>Your <strong>" +
    escapeHtml(courseName) +
    "</strong> is unlocked and ready. One visual trick a day, thirty-five rapid questions, and medals waiting for every finish line.</p>" +
    "<p style=\"margin:24px 0\"><a href=\"" +
    escapeHtml(link) +
    "\" style=\"display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;font-weight:800;padding:14px 22px;border-radius:14px\">Open your course</a></p>" +
    "<p style=\"color:#475569\">Or copy this link:<br><a href=\"" +
    escapeHtml(link) +
    "\" style=\"color:#4f46e5\">" +
    escapeHtml(link) +
    "</a></p>" +
    "<p>Stick with the 60-day path and watch mental maths become second nature. We are thrilled to have you on this adventure.</p>" +
    "<p style=\"margin-top:28px;color:#64748b\">— Team Maths Aflatoon</p>" +
    "</div>";
  return {
    subject: "Welcome, Maths Wizard — your " + courseName + " is ready",
    text,
    html,
  };
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = {
  sendMail,
  maskEmail,
  courseLink,
  courseLabel,
  focusTempEmail,
  welcomeCourseEmail,
  publicBaseUrl,
};
