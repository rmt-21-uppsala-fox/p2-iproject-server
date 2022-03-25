const firebase = require("firebase/app");
const config = require("./configFirebase");

const db = firebase.initializeApp(config.firebaseConfig);

module.exports = db;
