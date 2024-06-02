const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const SpeechAndLanguage = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  data: [
    {
      targetWord: { type: String, required: false },
      sound: { type: String, required: false },
      position: {
        type: String,
        required: false,
        enum: ["Initial", "Medial", "Final"],
        default: "Initial",
      },
      difficulty: {
        type: String,
        required: false,
        enum: ["Word Level", "Sentence Level", "hard"],
        default: "Word Level",
      },
      pronounced: { type: String },
    },
  ],
  subject: { type: String, required: false },

  term: { type: Number, required: false },
  date: { type: Date, required: false, default: Date.now },
});

const SpeechAndLanguageModel = mongoose.model(
  "speechandlanguage",
  SpeechAndLanguage
);

module.exports = SpeechAndLanguageModel;
