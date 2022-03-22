if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const errorHandler = require("./middlewares/errorHandler.js");
const app = express();
const router = require("./routes/index");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
