const router = require('express').Router();
const Controller = require('../controllers/carbonController');

router.get("/", Controller.getCarbonValue);

module.exports = router;