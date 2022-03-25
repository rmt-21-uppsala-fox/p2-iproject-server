const router = require("express").Router();
const Controller = require("../controllers/adminController");
const authentication = require("../middlewares/authentication");

router.post("/register", Controller.register);
router.post("/login", Controller.login);

router.get("/transactions", Controller.getTransactions);

router.use(authentication);

router.post("/products", Controller.postProduct);

module.exports = router;
