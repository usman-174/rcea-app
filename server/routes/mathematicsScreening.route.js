const mathematicsScreening = require('../controllers/mathematicsScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', mathematicsScreening.getall)
 router.get('/:id', mathematicsScreening.getbyId)
router.post('/create', mathematicsScreening.create)

module.exports = router