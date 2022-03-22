const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
// const { authentication } = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.send("Hello from server");
});

router.post("/register", UserController.register);
router.post("/login", UserController.login);
// router.post("/authGoogle", UserController.authGoogle);

// router.use("/customer", routerCustomer);

// router.use(authentication);
// router.use("/food", routerFood);

module.exports = router;
