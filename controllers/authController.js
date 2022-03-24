const admin = require("../api/firebase-config");

class AuthController {
	static async authenticate(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1];

			const decodeToken = await admin.auth().verifyIdToken(token);
			if (!decodeToken) {
				throw {
					name: "Unauthorized",
				};
			}
			res.status(200).json({ message: "Success" });
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = AuthController;
