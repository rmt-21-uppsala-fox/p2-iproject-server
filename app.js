if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const registerRoute = require("./routes/registerRoute");
const restaurantRoute = require("./routes/restaurantRoute");
const categoryRoute = require("./routes/categoryRoute");
const loginRoute = require("./routes/loginRoute");
const menuRoute = require("./routes/menuRoute");
const customerRoute = require("./routes/customerRoute");
const orderRoute = require("./routes/orderRoute");
const xenditRoute = require("./routes/xenditRoute");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/restaurant", restaurantRoute);
app.use("/category", categoryRoute);
app.use("/menu", menuRoute);
app.use("/customer", customerRoute);
app.use("/order", orderRoute);
app.use("/xendit", xenditRoute);
app.get("/files", express.static("/picture/logo"));
app.get("/files", express.static("/picture/menuImage"));

// app.use("/", (req, res, next) => {
//   res.status(200).json({ message: "Muhammad Ihsan API!" });
// });

app.listen(port, () => {
  console.log("this app is running at port: ", port);
});
