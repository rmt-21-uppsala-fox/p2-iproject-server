const express = require("express");
const cors = require("cors");
const MenuController = require("./controllers/MenuController");
const app = express();
const router = require('./routes')
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router)

app.get('/', (req, res, next) => {
  res.status(200).json({message: "Server Running"})
})

// app.get('/menus', MenuController.getAllMenu)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});