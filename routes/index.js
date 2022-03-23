const router = require('express').Router();
const menu = require('./menu');
const order = require('./order');

router.use('/', menu)
router.use('/', order )

module.exports = router