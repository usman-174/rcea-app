const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const ReallyGreatReadlingSchema = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  data: [
    {
      skill: {
        type: String,
        default: "Isolate First Sound",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Blend compound words",
      },
      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Blend onset-rimes",
      },
      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Blend phonemes",
      },
      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Segment Phonemes",
      },
      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Add Phonemes",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Letter sounds",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Decoding CVC-Isolation1",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Decoding CVC-Isolation2",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    {
      skill: {
        type: String,
        default: "Decoding CVC-Sentence",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "High Frequency words",
      },

      item: {
        type: String,
        default: "",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  subject: { type: String, required: false },
  period: { type: Number, required: false },
  term: { type: Number, required: false },
  date: { type: Date, required: false, default: Date.now },


});

const ReallyGreatReadingModel = mongoose.model(
  "reallyGreatReading",
  ReallyGreatReadlingSchema
);

module.exports = ReallyGreatReadingModel;
