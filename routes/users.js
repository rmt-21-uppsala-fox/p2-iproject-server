const express = require('express')
const router = express.Router()
const ControllerUsers = require("../controllers/users");

router.post("/register", ControllerUsers.register);

module.exports = router;