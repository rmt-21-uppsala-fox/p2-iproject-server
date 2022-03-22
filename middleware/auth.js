const { User } = require("../models/index");
const { readToken } = require("../helper/jwt");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = readToken(access_token);
    const findUser = await User.findByPk(payload.id)
    if (!findUser) {
      throw {name:"Invalid"};
    }
    req.requestAccess = {
      id: findUser.id,
      email: findUser.email,
      role: findUser.role
    }

    next()
  } catch (err) {
    next(err)
  }
};

module.exports = { authentication};
