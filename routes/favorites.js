const express = require('express')
const router = express.Router()
const {ControllerUsers} = require("../controllers/users");
const authorization = require("../middlewares/authz");
const authentication = require("../middlewares/authc");

router.use(authentication);
router.post("/", ControllerUsers.addFavorite);
router.get("/", ControllerUsers.getFavorites);
router.delete("/:favoriteId", authorization, ControllerUsers.deleteFavorites);

module.exports = router;