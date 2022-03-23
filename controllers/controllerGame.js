const nodemailer = require(`nodemailer`);
const { Game, Wishlist, GamesCollection, User } = require(`../models`);
const axios = require(`axios`);
const keyOfRAWG = process.env.key;
const { dateNow, nextMonth, aYearBefore } = require(`../helpers/dates`);

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
      // console.log(price.data);
      const price = Number(data2.data[0].cheapest);
      const total = price * 15000;
      // console.log(total);
      // console.log(data.data, total);
      res.status(200).json({ game: data.data, price: total });
    } catch (err) {
      next(err);
    }
  }
  static async addToWishlist(req, res, next) {
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
      // console.log(price.data);
      const price = Number(data2.data[0].cheapest);
      const total = price * 15000;

      // console.log(total)

      const tes = await Game.create({
        gameId: data.data.id,
        name: data.data.name,
        description: data.data.description,
        rating: data.data.rating,
        released: data.data.released,
        background_image: data.data.background_image,
        price: total,
      });

      // console.log(tes);

      const tes2 = await Wishlist.create({
        GameId: tes.id,
        UserId: req.userAccess.id,
      });

      // console.log(tes.id, req.userAccess.id);
      res.status(201).json(tes2);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async showWishlist(req, res, next) {
    try {
      const id = +req.params.UserId;
      // console.log(id);
      const data = await Wishlist.findOne({
        where: { UserId: id },
        include: [
          {
            model: Game,
          },
          { model: User },
        ],
      });
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  static async addToCollection(req, res, next) {
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
      // console.log(price.data);
      const price = Number(data2.data[0].cheapest);
      const total = price * 15000;

      // console.log(total)

      const tes = await Game.create({
        gameId: data.data.id,
        name: data.data.name,
        description: data.data.description,
        rating: data.data.rating,
        released: data.data.released,
        background_image: data.data.background_image,
        price: total,
      });

      // console.log(tes);

      const tes2 = await Wishlist.create({
        GameId: tes.id,
        UserId: req.userAccess.id,
      });

      // console.log(tes.id, req.userAccess.id);
      res.status(201).json(tes2);
    } catch (err) {
      next(err);
    }
  }
  static async showGamesCollecton() {
    try {
      const id = +req.params.UserId;
      // console.log(id);
      const data = await Wishlist.findOne({
        where: { UserId: id },
        include: [
          {
            model: Game,
          },
          { model: User },
        ],
      });
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
