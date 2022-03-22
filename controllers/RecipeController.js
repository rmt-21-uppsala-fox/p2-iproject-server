const axios = require('axios');
const {
    User,
    Bookmark
} = require('../models')
class RecipeController {

    static async getFilteredRecipes(req, res, next) {
        try {
            const responseWeather = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=0.789275&lon=113.921327&units=metric&exclude=daily&appid=' + process.env.API_ID_OWEATHER)
            let weather = responseWeather.data.current.weather[0].main;
            let temperature = responseWeather.data.current.temp
            let calorieFilter
            if (temperature > 22) {
                calorieFilter = '800'
            } else {
                calorieFilter = '1200'
            }
            const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=' +
                process.env.API_ID + '&app_key=' + process.env.API_KEY + '&calories=' + calorieFilter + '&imageSize=REGULAR')
            res.status(200).json({
                recipes: response.data.hits,
                weather
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async getRecipes(req, res, next) {
        try {
            let query = ""
            let calories
            let {
                name,
                minCal,
                maxCal,
                dietLabel,
                mealType
            } = req.body
            if (name) {
                query += name
            }
            if (minCal && maxCal) {
                calories = `${minCal}-${maxCal}`
                query += `&calories=${calories}`
            } else if (minCal) {
                calories = minCal
                query += `&calories=${calories}`
            } else if (maxCal) {
                calories = maxCal
                query += `&calories=${calories}`
            }
            if (dietLabel) {
                query += `&diet=${dietLabel}`
            }
            if (mealType) {
                query += `&mealType=${mealType}`
            }
            const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=' + query + '&app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY + '&imageSize=REGULAR')
            res.status(200).json(response.data.hits)
        } catch (error) {
            console.log(error);
        }
    }

    static async createBookmark(req, res, next) {
        try {
            let RecipeId = req.params.RecipeId
            let UserId = +req.loginUser.id
            const findRecipe = await axios.get(`https://api.edamam.com/api/recipes/v2/${RecipeId}?type=public&q=` + '&app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY)
            const recipeId = findRecipe.data.recipe.uri.split("#")[1]

            if (!recipeId) {
                throw {
                    name: 'NotFound'
                }
            }
            if (!UserId) {
                throw {
                    name: 'Unauthorized'
                }
            }
            let findBookmark = await Bookmark.findOne({
                where: {
                    RecipeId: RecipeId
                }
            })
            if (findBookmark) {
                throw {
                    name: 'AlreadyExist'
                }
            }
            const response = await Bookmark.create({
                RecipeId,
                UserId
            })
            res.status(201).json({
                message: 'Succesfully created bookmark'
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RecipeController;