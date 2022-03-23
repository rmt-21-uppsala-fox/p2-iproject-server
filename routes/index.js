const express = require("express");
const AuthController = require("../controllers/AuthController.js");
const XenditController = require("../controllers/XenditController.js");
const router = express.Router();
const hotelsRouter = require("./hotelsRouter.js");
const booksRouter = require("./booksRouter.js");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.use("/hotels", hotelsRouter);

router.post("/xenditpayment", XenditController.payment);

router.use("/hotels/book", booksRouter);

// define the about route
router.get("/about", (req, res) => {
  res.send("About World");
});

module.exports = router;
