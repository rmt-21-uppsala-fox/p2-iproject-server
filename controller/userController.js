const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { sendEmail } = require("../helper/nodemailer")
const secret = process.env.secret || "secretkey"
class userController {
  static async register(req, res, next) {
    try {
      const { email, name, password } = req.body
      const newUser = await User.create({ email, name, password })
      sendEmail(newUser.email)
      res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })
      if (!user) {
        throw {
          code: 401,
          msg: "Invalid email/password"
        }
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw {
          code: 401,
          msg: "Invalid email/password"
        }
      }
      const access_token = await jwt.sign({
        id: user.id,
        name: user.name
      }, secret)
      res.status(200).json({
        access_token,
        id: user.id,
        name: user.name
      })

    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = userController