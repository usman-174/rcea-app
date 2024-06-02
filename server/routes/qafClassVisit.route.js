const express = require("express");
const qafClassVisit = require("../controllers/qafClassVisits.controller");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", qafClassVisit.getall);

router.post("/create", qafClassVisit.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
