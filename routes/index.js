const router = require("express").Router();
const admin = require("./admin");
const customer = require("./customer");

router.use("/admins", admin);

router.use("/customers", customer);

module.exports = router;
