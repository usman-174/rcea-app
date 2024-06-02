const oralReadingScreening = require('../controllers/oralReadingScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', oralReadingScreening.getall)
 router.get('/:id', oralReadingScreening.getbyId)
router.post('/create', oralReadingScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router