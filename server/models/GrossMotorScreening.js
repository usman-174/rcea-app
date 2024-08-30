const mongoose = require('mongoose')
const Pupil = require('./pupil')
const schema = mongoose.Schema

const userSchema = new schema(
  {
    pupil_id: {
      type: mongoose.Types.ObjectId,
      ref: Pupil,
    },

    balance_left: {
      type: String,
      required: false,
    },
    balance_right: {
      type: String,
      required: false,
    },
    bilateral: {
      type: String,
      required: false,
    },
    upper: {
      type: String,
      required: false,
    },
    remarks: {
      type: String,
      required: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const GrossMotorScreening = mongoose.model('GrossMotorScreening', userSchema)
module.exports = GrossMotorScreening
