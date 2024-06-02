const phonemicsSegmentationScreening = require('../controllers/phonemicsSegmentationScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', phonemicsSegmentationScreening.getall)
 router.get('/:id', phonemicsSegmentationScreening.getbyId)
router.post('/create', phonemicsSegmentationScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router