const mongoose = require('mongoose')
const Pupil = require('./pupil')
const schema = mongoose.Schema

const userSchema = new schema(
  {
    pupil_id: {
      type: mongoose.Types.ObjectId,
      ref: Pupil,
    },

    language: {
      type: String,
      required: false,
    },
    attempted: {
      type: String,
      required: false,
    },
    correct: {
      type: String,
      required: false,
    },
    errors: {
      type: String,
      required: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const nonsenseWordScreening = mongoose.model(
  'nonsenseWordScreening',
  userSchema
)
module.exports = nonsenseWordScreening
