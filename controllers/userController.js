if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const { User } = require('../models/index.js')
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken')

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
                where: { email: payload.email }
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
                    email: payload.email,
                    gender: '-',
                    status: 'online'
                })
                const payLoad2 = { id: data.id }
                const token = makeToken(payLoad2)
                res.status(201).json({
                    token,
                    UserId: user.id,
                    name: user.name
                })
            }

        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }

    //user patch status online or offline
    //user find all status online

}

module.exports = { UserController }