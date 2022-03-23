const express = require('express')
const { UserController } = require('../controllers/userController')
const router = express.Router()

router.post('/',UserController.userLogin)
router.post('/googleSignIn',UserController.googleRegist)
module.exports = router