const express = require("express");
const routerPost = express.Router();
const authentication = require("../middlewares/authentication")
const upload = require("../middlewares/multer");
const PostController = require("../controllers/postController");

routerPost.get("/post", PostController.getAll);
routerPost.post("/upload", upload,authentication, PostController.upload);
routerPost.get("/post/:postId", PostController.postDetail)
routerPost.post("/post/:postId", authentication, PostController.comment)
routerPost.patch("/post/:postId", authentication, PostController.editComment)

module.exports = routerPost;
