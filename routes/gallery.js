const express = require('express');
const router = express.Router();
const {
  GalleryController
} = require('../controllers/GalleryController');

router.get("/", GalleryController.getNewGallery);
router.get("/:id", GalleryController.getGallery);
router.post("/nft", GalleryController.getArt);

module.exports = router;