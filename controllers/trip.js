const { Trip } = require("../models/index");

class ControllerTrip {
  static async getTrip(req, res, next) {
    try {
      const allTrip = await Trip.findAll();
      res.status(200).json(allTrip);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getTripId(req, res, next) {
    try {
      const id = req.params.id;
      if(!id) throw { name: "NotFound" }
      const Trip = await Trip.finByPk(id);
      res.status(200).json(Trip);
    } catch (err) {
      next(err);
    }
  }
  
}

module.exports = { ControllerTrip };
