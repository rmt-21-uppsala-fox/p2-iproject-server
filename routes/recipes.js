const router = require('express').Router();
const RecipeController = require('../controllers/RecipeController')
const {
    authentication,
    authorization
} = require('../middlewares/auth')
router.get('/recipes/filter', RecipeController.getFilteredRecipes)
router.use(authentication)
router.get('/recipes', RecipeController.getRecipes)
router.post('/recipes/:RecipeId', RecipeController.createBookmark)
// router.use(authorization)
router.delete('/recipes/:id', RecipeController.deleteBookmark)

module.exports = router