const { DataKib } = require('../models');
const { Op } = require("sequelize");

const csv = require("csv-parser")
const fs = require('fs');

class KibController {
   static async getKib(req, res, next) {
      try {
         const { id } = req.userAccessLogin;
         const kib = await DataKib.findAll({
            where: {
               UserId: id
            },
            attributes: {
               exclude: ['UserId', "createdAt", "updatedAt"]
            }
         });
         if (!kib) {
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
         const idKib = req.params.id

         const kib = await DataKib.destroy({
            where: {
               [Op.and]: [
                  { id: idKib },
                  { UserId: id }
               ]
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

   static async multer(req, res, next) {
      try {
         let result = []
         fs.createReadStream('files/' + req.file.originalname)
            .pipe(csv({}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
               let id = req.userAccessLogin.id
               let data = result.map(el => {
                  return {
                     name: el.name,
                     type: el.type,
                     date: new Date(el.date),
                     originOfFounds: el.originOfFounds,
                     price: el.price,
                     UserId: id
                  }
               })
               DataKib.bulkCreate(data)
               fs.unlink('files/' + req.file.originalname, function (err) {
               });
            })
         res.status(200).json({ file: req.file });
      } catch (err) {
         next(err)
      }
   }
}

module.exports = KibController;