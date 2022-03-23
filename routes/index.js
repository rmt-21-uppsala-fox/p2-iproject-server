const router = require("express").Router();
const MangaController = require("../controllers/mangaController");
const mangaRouter = require("./manga");

router.get("/", MangaController.mangaGetAll);
router.use("/manga", mangaRouter);

module.exports = router;
