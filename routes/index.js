const router = require('express').Router();
const menu = require('./menu');
const order = require('./order');

router.use('/products', menu)
router.use('/transactions', order )

module.exports = router