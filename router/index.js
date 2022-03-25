const express = require("express")
const router = express.Router()
const leagueController = require("../controller/leagueController")
const userController = require("../controller/userController")
const { authn } = require("../middleware/auth")

router.post("/register", userController.register)
router.post("/login", userController.login)
router.post("/authGoogle", userController.authGoogle)
router.post("/sendReset", userController.sendResetMail)
router.patch("/changePassword", userController.resPassword)
router.get("/carousel", leagueController.getCarousel)
router.use(authn)

router.get("/epl", leagueController.getEPLTable)
router.get("/seriea", leagueController.getITATable)
router.get("/laliga", leagueController.getSPATable)
router.get("/epltop", leagueController.getEPLTop)
router.get("/serieatop", leagueController.getITATop)
router.get("/laligatop", leagueController.getSPATop)
router.get("/myfav", leagueController.findFav)
router.post("/myfav", leagueController.claimFav)

module.exports = router