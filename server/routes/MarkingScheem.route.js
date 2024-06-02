const MarkingScheem = require('../controllers/markingScheem.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', MarkingScheem.getall)
 router.get('/:id', MarkingScheem.getbyId)
router.post('/create', MarkingScheem.create)
// router.post('/:id',MarkingScheem.update)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router