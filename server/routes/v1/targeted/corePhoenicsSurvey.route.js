const express = require("express");
const router = express.Router();
router.get(
  "/search",
  require("../../../controllers/v1/targeted/corePhoenicsSurvey.controllers")
    .search
);
router.get(
  "/",
  require("../../../controllers/v1/targeted/corePhoenicsSurvey.controllers")
    .getAll
);

//get by ID
router.get(
  "/:id",
  require("../../../controllers/v1/targeted/corePhoenicsSurvey.controllers")
    .getById
);
//search

//create
router.post(
  "/",
  require("../../../controllers/v1/targeted/corePhoenicsSurvey.controllers")
    .createOrUpdate
);
//delete all
router.delete(
  "/all",
  require("../../../controllers/v1/targeted/corePhoenicsSurvey.controllers")
    .deletAll
);
module.exports = router;
