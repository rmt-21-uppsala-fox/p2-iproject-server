const express = require("express")
const router = express.Router()
const englishController = require("../controller/englishController")

router.get("/epl", englishController.getEPLTable)
router.get("/seriea", englishController.getITATable)
router.get("/laliga", englishController.getSPATable)

module.exports = router