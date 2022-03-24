require("dotenv").config()
const express = require('express')
const app = express()
const port = proccess.env.PORT
const routerUser = require('./router/userRoute')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routerUser)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})