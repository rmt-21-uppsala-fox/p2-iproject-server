const express = require("express");
const walletCardRoute = require("./walletcards");
const AuthN = require("../middlewares/authN");
const router = express.Router();

router.use("/walletcards", walletCardRoute);
router.post("/xendit-callback", AuthN.xenditAuth);

module.exports = router;
