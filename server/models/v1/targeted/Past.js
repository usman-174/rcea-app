const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const PastSchema = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  data: [
    {
      skill: {
        type: String,
        default: "Deletion-Basic Syllable",
      },
      item: {
        type: String,
        default: "level D",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Deletion-Basic Syllable",
      },
      item: {
        type: String,
        default: "level E2",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Deletion-Onset & Rimes",
      },
      item: {
        type: String,
        default: "level F",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Substitution-Onset & Rimes",
      },
      item: {
        type: String,
        default: "level G",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Deletion-Blends (1st consonant)",
      },

      item: {
        type: String,
        default: "level H1",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Substitution-Blends (1st consonant)",
      },

      item: {
        type: String,
        default: "level H2",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
   
    {
      skill: {
        type: String,
        default: "Deletion-final phoneme",
      },

      item: {
        type: String,
        default: "level I",
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    {
      skill: {
        type: String,
        default: "Substitution-Vowel sound",
      },

      item: {
        type: String,
        default: "level J",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Deletion-Blend (2nd consonant)",
      },

      item: {
        type: String,
        default: "level K1",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Substitution-Blend (2nd consonant)",
      },

      item: {
        type: String,
        default: "level K2",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Substitution-final sound",
      },

      item: {
        type: String,
        default: "level L",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "eletion-n blend",
      },

      item: {
        type: String,
        default: "level M1",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Substitution-final blend",
      },

      item: {
        type: String,
        default: "level M2",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
  ],
  subject: { type: String, required: false },

  term: { type: Number, required: false },
  date: { type: Date, required: false, default: Date.now },
});

const PastModel = mongoose.model("past", PastSchema);

module.exports = PastModel;
