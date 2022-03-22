const express = require("express");
const router = express.Router();
const hotelsRouter = require("./hotelsRouter.js");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the home page route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/hotels", hotelsRouter);

// define the about route
router.get("/about", (req, res) => {
  res.send("About World");
});

module.exports = router;
