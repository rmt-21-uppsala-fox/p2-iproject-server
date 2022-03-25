const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.sandbox.midtrans.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  auth: {
    username: process.env.MIDTRANS_KEY,
    password: "",
  },
});

module.exports = instance;
