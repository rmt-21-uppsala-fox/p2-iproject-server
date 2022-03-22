const axios = require("axios");

class Controller {

  static async getAnimes(req, res, next) {
    try {
      const { jobType, company, page } = req.query;

      if (role === "staff") {
        let jobs = await Job.findAll({
          include: {
            model: Company,
          },
          where: {
            authorId: UserId,
          },
        });

        res.status(200).json(jobs);
      } else {
        let jobs = await Job.findAll({
          include: {
            model: Company,
          },
        });

        res.status(200).json(jobs);
      }
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
