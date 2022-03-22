const express = require(`express`);
const router = express.Router();
const controller = require(`../controllers/controllerUser`);

router.post(`/register`, controller.regist);

module.exports = router;
