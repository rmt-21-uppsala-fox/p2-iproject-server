const { verifyToken } = require("../helpers/jwt");

let authc = async (req, res, next) => {
  try {

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authc;
