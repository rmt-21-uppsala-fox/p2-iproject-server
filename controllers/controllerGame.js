const keyOfRAWG = process.env.key;
const axios = require(`axios`);
const date = new Date();
const dateNow = date.toISOString().slice(0, 10);
date.setMonth(date.getMonth() + 1);
const nextMonth = date.toISOString().slice(0, 10);
const date2 = new Date();
date2.setFullYear(date2.getFullYear() - 1);
const aYearBefore = date2.toISOString().slice(0, 10);

class Controller {
  static async showGames(req, res, next) {
    try {
      const data = await axios({
        method: `get`,
        url: `https://api.rawg.io/api/games`,
        params: {
          key: `${keyOfRAWG}`,
          dates: `${aYearBefore},${dateNow}`,
          ordering: `-added`,
        },
      });
      res.status(200).json(data.data.results);
    } catch (err) {
      next(err);
    }
  }
  static async UpcomingNextMonth(req, res, next) {
    try {
      const data = await axios({
        method: `get`,
        url: `https://api.rawg.io/api/games`,
        params: {
          key: `${keyOfRAWG}`,
          dates: `${dateNow},${nextMonth}`,
          ordering: `-added`,
        },
      });
      // console.log(data.data);
      res.status(200).json(data.data.results);
    } catch (err) {
      next(err);
    }
  }
  static async detailGame(req, res, next) {
    try {
      const id = +req.params.gameId;
      const data = await axios({
        method: `get`,
        url: `https://api.rawg.io/api/games/${id}`,
        params: {
          key: `${keyOfRAWG}`,
        },
      });
      const data2 = await axios({
        method: `get`,
        url: `https://www.cheapshark.com/api/1.0/games`,
        params: {
          title: `${data.data.name}`,
        },
      });
      const formatRupiah = (money) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(money);
      };
      // console.log(price.data);
      const price = Number(data2.data[0].cheapest);
      const total = formatRupiah(price * 15000);
      // console.log(total);
      res.status(200).json({ game: data.data, price: total });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
