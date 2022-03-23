const { User } = require('../models')

class Controller {

    static async register (req, res) {
        try {
            const { email, password } = req.body
            const newUser = {
                email,
                password
            }
            const createUser = await User.create(newUser)
            res.status(201).json({
                id: createUser.id,
                email: createUser.email,
            });
        } catch (error) {
            if (error.name === "SequelizeValidationError") {
                res.status(400).json({ message: error.errors[0].message });
            } else if (error.name === "SequelizeUniqueConstraintError") {
                res.status(400).json({ message: error.errors[0].message });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }


    }


}


module.exports = Controller