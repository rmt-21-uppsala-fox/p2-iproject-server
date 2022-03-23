const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { Customer } = require("../models/");

class AuthController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const data = await Customer.create({ username, email, password });
      res.status(201).json({ id: data.id, email: data.email });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        res.status(400).json({ message: error.errors[0].message });
      } else if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: "Email must be unique" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  static async login(req, res, next) {
    try {
      console.log("masuk");
      const { email, password } = req.body;
      console.log(email);
      console.log(password);
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

      const customer = await Customer.findOne({ where: { email } });
      if (!customer) {
        return res.status(401).json({ message: "Invalid email/password" });
      }

      const compared = comparePassword(password, customer.password);
      if (!compared) {
        return res.status(401).json({ message: "Invalid email/password" });
      }

      const payload = {
        id: customer.id,
        email: customer.email,
      };

      const jwtToken = createToken(payload);
      res.status(200).json({ access_token: jwtToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = AuthController;
