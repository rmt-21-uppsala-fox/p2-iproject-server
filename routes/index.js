const express = require("express");
const router = express.Router();
const IndexController = require("../controllers");
const errorHandler = require("../middlewares/errorHandler");
const { authN } = require("../middlewares/auth");

router.post("/register", IndexController.register);

router.use(authN);

router.use(errorHandler);

module.exports = router;
