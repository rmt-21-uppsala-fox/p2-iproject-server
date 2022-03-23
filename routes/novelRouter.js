const express = require('express');
const router = express.Router();

router.get('/novel', (req, res) => {
    res.redirect('/novel/:genre');
});
module.exports = router;
