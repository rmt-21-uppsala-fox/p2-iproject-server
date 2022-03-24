if (process.env.NODE_ENV == 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const route = require("./router")
const { errorHandler } = require('./middleware/errorHandler')


app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

app.use("/", route)

app.use(errorHandler)


const { createServer } = require("http")
const { Server } = require("socket.io")
const httpServer = createServer(app)
const server = app.use(cors().listen(port, () => {
  console.log(`listening to ${port}`)
}))
const io = new Server(server, {
  cors: {
    origin: "*",
  }
})

let arrChat = []
let arrChat2 = []
io.on("connection", (socket) => {
  console.log("A user connected", socket.id)
  socket.on("disconnect", () => {
    arrChat2 = []
    console.log("A user disconnected")
  })
  socket.on("chatFromClient", (payload) => {
    // console.log(req.Credentials)
    console.log(payload, "<<<<<Test payload")
    arrChat2 = arrChat
    arrChat2.push(payload)
    console.log(arrChat2)
    io.emit("messageFromServer", arrChat2)
  })
})



// httpServer.listen(port, () => {
//   console.log(`Listening to port ${port}`)
// })

module.exports = app