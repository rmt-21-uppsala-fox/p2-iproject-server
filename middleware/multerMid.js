const multer = require('multer');

const fileStorageEnggine = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'files');
   },
   filename: (req, file, cb) => {
      cb(null, file.originalname);
   }
})


const upload = multer({ storage: fileStorageEnggine });

module.exports = upload;