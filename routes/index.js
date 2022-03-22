const express = require("express");
const router = express.Router();
const travelRouter = require("./travels");
const {UserController} = require('../controllers/user')

router.get("/");
router.post("/login",UserController.login);



router.post("/register",UserController.register);
router.use("/travel", travelRouter)

module.exports = router;