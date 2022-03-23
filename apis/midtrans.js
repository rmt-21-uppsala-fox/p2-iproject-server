const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.sandbox.midtrans.com",
  timeout: 1000,
  headers: {
    "x-happi-key": process.env.MIDTRANS_KEY,
  },
});

module.exports = instance;
