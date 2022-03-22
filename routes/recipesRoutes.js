const router = require('express').Router();
const RecipeController = require('../controllers/RecipeController')

router.get('/recipes', RecipeController.getRecipes)
router.get('/recipes/filter', RecipeController.getFilteredRecipes)
router.post('/recipes/:RecipeId', RecipeController.createBookmark)

module.exports = router