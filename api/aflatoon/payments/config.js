const { handlePaymentsConfigGet } = require("../../../server/aflatoon-vercel");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Allow", "GET");
    res.end(JSON.stringify({ error: "Method not allowed." }));
    return;
  }
  await handlePaymentsConfigGet(req, res);
};
