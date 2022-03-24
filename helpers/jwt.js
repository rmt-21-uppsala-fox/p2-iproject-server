if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const jwt = require("jsonwebtoken");
const secretKey = process.env.Secret_key;

const signToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

const readToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  signToken,
  readToken,
};
