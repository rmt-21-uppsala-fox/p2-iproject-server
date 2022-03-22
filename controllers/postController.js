const { User, Comment, Post } = require("../models/index");
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
      const file = req.file;
      const timestamp = Date.now();
      const fileName = `${timestamp}.jpeg`;

      const imageRef = ref(storage, fileName);

      await uploadBytes(imageRef, file.buffer);
      const downloadURL = await getDownloadURL(ref(storage, imageRef));

      res.status(201).json(downloadURL); // file uploaded dan ini urlnya
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const respond = Post.findAll({ include: { model: User } });
      res.status(200).json(respond);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PostController;
