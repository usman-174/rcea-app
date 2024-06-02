const express = require("express");
const progressmonitoring = require("../controllers/progressmonitoring.controller");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", progressmonitoring.getAll);

router.post("/create", progressmonitoring.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
