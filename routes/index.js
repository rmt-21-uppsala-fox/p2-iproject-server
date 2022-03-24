const express = require('express');
const authentication = require('../middleware/authentication');
const novelRouter = require('./novelRouter');
const router = express.Router();

router.use('/', novelRouter);

router.get('/auth', authentication);

module.exports = router;
