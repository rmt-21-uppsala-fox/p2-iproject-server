const {
    comparePassword
} = require('../helpers/bcrypt')
const {
    generateToken
} = require('../helpers/jwt')
const {
    User
} = require('../models');
class AuthController {
    static async register(req, res, next) {
        try {
            let {
                email,
                username,
                password
            } = req.body

            const response = await User.create({
                email,
                username,
                password
            })
            res.status(201).json({
                message: "Successfully register user",
                id: response.id,
                username: response.username,
                email: response.email
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async login(req, res, next) {
        try {
            const {
                username,
                password
            } = req.body
            const foundUser = await User.findOne({
                where: {
                    username
                }
            })
            if (!username || !password) {
                throw {
                    name: "BadRequest"
                }
            }
            //cari user dari db ada ga
            if (!foundUser) {
                throw {
                    name: "Unauthorized"
                }
            }
            //makesure password dari client sama ga dg di server
            const trueUser = comparePassword(password, foundUser.password)
            if (!trueUser) {
                throw {
                    name: "Unauthorized"
                }
            }
            //buat payloadnya dulu
            const payload = {
                id: foundUser.id,
                username: foundUser.username
            }
            //baru deh generate tokennya
            const access_token = generateToken(payload)
            res.status(201).json({
                access_token
            })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = AuthController