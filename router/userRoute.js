const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/prelogin', userController.preLogin)
router.post('/refresh', userController.refresh)
router.post('/register', userController.register)
router.get('/lyric', userController.lyric)

module.exports = router;