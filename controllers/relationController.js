const {Relation,User} = require('../models/index.js')

class RelationController{
    static async addRelation(req,res,next){
        try {
            const {UserId} = req.params
            const {withId} = req.body
            await Relation.create({UserId,withId,status:'friend'})
            res.status(201).json({
                message:'success adding new friend'
            })
        } catch (error) {
            if(error.name === 'SequelizeValidationError'){
                res.status(400).json({
                    message:error.errors.map(e=>e.message)[0]
                })
            }else{
                res.status(500).json({
                    message:'Internal server error'
                })
            }
        }
    }

    //read relation bring all user
    static async readAllRelation(req,res,next){
        try {
            const {UserId} = req.params
            const relations = await Relation.findAll({where:{UserId},include:{model:User,attributes:['name','id']}})
            res.status(200).json(relations)
        } catch (error) {
            res.status(500).json({
                message:'Internal server error'
            })
        }
    }
}

module.exports = {RelationController}