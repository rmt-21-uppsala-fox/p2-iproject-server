const { admin, refreshToken } = require("../API/firebase");

class AuthN {
  static async firebaseAuth(req, res, next) {
    try {
      const { authorization } = req.headers;
      const arrAuth = authorization?.split(" ");
      if (!arrAuth || arrAuth[0] !== "Bearer") {
        throw {
          name: "Unauthorized",
          message: "Invalid token",
        };
      }
      const token = arrAuth[1];
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = { uid: decodedToken.uid, email: decodedToken.email };
      next();
    } catch (err) {
      if (
        err.code === "auth/id-token-expired" &&
        req.headers.authorization === process.env.SAMPLE_TOKEN
      ) {
        try {
          const refresh = await refreshToken();
          const decodedToken = await admin
            .auth()
            .verifyIdToken(refresh.data.access_token);
          req.user = { uid: decodedToken.uid, email: decodedToken.email };
          next();
        } catch (err) {
          next(err);
        }
        return;
      }
      next(err);
    }
  }
  static xenditAuth(req, res, next) {
    try {
      const xCallbackToken = req.headers["x-callback-token"];
      if (xCallbackToken !== process.env.XENDIT_CALLBACK_TOKEN) {
        throw {
          name: "Unauthorized",
          message: "Invalid token",
        };
      }
      req.invoice = {
        invoiceId: req.body.id,
        status: req.body.status,
      };
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AuthN;
