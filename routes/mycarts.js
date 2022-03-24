const express = require("express");
const MyCartController = require("../controllers/MyCartsController");
const AuthN = require("../middlewares/authN");
const AuthZ = require("../middlewares/authZ");
const myCartsRoute = express.Router();

myCartsRoute.get("/", AuthN.firebaseAuth, MyCartController.getMyCart);
myCartsRoute.get(
  "/checkout",
  AuthN.firebaseAuth,
  MyCartController.checkoutCart
);
myCartsRoute.patch(
  "/invoice/:invoiceId",
  AuthN.firebaseAuth,
  AuthZ.cancelingInvoice,
  MyCartController.setExpireInvoice
);
myCartsRoute.patch(
  "/:id",
  AuthN.firebaseAuth,
  AuthZ.cancelingMyCart,
  MyCartController.cancelMyCart
);
myCartsRoute.post(
  "/:walletCardId",
  AuthN.firebaseAuth,
  MyCartController.postCart
);

module.exports = myCartsRoute;
