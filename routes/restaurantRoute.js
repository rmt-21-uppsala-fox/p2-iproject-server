const express = require("express");
const { isLoginResto } = require("../middlewares/auth");
const router = express.Router();
const Controller = require("../controllers/restaurantController");

router.use(isLoginResto);

router.get("/", Controller.getAllRestaurant);

module.exports = router;
