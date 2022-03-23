const express = require("express");
const router = express.Router();
const regisController = require("../controllers/registerController");

router.post("/:restoId/customer", regisController.regisCust);

module.exports = router;
