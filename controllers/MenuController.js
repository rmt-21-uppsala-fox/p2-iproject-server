const { Menu } = require("../models");

class MenuController {
    static async getAllMenu (req, res, next) {
        try {
            const data = await Menu.findAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({message: 'Internal server error'})
            console.log(error)
        }
    }
}

module.exports = MenuController