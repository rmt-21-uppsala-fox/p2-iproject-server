const {mtGenerateTransactionToken} = require ('../controllers/paymentController')
const express = require("express")
const router = express.Router()

router.post('/pay/:imdbId', mtGenerateTransactionToken)

module.exports = router