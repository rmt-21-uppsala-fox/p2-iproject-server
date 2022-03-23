const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/prelogin', userController.preLogin)
router.get('/lyric', userController.lyric)

module.exports = router;