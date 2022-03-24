const { User } = require("../models");
const { readToken } = require("../helper/jwt");

let authenticate = async function (req, res, next) {
  try {
    if(!req.headers.access_token) throw{name: 'jwt must be provided'}
    const token = readToken(req.headers.access_token);
    const user = await User.findOne({ where: { email: token.email } });
    if (!user) throw{name: "Unauthorized"}
    req.user = user;
    next();
  } catch (err) {
    next(err)
  }
};



module.exports = {
  authenticate
}
