const mongoose = require("mongoose");
const Pupil = require("./pupil");

const reallyGreatReading = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  language: String,
  items1_3: String,
  items4_5: String,
  items6_7: String,
  items8_10: String,
  items11_13: String,
  items14_16: String,
  items17_24: String,
  items25_27: String,
  items28_32: String,
  items33_45: String,
  items46_50: String,
});

const reallyGreatReadingModel = mongoose.model(
  "reallyGreatReading",
  reallyGreatReading
);

module.exports = reallyGreatReadingModel;
