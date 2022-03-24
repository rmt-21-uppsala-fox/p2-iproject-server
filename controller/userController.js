const { User } = require("../models");
const { comparePassword } = require("../helper/bcrypt");
const { createToken } = require("../helper/jwt");
const { rapidApiGet, nutritionixApi } = require("../apis/rapidApi");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
// const { OAuth2Client } = require('google-auth-library')

class UserController {
  static async registerUser(req, res, next) {
    try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
      });

      //initialize nodemailer
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.userNodemail,
          pass: process.env.passNodemail,
        },
      });

      // point to the template folder
      const handlebarOptions = {
        viewEngine: {
          partialsDir: path.resolve("./views/"),
          defaultLayout: false,
        },
        viewPath: path.resolve("./views/"),
      };

      // use a template file with nodemailer
      transporter.use("compile", hbs(handlebarOptions));

      let mailOptions = {
        from: 'iproject21coba1@gmail.com',
        to: `${newUser.email}`, // list of receivers
        subject: "Welcome!",
        template: "email", // the name of the template file i.e email.handlebars
        context: {
          name: `${newUser.email.split("@")[0]}`
        },
      };

      // trigger the sending of the E-mail
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          next(err)
        }
      });
      res.status(201).json({
        msg: `Register Compleate`,
        identity: newUser,
      });
    } catch (err) {
      next(err);
    }
  }

  static async home(req, res) {
    res.status(200).json({ msg: "this is" });
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const foundEmail = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!foundEmail) throw { name: "invalid email/password" };

      const validatingPassword = comparePassword(password, foundEmail.password);

      if (!validatingPassword) throw { name: "invalid email/password" };

      const payload = {
        id: foundEmail.id,
        email: foundEmail.email,
        role: foundEmail.role,
      };

      const accessToken = createToken(payload);
      res.status(200).json({
        msg: "success log in",
        token: accessToken,
        id: foundEmail.id,
        email: foundEmail.email,
        role: foundEmail.role,
      });
    } catch (err) {
      next(err);
    }
  }

  static async allMenu(req, res, next) {
    try {
      const q = req.query.q;
      let result = await rapidApiGet.get(`/search?q=${q}`);
      let menus = result.data.hits;
      menus.forEach((element) => {
        element.recipe.calories = Math.round(+element.recipe.calories);
        element.recipe.identity = Math.floor(Math.random() * 999999);
      });
      res.status(200).json(menus);
    } catch (err) {
      next(err);
    }
  }

  static async allMenuNutritionix(req, res, next) {
    try {
      const q = req.query.q;
      let result = await nutritionixApi.get(`/search/${q}`);
      let menus = result.data.hits;
      menus.forEach((element) => {
        element.fields.nf_calories = Math.round(+element.fields.nf_calories);
        element.fields.identity = Math.floor(Math.random() * 999999);
      });
      res.status(200).json(menus);
    } catch (err) {
      next(err);
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
      const foundEmail = await User.findOne({
        where: {
          email: payload.email,
        },
      });

      if (foundEmail) {
        const payload2 = {
          id: foundEmail.id,
          email: foundEmail.email,
        };
        const accessToken = createToken(payload2);

        res.status(200).json({
          msg: "success log in with google",
          token: accessToken,
          id: foundEmail.id,
          email: foundEmail.email,
        });
      } else {
        const newAccount = await User.create({
          email: payload.email,
          password: (
            Math.floor(Math.random() * 999999) +
            Math.floor(Math.random() * 999999)
          ).toString(),
        });
        const payload3 = {
          id: newAccount.id,
          email: newAccount.email,
          role: newAccount.role,
        };
        const accessToken = createToken(payload3);

        res.status(200).json({
          msg: "success log in with google",
          token: accessToken,
          id: newAccount.id,
          email: newAccount.email,
        });
      }
      res.json({ idToken });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
