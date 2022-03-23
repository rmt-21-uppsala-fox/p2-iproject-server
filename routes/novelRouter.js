const express = require('express');
const NovelController = require('../controllers/NovelController');
const router = express.Router();

router.get('/novel', (req, res) => {
    res.redirect('/novel/:genre');
});

router.get('/novel/:genre', NovelController.NovelListAndGenre);

module.exports = router;
