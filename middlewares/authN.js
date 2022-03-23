const admin = require("../API/firebase");

class AuthN {
  static async firebaseAuth(req, res, next) {
    try {
      const { authorization } = req.headers;
      const arrAuth = authorization?.split(" ");
      if (!arrAuth || arrAuth[0] !== "Bearer") {
        throw new Error("Invalid token");
      }
      const token = arrAuth[1];
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = { uid: decodedToken.uid };
      next();
    } catch (err) {
      console.log(err?.message || err);
      res.status(401).json(err?.message || err);
    }
  }
  static xenditAuth(req, res, next) {
    try {
      const xCallbackToken = req.headers["x-callback-token"];
      if (xCallbackToken !== process.env.XENDIT_CALLBACK_TOKEN) {
        throw { message: "Invalid token" };
      }
      console.log(req.body);
      res.status(200).send("OK");
    } catch (err) {
      console.log(err?.message || err);
      res.status(401).json(err?.message || err);
    }
  }
}

module.exports = AuthN;
