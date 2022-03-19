const axios = require('axios')
const API_KEY = process.env.WATCHMODE_API_KEY
console.log(API_KEY)
const instance = axios.create({
    baseURL: `https://api.watchmode.com/`,
    
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



module.exports = instance