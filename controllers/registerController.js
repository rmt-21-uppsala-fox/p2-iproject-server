const { Restaurant, Admin, Customer } = require("../models/index");
const { signToken } = require("../helpers/jwt");

const storage = require("../helpers/firebaseStorage");
const { ref, uploadBytes } = require("firebase/storage");

class Controller {
  static async registerRestaurant(req, res, next) {
    try {
      const { name, email, password } = req.body;
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
      next(err);
    }
  }
  static async registerAdmin(req, res, next) {
    try {
      const { name, email, password } = req.body;
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
        RestaurantId: +req.params.restoId,
      });
      const payload = {
        id: newCust.id,
        name: newCust.name,
        role: "Customer",
      };
      const access_token_Cust = signToken(payload);
      res.status(201).json({
        access_token_Cust,
        CustId: payload.id,
        message: "Successfully registered",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
