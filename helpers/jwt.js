const Secret_Key = process.env.Secret_Key;

const jwt = require("jsonwebtoken");

const signToken = (payload) => {
  return jwt.sign(payload, Secret_Key);
};

const readToken = (token) => {
  return jwt.verify(token, Secret_Key);
};

module.exports = {
  signToken,
  readToken,
};
