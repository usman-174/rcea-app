const pupilController = require('../controllers/pupil.controller');
const express = require('express');
const router = express.Router();

router.post('/search', pupilController.getPupilbyname)
router.post('/getbysectiongrade', pupilController.getPupilbySectionGrade)
router.get('/getbysectiongrade', pupilController.getPupilbySectionGradeQuery)

router.post('/create', pupilController.createPupil)
router.get('/all/:schoolID', pupilController.getallBySchool)
router.get('/', pupilController.getAll)

router.get('/:id', pupilController.getpupilbyId)
router.post('/:id', pupilController.updatePupil)

router.delete('/:id', pupilController.deletePupil)
module.exports = router
