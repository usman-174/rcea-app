const mongoose = require("mongoose");
const Pupil = require("./pupil");

const Past = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  language: String,

  levelD1: String,
  levelD2: String,
  levelE2: String,
  levelE3: String,
  levelF: String,
  levelG: String,
  levelH: String,
  levelI: String,
  levelJ: String,
  levelK: String,
  levelL: String,
  levelM: String,
});

const PastModel = mongoose.model("past", Past);

module.exports = PastModel;
