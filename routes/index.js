const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");
const kib = require('./kib');
const profil = require('./profil');

router.get("/", Controller.home);
router.post("/login", Controller.login);
router.post("/register", Controller.register);
// router.get("/profil", profil.getProfil);
// router.get("/kib", kib.getAll);

module.exports = router;