const express = require("express");
const WalletCardController = require("../controllers/WalletCardController");
const AuthN = require("../middlewares/authN");
const AuthZ = require("../middlewares/authZ");
const walletCardRoute = express.Router();

walletCardRoute.get("/", WalletCardController.getWalletCards);
walletCardRoute.get(
  "/mycarts",
  AuthN.firebaseAuth,
  WalletCardController.getMyCart
);
walletCardRoute.get(
  "/mycarts/checkout",
  AuthN.firebaseAuth,
  WalletCardController.checkoutCart
);
walletCardRoute.patch(
  "/mycarts/invoice/:invoiceId",
  AuthN.firebaseAuth,
  AuthZ,
  WalletCardController.setExpireInvoice
);
walletCardRoute.patch("/mycarts/:id", AuthN.firebaseAuth);
walletCardRoute.post("/:id", AuthN.firebaseAuth, WalletCardController.postCart);

module.exports = walletCardRoute;
