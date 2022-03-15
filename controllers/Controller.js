class Controller {
   static async home(req, res, next) {
      try {
         const allSchools = await School.findAll();
      } catch (error) {
         next(error);
      }
   }

   static async login(req, res, next) {


   }

   static async register(req, res, next) {
      try {
         const {
            schoolId,
            firstName,
            lastName,
            email,
            password
         } = req.body;

         const user = await User.create({
            schoolId,
            firstName,
            lastName,
            email,
            password
         });

         res.status(201).json({
            message: 'User created successfully',
            user
         });
      }
      catch (error) {
         next(error);
      }
   }

}
module.exports = Controller;