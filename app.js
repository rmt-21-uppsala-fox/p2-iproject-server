const express = require('express');
const {
  createServer
} = require('http');
const {
  Server
} = require('socket.io');

const app = express();
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));
const httpServer = createServer(app);

const routes = require('./routes');

const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

let clients = {};

io.on("connection", (socket) => {
  console.log("A User Connected", socket.id);

  clients[socket.id] = {
    position: [0, 0, 0],
    rotation: [0, 0, 0]
  }

  socket.emit('introduction', socket.id, io.engine.clientsCount, Object.keys(clients));

  io.sockets.emit('newUserConnected', io.engine.clientsCount, socket.id, Object.keys(clients));

  socket.on('playerMove', ({
    pos,
    rot
  }) => {
    clients[socket.id].position = pos;
    clients[socket.id].rotation = rot;
    io.sockets.emit('userPositions', clients);
  });

  socket.on("disconnect", () => {
    console.log("A User Disconnected");

    delete clients[socket.id];

    io.sockets.emit('userDisconnected', io.engine.clientsCount, socket.id, Object.keys(clients));

    console.log('User ' + socket.id + ' dissconeted, there are ' + io.engine.clientsCount + ' clients connected');
  })

})

app.use(routes)



httpServer.listen(3000, () => {
  console.log("listening on port 3000");
})