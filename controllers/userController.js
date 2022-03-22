const { User } = require("../models/index");
const { comparePw } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
class UserController {
  static async registration(req, res, next) {
    try {
      const { email, password, username, profilePict } = req.body;
      await User.create({ email, password, username, profilePict });
      res.status(201).json({ message: "User Created" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const respond = await User.findOne({ where: { email: email } });
      if (!respond) {
        throw new Error("INVALID_USER");
      }
      if (!comparePw(password, respond.password)) {
        throw new Error("INVALID_USER");
      }
      const token = signToken({ id: respond.id, username: respond.username });
      res.status(200).json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
