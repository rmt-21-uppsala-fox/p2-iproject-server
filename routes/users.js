const express = require('express')
const router = express.Router()
const {ControllerUsers} = require("../controllers/users");
const authentication = require("../middlewares/authc");
const authorization = require("../middlewares/authz");

router.post("/register", ControllerUsers.register);
router.post("/login", ControllerUsers.login);

router.use(authentication);

router.post("/favorites", ControllerUsers.addFavorite);
router.get("/favorites", ControllerUsers.getFavorites);
router.delete("/favorites/:favoriteId", authorization, ControllerUsers.deleteFavorites);

module.exports = router;