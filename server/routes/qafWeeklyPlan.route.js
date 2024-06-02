const express = require("express");
const qafWeeklyPlan = require("../controllers/qafWeeklyPlans.controller");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", qafWeeklyPlan.getall);

router.post("/create", qafWeeklyPlan.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
