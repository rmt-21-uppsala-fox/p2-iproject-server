const express = require('express')
const { PostController } = require('../controllers/postController')
const router = express.Router()

app.post('/',PostController.createPost)
app.get('/:UserId',PostController.readAllPost)

module.exports = router