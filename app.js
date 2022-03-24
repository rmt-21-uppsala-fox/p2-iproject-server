if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const cors = require('cors')
const express = require('express')
// htpp library dari bawaan nodejs, krn by default socket bukan http
// const {
//     createServer
// } = require("http");
// // membuat instance server socket.io
// const {
//     Server
// } = require("socket.io");
const app = express()
const port = 3000
const recipeRoutes = require('./routes/recipes')
const authRoutes = require('./routes/auth');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// const httpServer = createServer(app)
//instance dari server socketio yang digunakan
// const io = new Server(httpServer, {
//     cors: {
//         origin: "*"
//     }
// })

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'You are on our server now!'
    })
})

//auth routes
app.use(authRoutes)

//recipes recipeRoutes
app.use(recipeRoutes)

// io.on("connection", (socket) => {
//     //deklarasiin event yang terjadi ketika user terputus dari server socket io
//     socket.on("disconnect", () => {
//         console.log("A user disconnected");
//     })
//     socket.on("joinRoom", (room, username) => {
//         socket.join(room)
//         io.to(room).emit("joinedMessage", username)
//     })
//     //custom event kita sendiri, kaya v-onnya divue
//     socket.on("customEventFromClient", (payload) => {
//         console.log("Terima payload: ",
//             payload);
//     })
//     //maka dari server bisa mengemmitkan sesuatu ke si pendengar, akan dilempar ke client
//     socket.emit("customEventFromServer", "kembaliannya server")
// })


app.listen(port, () => {
    console.log("Listening on port " + port);
})