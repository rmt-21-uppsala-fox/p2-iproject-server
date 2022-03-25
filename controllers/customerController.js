const { User, Product, Order, Transaction } = require("../models");
const { comparePasswordWithHash } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const midtransClient = require("midtrans-client");

class CustomerControllers {
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

  static async getProduct(req, res, next) {
    try {
      const product = await Product.findAll();

      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async createOrder(req, res, next) {
    try {
      const { id, email } = req.currentUser;
      const { transactionItems, totalCost, totalOngkir } = req.body;

      const order = await Order.create({
        totalCost,
        totalOngkir,
        UserId: id,
      });

      const transaction = await Transaction.bulkCreate(
        transactionItems.map((item) => {
          item.OrderId = order.id;
          return item;
        })
      );

      const transactionModel = await Transaction.findAll({
        where: {
          OrderId: order.id,
        },
        include: Product,
      });

      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: process.env.MIDTRANS_KEY,
      });

      let parameter = {
        transaction_details: {
          order_id: order.id,
          gross_amount: totalCost,
        },

        customer_details: {
          email: email,
        },

        item_details: transactionModel.map((item) => {
          return {
            id: item.id,
            price: item.Product.price,
            quantity: item.quantity,
            name: item.Product.name,
            category: item.Product.category,
          };
        }),
      };

      snap.createTransaction(parameter).then((transaction) => {
        let transactionToken = transaction.token;
        console.log("transactionToken:", transactionToken);
        res
          .status(201)
          .json({ order: order, transaction: transaction, transactionToken });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CustomerControllers;
