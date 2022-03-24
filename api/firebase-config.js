const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.MANGA_ENCY);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
