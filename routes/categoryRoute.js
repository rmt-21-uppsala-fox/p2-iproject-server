const express = require("express");
const router = express.Router();
const Controller = require("../controllers/categoryController");

router.get("/", Controller.getAllCategory);

module.exports = router;
