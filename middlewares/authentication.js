const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.body;
    const payload = verifyToken(access_token);
    if (!payload || !access_token) {
      throw new Error("INVALID_TOKEN");
    }
    const respond = await User.findByPk(payload.id);
    req.userData = {
      id: respond.id,
      username: respond.username,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
