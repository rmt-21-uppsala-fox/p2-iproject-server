const express = require("express");
const GetRegion = require("../API/getRegion");
const AdminController = require("../controllers/adminController");
const DonationController = require("../controllers/donationController");
const router = express.Router();
const UserController = require("../controllers/userController");
const {
  authentication,
  authenticationAdmin,
  xenditAuth,
} = require("../middlewares/auth");
// const { authentication } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("Hello from server");
});

router.post("/admin/register", AdminController.register);
router.post("/admin/login", AdminController.login);
router.post(
  "/admin/createdonation",
  authenticationAdmin,
  AdminController.createDonation
);
router.get("/admin/getProvince", GetRegion.getProvince);
router.get("/admin/getKota/:id", GetRegion.getKota);
router.get("/admin/getKecamatan/:id", GetRegion.getKecamatan);
router.get("/admin/getKelurahan/:id", GetRegion.getKelurahan);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
//get all donation
router.get("/donation", DonationController.getAllDonation);
//detail donation
router.get("/donation/:id", DonationController.detailDonation);

router.post("/xendit-callback", DonationController.updateStatus);
router.use(authentication);
//kurang my donation
router.get("/mydonation", DonationController.getMyDonation);
router.post("/donation/:DonationId", DonationController.donation);
router.post(
  "/updateuserhistory/:UserHistoryId",
  DonationController.updateStatus
);

module.exports = router;
