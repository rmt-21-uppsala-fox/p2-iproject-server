
const axios = require ('axios')

const instance = axios.create({
    baseURL: `https://imdb-api.com/en/API`,

})

module.exports = instance