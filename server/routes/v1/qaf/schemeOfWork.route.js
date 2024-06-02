const express = require("express");
const qafSchemeOfWork = require("../../../controllers/v1/qaf/schemeOfWork.controller");
const router = express.Router();

router.post("/create", qafSchemeOfWork.create);
router.put("/update/:id", qafSchemeOfWork.update);
router.get("/get", qafSchemeOfWork.get);
router.get("/get/:id", qafSchemeOfWork.getById);
router.get("/", qafSchemeOfWork.getAll);


// e.g Get "http://localhost:4000/api/v1/qaf/schemeofwork/get"
// e.g POST "http://localhost:4000/api/v1/qaf/schemeofwork/update/1"
// e.g post "http://localhost:4000/api/v1/qaf/schemeofwork/create"


module.exports = router;
