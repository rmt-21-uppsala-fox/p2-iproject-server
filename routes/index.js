const router = require("express").Router();
const admin = require("./admin");
const customer = require("./customer");
const rajaOngkir = require("./rajaOngkir");
const midtrans = require("./midtrans");

router.use("/admins", admin);

router.use("/customers", customer);

router.use("/raja-ongkirs", rajaOngkir);

router.use("/midtrans", midtrans);

module.exports = router;
