const express = require("express");
const AdminController = require("../controllers/adminController");
const DonationController = require("../controllers/donationController");
const router = express.Router();
const UserController = require("../controllers/userController");
const authentication = require("../middlewares/auth");
// const { authentication } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("Hello from server");
});

router.post("/admin/register", AdminController.register);
router.post("/admin/login", AdminController.login);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/donation", DonationController.getAllDonation);
router.get("/donation/:id", DonationController.detailDonation);

router.use(authentication);
router.post("/donation/:DonationId", DonationController.donation);
router.post(
  "/updateuserhistory/:UserHistoryId",
  DonationController.updateStatus
);
// router.patch('/userhistory/:',DonationController.updateStatus)

module.exports = router;
