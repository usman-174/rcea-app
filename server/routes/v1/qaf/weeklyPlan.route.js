const express = require("express");
const ControllerWeeklyPlan = require("../../../controllers/v1/qaf/weeklyPlan.controller");
const router = express.Router();

router.post("/create", ControllerWeeklyPlan.create);
router.put("/update/:id", ControllerWeeklyPlan.update);
router.get("/get", ControllerWeeklyPlan.get);
router.get("/get/:id", ControllerWeeklyPlan.getById);
router.get("/", ControllerWeeklyPlan.getAll);
router.delete("/delete/:id", ControllerWeeklyPlan.delete);

// Example routes:
// GET "http://localhost:4000/api/v1/weeklyPlan/get"
// POST "http://localhost:4000/api/v1/weeklyPlan/update/1"
// POST "http://localhost:4000/api/v1/weeklyPlan/create"

module.exports = router;
