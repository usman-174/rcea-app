const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const Qps = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  subject: { type: String, required: false },
  period: { type: Number, required: false },
  term: { type: Number, required: false },
  date: { type: Date, required: false, default: Date.now },

  letterSound1: String,
  data: [
    {
      skill: {
        type: String,
        default: "Letter Sound 1",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Letter Sound 2",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Letter Sound 3",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "CBC/Blends",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Magic e",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Bossy R",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Vowel Team",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Suffixes",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Syllable Division",
      },
      fluent: {
        type: String,
        default: "No",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const QpsModel = mongoose.model("qps", Qps);

module.exports = QpsModel;
