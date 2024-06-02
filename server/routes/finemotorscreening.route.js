const FineMotorScreening = require('../controllers/FineMotorScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', FineMotorScreening.getall)
 router.get('/:id', FineMotorScreening.getbyId)
router.post('/create', FineMotorScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router