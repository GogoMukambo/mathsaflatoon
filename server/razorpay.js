const crypto = require("crypto");

function keyId() {
  return String(process.env.RAZORPAY_KEY_ID || "").trim();
}

function keySecret() {
  return String(process.env.RAZORPAY_KEY_SECRET || "").trim();
}

function isConfigured() {
  return Boolean(keyId() && keySecret());
}

function basicAuthHeader() {
  return "Basic " + Buffer.from(keyId() + ":" + keySecret()).toString("base64");
}

async function razorpayRequest(method, pathname, body) {
  if (!isConfigured()) {
    const err = new Error("Razorpay is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.");
    err.status = 503;
    throw err;
  }
  const response = await fetch("https://api.razorpay.com/v1" + pathname, {
    method,
    headers: {
      Authorization: basicAuthHeader(),
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const err = new Error((data && (data.error && data.error.description)) || data.error || "Razorpay request failed.");
    err.status = response.status;
    err.payload = data;
    throw err;
  }
  return data;
}

async function createUpiQrSession({ amountPaise, name, description, notes }) {
  const amount = Math.round(Number(amountPaise));
  if (!Number.isFinite(amount) || amount < 100) {
    const err = new Error("Invalid payment amount.");
    err.status = 400;
    throw err;
  }
  const qr = await razorpayRequest("POST", "/payments/qr_codes", {
    type: "upi_qr",
    name: name || "Maths Aflatoon",
    usage: "single_use",
    fixed_amount: true,
    payment_amount: amount,
    description: description || "Course unlock",
    notes: notes || {},
    close_by: Math.floor(Date.now() / 1000) + 30 * 60,
  });
  return {
    qrId: qr.id,
    imageUrl: qr.image_url || "",
    amount: qr.payment_amount || amount,
    status: qr.status || "active",
    keyId: keyId(),
  };
}

async function getUpiQrStatus(qrId) {
  const id = String(qrId || "").trim();
  if (!id) {
    const err = new Error("Missing QR session id.");
    err.status = 400;
    throw err;
  }
  const qr = await razorpayRequest("GET", "/payments/qr_codes/" + encodeURIComponent(id));
  const payments = await razorpayRequest(
    "GET",
    "/payments?qr_code_id=" + encodeURIComponent(id) + "&count=5"
  );
  const list = (payments && payments.items) || [];
  const paid = list.find((item) => item && (item.status === "captured" || item.status === "authorized"));
  return {
    qrId: id,
    qrStatus: qr.status || "",
    paid: Boolean(paid),
    paymentId: paid ? paid.id : "",
    method: paid ? paid.method : "",
  };
}

function verifyCheckoutSignature({ orderId, paymentId, signature }) {
  if (!isConfigured()) return false;
  const body = String(orderId || "") + "|" + String(paymentId || "");
  const expected = crypto
    .createHmac("sha256", keySecret())
    .update(body)
    .digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(String(signature || ""));
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

async function createOrder({ amountPaise, receipt, notes }) {
  const amount = Math.round(Number(amountPaise));
  if (!Number.isFinite(amount) || amount < 100) {
    const err = new Error("Invalid payment amount.");
    err.status = 400;
    throw err;
  }
  const order = await razorpayRequest("POST", "/orders", {
    amount,
    currency: "INR",
    receipt: String(receipt || ("aflatoon_" + Date.now())).slice(0, 40),
    notes: notes || {},
  });
  return {
    orderId: order.id,
    amount: order.amount,
    currency: order.currency || "INR",
    keyId: keyId(),
  };
}

module.exports = {
  isConfigured,
  keyId,
  createUpiQrSession,
  getUpiQrStatus,
  createOrder,
  verifyCheckoutSignature,
};
