const { User } = require(`../models/index.js`);
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
      res.status(201).json({ msg: `Welcome ${data.username}` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = controller;
