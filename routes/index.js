const express = require('express')
const router = express.Router()
const UserController = require("../controllers/userController")

router.post("/login")
router.post("/register", UserController.registration)

module.exports = router