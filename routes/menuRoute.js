const express = require("express");
const router = express.Router();
const multer = require("multer");
const { menuImageStorage } = require("../middlewares/multer");
const upload = multer({ storage: menuImageStorage });
const { isLoginResto } = require("../middlewares/auth");
const Controller = require("../controllers/menuController");

router.get("/:restaurantId", Controller.getAllMenuRestaurant);

router.use(isLoginResto);

router.post("/:restaurantId", upload.single("image"), Controller.addMenu);

module.exports = router;
