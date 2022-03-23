const express = require("express");
const router = express.Router();
const animes = require ("./animes")
const authentication = require("../middlewares/authc");

router.use("/animes", animes);
// router.use("/users", users);


// router.use(authentication);
// router.use("/jobs", jobs);

module.exports = router;