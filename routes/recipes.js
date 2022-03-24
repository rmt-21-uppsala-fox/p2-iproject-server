const router = require('express').Router();
const RecipeController = require('../controllers/RecipeController')
const {
    authentication,
    authorization
} = require('../middlewares/auth')
router.post('/recipes', RecipeController.getRecipes)
router.get('/recipes/filter', RecipeController.getFilteredRecipes)
router.get('/recipes/bookmark', authentication, RecipeController.getBookmark)
router.get('/recipes/:RecipeId', RecipeController.getRecipesDetail)
router.use(authentication)
router.get('/recipes/bookmark', RecipeController.getBookmark)
router.post('/recipes/:RecipeId', RecipeController.createBookmark)
router.delete('/recipes/:id', authorization, RecipeController.deleteBookmark)
router.post('/recipes/rate/:RecipeId', RecipeController.createRate)
router.get('/recipes/rate/:RecipeId', RecipeController.getRecipeRating)

module.exports = router