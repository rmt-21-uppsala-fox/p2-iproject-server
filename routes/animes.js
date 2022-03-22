const express = require('express')
const router = express.Router()
const Controller = require("../controllers");

router.get("/", Controller.getThisSeasonAnimes);
router.get("/search", Controller.getAnimeDetail);
router.get("/:animeId", Controller.getAnimeDetail);

module.exports = router