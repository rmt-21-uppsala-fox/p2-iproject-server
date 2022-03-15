const { Profil } = require('../models');
class ProfilController {
   static async getProfil(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const profil = await Profil.findOne({
            where: {
               userId: id
            }
         });
         res.status(200).json({ profil });
      } catch (error) {
         next(error);
      }

   }
}

module.exports = ProfilController;