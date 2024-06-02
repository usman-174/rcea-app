const mongoose = require("mongoose");
const Teacher = require("./teacher");

const ScoreSchema = new mongoose.Schema({
  correct: {
    type: Number,
    required: true,
  },
  errors: {
    type: Number,
    required: true,
  },
});
const ProgressMonitoring = new mongoose.Schema({
  teacher_id: {
    type: mongoose.Types.ObjectId,
    ref: Teacher,
  },
  // _id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  grade: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  measure: {
    type: String,
    required: true,
  },
 
  year: {
    type: Number,
    required: true,
  },
  benchmarkDate: {
    type: String,
  },
  month: {
    type: String,
    required: true,
  },
  scores: {
    type: [ScoreSchema],
    required: true,
  },
  
});

const ProgressMonitoringModel = mongoose.model(
  "progressmonitoring",
  ProgressMonitoring
);

module.exports = ProgressMonitoringModel;
