const express = require("express");
const router = express.Router();
const IndexController = require("../controllers");
const errorHandler = require("../middlewares/errorHandler");
const { authN } = require("../middlewares/auth");

router.post("/register", IndexController.register);

router.post("/authGoogle", IndexController.authGoogle);

router.post("/login", IndexController.login);

router.get("/products", IndexController.products);

router.get("/products/:id", IndexController.productById);

router.post("/paymentsuccess", IndexController.paymentSuccess);

router.use(authN);

router.post("/mycart/:ProductId", IndexController.addMyCart);

router.use(errorHandler);

module.exports = router;
