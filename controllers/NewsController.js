const axios = require('axios').default;

class NewsController {
  static async getNews(req, res, next) {
    var options = {
      method: 'GET',
      url: 'https://blockchain-news1.p.rapidapi.com/news/NDTV',
      headers: {
        'X-RapidAPI-Host': 'blockchain-news1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.RAPID_API
      }
    };

    try {
      const response = await axios.request(options);
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json({
        message: error.response.data
      })
    }
  }

}

module.exports = {
  NewsController
}