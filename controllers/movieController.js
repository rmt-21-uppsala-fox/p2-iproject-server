const { User, UserNews } = require('../models/index')
const IMDB_KEY = process.env.IMDB_API_KEY
const WM2_KEY = process.env.WATCHMODE2_API_KEY
const imdb = require('./apis/imdb-api')
const watchMode2 = require('./apis/watchMode2')


class Controller {
    static async getTopFive(req, res, next) {
        try {
            console.log(IMDB_KEY, "INI IMDB KEY")
            const response = await imdb.get(`/AdvancedSearch/${IMDB_KEY}?title_type=feature&release_date=2020-12-01,2022-03-18&groups=top_1000&countries=us&sort=moviemeter,desc&count=5`)
            const fiveMovies = response.data
            console.log(fiveMovies, "INI TOP 5 MOVIES")
            res.status(200).json(fiveMovies)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async searchMovie(req, res, next) {
        try {
            const { page, title, genre } = req.query
            let movieTitle = ''
            let startpage = 1
            if (page) {
                startpage = page
            }
            if (title) {
                movieTitle = title
            }

            const response = await imdb.get(`/AdvancedSearch/${IMDB_KEY}?title_type=feature&release_date=1960-12-01,2022-03-18&countries=us&genres=${genre}&title=${movieTitle}&sort=boxoffice_gross_us,desc&count=1000`)
            const searchMovie = response.data

            let startArray = 0 + ((startpage - 1) * 10)
            let endArray = startArray + 10
            console.log(startArray, endArray)
            const sliced = searchMovie.results.slice(startArray, endArray)
            console.log(sliced, "INI HASIL SEARCH")
            res.status(200).json(sliced)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async getMovieDetails(req, res, next) {
        try {
            const { imdbId } = req.params
            const response = await imdb.get(`Title/${IMDB_KEY}/${imdbId}`)
            const MovieDetails = response.data
            console.log(MovieDetails)
            res.status(200).json(MovieDetails)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async getMoviePricesAndTrailer(req, res, next) {
        try {
            const { imdbId } = req.params
            const response = await watchMode2.get(`v1/title/${imdbId}/details/?apiKey=${WM2_KEY}&append_to_response=sources`)
            // const movieTrailer = 
            const trailerLink = response.data.trailer
            const trailerLinkEmbed = trailerLink.replace('watch?v=', 'embed/')

            const sources = response.data.sources
            let sourcePriceRent = sources.find(element => {
                //console.log(element.type)
                return element.price && element.type == 'rent' && element.region == 'US'

            });

            let sourcePriceBuy = sources.find((element) => {
                //console.log(element.type)
                return element.price && element.type == 'buy' && element.region == 'US'

            });



            if (!sourcePriceRent) {
                sourcePriceRent = {
                    price: 3.59
                }
            }
            if (!sourcePriceBuy) {
                sourcePriceBuy = {
                    price: 12.59
                }
            }

            //console.log(sourcePriceRent, sourcePriceBuy)
            const rentIdr = await convertUsdPriceToIdr(sourcePriceRent.price)
            const buyIdr = await convertUsdPriceToIdr(sourcePriceBuy.price)
            //console.log(rentIdr, buyIdr)
            console.log({
                trailer: trailerLinkEmbed,
                rent: rentIdr,
                buy: buyIdr,

            })
            res.status(200).json({
                trailer: trailerLinkEmbed,
                rent: rentIdr,
                buy: buyIdr,

            })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async addToPurchased(req, res, next) {
        try {
            const { title, synopsis, imageUrl, imdbId } = req.params

            const { id } = req.loginUser
            console.log(id, imdbId, "dari addToPurchased")


            const userMovie = await UserNews.findOne({
                where: {
                    UserId: id,
                    ImdbId: imdbId
                }
            })
            if (!userMovie) {
                const addToMyPurchased = await UserNews.create({
                    title : title,
                    synopsis: synopsis,
                    imageUrl : imageUrl,
                    ImdbId: imdbId,
                    UserId: id, 
                    
                })
                console.log(addToPurchased, "INI ADD TO MY PURCHASED")
                res.status(201).json(addToMyPurchased)
            } else {
                throw ({
                    code: 400,
                    name: "PURCHASE_DUPLICATE",
                    message: "This Movie has already been purchased"
                })
            }


        } catch (err) {
            console.log(err)
            next(err)
        }
    }


}

module.exports = Controller