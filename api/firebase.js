const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.WEBNOVEL_PROJECT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
