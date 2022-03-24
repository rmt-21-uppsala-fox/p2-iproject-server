const { comparePassword, signToken } = require('../helpers/helpers.js');
const { School, User } = require('../models');
const nodemailer = require('nodemailer');


class Controller {
   static async home(req, res, next) {
      try {
         const allSchools = await School.findAll();

         res.status(200).json({ allSchools });
      } catch (error) {
         next(error);
      }
   }

   static async login(req, res, next) {
      try {
         const { email, password } = req.body;
         const user = await User.findOne({
            where: {
               email: email
            }
         });

         if (!user) {
            throw new Error('Invalid email or password');
         }
         const passwordCheck = comparePassword(password, user.password);

         if (!passwordCheck) {
            throw new Error('Invalid email or password');
         }

         const payload = {
            id: user.id,
         }

         const token = signToken(payload);
         res.status(200).json({
            message: 'User logged in successfully',
            token
         });

      } catch (error) {
         next(error);
      }
   }

   static async register(req, res, next) {
      try {
         const {
            schoolId,
            email,
            password,
            role
         } = req.body;

         const user = await User.create({
            schoolId,
            email,
            password,
            role
         });

         var transporter = nodemailer.createTransport({
            service: "hotmail",
            auth: {
               user: "alizta27@outlook.co.id",
               pass: "trythis007"
            }
         });

         let mailOptions = {
            from: 'alizta27@outlook.co.id',
            to: email,
            subject: 'Sending Email using Nodejs',
            text: `Akun anda adalah: ${email}, password: ${password}. Tolong jangan bagikan ke orang lain.`
         };

         transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err;
            console.log('Email sent: ' + info.response);
         });

         res.status(201).json({
            message: 'User created successfully',
            email: user.email,
            role: user.role
         });
      }
      catch (error) {
         next(error);
      }
   }

   static downloadFiles(req, res) {
      const fileName = req.params.name;
      const path = __basedir + "/template/";

      res.download(path + fileName, (err) => {
         if (err) {
            res.status(500).send({
               message: "File can not be downloaded: " + err,
            });
         }
      });
   };
}
module.exports = Controller;