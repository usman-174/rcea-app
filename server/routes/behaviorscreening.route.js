const BehaviorScreening = require('../controllers/BehaviorScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', BehaviorScreening.getall)
 router.get('/:id', BehaviorScreening.getbyId)
router.post('/create', BehaviorScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router