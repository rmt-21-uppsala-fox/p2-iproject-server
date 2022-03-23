const express = require('express');
const NovelApiController = require('../controllers/NovelApiController');
const NovelController = require('../controllers/NovelController');
const router = express.Router();

router.get('/novel', (req, res) => {
    res.redirect('/novel/:genre');
});

router.get('/novel/title/:title', NovelController.NovelDetail);

router.get('/novel/title/:title/:chapter', NovelController.NovelChapter);

router.post('/novel/api', NovelApiController.NovelApi);

router.get('/novel/:genre', NovelController.NovelListGenre);

module.exports = router;
