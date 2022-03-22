const express = require("express");
const router = express.Router();
const routerPost = require("./Post");
const UserController = require("../controllers/userController");

router.post("/login", UserController.login);
router.post("/register", UserController.registration);
router.use("/meme", routerPost);

module.exports = router;
