const express = require('express')
const router = express.Router()
const upload = require("../middlewares/multer")
const UserController = require("../controllers/userController")
const PostController = require("../controllers/postController")

router.post("/login")
router.post("/register", UserController.registration)
router.post("/upload", upload, PostController.upload)

module.exports = router