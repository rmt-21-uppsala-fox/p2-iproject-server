const express = require("express");
const HotelController = require("../controllers/HotelController");
const router = express.Router();

router.get("/", HotelController.getHotels);

router.get("/markers", HotelController.getMarkers);

router.get("/markers/:hotelId", HotelController.getMarkersById);

module.exports = router;
