const silentReadingScreening = require('../controllers/silentReadingScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', silentReadingScreening.getall)
 router.get('/:id', silentReadingScreening.getbyId)
router.post('/create', silentReadingScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router