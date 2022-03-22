const {Chat} = require('../models/index.js')

class ChatController{
    static async readAllChat(RoomId){
        try {
            const chats = await Chat.findAll({where:{RoomId},order:[['id','ASC']]})
            return chats
        } catch (error) {
            return 'Internal Server Error'
        }
    }

    static async createChat(RoomId,sender,chat){
        try {
            await Chat.create({RoomId,sender,chat})
            return 'Chat has been create'
        } catch (error) {
            return 'Internal Server Error'
        }
    }
}

module.exports ={ChatController}