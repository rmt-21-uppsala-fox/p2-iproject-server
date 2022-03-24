const { Restaurant, Admin, Customer } = require("../models/index");

const storage = require("../helpers/firebaseStorage");
const { ref, uploadBytes } = require("firebase/storage");

class Controller {
  static async registerRestaurant(req, res, next) {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);
      const logo = req.file.path;
      // console.log(req.file);
      // const storageRef = ref(storage, "restaurantLogo");
      // const snapshot = await uploadBytes(storageRef, "../assets/logo/" + req.file.filename);
      // console.log(snapshot);
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
        RestaurantId: +req.params.restoId,
      });
      const payload = {
        id: newCust.id,
        name: newCust.name,
        role: "Customer",
      };
      const access_token_Cust = signToken(payload);
      console.log(newCust);
      res.status(201).json({
        access_token_Cust,
        message: "Successfully registered",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
