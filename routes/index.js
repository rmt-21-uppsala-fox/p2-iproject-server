const router = require("express").Router();
const admin = require("./admin");
const customer = require("./customer");
const rajaOngkir = require("./rajaOngkir");

router.use("/admins", admin);

router.use("/customers", customer);

router.use("/raja-ongkirs", rajaOngkir);

module.exports = router;
