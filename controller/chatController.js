const { Chat, User } = require("../models")

class chatController {
  static async chatFromClient(req, res, next) {
    try {
      let arrChat = []
      const UserId = req.Credentials.id
      const user = await User.findOne({ where: { id: UserId } })
      const message = req.body
      console.log(message)
      arrChat.push(message)
      console.log(arrChat)
      await Chat.create({ UserId, message })
      res.status(201).json({ message: arrChat })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

}

module.exports = chatController