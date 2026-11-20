const { handleFocusPinPut } = require("../../server/aflatoon-vercel");

module.exports = async (req, res) => {
  if (req.method !== "PUT") {
    res.statusCode = 405;
    res.setHeader("Allow", "PUT");
    res.end(JSON.stringify({ error: "Method not allowed." }));
    return;
  }
  await handleFocusPinPut(req, res);
};