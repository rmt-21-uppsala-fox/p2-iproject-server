const express = require('express')
const router = express.Router()
const postRoute = require('./posts.js')
const userRoute = require('./users.js')

router.use('/posts',postRoute)
router.use('/users',userRoute)

module.exports = router