const express = require(`express`);
const router = express.Router();
const controllerGame = require(`../controllers/controllerGame`);

router.get(`/`, controllerGame.showGames);
router.get(`/next-month`, controllerGame.UpcomingNextMonth);
router.get(`/:gameId`, controllerGame.detailGame);
router.post(`/Wishlist/:gameId`, controllerGame.addToWishlist);
router.get(`/Wishlist/:UserId`, controllerGame.showWishlist);
router.post(`/GamesCollection/:gameId`, controllerGame.addToCollection);
router.get(`/GamesCollection/:UserId`, controllerGame.showGamesCollecton);

module.exports = router;
