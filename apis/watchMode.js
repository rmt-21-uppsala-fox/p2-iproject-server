const axios = require('axios')
const API_KEY = process.env.WATCHMODE_API_KEY
console.log(API_KEY)
const instance = axios.create({
    baseURL: `https://watchmode.p.rapidapi.com`,
    headers: {
        'regions': 'AU',
        'x-rapidapi-host': 'watchmode.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
    }
})
// const searchField = 'imdb_id'
// const searchValue  = 'tt2560140'





module.exports = instance