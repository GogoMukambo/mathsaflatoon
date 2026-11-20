const { handleGooglePost } = require("../../server/aflatoon-vercel");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end(JSON.stringify({ error: "Method not allowed." }));
    return;
  }
  await handleGooglePost(req, res);
};