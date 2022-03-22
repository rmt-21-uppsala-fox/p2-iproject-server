if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}
const cors = require(`cors`);
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require(`./routes/index.js`);

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(`/`, routes);

module.exports = app;
