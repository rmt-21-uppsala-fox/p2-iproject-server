const { User, Category } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class IndexController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;

      const addedUser = await User.create({
        username,
        email,
        password,
      });

      const payload = {
        id: addedUser.id,
        email: addedUser.email,
      };

      res.status(201).json({
        accessToken: createToken(payload),
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IndexController;
