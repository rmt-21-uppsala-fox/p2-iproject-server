const express = require('express')
const router = express.Router()
const postRoute = require('./posts.js')
const userRoute = require('./users.js')
const relationRoute = require('./relations.js')
const { authN } = require('../middlewares/authN.js')

router.use('/users',userRoute)
router.use(authN)
router.get('/name',(req,res,next)=>{
    res.status(200).json({UserId:req.auth.id,name:req.auth.name})
})
router.use('/posts',postRoute)
router.use('/relations',relationRoute)


module.exports = router