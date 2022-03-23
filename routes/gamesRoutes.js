const express = require(`express`);
const router = express.Router();
const controllerGame = require(`../controllers/controllerGame`);

router.get(`/`, controllerGame.showGames);
router.get(`/next-week`, controllerGame.UpcomingNextMonth);
router.get(`/:gameId`, controllerGame.detailGame);
router.post(`/:gameId`, controllerGame.addToWishlist);
router.get(`/:UserId`, controllerGame.showWishlist);

module.exports = router;
