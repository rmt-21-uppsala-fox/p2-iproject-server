const express = require('express')
const { PostController } = require('../controllers/postController')
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const router = express.Router()

router.post('/',upload.single('imgPost'),PostController.createPost)
router.get('/',PostController.readAllPost)

module.exports = router