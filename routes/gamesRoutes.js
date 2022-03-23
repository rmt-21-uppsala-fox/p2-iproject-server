const express = require(`express`);
const router = express.Router();
const controllerGame = require(`../controllers/controllerGame`);

router.get(`/`, controllerGame.showGames);
router.get(`/next-week`, controllerGame.UpcomingNextMonth);
router.get(`/:gameId`, controllerGame.detailGame);
router.post(`/:gameId`, controllerGame.addToWishlist);
router.get(`/Wishlist/:UserId`, controllerGame.showWishlist);
router.post(`/GamesCollection/:UserId`, controllerGame.addToCollection);
router.get(`/GamesCollection/:UserId`, controllerGame.showGamesCollecton);


module.exports = router;
