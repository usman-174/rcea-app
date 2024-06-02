const mongoose = require("mongoose");
const Pupil = require("./pupil");

const CorePhonics = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  aLnU: String,
  bLnL: String,
  cCs: String,
  dLvs: String,
  dSvs: String,
  eCvc: String,
  fBlends: String,
  gTeams: String,
  hRControlled: String,
  language: String,

  iLongVs: String,
  jVariant: String,
  kLowFreq: String,
  lMultiSyllabicWords: String,
});

const CorePhonicsModel = mongoose.model("corePhonic", CorePhonics);

module.exports = CorePhonicsModel;
