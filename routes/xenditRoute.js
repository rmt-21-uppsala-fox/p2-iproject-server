const express = require("express");
const router = express.Router();
const { isLoginCustomer } = require("../middlewares/auth");
const Controller = require("../controllers/controllerXendit");

router.use(isLoginCustomer);

router.post("/", Controller.createPayment);

module.exports = router;
