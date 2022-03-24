if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const { User } = require('../models/index.js')
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken')
const axios = require('axios')
const { Op } = require("sequelize");

class UserController {
    static async userLogin(req, res, next) {
        try {
            const { name } = req.body
            const user = await User.findOne({ where: { name } })
            // if(!user){
            //     throw({
            //         name:'clientError',
            //         code:400,
            //         msg:'invalid Name'
            //     })
            // }
            res.status(200).json({ name: user.name, id: user.id })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }

    static async googleRegist(req, res, next) {
        try {
            
            const gToken = req.body.id_token
            const client = new OAuth2Client(process.env.gClientId)
            const ticket = await client.verifyIdToken({ idToken: gToken, audience: process.env.gClientId })
            const payload = ticket.getPayload();
            const user = await User.findOne({
                where: { identity: payload.email }
            })
            if (user) {
                
                const payLoad2 = { id: user.id }
                const token = jwt.sign(payLoad2, 'secret')
                res.status(200).json({
                    token,
                    UserId: user.id,
                    name: user.name
                })
            } else {
                const data = await User.create({
                    // username,email,password,phoneNumber,address,role
                    name: payload.name,
                    identity: payload.email,
                    gender: '-',
                    status: 'online'
                })
                
                const payLoad2 = { id: data.id }
                const token = jwt.sign(payLoad2,'secret')
                res.status(201).json({
                    token,
                    UserId: data.id,
                    name: data.name
                })
            }

        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }


    static async readAllUser(req,res,next){
        try {
            let option = {}
            if(req.query.search){
                option={name:{
                    [Op.iLike]: `%${req.query.search}%`
                }}
            }
            const users = await User.findAll({where:option,attributes:['name','id']})
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }
    //userFindAllFeature

    //facebookSignIn
    static async facebookSignIn(req, res, next) {
        try {
            const {accessToken} = req.body
            const {data} = await axios({url:`https://graph.facebook.com/me?access_token=${accessToken}`,method:'GET'})
            const user = await User.findOne({where: { identity: data.id }})
            
            if (user) {
                const payLoad2 = { id: user.id }
                const token = jwt.sign(payLoad2, 'secret')
                res.status(200).json({
                    token,
                    UserId: user.id,
                    name: user.name
                })
            } else {
                const user2 = await User.create({
                    // username,email,password,phoneNumber,address,role
                    name: data.name,
                    identity: data.id,
                    gender: '-',
                    status: 'online'
                })
                const payLoad2 = { id: user2.id }
                const token = jwt.sign(payLoad2, 'secret')
                res.status(201).json({
                    token,
                    UserId: user2.id,
                    name: user2.name
                })
            }
            
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }

    //user patch status online or offline
    

}

module.exports = { UserController }