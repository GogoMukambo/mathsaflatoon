const { HttpError } = require("./http-error");

function loginText(code) {
  return "Maths Aflatoon login code: " + code + ". It expires in 5 minutes.";
}

async function sendTwilio(phone, code) {
  const body = new URLSearchParams({
    To: "+" + phone,
    From: process.env.TWILIO_FROM,
    Body: loginText(code),
  });
  const auth = Buffer.from(process.env.TWILIO_ACCOUNT_SID + ":" + process.env.TWILIO_AUTH_TOKEN).toString("base64");
  const response = await fetch(
    "https://api.twilio.com/2010-04-01/Accounts/" + encodeURIComponent(process.env.TWILIO_ACCOUNT_SID) + "/Messages.json",
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + auth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    }
  );
  if (!response.ok) throw new HttpError(502, "The text message could not be sent. Try again.");
}

async function sendFast2Sms(phone, code) {
  const local = phone.startsWith("91") ? phone.slice(2) : phone;
  const response = await fetch("https://www.fast2sms.com/dev/bulkV2", {
    method: "POST",
    headers: {
      authorization: process.env.FAST2SMS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      route: "otp",
      variables_values: code,
      flash: 0,
      numbers: local,
    }),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.return === false) {
    throw new HttpError(502, "The text message could not be sent. Try again.");
  }
}

async function sendLoginCode(phone, code) {
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_FROM) {
    await sendTwilio(phone, code);
    return;
  }
  if (process.env.FAST2SMS_API_KEY) {
    await sendFast2Sms(phone, code);
    return;
  }
  throw new HttpError(503, "Text messages are not set up yet. Add an SMS key and restart the site.");
}

module.exports = { sendLoginCode };
