const express = require("express");
const router = express.Router();
const tripsRouter = require("./trips");
const {UserController} = require('../controllers/user')
const {getUser} = require('../controllers/api')

router.get("/");
router.post("/login",UserController.login);
router.post("/register",UserController.register);
router.get("/photos",getUser);

router.use("/trip", tripsRouter)

module.exports = router;