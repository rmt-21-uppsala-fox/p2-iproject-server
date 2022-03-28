const axios = require("axios")
const { Favorite } = require("../models")
class leagueController {
  static async getEPLTable(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://football-web-pages1.p.rapidapi.com/league-table.json',
        params: { comp: '1', sort: 'normal' },
        headers: {
          'x-rapidapi-host': 'football-web-pages1.p.rapidapi.com',
          'x-rapidapi-key': '209db35aaemsh091d8766c41fd9cp1b0231jsn9b52d38af8d4'
        }
      })
      const league_table = response.data["league-table"]
      // console.log(league_table, "<<<<< table")
      res.status(200).json(league_table)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getITATable(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://football-web-pages1.p.rapidapi.com/league-table.json',
        params: { comp: '93', sort: 'normal' },
        headers: {
          'x-rapidapi-host': 'football-web-pages1.p.rapidapi.com',
          'x-rapidapi-key': '209db35aaemsh091d8766c41fd9cp1b0231jsn9b52d38af8d4'
        }
      })
      console.log(response.data)
      const league_table = response.data["league-table"]
      console.log(league_table, "<<<<< table")
      res.status(200).json(league_table)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getSPATable(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://football-web-pages1.p.rapidapi.com/league-table.json',
        params: { comp: '94', sort: 'normal' },
        headers: {
          'x-rapidapi-host': 'football-web-pages1.p.rapidapi.com',
          'x-rapidapi-key': '209db35aaemsh091d8766c41fd9cp1b0231jsn9b52d38af8d4'
        }
      })
      console.log(response.data)
      const league_table = response.data["league-table"]
      console.log(league_table, "<<<<< table")
      res.status(200).json(league_table)
    } catch (err) {
      console.log(err)
      next(err)

    }
  }
  static async claimFav(req, res, next) {
    try {
      const UserId = req.userCredentials.id
      const { leagueName } = req.body
      let fav = await Favorite.findOne({
        where: {
          UserId
        }
      })
      if (fav) {
        throw {
          code: 403,
          msg: "You already have a favorite league"
        }
      }
      let myfav = await Favorite.create({ UserId, leagueName })
      res.status(201).json(myfav)
    } catch (err) {
      console.log(err)
      next(err)

    }
  }
  static async findFav(req, res, next) {
    try {
      const UserId = req.userCredentials.id
      const fav = await Favorite.findOne({ where: { UserId } })
      console.log(fav)
      res.status(200).json(fav.leagueName)

    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getSPATop(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://football-web-pages1.p.rapidapi.com/goalscorers.json',
        params: { comp: '94' },
        headers: {
          'x-rapidapi-host': 'football-web-pages1.p.rapidapi.com',
          'x-rapidapi-key': '209db35aaemsh091d8766c41fd9cp1b0231jsn9b52d38af8d4'
        }
      })
      console.log(response.data)
      const top_scorer = response.data.goalscorers.players
      console.log(top_scorer, "<<<<< topgoal")
      res.status(200).json(top_scorer.slice(0, 10))
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getITATop(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://football-web-pages1.p.rapidapi.com/goalscorers.json',
        params: { comp: '93' },
        headers: {
          'x-rapidapi-host': 'football-web-pages1.p.rapidapi.com',
          'x-rapidapi-key': '209db35aaemsh091d8766c41fd9cp1b0231jsn9b52d38af8d4'
        }
      })
      console.log(response.data)
      const top_scorer = response.data.goalscorers.players
      console.log(top_scorer, "<<<<< topgoal")
      res.status(200).json(top_scorer.slice(0, 10))
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getEPLTop(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://football-web-pages1.p.rapidapi.com/goalscorers.json',
        params: { comp: '1' },
        headers: {
          'x-rapidapi-host': 'football-web-pages1.p.rapidapi.com',
          'x-rapidapi-key': '209db35aaemsh091d8766c41fd9cp1b0231jsn9b52d38af8d4'
        }
      })
      console.log(response.data)
      const top_scorer = response.data.goalscorers.players
      console.log(top_scorer, "<<<<< topgoal")
      res.status(200).json(top_scorer.slice(0, 10))
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
  static async getCarousel(req, res, next) {
    try {
      const response = await axios({
        method: "GET",
        url: 'https://api.pexels.com/v1/search?query=soccer&per_page=12&orientation=landscape',
        headers: { 'Authorization': '563492ad6f917000010000013cc4b9e0883948149f0838af257369b0' }
      })
      res.status(201).json({ image: response.data.photos });
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

}

module.exports = leagueController