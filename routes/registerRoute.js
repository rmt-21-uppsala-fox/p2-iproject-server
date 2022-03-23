const express = require("express");
const router = express.Router();
const multer = require("multer");
const { logoStorage } = require("../middlewares/multer");
const upload = multer({ storage: logoStorage });
const Controller = require("../controllers/registerController");

router.post("/restaurant", upload.single("logo"), Controller.registerRestaurant);
router.post("/admin", Controller.registerAdmin);

module.exports = router;
