const express = require('express')
const { UserController } = require('../controllers/userController')
const router = express.Router()

// router.post('/',UserController.userLogin)
// facebookSignIn
router.post('/facebookSignIn',UserController.facebookSignIn)
router.post('/googleSignIn',UserController.googleRegist)
router.get('/',UserController.readAllUser)
module.exports = router