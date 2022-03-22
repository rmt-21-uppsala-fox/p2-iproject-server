const express = require("express");
const router = express.Router();
const {ControllerTrip} = require('../controllers/user')


router.get('/',ControllerTrip.getTrip)
router.get('/:id',ControllerTrip.getTripId)

module.exports = router;