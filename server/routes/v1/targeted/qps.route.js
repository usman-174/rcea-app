const express = require("express");
const router = express.Router();
router.get(
  "/search",
  require("../../../controllers/v1/targeted/qps.controller")
    .search
);
router.get(
  "/",
  require("../../../controllers/v1/targeted/qps.controller")
    .getAll
);

//get by ID
router.get(
  "/:id",
  require("../../../controllers/v1/targeted/qps.controller")
    .getById
);
//search

//create
router.post(
  "/",
  require("../../../controllers/v1/targeted/qps.controller")
    .createOrUpdate
);
//delete all
router.delete(
  "/all",
  require("../../../controllers/v1/targeted/qps.controller")
    .deletAll
);
module.exports = router;
