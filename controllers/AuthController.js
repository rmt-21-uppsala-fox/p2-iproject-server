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

}

module.exports = AuthController