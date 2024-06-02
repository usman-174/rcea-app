
const mongoose = require("mongoose");
const Teacher = require("./teacher");

const QafSchemeOfWork = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Teacher,
    required: true
  },
  // _id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  grade: {
    type: Number,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  scores: {
    type: [Number],
    required: true
  },
  term: {
    type: Number,
    required: true
  }
});
const QafSchemeOfWorkModel = mongoose.model("qafSchemeofWork", QafSchemeOfWork);

module.exports = QafSchemeOfWorkModel;
