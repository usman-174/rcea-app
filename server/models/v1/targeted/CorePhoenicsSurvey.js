const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const CorePhonics = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  data: [
    {
      skill: {
        type: String,
        default: "Letter Names Upper Case",
      },

      item: {
        type: String,
        default: "aLnU",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Letter Names Lower Case",
      },
      item: {
        type: String,
        default: "bLnL",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Consonant Sounds",
      },
      item: {
        type: String,
        default: "cCs",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Long Vowel Sounds",
      },
      item: {
        type: String,
        default: "dLvs",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Short Vowel Sounds",
      },
      item: {
        type: String,
        default: "dSvs",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Short Vowels in CVC words",
      },

      item: {
        type: String,
        default: "eCvc",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Consonant Blends with short vowels",
      },

      item: {
        type: String,
        default: "fBlends",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Short Vowels, digraphs, and -tch trigraph",
      },

      item: {
        type: String,
        default: "gTeams",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "R-controlled vowel teams",
      },

      item: {
        type: String,
        default: "hRControlled",
      },
      score: {
        type: Number,
        default: 0,
      },
    },

    {
      skill: {
        type: String,
        default: "Long vowel spellings",
      },

      item: {
        type: String,
        default: "iLongVs",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Variant spellings",
      },

      item: {
        type: String,
        default: "jVariant",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Low Frequency vowel and consonant spellings",
      },

      item: {
        type: String,
        default: "kLowFreq",
      },
      score: {
        type: Number,
        default: 0,
      },
    },
    {
      skill: {
        type: String,
        default: "Multi-syllabic words",
      },

      item: {
        type: String,
        default: "lMultiSyllabic",
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

const CorePhonicsModel = mongoose.model("corePhonic", CorePhonics);

module.exports = CorePhonicsModel;
