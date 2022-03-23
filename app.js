if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routerIndex = require("./routes/index.js");

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(routerIndex);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
