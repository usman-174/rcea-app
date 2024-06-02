const mongoose = require("mongoose");
const Teacher = require("../teacher");
const School = require("../school");


const QafSchemeOfWork = new mongoose.Schema({
  // teacher: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: Teacher,
  //   required: false,
  // },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: School,
    required: false,
  },
  term: { type: Number, required: false },
  school: { type: String, required: false },
  year: { type: Number, required: false },
  subject: { type: String, required: false },
  grade: { type: Number, required: false },
  section: { type: String, required: false },
  prescribes_book: { type: String },
  number_of_period_per_week: { type: Number },
  scheme_data: [ 
    {
      week: { type: Number },
      THEME: { type: String },
      TOPICS: { type: String },
      PEDAGOGICAL_STRATEGIES: { type: String },
      EDUCATIONAL_RESOURCES: { type: String },
      ASSESSMENT_EVALUATION: { type: String },
      REMARKS: { type: String },
    },
  ],
},
{ timestamps: true,suppressReservedKeysWarning: true }
);
const QafSchemeOfWorkModel = mongoose.model("Qaf-SchemeOfWork", QafSchemeOfWork);

module.exports = QafSchemeOfWorkModel;
