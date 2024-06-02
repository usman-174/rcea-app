const mongoose = require("mongoose");
const Teacher = require("./teacher");

const qafLessonPlan = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Types.ObjectId,
    ref: Teacher,
  },
  // _id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  grade: String,
  section: String,
  submitted: Boolean,
  date: String,
});

const QafLessonPlanModel = mongoose.model("qafLessonPlan", qafLessonPlan);

module.exports = QafLessonPlanModel;
