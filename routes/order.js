const router = require('express').Router();
const OrderController = require('../controllers/OrderController');


router.get('/orders', OrderController.getAllOrder)
router.post('/neworder', OrderController.createNewOrder)

module.exports = router