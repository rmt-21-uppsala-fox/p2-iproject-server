const bcrypt = require("bcrypt");

const hashPassword = (rawPassword) => {
  return bcrypt.hashSync(rawPassword, 10);
};

const comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = { hashPassword, comparePassword };
