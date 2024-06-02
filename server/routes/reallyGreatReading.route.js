const express = require("express");
const reallyGreatReading = require("../controllers/reallyGreatReadingScreen.controller");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", reallyGreatReading.getall);

router.post("/create", reallyGreatReading.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
