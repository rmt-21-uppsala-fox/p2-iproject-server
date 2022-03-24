const express = require('express')
const router = express.Router()
const Controller = require("../controllers");
const favorites = require ("./favorites")

router.use("/favorites", favorites);

router.get("/", Controller.getAnimes);
router.get("/genres", Controller.getGenres);
router.get("/season", Controller.getThisSeasonAnimes);
router.get("/:animeId", Controller.getAnimeDetail);


module.exports = router