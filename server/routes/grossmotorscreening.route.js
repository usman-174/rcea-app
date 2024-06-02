const GrossMotorScreening = require('../controllers/GrossMotorScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', GrossMotorScreening.getall)
 router.get('/:id', GrossMotorScreening.getbyId)
router.post('/create', GrossMotorScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router