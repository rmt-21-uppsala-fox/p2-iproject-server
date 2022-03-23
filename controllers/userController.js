const {User} = require('../models/index.js')

class UserController{
    static async userLogin(req,res,next){
        try {
            const {name} = req.body
            const user = await User.findOne({where:{name}})
            // if(!user){
            //     throw({
            //         name:'clientError',
            //         code:400,
            //         msg:'invalid Name'
            //     })
            // }
            res.status(200).json({name:user.name,id:user.id})
        } catch (error) {
            res.status(500).json({
                message:'Internal server error'
            })
        }
    }

    //user patch status online or offline
    //user find all status online

}

module.exports = {UserController}