const express = require("express");
const qafLessonPlan = require("../controllers/qafLessonPlan");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", qafLessonPlan.getall);

router.post("/create", qafLessonPlan.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
