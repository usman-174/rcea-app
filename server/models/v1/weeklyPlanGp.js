const mongoose = require("mongoose");
const Teacher = require("../teacher");
const School = require("../school");

const WeeklyPlanSchema = new mongoose.Schema(
  {
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Teacher,
      required: false,
    },
    term: {
      type: Number,
      required: false,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: School,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
    // subject: {
    //   type: String,
    //   required: false
    // },
    // grade: {
    //   type: String,
    //   required: false
    // },
    // section: {
    //   type: String,
    //   required: false
    // },
    week_no: {
      type: Number,
      required: false,
    },
    specialization: String,
    day: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      required: false,
    },
    planData: [
      {
        period_no: {
          type: Number,
          required: false,
        },
        SUBJECTS: String,
        TOPICS_SUBTOPICS: String,
        CLASSWORK_HOMEWORK: String,
        REMARKS: String,
      },
    ],
    date: Date,
    educatorSignature: String,
    DHMName: String,
    DHMSignature: String,
    HMName: String,
    HMSignature: String,
  },
  {
    timestamps: true,
    suppressReservedKeysWarning: true,
  }
);

const WeeklyPlanGPModel = mongoose.model("WeeklyPlan", WeeklyPlanSchema);

module.exports = WeeklyPlanGPModel;
