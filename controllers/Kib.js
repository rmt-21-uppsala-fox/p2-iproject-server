const { Kib } = require('../models');

class KibController {
   static async getKib(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const kib = await Kib.findAll({
            where: {
               userId: id
            }
         });

         res.status(200).json({ kib });

      } catch (error) {
         next(error);
      }
   }
}

module.exports = KibController;