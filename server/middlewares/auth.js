const { readToken } = require("../helpers/helper");
const { User, Admin } = require("../models/index");
const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "Token Required" };

    const payload = readToken(access_token);
    if (!payload) throw { name: "Invalid Token" };

    const dataUser = await User.findByPk(payload.id);
    if (!dataUser) throw { name: "User not found" };

    req.user = {
      id: dataUser.id,
      email: dataUser.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};
const authenticationAdmin = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "Token Required" };

    const payload = readToken(access_token);
    if (!payload) throw { name: "Invalid Token" };

    const dataAdmin = await Admin.findByPk(payload.id);
    if (!dataAdmin) throw { name: "User not found" };

    req.admin = {
      id: dataAdmin.id,
      email: dataAdmin.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication, authenticationAdmin };
