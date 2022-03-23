const router = require("express").Router();
const AuthController = require("../controllers/authController");
const MangaController = require("../controllers/mangaController");

router.get("/", (req, res) => {
	res.redirect("/manga");
});

router.get("/manga", MangaController.mangaGetAll);
router.get("/manga/:id", MangaController.mangaGetById);
router.get("/authenticate", AuthController.authenticate);

module.exports = router;
