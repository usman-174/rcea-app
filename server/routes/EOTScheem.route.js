const EOTScheema = require('../controllers/EOTScheema.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', EOTScheema.getall)
 router.get('/:id', EOTScheema.getbyId)
router.post('/create', EOTScheema.create)
// router.post('/:id',EOTScheema.update)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router