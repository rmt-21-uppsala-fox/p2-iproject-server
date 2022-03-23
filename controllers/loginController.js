const { comparePass } = require("../helpers/bcrypt");
const { Restaurant, Admin } = require("../models");
const { signToken } = require("../helpers/jwt");

class Controller {
  static async restaurantLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      const isResto = await Restaurant.findOne({
        where: {
          email,
        },
      });
      if (!isResto) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid username or email or password",
        };
      }
      const isValid = comparePass(password, isResto.password);
      if (!isValid) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid username or email or password",
        };
      }
      const payload = {
        id: isResto.id,
        email: isResto.email,
      };
      const access_token_Resto = signToken(payload);
      res.status(200).json({ access_token_Resto });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async adminLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      const isAdmin = await Admin.findOne({
        where: {
          email,
        },
      });
      if (!isAdmin) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid username or email or password",
        };
      }
      const isValid = comparePass(password, isAdmin.password);
      if (!isValid) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid username or email or password",
        };
      }
      const payload = {
        id: isAdmin.id,
        email: isAdmin.email,
      };
      const access_token_Admin = signToken(payload);
      res.status(200).json({ access_token_Admin });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
module.exports = Controller;
