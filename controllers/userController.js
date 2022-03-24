const { User } = require("../models");
const { payloadToken } = require("../helpers/jwt");
const { compare } = require("../helpers/bcrypt");

class UserController {
  static async register(req, res) {
    try {
      const { firstName, lastName, email, password, phoneNumber } = req.body;
      const data = await User.create({
        firstName,
        lastName,
        password,
        phoneNumber,
        email,
      });
      res.status(201).json(data);
    } catch (error) {
      return next(error);
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const userLogin = await User.findOne({
        where: {
          email,
        },
      });
      if (!userLogin) {
        return next({ name: "NotFound" });
      }
      const rightPassword = compare(password, userLogin.password);
      if (!rightPassword) {
        return next({ name: "NotFound" });
      }
      const payload = {
        id: userLogin.id,
      };
      // Bikin Token
      const token = payloadToken(payload);
      res.status(200).json({
        access_token: token,
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = UserController;
