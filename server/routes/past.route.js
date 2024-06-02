
const express = require('express')
const past = require('../controllers/pastScreen.controller')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', past.getall)

router.post('/create', past.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router