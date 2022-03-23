const router = require("express").Router();
const MangaController = require("../controllers/mangaController");

router.get("/", MangaController.mangaGetAll);
router.get("/:id", MangaController.mangaGetById);

module.exports = router;
