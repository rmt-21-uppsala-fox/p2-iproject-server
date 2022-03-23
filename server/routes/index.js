const express = require("express");
const DonationController = require("../controllers/donationController");
const router = express.Router();
const UserController = require("../controllers/userController");
const authentication = require("../middlewares/auth");
// const { authentication } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("Hello from server");
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.use(authentication);
router.post("/donation/:DonationId", DonationController.donation);
module.exports = router;
