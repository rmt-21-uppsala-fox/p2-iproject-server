const admin = require("../API/firebase");

async function authN(req, res, next) {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const arrAuth = authorization?.split(" ");
    if (!arrAuth || arrAuth[0] !== "Bearer") {
      throw new Error("Invalid token");
    }
    const token = arrAuth[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.status(200).json(decodedToken);
  } catch (err) {
    console.log(err?.message || err);
    res.status(401).json(err?.message || err);
  }
}

module.exports = authN;
