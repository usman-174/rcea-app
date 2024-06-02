const express = require("express");
const qafSchemeOfWork = require("../controllers/qafSchemeOfWork.controller");
const router = express.Router();

// router.post('/update', enrollment.updateEot)
router.post("/all", qafSchemeOfWork.getall);

router.post("/create", qafSchemeOfWork.create);
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT

module.exports = router;
