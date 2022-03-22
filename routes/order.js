const router = require('express').Router();
const OrderController = require('../controllers/OrderController');


router.get('/orders', OrderController.getAllOrder)
router.post('/neworder', OrderController.newOrder)
router.post('/payment', OrderController.orderPayment)
router.patch('/receipt', OrderController.receipt)

module.exports = router