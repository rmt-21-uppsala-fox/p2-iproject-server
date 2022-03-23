const { Restaurant, Admin, Customer } = require("../models/index");
class Controller {
  static async registerRestaurant(req, res, next) {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);
      const logo = req.file.path;
      const newResto = await Restaurant.create({
        name,
        email,
        password,
        logo,
      });
      res.status(201).json({
        id: newResto.id,
        email: newResto.email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async registerAdmin(req, res, next) {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);
      const newAdmin = await Admin.create({
        name,
        email,
        password,
      });
      res.status(201).json({
        id: newAdmin.id,
        email: newAdmin.email,
      });
    } catch (err) {
      next(err);
    }
  }
  static async regisCust(req, res, next) {
    try {
      const { name, email } = req.body;
      const newCust = await Customer.create({
        name,
        email,
        RestaurantId: req.params.restoId,
      });
      const payload = {
        id: newCust.id,
        name: newCust.name,
        role: "Customer",
      };
      console.log(newCust);
      res.status(201).json({
        payload,
        message: "Successfully registered",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
