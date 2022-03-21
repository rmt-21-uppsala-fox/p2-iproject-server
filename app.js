if (process.env.NODE_ENV == 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const axios = require("axios")
const route = require("./router")
// const { authn } = require('./middleware/auth')
// const foodRoutes = require('./router/food')
// const historyRoutes = require('./router/history')
// const customerRoutes = require('./router/customer')
// const userController = require('./controller/userController')
// const foodController = require('./controller/foodController')
// const categoryController = require('./controller/categoryController')
// const customerController = require('./controller/customerController')
// const errorHandler = require('./middleware/errorHandling')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", route)

// app.get('/category', categoryController.getCategory)
// app.post('/register', userController.register)
// app.post('/login', userController.login)
// app.post('/authGoogle', userController.authGoogle)
// app.post('/pub/register', customerController.register)
// app.post('/pub/login', customerController.login)
// app.post('/pub/authGoogle', customerController.authGoogle)
// app.get('/pub/food', customerController.getConditionalFood)
// app.get('/pub/food/:foodId', customerController.getFoodById)

// app.use(authn)
// app.use('/food', foodRoutes)
// app.use('/history', historyRoutes)
// app.use('/pub/myfav', customerRoutes)

// app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})

module.exports = app