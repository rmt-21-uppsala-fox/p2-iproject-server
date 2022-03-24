const express = require("express");
const router = express.Router();
const Controller = require("../controllers/customerController");
const { isLoginResto } = require("../middlewares/auth");

router.use(isLoginResto);

router.get("/:restaurantId", Controller.getAllRestaurantCustomer);
router.get("/:restaurantId/:customerId", Controller.getCustomer);
router.delete("/:restaurantId/:customerId", Controller.deleteCustomer);

module.exports = router;
