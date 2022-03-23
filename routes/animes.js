const express = require('express')
const router = express.Router()
const Controller = require("../controllers");

router.get("/", Controller.getAnimes);
router.get("/season", Controller.getThisSeasonAnimes);
router.get("/:animeId", Controller.getAnimeDetail);

module.exports = router