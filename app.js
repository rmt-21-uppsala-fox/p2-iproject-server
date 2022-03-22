if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
let cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const recipeRoutes = require('./routes/recipes')
const authRoutes = require('./routes/auth');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'You are on our server now!'
    })
})

//auth routes
app.use(authRoutes)

//recipes recipeRoutes
app.use(recipeRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})