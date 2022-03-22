const { User } = require("../models/index");

class UserController {
  static async register(req, res, next) {
    try {
      const { userName, email, password } = req.body;
      const userCreate = await User.create({ userName, email, password });

      res.status(201).json({
        userName: userCreate.userName,
        email: userCreate.email,
        password: userCreate.password,
      });
    } catch (err) {
      next(err);
    }
  }

  // static async login(req, res, next){
  //     const {email, password} = req.body;
  //     const user = await User.findOne()
  // }
}
