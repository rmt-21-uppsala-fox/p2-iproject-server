if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const errorHandler = require("./helpers/errorHandler");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const routes = require("./routes");
const { createServer } = require("http");
const { Server } = require(`socket.io`);
// const httpServer = createServer(app);



// httpServer.listen(PORT, () => {
//   console.log(`Socket Listening to PORT ${PORT}`);
// })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use(errorHandler);

const server = app.use(cors()).listen(PORT, () =>
console.log(`Listening to PORT ${PORT}`))

const io = new Server(server, {
})

let chatUsers = []
let chatHistory = []

io.on('connection', (socket) => {
  // console.log(socket);

  //? disconnected
  socket.on('disconnect', (reason) => {
    console.log(`Disconnected`, reason);
  })

  //? custom events
  socket.on('clientRequest', (payload) => {
    console.log(`Custom event listener 1`, payload);

    //! emit ke client
    socket.emit('serverResponse', "serverResponse")
  })

  socket.on('setUser', (payload) => {
    chatUsers.push({
      email: payload.email,
      status: 'online'
    })
  })

  socket.on('clientMessage', (payload) => {
    // console.log(`MASUK CHAT`, payload.message);
    chatHistory.push(payload.message)
    io.emit("messagesHistory", chatHistory)
  })
})

// app.listen(PORT, () => {
//   console.log(`Listening to PORT ${PORT}`);
// });
