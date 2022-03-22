const { Trip } = require("../models/index");

class ControllerTrip {
  static async getTrip(req, res, next) {
    try {
      const allTrip = await Trip.findAll();
      res.status(200).json(allTrip);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { ControllerTrip };
