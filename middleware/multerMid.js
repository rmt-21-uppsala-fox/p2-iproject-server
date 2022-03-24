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

const downloadFiles = (req, res) => {
   const fileName = req.params.name;
   const path = __basedir + "../template/template.csv";

   res.download(path + fileName, (err) => {
      if (err) {
         res.status(500).send({
            message: "File can not be downloaded: " + err,
         });
      }
   });
};

module.exports = { upload, downloadFiles };