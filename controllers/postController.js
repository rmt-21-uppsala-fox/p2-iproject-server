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

      res.json(downloadURL); // file uploaded dan ini urlnya
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }
}

module.exports = PostController;
