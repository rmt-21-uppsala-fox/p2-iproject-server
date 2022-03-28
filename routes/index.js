const router = require('express').Router();
const ControllerHLTV = require('../controllers/HLTVcontroller')
const ControllerAuth = require('../controllers/authController')
const authentication = require('../middlewares/authentication')

router.post('/register', ControllerAuth.register)
router.post('/login', ControllerAuth.login)

router.use(authentication)

router.get('/TeamRanks', ControllerHLTV.getTeamRanks)
router.get('/matches', ControllerHLTV.getMatches)
router.get('/news', ControllerHLTV.getNews)
router.get('/player/:name', ControllerHLTV.getPlayer)
router.get('/playerRank', ControllerHLTV.getPlayerRanking)

module.exports = router