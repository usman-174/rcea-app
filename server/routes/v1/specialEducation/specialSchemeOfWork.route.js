const express = require("express");
const router = express.Router();
const specialSchemeOfWork = require("../../../controllers/v1/specialEducation/specialSchemeOfWork.controller");

router.post("/create", specialSchemeOfWork.create);
router.put("/update/:id", specialSchemeOfWork.update);
router.get("/get", specialSchemeOfWork.get);
router.get("/get/:id", specialSchemeOfWork.getById);
router.get("/", specialSchemeOfWork.getAll);

module.exports = router;
