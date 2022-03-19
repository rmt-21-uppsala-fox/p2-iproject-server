require("dotenv").config(); //tempatkan dotenv paling awal
//console.log(process.env.PORT);
const cors = require("cors"); //cors untuk localstorage
const express = require("express");
const app = express();
const router = require('./routes')
const port = process.env.PORT || 3000; 

const errorHandler = require("./middleware/errorHandler");


app.use(cors()); //memfilter akses. jika dalam kurung kosong, semua bisa masuk
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', router)
//test


app.use(errorHandler);


app.listen(port, () => {
  console.log(`Listening to port ${port}!`);
});

module.exports = app