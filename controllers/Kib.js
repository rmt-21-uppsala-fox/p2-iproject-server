const { DataKib } = require('../models');
const { Op } = require("sequelize");

class KibController {
   static async getKib(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const kib = await DataKib.findAll({
            where: {
               userId: id
            }, 
            attributes: {
               exclude: ['UserId', "createdAt", "updatedAt"]
            }
         });
         if(!kib) {
            throw new Error("Data not found");
         }

         res.status(200).json({ kib });

      } catch (error) {
         next(error);
      }
   } 

   static async createKib(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const {
            name,
            type,
            date,
            originOfFounds,
            price
         } = req.body;

         const kib = await DataKib.create({
            name,
            type,
            date,
            originOfFounds,
            price,
            UserId: id
         });

         res.status(200).json({ kib });

      } catch (error) {
         next(error);
      }
   }

   static async updateKib(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const {
            name,
            type,
            date,
            originOfFounds,
            price
         } = req.body;

         const kib = await DataKib.update({
            name,
            type,
            date,
            originOfFounds,
            price,
            UserId: id
         }, {
            where: {
               id: req.params.id
            }
         });

         res.status(200).json({ kib });

      } catch (error) {
         next(error);
      }
   }

   static async deleteKib(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const kib = await DataKib.destroy({
            where: {
               [Op.and]: [
                  { id: req.params.id },
                  { UserId: id }
               ]
            }
         });

         res.status(200).json({ kib });

      } catch (error) {
         next(error);
      }
   }
}

module.exports = KibController;