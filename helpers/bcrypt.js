const bcrypt = require("bcrypt");

const hashPass = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePass = (password, passwordHashed) => {
  return bcrypt.compareSync(password, passwordHashed);
};

module.exports = {
  hashPass,
  comparePass,
};
