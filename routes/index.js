const express = require('express')
const router = express.Router()
const postRoute = require('./posts.js')
const userRoute = require('./users.js')

const relationRoute = require('./relations.js')
router.use('/posts',postRoute)
router.use('/users',userRoute)

router.use('/relations',relationRoute)




module.exports = router