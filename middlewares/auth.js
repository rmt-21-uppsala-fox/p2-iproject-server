const { readToken } = require("../helpers/jwt");
const { Restaurant } = require("../models");

const isLoginResto = (req, res, next) => {
  try {
    const { access_token_resto } = req.headers;
    const payload = readToken(access_token_resto);
    if (!payload) {
      throw {
        code: 401,
        name: "Unauthorize",
        message: "Invalid Token",
      };
    }
    const isResto = await Restaurant.findByPk(payload.id);
    if (!isResto) {
      throw {
        code: 401,
        name: "Unauthorize",
        message: "Invalid Token",
      };
    }
    req.identify = {
      restoId: payload.id,
      emailResto: payload.email,
    };
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  isLoginResto,
};
