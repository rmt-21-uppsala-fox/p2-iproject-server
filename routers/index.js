const express = require('express');
const router = express.Router();
const UserController = require("../controller/userController");
const { authenticate } = require('../middleware/authUser');

router.get('/', UserController.home)
router.post('/register', UserController.registerUser)
router.post('/login', UserController.login)
router.get('/menus', UserController.allMenu)
router.get('/ingredient', UserController.allMenuNutritionix)
router.post('/authGoogle', UserController.authGoogle)


router.use(authenticate)
// router.post('/menu/:id', UserController.bookmark)
// router.get('/bookmark', UserController.showBookmark)


module.exports = router