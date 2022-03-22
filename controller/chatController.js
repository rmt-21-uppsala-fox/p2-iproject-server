const { Chat, User } = require("../models")

class chatController {
  static async chatFromClient(req, res, next) {
    try {
      const UserId = req.Credentials.id
      const user = await User.findOne({ where: { id: UserId } })
      const message = req.body
      console.log(message)
      await Chat.create({ UserId, message })
      res.statu(201).json({ message: `Chat added to UserId ${UserId}` })
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}

module.exports = chatController