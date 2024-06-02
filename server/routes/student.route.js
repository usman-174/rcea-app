const StudentController = require('../controllers/student.controller')
const express = require('express')
const router = express.Router()

router.post('/create', StudentController.create)
router.post('/search', StudentController.getbyname)
router.get('/all', StudentController.getall)
router.get('/:id', StudentController.getdatabyId)
router.post('/:id', StudentController.updateSubject)

module.exports = router
