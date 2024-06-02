const SubjectController = require('../controllers/subjects.controller')
const express = require('express')
const router = express.Router()

router.post('/create', SubjectController.create)
router.post('/search', SubjectController.getbyname)
router.get('/all', SubjectController.getall)
router.get('/:id', SubjectController.getdatabyId)
router.post('/:id', SubjectController.updateSubject)

module.exports = router
