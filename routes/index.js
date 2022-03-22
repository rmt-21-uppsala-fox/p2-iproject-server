const express = require("express");
const walletCardRoute = require("./walletcards");
const router = express.Router();

router.use("/walletcards", walletCardRoute);

module.exports = router;
