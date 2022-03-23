const { User, Product } = require("../models");
const { comparePasswordWithHash } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class AdminControllers {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({
        email,
        password,
      });
      res.status(201).json({ message: `Success create account ${user.email}` });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!email || !password) {
        throw {
          code: 400,
          name: "BadRequest",
          message: "Input email/password",
        };
      }

      if (!user) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid email or password",
        };
      }

      const isValidPassword = comparePasswordWithHash(password, user.password);
      if (!isValidPassword) {
        throw {
          code: 401,
          name: "Unauthorized",
          message: "Invalid email or password",
        };
      }

      const payload = { id: user.id, email: user.email };
      const access_token = generateToken(payload);

      res.status(200).json({
        message: "Login Successfull",
        access_token: access_token,
        id: user.id,
        username: user.username,
        email: user.email,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async postProduct(req, res, next) {
    const { name, imgUrl, price, description, category } = req.body;
    try {
      const product = await Product.create({
        name,
        imgUrl,
        price,
        description,
        category,
      });

      res.status(201).json({ product });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = AdminControllers;
