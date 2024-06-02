const mongoose = require("mongoose");
const Pupil = require("./pupil");

const Qps = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  language: String,

  letterSound1: String,
  letterSound2: String,
  letterSound3: String,
  cvcBlends: String,
  cvcFluency: String,
  magicE: String,
  magicEFluency: String,
  bossyR: String,
  bossyRFluency: String,
  vowelTeams: String,
  vowelTeamsFluency: String,
  suffixes: String,
  suffixesFluency: String,
  syllableDivision: String,
  syllableFluency: String,
});

const QpsModel = mongoose.model("qps", Qps);

module.exports = QpsModel;
