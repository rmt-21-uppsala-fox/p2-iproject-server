const express = require("express");
const router = express.Router();
const tripsRouter = require("./trips");
const {UserController} = require('../controllers/user')
const {ControllerTrip} = require('../controllers/trip')
const {getUser,getHomePost,postTranslate} = require('../controllers/api')
const { authentication } = require("../middleware/auth")

router.get("/",ControllerTrip.home);
router.post("/",ControllerTrip.homeCallback);
router.post("/login",UserController.login);
router.post("/register",UserController.register);
router.get("/photos",getUser);
router.get("/photos/home",getHomePost);
router.post("/translate",postTranslate);

router.use("/trip", tripsRouter)
router.use(authentication);

router.post("/xenditPay",ControllerTrip.xendintPayment)


module.exports = router;