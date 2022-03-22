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

  

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "BadRequestEmail" };
      if (!password) throw { name: "BadRequestPassword" };
  
      const isUser = await User.findOne({ where: { email } });
      if (!isUser) throw { name: "Unauthorized" };
  
      const isPassword = await bcrypt.compare(password, isUser.password);
      if (!isPassword) throw { name: "Unauthorized" };
  
      const access_token = jwt.sign(
        {
          id: isUser.id,
          name: isUser.name,
          email: isUser.email,
        },
        JWT_KEY
      );
  
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = {
  UserController
}