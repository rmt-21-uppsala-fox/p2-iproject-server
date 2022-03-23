const express = require("express");
const KibController = require("../controllers/Kib");
const router = express.Router();
const upload = require('../middleware/multerMid');

router.get("/", KibController.getKib);
router.post("/post", KibController.createKib);
router.post("/multer", upload.single("file"), KibController.multer);
router.put("/put/:id", KibController.updateKib);
router.delete("/delete/:id", KibController.deleteKib);

module.exports = router;