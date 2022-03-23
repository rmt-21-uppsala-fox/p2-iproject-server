const { User, Product } = require("../models");
const { comparePasswordWithHash } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const apiMidtrans = require("../apis/midtrans");

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

  // static async getPayments(req, res, next) {
  //   try {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Accept", "application/json");
  //     myHeaders.append("Content-Type", "application/json");
  //     myHeaders.append("Authorization", process.env.MIDTRANS_KEY);

  //     var raw = "\n\n";

  //     // var requestOptions = {
  //     //   headers: myHeaders,
  //     //   body: raw,
  //     //   redirect: "follow",
  //     // };

  //     const response = await apiMidtrans.get(
  //       "v2/SANDBOX-G710367688-806/status",
  //       requestmyHeadersOptions
  //     );
  //     console.log(response);
  //     res.status(200).json(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = CustomerControllers;
