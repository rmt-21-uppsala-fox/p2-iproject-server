const { User, Comment, Post, Category } = require("../models/index");
const firebase = require("../config/db");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
const storage = getStorage(firebase);
global.XMLHttpRequest = require("xhr2");

class PostController {
  static async upload(req, res, next) {
    try {
      const { caption, imgUrl, categoryId } = req.body;
      const { id, uid } = req.userData;
      if (!imgUrl) {
        const file = req.file;
        const timestamp = Date.now();
        const name = file.originalname.split(".")[0];
        const type = file.originalname.split(".")[1];
        const fileName = `${name}_${timestamp}.${type}`;
        const fileLocation = `/User/${uid}/${fileName}`;

        const imageRef = ref(storage, fileLocation);

        await uploadBytes(imageRef, file.buffer);
        // console.log(caption, downloadURL, id, categoryId);
        const downloadURL = await getDownloadURL(ref(storage, imageRef));
        await Post.create({
          caption: caption,
          imgUrl: downloadURL,
          fileLocation: fileLocation,
          UserId: id,
          categoryId: categoryId,
        });
        res.status(201).json({ message: "Post Created" });
      } else {
        await Post.create({
          caption: caption,
          imgUrl: imgUrl,
          fileLocation: "imgUrl",
          UserId: id,
          categoryId: categoryId,
        });
        res.status(201).json({ message: "Post Created" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const respond = await Post.findAll({
        include: { model: Category },
      });
      res.status(200).json(respond);
    } catch (error) {
      next(error);
    }
  }

  static async postDetail(req, res, next) {
    try {
      const { postId } = req.params;
      let options = null;
      const comments = await Comment.findOne({ where: { PostId: postId } });
      if (!comments) {
        options = {
          where: { id: postId },
          include: [{ model: User }, { model: Category }],
        };
      } else {
        options = {
          where: { id: postId },
          include: [{ model: User }, { model: Comment }, { model: Category }],
        };
      }
      const respond = await Post.findOne(options);
      res.status(200).json(respond);
    } catch (error) {
      next(error);
    }
  }

  static async comment(req, res, next) {
    try {
      const { comment } = req.body;
      const { postId } = req.params;
      const { id } = req.userData;
      const respond = await Post.findByPk(postId);
      if (!respond) {
        throw new Error("POST_NOT_FOUND");
      }
      await Comment.create({ UserId: id, PostId: postId, comment });
      res.status(201).json({ message: "Comment created" });
    } catch (error) {
      next(error);
    }
  }

  static async editComment(req, res, next) {
    try {
      const { comment, commentId } = req.body;
      const { postId } = req.params;
      const { id } = req.userData;
      const data = await Comment.findOne({ where: { id: commentId } });
      if (data.UserId !== id) {
        throw new Error("FORBIDDEN");
      }
      await Comment.update(
        { PostId: postId, UserId: id, comment },
        { where: { id: commentId } }
      );
      res.status(200).json({ message: "Comment updated" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteComment(req, res, next) {
    try {
      const { commentId } = req.body;
      const { id } = req.userData;
      const respond = await Comment.findByPk(commentId);
      if (!respond) {
        throw new Error("COMMENT_NOT_FOUND");
      }
      if (respond.UserId !== id) {
        throw new Error("FORBIDDEN");
      }
      await Comment.delete({ where: { id: commentId } });
      res.status(200).json({ message: "comment has been deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;
