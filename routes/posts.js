const express = require('express')
const { PostController } = require('../controllers/postController')
const router = express.Router()

router.post('/',PostController.createPost)
router.get('/:UserId',PostController.readAllPost)

module.exports = router