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
const xenditAuth = async (req, res, next) => {
  try {
    const xCallbackToken = req.headers["x-callback-token"];
    if (xCallbackToken !== process.env.XENDIT_CALLBACK_TOKEN) {
      throw { message: "Invalid token" };
    }
    console.log(req.body);
    res.status(200).send("OK");
  } catch (err) {
    console.log(err?.message || err);
    res.status(401).json(err?.message || err);
  }
};

module.exports = { authentication, authenticationAdmin, xenditAuth };
