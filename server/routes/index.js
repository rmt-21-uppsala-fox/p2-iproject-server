const router = require('express').Router();
const ControllerHLTV = require('../controllers/HLTVcontroller')

router.get('/ranks', ControllerHLTV.getRanks)
router.get('/matches', ControllerHLTV.getMatches)

module.exports = router