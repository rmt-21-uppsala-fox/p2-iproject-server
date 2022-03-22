const bcrypt = require("bcrypt");

const hashPass = (pass) => {
  return bcrypt.hashSync(pass, 10);
};
const comparePass = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashPass, comparePass };
