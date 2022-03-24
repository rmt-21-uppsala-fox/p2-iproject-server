const express = require("express");
const routerPost = express.Router();
const authentication = require("../middlewares/authentication")
const upload = require("../middlewares/multer");
const PostController = require("../controllers/postController");

routerPost.get("/", PostController.getAll);
routerPost.get("/category", PostController.fetchCategory);
routerPost.post("/upload", upload,authentication, PostController.upload);
routerPost.delete("/comment", authentication, PostController.deleteComment)
routerPost.get("/post/:postId", PostController.postDetail)
routerPost.post("/post/:postId", authentication, PostController.comment)
routerPost.patch("/post/:postId", authentication, PostController.editComment)
routerPost.delete("/post/:postId/delete", authentication, PostController.postDelete)
routerPost.patch("/post/:postId/edit", authentication, PostController.postEdit)

module.exports = routerPost;
