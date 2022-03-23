const express = require("express");
const HotelController = require("../controllers/HotelController");
const { readToken } = require("../helpers/jwt");
const { Customer } = require("../models/");
const router = express.Router();

router.use(async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const decoded = readToken(access_token);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }
    const customer = await Customer.findOne({ where: { id: decoded.id, email: decoded.email } });
    if (!customer) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = {
      id: decoded.id,
      email: decoded.email,
    };
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      res.status(401).json({ message: "Invalid token" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

router.post("/:hotelId", HotelController.bookHotel);

module.exports = router;
