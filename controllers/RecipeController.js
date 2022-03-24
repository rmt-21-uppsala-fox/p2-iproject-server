const axios = require('axios');
const {
    User,
    Bookmark,
    RecipeRate
} = require('../models')
class RecipeController {

    static async getFilteredRecipes(req, res, next) {
        try {
            //dinamis perkota lon, lang
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

    static async getRecipesDetail(req, res, next) {
        try {
            let RecipeId = req.params.RecipeId
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${RecipeId}?type=public&q=` + '&app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY)
            res.status(200).json({
                recipe: response.data.recipe
            })
        } catch (error) {
            console.log(error);
            next(error)
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
                message: 'Succesfully created bookmark',
                bookmark: {
                    RecipeId: response.RecipeId,
                    UserId: response.UserId,
                    id: response.id
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteBookmark(req, res, next) {
        try {
            const id = req.params.id
            const findBookmark = await Bookmark.findOne({
                where: {
                    id
                }
            })
            if (!findBookmark) {
                throw {
                    name: "NotFound"
                }
            }
            await Bookmark.destroy({
                where: {
                    id: findBookmark.id
                }
            })
            res.status(200).json({
                message: "Successfully delete bookmark"
            })
        } catch (error) {
            console.log(error);
        }
    }

    static async createRate(req, res, next) {
        try {
            const {
                rating,
                recipeName
            } = req.body
            const RecipeId = req.params.RecipeId
            let UserId = +req.loginUser.id
            const findRecipe = await axios.get(`https://api.edamam.com/api/recipes/v2/${RecipeId}?type=public&q=` + '&app_id=' + process.env.API_ID + '&app_key=' + process.env.API_KEY)
            const recipeId = findRecipe.data.recipe.uri.split("#")[1]
            if (!recipeId) {
                throw {
                    name: 'RecipeNotFound'
                }
            }
            const findRating = await RecipeRate.findOne({
                where: {
                    UserId,
                    RecipeId
                }
            })

            if (findRating) {
                await RecipeRate.update({
                    rate: rating
                }, {
                    where: {
                        UserId,
                        RecipeId
                    }
                })
                res.status(200).json({
                    message: `Update recipe's rating ${recipeName} successfully`
                })
            } else {
                await RecipeRate.create({
                    UserId,
                    RecipeId,
                    rate: rating
                })
                res.status(201).json({
                    message: `Create recipe ${recipeName} successfully`
                })
            }
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async getRecipeRating(req, res, next) {
        try {
            const RecipeId = req.params.RecipeId
            const findRecipe = await RecipeRate.findAndCountAll({
                where: {
                    RecipeId
                }
            })

            const countRating = await RecipeRate.count({
                where: {
                    RecipeId
                }
            })

            let avg = 0
            if (countRating !== 0) {
                const sum = await RecipeRate.sum("rate", {
                    where: {
                        RecipeId
                    }
                })
                avg = sum / countRating
            }
            res.status(200).json({
                recipeAvg: avg,
                totalRating: countRating
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = RecipeController;