const mongoose = require("mongoose");
const Teacher = require("./teacher");

const WeeklyPlanSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true
  },
  term: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  week_no: {
    type: Number,
    required: true
  },
  specialization: String,
  day: {
    type: String,
    enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    required: true
  },
  planData: [
    {
      period_no: {
        type: Number,
        required: true
      },
      SUBJECTS: String,
      TOPICS_SUBTOPICS: String,
      CLASSWORK_HOMEWORK: String,
      REMARKS: String
    }
  ],
  date: Date, 
  educatorSignature: String, 
  DHMName: String, 
  DHMSignature: String, 
  HMName: String,
  HMSignature: String 
});

const WeeklyPlanModel = mongoose.model("WeeklyPlan", WeeklyPlanSchema);

module.exports = WeeklyPlanModel;
