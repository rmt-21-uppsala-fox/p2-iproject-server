const {
  User,
  Product,
  Category,
  Workshop,
  Transaction,
  DetailTransaction,
} = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const { Op } = require("sequelize");

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
      const { page, search, category } = req.query;
      let categories = category ? category.split(";") : null;
      const pageLimit = 9;
      const products = await Product.findAndCountAll({
        limit: page ? pageLimit : null,
        offset: page ? (page - 1) * pageLimit : 0,
        where: {
          name: { [Op.iLike]: search ? `%${search}%` : "%%" },
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Category,
          where: { name: categories ? categories : { [Op.iLike]: "%%" } },
          attributes: ["name"],
        },
        order: [["id"]],
      });
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
  static async productById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Category,
            attributes: ["name"],
          },
          {
            model: Workshop,
            attributes: ["name"],
          },
        ],
      });

      if (!product)
        throw {
          name: "Not Found",
          message: "Product not found",
        };

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async addMyCart(req, res, next) {
    try {
      const { ProductId } = req.params;
      const { quantity } = req.body;
      const { id } = req.userCredentials;

      const product = await Product.findByPk(ProductId);

      if (!product)
        throw {
          name: "Not Found",
          message: "Product not found",
        };

      const [transaction] = await Transaction.findOrCreate({
        where: [{ UserId: id }, { status: "Unstaged" }],
        defaults: {
          code: `FAP-#${new Date().getTime()}`,
          UserId: id,
        },
      });

      const detailTransaction = await DetailTransaction.create({
        TransactionId: transaction.id,
        ProductId,
        quantity,
      });

      res.status(201).json({
        id: detailTransaction.id,
        TransactionId: detailTransaction.TransactionId,
        ProductId: detailTransaction.ProductId,
        quantity: detailTransaction.quantity,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async paymentSuccess(req, res, next) {
    console.log(req.body);
    console.log(req.headers);
    res.status(200).json({
      message: "I have received the payment callback",
    });
  }
}

module.exports = IndexController;
