const express = require("express");
const router = express.Router();
const {ControllerTrip} = require('../controllers/trip')
const { authentication } = require("../middleware/auth");

router.get('/',ControllerTrip.getTrip)
router.use(authentication);
router.get('/:id',ControllerTrip.getTripId)

module.exports = router;