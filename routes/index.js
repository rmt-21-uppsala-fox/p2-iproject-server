const express = require("express");
const walletCardRoute = require("./walletcards");
const AuthN = require("../middlewares/authN");
const WalletCardController = require("../controllers/WalletCardController");
const router = express.Router();

router.use("/walletcards", walletCardRoute);
router.post(
  "/xendit-callback",
  AuthN.xenditAuth,
  WalletCardController.updateInvoiceCart
);

module.exports = router;
