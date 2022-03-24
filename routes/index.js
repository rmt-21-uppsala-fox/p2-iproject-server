const express = require("express");
const walletCardRoute = require("./walletcards");
const AuthN = require("../middlewares/authN");
const myCartsRoute = require("./mycarts");
const MyCartController = require("../controllers/MyCartsController");
const cheapSharkAPI = require("../API/CheapShark");
const router = express.Router();

router.use("/walletcards", walletCardRoute);
router.post(
  "/xendit-callback",
  AuthN.xenditAuth,
  MyCartController.updateInvoiceCart
);
router.use("/mycarts", myCartsRoute);
router.get("/cheapShark", cheapSharkAPI);

module.exports = router;
