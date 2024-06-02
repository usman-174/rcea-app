const nonsenseWordScreening = require('../controllers/nonsenseWordScreening.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', nonsenseWordScreening.getall)
 router.get('/:id', nonsenseWordScreening.getbyId)
router.post('/create', nonsenseWordScreening.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router