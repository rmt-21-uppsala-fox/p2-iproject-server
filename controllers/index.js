const axios = require("axios");

class Controller {

  static async getAnimes(req, res, next) {
    try {
      const { q, sfw, page, genres, score } = req.query;
      //! ?q => look for entries with this keyword
      //! ?limit = limit result per page
      let url = `https://api.jikan.moe/v4/anime`
      if (!page) {
        url += `?page=1`;
      } else {
        url += `?page=${page}`;
      }
      if (q) {
        url += `&q=${q}`;
      }
      if (sfw) {
        url += `&sfw=true`;
      }
      if (genres) {
        //! get genreId with https://api.jikan.moe/v4/genres/anime
        url += `&genres=${genres}`;
      }
      if (score) {
        url += `&score=${score}`;
      }

      const { data } = await axios.get(
        url
      );

      res.status(200).json(data);
      
    } catch (error) {
      next(error);
    }
  }

  static async getAnimeDetail(req, res, next) {
    try {
      const { animeId } = req.params;

      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${animeId}`
      );

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getThisSeasonAnimes(req, res, next) {
    try {
      let date = new Date ().toLocaleString('en-US', { year: 'numeric', month: 'numeric'})
      let simpleDate = date.split('/')
      if (simpleDate[0] <= 3) {
        simpleDate[0] = 'winter'
      } else if (simpleDate[0] <= 6) {
        simpleDate[0] = 'spring'
      } else if (simpleDate[0] <= 9) {
        simpleDate[0] = 'summer'
      } else if (simpleDate[0] <= 12) {
        simpleDate[0] = 'fall'
      }
      
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/seasons/${simpleDate[1]}/${simpleDate[0]}`
      );

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
