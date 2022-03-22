const express = require('express')
const router = express.Router()
const postRoute = require('./posts.js')

router.use('/posts',postRoute)

module.exports = router