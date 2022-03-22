const express = require("express");
const walletCardRoute = require("./walletcards");
const router = express.Router();

router.get("/");
router.use("/walletcards", walletCardRoute);

module.exports = router;
