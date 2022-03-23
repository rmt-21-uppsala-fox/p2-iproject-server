const axios = require("axios")
class englishController {
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
}

module.exports = englishController