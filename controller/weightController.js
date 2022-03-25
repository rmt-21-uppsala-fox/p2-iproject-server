const { Weight } = require('../models')

class weightController {
  static async postWeight(req, res, next){
    try{
      const newWeight = await Weight.create({
        BMI: req.body.BMI,
        userId: req.user.id
      })

      res.status(201).json(newWeight)
    } catch(err){
      next(err)
    }
  }

  static async getWeight(req, res, next){
    try{
      const id = req.user.id
      const allWeight = await Weight.findAll({
        where: {
          userId: id
        }
      })
      res.status(200).json([allWeight])
    } catch(err){
      next(err)
    }
  }
}


module.exports = {
  weightController
}