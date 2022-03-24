const router = require('express').Router();
const controller = require('../controllers/routeController');

// router.get("/", controller.getRoute);
router.get("/", controller.getMatchRoute);


module.exports = router;