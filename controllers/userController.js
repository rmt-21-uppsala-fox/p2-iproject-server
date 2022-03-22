const { User } = require("../models/index");
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
}

module.exports = UserController;
