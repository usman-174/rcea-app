const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const PsychoMotorSchema = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  data: [
    {
      skill: {
        type: String,
        default: "Showing Body Parts",
      },
      level: {
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
        default: "Naming Body Parts",
      },
      level: {
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
        default: "Draw e-Person",
      },
      level: {
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
        default: "",
      },
      level: {
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
        default: "Space",
      },

      level: {
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
        default: "Time",
      },

      level: {
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
        default: "Rote counting",
      },

      level: {
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
        default: "Number recognition",
      },

      level: {
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
        default: "Number concept",
      },

      level: {
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
        default: "Pre-writing lines",
      },

      level: {
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
        default: "Pencil grip",
      },

      level: {
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
        default: "Beads",
      },

      level: {
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
        default: "Scissors",
      },

      level: {
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
        default: "Blocks",
      },

      level: {
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

  term: { type: Number, required: false },
  date: { type: Date, required: false, default: Date.now },
});

const PsychoMotorModel = mongoose.model("psychoMotor", PsychoMotorSchema);

module.exports = PsychoMotorModel;
