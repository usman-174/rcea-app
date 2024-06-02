const express = require("express");
const router = express.Router();

router.get(
  "/",
  require("../../../controllers/v1/qaf/classVisit.controller").getAll
);
router.get(
  "/get/:id",
  require("../../../controllers/v1/qaf/classVisit.controller").getById
);
router.delete(
  "/delete/:id",
  require("../../../controllers/v1/qaf/classVisit.controller").deleteById
);
router.post(
  "/",
  require("../../../controllers/v1/qaf/classVisit.controller").create
);
router.put(
  "/update/:id",
  require("../../../controllers/v1/qaf/classVisit.controller").update
);
router.get(
  "/get",
  require("../../../controllers/v1/qaf/classVisit.controller").search
);
module.exports = router;
