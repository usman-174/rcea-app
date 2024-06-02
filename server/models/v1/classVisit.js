const mongoose = require("mongoose");
const Teacher = require("../teacher");
const School = require("../school");

const classVisitSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Teacher,
      required: false,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: School,
      required: false,
    },
    observer: { type: String, required: false },
    subject_taught: { type: String, required: false },
    topic: { type: String, required: false },
    grade: { type: Number, required: false },
    term: { type: Number, required: false },
    school: { type: String, required: false },
    year: { type: Number, required: false },
    // section: { type: String, required: false },
    observation_duration: { type: String },
    visit_date: { type: Date, required: false, default: Date.now },

    number_of_pupil: { type: Number },
    profiling_A: { type: String },
    planning_A: { type: String },
    planning_B: { type: String },
    planning_C: { type: String },
    planning_D: { type: String },
    planning_E: { type: String },
    lesson_A: { type: String },
    lesson_B: { type: String },
    lesson_C: { type: String },
    lesson_D: { type: String },
    lesson_E: { type: String },
    lesson_F: { type: String },
    lesson_G: { type: String },
    managment_A: { type: String },
    managment_B: { type: String },
    managment_C: { type: String },
    assessment_A: { type: String },
    assessment_B: { type: String },
    assessment_C: { type: String },
    assessment_D: { type: String },
    assessment_E: { type: String },
    assessment_F: { type: String },
    assessment_G: { type: String },
    feedback_A: { type: String },
    feedback_B: { type: String },
    personality_A: { type: String },
    personality_B: { type: String },
    personality_C: { type: String },
    post_lesson_observation: { type: String },
    signature_of_observer: { type: String },
    signature_of_teacher: { type: String },
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

const ClassVisitModel = mongoose.model("classVisit", classVisitSchema);
module.exports = ClassVisitModel;
