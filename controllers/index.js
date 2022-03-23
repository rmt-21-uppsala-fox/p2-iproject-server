const {
  User,
  Product,
  Category,
  Workshop,
  Transaction,
  DetailTransaction,
  Payment,
} = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const { Op } = require("sequelize");
const axios = require("axios");

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
      next(error);
    }
  }

  static async myCart(req, res, next) {
    try {
      const { id } = req.userCredentials;

      const [transaction] = await Transaction.findOrCreate({
        where: [{ UserId: id }, { status: "Unstaged" }],
        defaults: {
          code: `FAP-#${new Date().getTime()}`,
          UserId: id,
        },
      });

      const mycart = await DetailTransaction.findAll({
        where: { TransactionId: transaction.id },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Product,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: {
            model: Category,
            attributes: ["name"],
          },
        },
      });

      res.status(200).json(mycart);
    } catch (error) {
      next(error);
    }
  }

  static async deleteMyCart(req, res, next) {
    try {
      const { id } = req.params;
      await DetailTransaction.destroy({ where: { id } });

      res.status(200).json({
        message: "Product succesfully deleted",
      });
    } catch (error) {
      next(error);
    }
  }

  static async payment(req, res, next) {
    try {
      const { id } = req.userCredentials;
      const transaction = await Transaction.findOne({
        where: [{ UserId: id }, { status: "Unstaged" }],
        attributes: ["id", "code"],
        include: [
          {
            model: User,
            attributes: ["email"],
          },
          {
            model: DetailTransaction,
            attributes: ["quantity"],
            include: {
              model: Product,
              attributes: ["price"],
            },
          },
        ],
      });
      let sumPrice = 0;
      transaction.DetailTransactions.forEach((el) => {
        sumPrice += el.quantity * el.Product.price;
      });

      const { data } = await axios({
        url: "https://api.xendit.co/v2/invoices",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Basic eG5kX2RldmVsb3BtZW50X3R0TEI0aURJY2lSZktpamxIOXpEVDV4YU42SWxsczd6Ym5ZdmpHN2VzaEx0YWt0NlZZQng1OGNyb3dEMVlsWTk6",
        },
        data: {
          external_id: transaction.code,
          amount: sumPrice,
          payer_email: transaction.User.email,
          description: `Invoice ${transaction.code}`,
        },
      });

      const addedPayment = await Payment.create({
        code: data.id,
        description: data.description,
        status: data.status,
        TransactionId: transaction.id,
        amount: data.amount,
        invoiceUrl: data.invoice_url,
      });

      res.status(201).json({
        id: addedPayment.id,
        TransactionId: addedPayment.TransactionId,
        invoiceUrl: addedPayment.invoiceUrl,
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
