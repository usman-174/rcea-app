const schoolController = require('../controllers/school.controller');
const express = require('express');
const router = express.Router();

// router.post('/create', pupilController.createPupil)
router.get('/all', schoolController.getall)

module.exports = router
