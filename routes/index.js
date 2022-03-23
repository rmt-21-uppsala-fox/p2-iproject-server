const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/controllerUser`);
const gameRoutes = require(`./gamesRoutes`);
const orderRoutes = require(`./paymentGateway`);
const { authentication } = require(`../middlewares/authentication.js`);

router.post(`/register`, controller.regist);
router.post(`/login`, controller.login);

router.use(`/games`, authentication, gameRoutes);
router.use(`/order`, authentication, orderRoutes);

module.exports = router;
