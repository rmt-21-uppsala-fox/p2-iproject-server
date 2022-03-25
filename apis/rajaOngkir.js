const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.rajaongkir.com/starter",
  headers: {
    "key": process.env.RAJA_ONGKIR_KEY,
  },
});

module.exports = instance;
