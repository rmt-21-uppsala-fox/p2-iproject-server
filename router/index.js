const express = require("express")
const router = express.Router()
const englishController = require("../controller/englishController")
const userController = require("../controller/userController")

router.post("/register", userController.register)
router.post("/login", userController.login)

router.get("/epl", englishController.getEPLTable)
router.get("/seriea", englishController.getITATable)
router.get("/laliga", englishController.getSPATable)

module.exports = router