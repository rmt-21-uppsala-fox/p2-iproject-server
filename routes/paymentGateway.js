const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/controllerPayment`);

router.post(`/transaction/:gameId`, controller.getTransaction);

module.exports = router;
