const TeacherController = require('../controllers/teacher.controller');
const express = require('express');
const router = express.Router();

router.post('/search', TeacherController.getTeacherbyname)
router.post('/create', TeacherController.createTeacher)
router.post('/getbysectiongrade', TeacherController.getTeacherbySectionGrade)
router.get('/all/', TeacherController.getall)
router.get('/allbysection/:schoolID', TeacherController.getBySchool)

router.get('/:id', TeacherController.getdatabyId)
router.post('/:id', TeacherController.updateTeacher)
router.delete("/delete/:id",TeacherController.deleteTeacher)
module.exports = router
