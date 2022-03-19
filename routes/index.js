const express = require('express')
const router = express.Router()

const movies = require('./movies')
const authRouter = require('./auth')
const genres = require('./genres')
const payment = require('./payment')



const {authentication} = require ('../middlewares/authentication')


router.use ('/genres', genres)


router.use(authentication)

router.use('/', authRouter)
router.use ('/movies', movies)
router.use ('/payment', payment)

module.exports = router