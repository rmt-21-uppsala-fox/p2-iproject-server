const express = require("express");
const router = express.Router();
const { isLoginCustomer } = require("../middlewares/auth");
const Controller = require("../controllers/orderController");

router.use(isLoginCustomer);

router.get("/", Controller.getAllOrderByCust);
router.post("/:menuId", Controller.addOrder);
router.delete("/:orderId", Controller.deleteOrder);

module.exports = router;
