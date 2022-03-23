const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");
const kib = require('./kib');
const profil = require('./profil');
const { authentification } = require('../middleware/auth.js');

router.get("/", Controller.home);
router.post("/login", Controller.login);
router.post("/register", Controller.register);

router.use(authentification);
router.use("/kib", kib);
router.use("/profil", profil);

module.exports = router;