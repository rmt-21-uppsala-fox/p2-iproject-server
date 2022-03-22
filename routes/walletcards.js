const express = require("express");
const WalletCardController = require("../controllers/WalletCardController");
const authN = require("../middlewares/authN");
const walletCardRoute = express.Router();

walletCardRoute.get("/", authN, WalletCardController);
walletCardRoute.post("/:id");

module.exports = walletCardRoute;
