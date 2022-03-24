const express = require("express");
const router = express.Router();
const animes = require ("./animes")
const users = require ("./users")

router.use("/animes", animes);
router.use("/users", users);

module.exports = router;