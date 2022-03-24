const { Restaurant } = require("../models");

class Controller {
  static async getAllRestaurant(req, res, next) {
    try {
      const allRestaurant = await Restaurant.findAll();
      res.status(200).json(allRestaurant);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
