const express=require('express');
const ControllerLessonPlan=require('../../../controllers/v1/qaf/lessonPlan.controller');
const router=express.Router();

router.post('/create',ControllerLessonPlan.create);
router.put('/update/:id',ControllerLessonPlan.update);
router.get('/get',ControllerLessonPlan.get);
router.get('/get/:id',ControllerLessonPlan.getById);
router.get('/',ControllerLessonPlan.getAll);
router.delete('/delete/:id',ControllerLessonPlan.delete);


// example routes:
// GET "http://localhost:4000/api/v1/lessonPlan/get"
// POST "http://localhost:4000/api/v1/lessonPlan/update/1"
// POST "http://localhost:4000/api/v1/lessonPlan/create"

module.exports=router;
