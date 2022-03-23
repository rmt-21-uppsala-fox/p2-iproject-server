const express = require('express');
const novelRouter = require('./novelRouter');
const router = express.Router();

router.use('/', novelRouter);

module.exports = router;
