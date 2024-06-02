const express = require("express");
const ControllerWeeklyPlanSpecialists = require("../../../controllers/v1/qaf/WeeklyPlanSpecialists.controller");
const router = express.Router();

router.post("/create", ControllerWeeklyPlanSpecialists.create);
router.put("/update/:id", ControllerWeeklyPlanSpecialists.update);
router.get("/get", ControllerWeeklyPlanSpecialists.get);
router.get("/get/:id", ControllerWeeklyPlanSpecialists.getById);
router.get("/", ControllerWeeklyPlanSpecialists.getAll);
 router.delete("/delete/:id", ControllerWeeklyPlanSpecialists.delete);

// Example routes:
// GET "http://localhost:4000/api/v1/weeklyPlan/get"
// POST "http://localhost:4000/api/v1/weeklyPlan/update/1"
// POST "http://localhost:4000/api/v1/weeklyPlan/create"

module.exports = router;
