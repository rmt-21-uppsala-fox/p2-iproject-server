const { User } = require(`../models/index.js`);
const { comparePass } = require(`../helpers/bcrypt.js`);
const { createToken } = require(`../helpers/jwt.js`);
class controller {
  static async regist(req, res, next) {
    try {
      const { email, password, username } = req.body;
      // console.log({ email, password, username });
      const data = await User.create({
        email,
        password,
        username,
      });

      const payload = { id: data.id };
      const token = createToken(payload);
      // console.log(token);
      res.status(201).json({ access_token: token, id: data.id });
    } catch (err) {
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw {
          name: `Email is required`,
          message: `Email is required`,
        };
      } else if (!password) {
        throw {
          name: `Password is required`,
          message: `Password is required`,
        };
      }

      const data = await User.findOne({ where: { email } });

      if (!data) {
        throw {
          name: `Invalid Email/Password`,
          message: `Invalid Email/Password`,
        };
      }

      const passUser = comparePass(password, data.password);
      // console.log(passUser);

      if (!passUser) {
        throw {
          name: `Invalid Email/Password`,
          message: `Invalid Email/Password`,
        };
      }

      const payload = { id: data.id };

      // console.log(payload);

      const token = createToken(payload);

      res.status(200).json({ access_token: token, id: data.id });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }
}

module.exports = controller;
