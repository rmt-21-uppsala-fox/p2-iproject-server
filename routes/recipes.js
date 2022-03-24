const router = require('express').Router();
const RecipeController = require('../controllers/RecipeController')
const {
    authentication,
    authorization
} = require('../middlewares/auth')
router.get('/recipes/filter', RecipeController.getFilteredRecipes)
router.post('/recipes', RecipeController.getRecipes)
router.get('/recipes/:RecipeId', RecipeController.getRecipesDetail)
router.use(authentication)
router.post('/recipes/:RecipeId', RecipeController.createBookmark)
router.post('/recipes/rate/:RecipeId', RecipeController.createRate)
router.get('/recipes/rate/:RecipeId', RecipeController.getRecipeRating)
router.use(authorization)
router.delete('/recipes/:id', RecipeController.deleteBookmark)

module.exports = router