const express = require("express");
const WalletCardController = require("../controllers/WalletCardController");
const AuthN = require("../middlewares/authN");
const walletCardRoute = express.Router();

walletCardRoute.get("/", AuthN.firebaseAuth, WalletCardController.checkoutCart);
walletCardRoute.post("/:id");

module.exports = walletCardRoute;
