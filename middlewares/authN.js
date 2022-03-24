const jwt = require('jsonwebtoken')
const{User} = require('../models/index.js')
const authN = async (req,res,next)=>{
    try {
        if(!req.headers.token){
            throw({
                type:"known",
                code:401,
                message:"Authentication error"
            })
        }
        const {token} = req.headers
        const payload = jwt.verify(token,'secret') 
        const user = await User.findByPk(payload.id)
        if(!user){
            // throw new Error('user not found')
            throw({
                type:"known",
                code:401,
                message:"Authentication error"
            })
        }
        req.auth = {
            id:user.id,
            name:user.name
        }
        next()
    } catch (error) {
        if(error.code === 401){
            res.status(401).json({message:error.message})
        }else{
            res.status(500).json({message:'Internal server error'})
        }
    }
}

module.exports ={authN}