const express = require("express");
const router = express.Router();
const IndexController = require("../controllers");
const errorHandler = require("../middlewares/errorHandler");
const { authN } = require("../middlewares/auth");

router.post("/register", IndexController.register);

router.post("/authGoogle", IndexController.authGoogle);

router.post("/login", IndexController.login);

router.use(authN);

router.use(errorHandler);

module.exports = router;
