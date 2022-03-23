const { comparePassword, signToken } = require('../helpers/helpers.js');
const { School, User } = require('../models');

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
}
module.exports = Controller;