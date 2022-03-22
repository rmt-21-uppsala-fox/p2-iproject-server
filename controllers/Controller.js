const { comparePassword, signToken } = require('../helpers/helpers');
const { School, User } = require('../models');

class Controller {
   static async home(req, res, next) {
      try {
         const allSchools = await School.findAll();

         res.status(200).json({ allSchools });
      } catch (error) {
         console.log(error);
         next(error);
      }
   }

   static async login(req, res, next) {
      try {
         const { email, password } = req.body;

         const user = await User.findOne({
            where: {
               email,
               password
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
            SchoolId,
            email,
            password
         } = req.body;

         const user = await User.create({
            SchoolId,
            email,
            password
         });

         res.status(201).json({
            message: 'User created successfully',
            user
         });
      }
      catch (error) {
         console.log(error);
         next(error);
      }
   }
}
module.exports = Controller;