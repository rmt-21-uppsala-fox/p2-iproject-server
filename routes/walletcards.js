const express = require("express");
const WalletCardController = require("../controllers/WalletCardController");
const walletCardRoute = express.Router();

walletCardRoute.get("/", WalletCardController.getWalletCards);

module.exports = walletCardRoute;
