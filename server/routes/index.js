const router = require('express').Router();
const ControllerHLTV = require('../controllers/HLTVcontroller')

router.get('/ranks', ControllerHLTV.getRanks)

module.exports = router