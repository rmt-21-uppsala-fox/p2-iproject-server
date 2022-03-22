const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/controllerUser`);
const gameRoutes = require(`./gamesRoutes`);
const { authentication } = require(`../middlewares/authentication.js`);

router.post(`/register`, controller.regist);
router.post(`/login`, controller.login);

router.use(`/games`, authentication, gameRoutes);

module.exports = router;
