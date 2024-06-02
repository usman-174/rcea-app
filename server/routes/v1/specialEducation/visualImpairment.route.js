const express = require("express");
const router = express.Router();
router.get(
  "/search",
  require("../../../controllers/v1/specialEducation/visualImpairment.controller")
    .search
);
router.get(
  "/",
  require("../../../controllers/v1/specialEducation/visualImpairment.controller")
    .getAll
);

//get by ID
router.get(
  "/:id",
  require("../../../controllers/v1/specialEducation/visualImpairment.controller")
    .getById
);
//search

//create
router.post(
  "/",
  require("../../../controllers/v1/specialEducation/visualImpairment.controller")
    .createOrUpdate
);
//delete all
router.delete(
  "/all",
  require("../../../controllers/v1/specialEducation/visualImpairment.controller")
    .deletAll
);
module.exports = router;
