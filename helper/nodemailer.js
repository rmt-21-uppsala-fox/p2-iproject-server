const nodemailer = require("nodemailer")
const { User } = require("../models")
const fs = require("fs")

function sendEmail(userEmail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "supreme.soccer.21@gmail.com",
      pass: "!project21"
    }
  })
  const option = {
    from: "supreme.soccer.21@gmail.com",
    to: userEmail,
    subject: "Greetings from Supreme Soccer",
    html: `<p><b>You are now registered as member of Supreme Soccer</b></p> 
    <p>You are now entitled to get along with fellow members, track your favorite progress and support your own top goal scorer candidate</p>
    <img src="logo@nodemailer.com"/>`,
    attachments: [
      {
        filename: 'supremesoccer.jpg',
        path: '../p2-iproject-server/public/assets/supremesoccer.jpg',
        cid: 'logo@nodemailer.com'
      }
    ]
  }
  transporter.sendMail(option, (err, info) => {
    if (err) {
      throw err
    } else {
      console.log(`Email sent: ${info.response}`)
    }
  })
}

function resetPassword(userEmail) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "supreme.soccer.21@gmail.com",
      pass: "!project21"
    }
  })
  const option = {
    from: "supreme.soccer.21@gmail.com",
    to: userEmail,
    subject: "Reset Password Enquiry",
    html: `<p><b>We received your rest password enquiry</b></p> 
    <p>Please follow the link below to continue the process</p>
    <p>"https://supremesoccer-a473f.web.app/respass"</p>
    <img src="logo@nodemailer.com"/>`,
    attachments: [
      {
        filename: 'supremesoccer.jpg',
        path: '../p2-iproject-server/public/assets/supremesoccer.jpg',
        cid: 'logo@nodemailer.com'
      }
    ]
  }
  transporter.sendMail(option, (err, info) => {
    if (err) {
      throw err
    } else {
      console.log(`Email sent: ${info.response}`)
    }
  })
}

module.exports = { sendEmail, resetPassword }