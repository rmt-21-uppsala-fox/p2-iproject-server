const { readToken } = require(`../helpers/jwt.js`);
const { User } = require(`../models`);

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw {
        name: `access_token is required`,
        message: `access_token is required`,
      };
    }
    const payload = readToken(access_token);
    const user = await User.findByPk(payload.id);

    if (!user) {
      throw {
        name: `Invalid access_token`,
        code: 403,
        message: `Invalid access_token`,
      };
    }

    req.userAccess = {
      id: user.id,
      email: user.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication };
