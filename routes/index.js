const express = require("express");
const router = express.Router();
const tripsRouter = require("./trips");
const {UserController} = require('../controllers/user')
const {ControllerTrip} = require('../controllers/trip')
const {getUser,getHomePost} = require('../controllers/api')


router.get("/",ControllerTrip.home);
router.post("/",ControllerTrip.homeCallback);
router.post("/login",UserController.login);
router.post("/register",UserController.register);
router.get("/photos",getUser);
router.get("/photos/home",getHomePost);

router.use("/trip", tripsRouter)

module.exports = router;