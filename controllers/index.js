const { User, Product } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

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
        access_token: createToken(payload),
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const userData = await User.findOne({ where: { email } });

      if (!userData)
        throw {
          name: "Login Error",
          message: "Invalid email/password",
        };

      const isPasswordValid = comparePassword(password, userData.password);

      if (!isPasswordValid)
        throw {
          name: "Login Error",
          message: "Invalid email/password",
        };

      const payload = {
        id: userData.id,
        email: userData.email,
      };

      res.status(200).json({
        access_token: createToken(payload),
      });
    } catch (error) {
      next(error);
    }
  }

  static async authGoogle(req, res, next) {
    try {
      const { idToken } = req.body;

      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      const [userData] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          username: payload.name,
          email: payload.email,
          password: `${Math.random()}`,
        },
      });

      if (userData) {
        const token = createToken({ id: userData.id, email: userData.email });

        res.status(200).json({
          access_token: token,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async products(req, res, next) {
    try {
      const products = await Product.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        order: [["id"]],
      });
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = IndexController;
