const letterSoundScreening = require('../controllers/letterSoundScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', letterSoundScreening.getall)
 router.get('/:id', letterSoundScreening.getbyId)
router.post('/create', letterSoundScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router