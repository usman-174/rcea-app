
const express = require('express')
const qps = require('../controllers/qpsScreen.controller')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', qps.getall)

router.post('/create', qps.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router