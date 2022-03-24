const axios = require('axios')

const rapidApiGet = axios.create({
  baseURL: 'https://edamam-recipe-search.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': process.env.RapitAPIHost,
    'X-RapidAPI-Key': process.env.RapitAPIKey
  }
})

const nutritionixApi = axios.create({
  baseURL: `https://nutritionix-api.p.rapidapi.com/v1_1`,
  params: {fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
  headers: {
    'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
    'x-rapidapi-key': process.env.RapitAPIKey
  }
})


module.exports = {
  rapidApiGet,
  nutritionixApi
}