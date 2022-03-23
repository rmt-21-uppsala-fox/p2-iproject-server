const express = require('express');
const NovelController = require('../controllers/NovelController');
const router = express.Router();

router.get('/novel', (req, res) => {
    res.redirect('/novel/:genre');
});

router.get('/novel/title/:title', NovelController.NovelDetail);

router.get('/novel/title/:title/:chapter', NovelController.NovelChapter);

router.get('/novel/:genre', NovelController.NovelListGenre);

module.exports = router;
