const multer = require("multer");

const logoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/logo");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-FastOrderLogo-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const menuImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/menuImage");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-FastOrderImage-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

module.exports = {
  logoStorage,
  menuImageStorage,
};
