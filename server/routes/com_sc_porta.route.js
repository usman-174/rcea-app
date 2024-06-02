const com_sc_portal = require('../controllers/com_sc_port.controller')
const express = require('express')
const router = express.Router()

// router.post('/update', enrollment.updateEot)
router.post('/all', com_sc_portal.getall)
 router.get('/:id', com_sc_portal.getbyId)
router.post('/create', com_sc_portal.create)
// router.post('/delete/:id', enrollment.deleteEOT)

// createEOT



module.exports = router