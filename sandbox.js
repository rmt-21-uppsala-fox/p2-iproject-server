let rooms = [{
    _NAME_: "room1",
    playerZ: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    },
    playerX: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    },
    playerY: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    },
    playerV: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    }
  },
  {
    _NAME_: "room2",
    playerA: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    },
    playerB: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    },
    playerC: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    },
    playerD: {
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    }
  }
]
let rooms1 = []

const getPlayer = (roomName) => {
  let players = []
  rooms.forEach((e) => {
    if (e._NAME_ === roomName) {
      players = {
        ...e
      };
    }
  })
  delete players._NAME_
  return players
}

const data1 = {
  room: "room3",
  pos: [0, 0, 0],
  rot: [0, 0, 0]
}

const data2 = {
  room: "room2",
  pos: [0, 0, 0],
  rot: [0, 0, 0]
}

const putPlayer = (payload, name) => {
  let room = rooms.find((e) => e._NAME_ === payload.room);
  if (!room) {
    rooms.push({
      _NAME_: payload.room,
      [name]: {
        pos: payload.pos,
        rot: payload.rot
      }
    });
  } else {
    room[name] = {
      pos: payload.pos,
      rot: payload.rot
    }
  }
}

const deletePlayer = (roomName, name) => {
  let room = rooms.find((e) => e._NAME_ === roomName);
  if (room) {
    if (room[name]) {
      delete room[name];
    }
  }
}

console.log(getPlayer("room2"));
putPlayer(data2, "PlayerE");
console.log("-------------------");
console.log(rooms);
console.log("-------------------");
putPlayer(data1, "PlayerE");
console.log("-------------------");
console.log(rooms);
console.log(getPlayer("room2"));
deletePlayer("room2", "playerC")
console.log(getPlayer("room2"));


// const express = require('express');
// const {
//   createServer
// } = require('http');
// const {
//   Server
// } = require('socket.io');

// const app = express();
// const httpServer = createServer(app);

// const io = new Server(httpServer, {
//   cors: {
//     origin: "*"
//   }
// });

// let clients = {};

// io.on("connection", (socket) => {
//   console.log("A User Connected", socket.id);

//   clients[socket.id] = {
//     position: [0, 0, 0],
//     rotation: [0, 0, 0]
//   }

//   socket.emit('introduction', socket.id, io.engine.clientsCount, Object.keys(clients));

//   io.sockets.emit('newUserConnected', io.engine.clientsCount, socket.id, Object.keys(clients));

//   socket.on('playerMove', ({
//     pos,
//     rot
//   }) => {
//     clients[socket.id].position = pos;
//     clients[socket.id].rotation = rot;
//     io.sockets.emit('userPositions', clients);
//   });

//   socket.on("disconnect", () => {
//     console.log("A User Disconnected");

//     delete clients[socket.id];

//     io.sockets.emit('userDisconnected', io.engine.clientsCount, socket.id, Object.keys(clients));

//     console.log('User ' + socket.id + ' dissconeted, there are ' + io.engine.clientsCount + ' clients connected');
//   })

// })


// app.get("/", (req, res) => {
//   res.send("its Working !!")
// })

// httpServer.listen(3000, () => {
//   console.log("listening on port 3000");
// })