const SessionType = require('../controllers/session_type.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.get('/all', SessionType.getall)
router.get('/:id', SessionType.getbyId)
router.post('/create', SessionType.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router