const axios = require('axios')
const API_KEY = 'a71ce9127dmshf81388b9a3b880dp1c2125jsnd4d7b66437ca'
console.log(API_KEY)
const {searchByImdbId} = require ('./watchMode')
const instance = axios.create({
    baseURL: `https://ott-details.p.rapidapi.com`,
    headers: {
        
        'x-rapidapi-host': 'ott-details.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
    }
})

const title  = 'titan'
// async function searchSourceById(id) {
//     try {
//         let WatchModeId = id

//         console.log( id, "INI SOURCE")
//         const { data } = await instance.get(`/title/${id}/sources/`)
//         const YtSource = data.filter(element => {
//             if(element.source_id == 344 && element.region == 'CA') {
//                 return element
//             }
//         });
//         return YtSource
//         //console.log(YtSource, WatchModeId, "INI SOURCE")
//         // res.status(200).json(data)
//     } catch (err) {
//         console.log(err)
        
//     }
// }
// async function searchByImdbId(field, value) {
//     try {
//         const searchField = field
//         const searchValue = value


//         const { data } = await Wm.get(`/search/?search_field=${searchField}&search_value=${searchValue}&types=tv`)
//         console.log(data.title_results, "INI WATCHMODE")
        
//         const ytSource = await searchSourceById(data.title_results[0].id)
//         console.log(ytSource, "INI YTSOURCE DALAM search by IMDB")
//         // if (YtSource.length !== 0) {
//         //     return YtSource
//         // }
        
//     } catch (err) {
//         console.log(err)
        
//     }
// }

async function searchOttName(req, res, next) {
    try {
        


        const { data } = await instance.get(`/search?title=${title}&page=1/`)
        console.log(data, "INI OTT DETAILS")
        const movies = data.results.filter(el => {
            if (el.type == 'movie') {
                return el
            } 
        })
        
        const imdbIds =  movies.filter(async el => {
            const result = await searchByImdbId('imdb_id', el.imdbid) 
            if(result) {
                //console.log(JSON.stringify(result, null, 2), "INI dalam Imdbis")
                return "ini ada source yt nya loh"    
            }
            
        })
        console.log(imdbIds, "INI IMBDIDs")
        // const movieWithYtSource = data.map(element => {
            
        // });
        // /   console.log("INI MOVIES", movies, "INI Movies")

        
        
        // res.status(200).json(data)
    } catch (err) {
        console.log(err)
        
    }
}



searchOttName()
// searchByImdbId('imdb_id','tt2560140')
module.exports = instance