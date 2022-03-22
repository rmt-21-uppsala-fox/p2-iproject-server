const express = require("express");
const routerPost = express.Router();
const upload = require("../middlewares/multer");
const PostController = require("../controllers/postController");

routerPost.use("/post", PostController.getAll);
routerPost.post("/upload", upload, PostController.upload);

module.exports = routerPost;
