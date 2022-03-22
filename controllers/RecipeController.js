const axios = require('axios');
const {
    User
} = require('../models')
class RecipeController {

    static async getRecipes(req, res, next) {
        try {
            const responseWeather = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=0.789275&lon=113.921327&units=metric&exclude=daily&appid=' + process.env.API_ID_OWEATHER)
            let weather = responseWeather.data.current.weather[0].main;
            let temperature = responseWeather.data.current.temp
            let calorieFilter
            if (temperature > 22) {
                calorieFilter = '800-1200'
            } else {
                calorieFilter = '1200-1600'
            }
            const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=' +
                process.env.API_ID + '&app_key=' + process.env.API_KEY + '&calories=' + calorieFilter + '&imageSize=REGULAR')
            res.status(200).json(response.data.hits)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = RecipeController;