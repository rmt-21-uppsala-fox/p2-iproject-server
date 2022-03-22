const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);
    if (!payload || !access_token) {
      throw new Error("INVALID_TOKEN");
    }
    const respond = await User.findByPk(payload.id);
    if (!respond) {
      throw new Error("INVALID_TOKEN");
    }
    req.userData = {
      id: respond.id,
      username: respond.username,
      uid: payload.uid,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
