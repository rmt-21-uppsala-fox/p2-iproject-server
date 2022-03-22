const express = require("express");
const router = express.Router();
const travelRouter = require("./travels");

router.get("/");
router.use("/travel", travelRouter)

module.exports = router;