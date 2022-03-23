if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const registerRoute = require("./routes/registerRoute");
const restaurantRoute = require("./routes/restaurantRoute");
const loginRoute = require("./routes/loginRoute");
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/restaurant", restaurantRoute);

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Muhammad Ihsan API!" });
});

app.listen(port, () => {
  console.log("this app is running at port: ", port);
});
