
const express = require('express')
const psychomotor = require('../controllers/psychomotorScreen.controller')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', psychomotor.getall)

router.post('/create', psychomotor.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router