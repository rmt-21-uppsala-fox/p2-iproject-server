const router = require('express').Router();
const MenuController = require('../controllers/MenuController');

router.get('/menus', MenuController)

module.exports = router