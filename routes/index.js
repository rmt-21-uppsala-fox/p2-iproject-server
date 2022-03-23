const express = require('express');
const router = express.Router();
const news = require('./news');

router.get("/", (req, res) => {
  res.send("its Working !!")
})
router.use("/news", news);

module.exports = router;