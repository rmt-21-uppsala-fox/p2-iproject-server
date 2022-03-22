const router = require('express').Router();
const RecipeController = require('../controllers/RecipeController')

router.get('/recipes', RecipeController.getRecipes)

module.exports = router