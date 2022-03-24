const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "andrizal.dev2@outlook.com",
    pass: "123456wasd",
  },
});

module.exports = transporter;
