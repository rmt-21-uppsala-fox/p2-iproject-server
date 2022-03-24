const express = require('express');
const router = express.Router();
const news = require('./news');
const gallery = require('./gallery');

router.get("/", (req, res) => {
  res.send("its Working !!")
})
router.use("/news", news);
router.use("/gallery", gallery);

module.exports = router;