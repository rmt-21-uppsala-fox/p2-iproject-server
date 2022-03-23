if (process.env.NODE_ENV == 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const route = require("./router")

// const { authn } = require('./middleware/auth')
const { createServer } = require("http")
const { Server } = require("socket.io")
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  }
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", route)

let arrChat = []
io.on("connection", (socket) => {
  console.log("A user connected", socket.id)
  socket.on("disconnect", () => {
    console.log("A user disconnected")
  })
  socket.on("chatFromClient", (payload) => {
    // console.log(req.Credentials)

    console.log(payload, "<<<<<Test payload")
    arrChat.push(payload)
    console.log(arrChat)
    io.emit("messageFromServer", arrChat)
  })
})

// const errorHandler = require('./middleware/errorHandling')


// app.get('/category', categoryController.getCategory)
// app.post('/register', userController.register)
// app.post('/login', userController.login)
// app.post('/authGoogle', userController.authGoogle)
// app.post('/pub/register', customerController.register)
// app.post('/pub/login', customerController.login)
// app.post('/pub/authGoogle', customerController.authGoogle)
// app.get('/pub/food', customerController.getConditionalFood)
// app.get('/pub/food/:foodId', customerController.getFoodById)

// app.use(authn)
// app.use('/food', foodRoutes)
// app.use('/history', historyRoutes)
// app.use('/pub/myfav', customerRoutes)

// app.use(errorHandler)

httpServer.listen(port, () => {
  console.log(`Listening to port ${port}`)
})

module.exports = app