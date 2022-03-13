https://imdb-api.com/en/API/Title/k_6p1hw9gl/tt0110413

const axios = require ('axios')
const API_KEY = process.env.IMDB_API_KEY
const instance = axios.create({
    baseURL: `https://imdb-api.com/en/API`,

})

module.exports = instance