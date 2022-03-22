const express = require("express");
const router = express.Router();
const travelRouter = require("./travels");
const {UserController} = require('../controllers/user')
const {getUser} = require('../controllers/api')

router.get("/");
router.post("/login",UserController.login);
router.post("/register",UserController.register);
router.get("/photos",getUser);

router.use("/travel", travelRouter)

module.exports = router;