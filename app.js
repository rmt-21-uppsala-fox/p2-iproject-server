if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routeRouter = require('./routes/routeRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/route", routeRouter);



app.listen(port, () => {
    console.log("listen");
})