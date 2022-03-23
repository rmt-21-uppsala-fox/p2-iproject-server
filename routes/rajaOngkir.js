const router = require("express").Router();
const Controller = require("../controllers/rajaOngkirController");
const authentication = require("../middlewares/authentication");

router.use(authentication);

router.get("/cities", Controller.getCities);
router.post("/costs", Controller.postCosts);

module.exports = router;
