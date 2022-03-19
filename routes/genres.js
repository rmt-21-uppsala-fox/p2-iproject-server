const Controller = require ('../controllers/movieController')
const express = require("express")
const router = express.Router()

router.get('/', Controller.getGenres)

module.exports = router