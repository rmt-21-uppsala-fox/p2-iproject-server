const express = require("express");
const router = express.Router();
const Controller = require("../controllers/loginController");

router.post("/restaurant", Controller.restaurantLogin);
router.post("/admin", Controller.adminLogin);
module.exports = router;
