if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const routeRouter = require('./routes/routeRouter');
const carbonRouter = require('./routes/carbonRouter');
const errorHandler = require("./middlewares/errorHandler")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/route", routeRouter);
app.use("/carbon", carbonRouter);

app.use(errorHandler);
app.listen(port, () => {
    console.log("listen");
})