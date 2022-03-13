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

async function searchSourceById(id) {
    try {
        let WatchModeId = id

        console.log(id, "INI SOURCE dalam watchmode")
        const { data } = await instance.get(`/title/${id}/sources/`)
        const YtSource = data.filter(element => {
            if (element.source_id == 344 && element.region == 'CA') {
                return element
            }
        });
        return YtSource
        //console.log(YtSource, WatchModeId, "INI SOURCE")
        // res.status(200).json(data)
    } catch (err) {
        console.log(err)

    }
}
async function searchByImdbId(field, value) {
    try {
        const searchField = field
        const searchValue = value


        const { data } = await instance.get(`/search/?search_field=${searchField}&search_value=${searchValue}&types=tv`)
        console.log(`/search/?search_field=${searchField}&search_value=${searchValue}&types=tv`)
        console.log(data, "INI WATCHMODE")
        if (data.title_results.length !== 0) {
            
            const YtSource = await searchSourceById(data.title_results[0].id)
            // console.log(YtSource, "INI YTSOURCE dalam watchmode")
            
            if(YtSource.length !== 0) {
                
                //console.log(data, "INI DATA YG ADA YTSOURCE NYA")
                //console.log(YtSource, "INI YTSOURCE dalam watchmode")
                return {movieInfo: data, YtSource: YtSource}
            } 
            
        } 
        
        // res.status(200).json(data)
    } catch (err) {
        console.log(err)

    }
}

searchByImdbId("imdb_id", "tt2560140")


module.exports = { searchByImdbId}