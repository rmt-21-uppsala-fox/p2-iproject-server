const express = require("express");
const KibController = require("../controllers/Kib");
const router = express.Router();

router.get("/", KibController.getKib);

module.exports = router;