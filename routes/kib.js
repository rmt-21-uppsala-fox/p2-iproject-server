const express = require("express");
const KibController = require("../controllers/Kib");
const router = express.Router();

router.get("/", KibController.getKib);
router.post("/post", KibController.createKib);
router.put("/put/:id", KibController.updateKib);
router.delete("/delete/:id", KibController.deleteKib);

module.exports = router;