const jwt = require(`jsonwebtoken`);

const createToken = (payload) => {
  return jwt.sign(payload, process.env.key);
};

const readToken = (token) => {
  return jwt.verify(token, process.env.key);
};

module.exports = { createToken, readToken };
