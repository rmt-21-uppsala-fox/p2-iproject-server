const express = require("express");
const routerPost = express.Router();
const authentication = require("../middlewares/authentication")
const upload = require("../middlewares/multer");
const PostController = require("../controllers/postController");

routerPost.get("/post", PostController.getAll);
routerPost.get("/post/:postId", PostController.postDetail)
routerPost.post("/upload", authentication, upload, PostController.upload);
routerPost.post("/comment", authentication, PostController.comment)

module.exports = routerPost;
