const express = require(`express`);
const router = express.Router();
const controllerGame = require(`../controllers/controllerGame`);

router.get(`/`, controllerGame.showGames);
router.get(`/next-week`, controllerGame.UpcomingNextWeek)

module.exports = router;
