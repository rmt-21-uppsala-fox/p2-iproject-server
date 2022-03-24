if (process.env.NODE_ENV !== "production") require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// secretKey = "renes";

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
function generateToken(payload) {
  return jwt.sign(payload, process.env.secretKey);
}
function readToken(token) {
  return jwt.verify(token, process.env.secretKey);
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  readToken,
};
