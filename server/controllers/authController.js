const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
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

    static async login(req,res){
        try {
            const { email, password } = req.body;
            if (!email) {
                throw { name: "emailRequired" };
            }
            if (!password) {
                throw { name: "passwordRequired" };
            }
    
            let findUser = await User.findOne({
                where: {
                    email,
                },
            });
            if (!findUser) {
                throw { name: "InvalidToken" };
            }
    
            const comparePassword = bcrypt.compareSync(password, findUser.password);
            if (!comparePassword) {
                throw { name: "InvalidToken" };
            }
    
            const payload = {
                id: findUser.id,
                email: findUser.email,
            };
    
            const access_token = jwt.sign(payload, "JWTKEY");
            res.status(200).json({ access_token });
        } catch (error) {
            console.log(error);
            if (error.name === "emailRequired") {
                res.status(400).json({ message: "Email is required" });
            } else if (error.name === "passwordRequired") {
                res.status(400).json({ message: "Passsword is required" });
            } else if (error.name === "InvalidToken") {
                res.status(401).json({ message: "Invalid email/password" });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
  
    } 
        


}


module.exports = Controller