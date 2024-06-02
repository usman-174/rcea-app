const express = require("express");
const speechAndLanguage = require("../controllers/speedAndLanguageScreen.controller");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", speechAndLanguage.getall);

router.post("/create", speechAndLanguage.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
