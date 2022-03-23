const router = require('express').Router();
const Controller = require('../controllers/carbonController');

router.get("/", Controller.getCarbonValue);
router.get("/fuelEfficiency", Controller.getFuelEfficiency);

module.exports = router;