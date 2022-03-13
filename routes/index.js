const router = require("express").Router();
const admin = require("./admin");

router.use("/", admin);

// router.use(authentication);



module.exports = router;
