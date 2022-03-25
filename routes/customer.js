const router = require("express").Router();
const Controller = require("../controllers/customerController");
const authentication = require("../middlewares/authentication");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/products", Controller.getProduct);

router.use(authentication);

router.post("/orders", Controller.createOrder);
router.post("/nodemailer", Controller.nodemailer);

module.exports = router;
