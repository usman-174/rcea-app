
const express = require('express')
const corePhonic = require('../controllers/CorePhonicScreening.controller')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', corePhonic.getall)

router.post('/create', corePhonic.create)
router.get('/get/:id', corePhonic.getById)
router.post('/delete', corePhonic.deleteById)


// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router