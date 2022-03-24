require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler.js");
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
