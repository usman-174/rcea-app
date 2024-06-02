const mongoose = require("mongoose");
const Pupil = require("./pupil");

const speechAndLanguage = new mongoose.Schema({
    pupil_id: {
      type: mongoose.Types.ObjectId,
      ref: Pupil,
    },
    language: String,

    slide: String,
    prompt: String,
    targetWord: String,
    initialS: String,
    initialR: String,
    medialS: String,
    medialR: String,
    medial2S: String,
    medial2R: String,
    finalS: String,
    finalR: String,
    vowelErrorNote: String,
  });
const SpeechAndLanguageModel = mongoose.model("speechandlanguage", speechAndLanguage);

module.exports = SpeechAndLanguageModel;
