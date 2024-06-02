const mongoose = require('mongoose')
const Pupil = require('./pupil')
const schema = mongoose.Schema

const userSchema = new schema(
  {
    pupil_id: {
      type: mongoose.Types.ObjectId,
      ref: Pupil,
    },

    verticalT: {
      type: String,
      required: false,
    },

    verticalC: {
      type: String,
      required: false,
    },

    horizontalT: {
      type: String,
      required: false,
    },

    horizontalC: {
      type: String,
      required: false,
    },
    circleT: {
      type: String,
      required: false,
    },
    circleC: {
      type: String,
      required: false,
    },
    plusT: {
      type: String,
      required: false,
    },
    plusC: {
      type: String,
      required: false,
    },
    rectangleT: {
      type: String,
      required: false,
    },
    rectangleC: {
      type: String,
      required: false,
    },
    forwardSlashT: {
      type: String,
      required: false,
    },
    forwardSlashC: {
      type: String,
      required: false,
    },
    backSlashT: {
      type: String,
      required: false,
    },
    backSlashC: {
      type: String,
      required: false,
    },
    crossT: {
      type: String,
      required: false,
    },
    crossC: {
      type: String,
      required: false,
    },
    triangleT: {
      type: String,
      required: false,
    },
    triangleC: {
      type: String,
      required: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const FineMotorScreening = mongoose.model('FineMotorScreening', userSchema)
module.exports = FineMotorScreening
