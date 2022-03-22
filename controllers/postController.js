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
      const { id } = req.userData;
      if (!imgUrl) {
        const file = req.file;
        const timestamp = Date.now();
        const fileName = `${timestamp}.jpeg`;

        const imageRef = ref(storage, fileName);

        await uploadBytes(imageRef, file.buffer);
        const downloadURL = await getDownloadURL(ref(storage, imageRef));
        await Post.create({
          caption: caption,
          imgUrl: downloadURL,
          UserId: id,
          categoryId: categoryId,
        });
        res.status(201).json({ message: "Post Created" });
      } else {
        await Post.create({
          caption: caption,
          imgUrl: imgUrl,
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
        include: [{ model: User }, { model: Category }],
      });
      res.status(200).json(respond);
    } catch (error) {
      next(error);
    }
  }

  static async postDetail(req, res, next) {
    try {
      const { postId } = req.params;
      const respond = await Post.findOne({
        where: { id: postId },
        include: [{ model: User }, { model: Comment }],
      });
      res.status(200).json(respond);
    } catch (error) {
      next(error);
    }
  }

  static async comment(req, res, next) {
    try {
      //buat function comment
    } catch (error) {}
  }
}

module.exports = PostController;
