const mongoose = require("mongoose");
const Teacher = require("./teacher");

  const qafClassVisit = new mongoose.Schema({
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
    value: String,
    date: String,
  });
  
const QafClassVisitModel = mongoose.model("qafClassVisit", qafClassVisit);

module.exports = QafClassVisitModel;
