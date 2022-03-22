const { verifyToken } = require("../helpers/jwt");
const { User, Food, Customer } = require("../models");

const authN = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);

    const userData = await User.findByPk(payload.id);

    if (!userData)
      throw {
        name: "Login Error",
        message: "User not found",
      };

    req.userCredentials = {
      id: userData.id,
      email: userData.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authN };
