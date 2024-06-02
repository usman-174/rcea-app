const letterNamingScreening = require('../controllers/letterNamingScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', letterNamingScreening.getall)
 router.get('/:id', letterNamingScreening.getbyId)
router.post('/create', letterNamingScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router