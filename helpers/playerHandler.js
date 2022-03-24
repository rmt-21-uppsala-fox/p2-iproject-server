const putPlayer = (rooms, payload, name) => {

  let room = rooms.find((e) => e._NAME_ === payload.room);
  if (!room) {
    rooms.push({
      _NAME_: payload.room,
      [name]: {
        position: payload.pos,
        rotation: payload.rot
      }
    });
  } else {
    room[name] = {
      position: payload.pos,
      rotation: payload.rot
    }
  }
  return rooms
}

const deletePlayer = (rooms, roomName, name) => {
  let room = rooms.find((e) => e._NAME_ === roomName);
  if (room) {
    if (room[name]) {
      delete room[name];
    }
  }
  return rooms;
}



const getPlayer = (rooms, roomName) => {
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

module.exports = {
  getPlayer,
  putPlayer,
  deletePlayer
}