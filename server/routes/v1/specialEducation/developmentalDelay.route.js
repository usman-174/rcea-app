const express = require("express");
const router = express.Router();
router.get(
  "/search",
  require("../../../controllers/v1/specialEducation/developmentalDelay.controller")
    .search
);
router.get(
  "/",
  require("../../../controllers/v1/specialEducation/developmentalDelay.controller")
    .getAll
);

//get by ID
router.get(
  "/:id",
  require("../../../controllers/v1/specialEducation/developmentalDelay.controller")
    .getById
);
//search

//create
router.post(
  "/",
  require("../../../controllers/v1/specialEducation/developmentalDelay.controller")
    .createOrUpdate
);
//delete all
router.delete(
  "/all",
  require("../../../controllers/v1/specialEducation/developmentalDelay.controller")
    .deletAll
);
module.exports = router;
