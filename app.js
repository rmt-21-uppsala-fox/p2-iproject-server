if (process.env.NODE_ENV !== "production") {
   require('dotenv').config();
}
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const express = require('express');
const Controller = require('./controllers/Controller');
global.__basedir = __dirname;
const app = express();
const routers = require('./routes');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/kib/:name", Controller.downloadFiles)
app.use(routers);

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`Go! ${PORT}`);
});
