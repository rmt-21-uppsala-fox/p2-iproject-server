const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/controllerPayment`);

router.post(`/transaction`, controller.getTransaction);

module.exports = router;
