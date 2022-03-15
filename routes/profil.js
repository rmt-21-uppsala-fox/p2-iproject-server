const express = require("express");
const ProfilController = require("../controllers/Profil");
const router = express.Router();

router.get("/", ProfilController.getProfil);

module.exports = router;