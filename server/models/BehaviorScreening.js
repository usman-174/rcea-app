const mongoose = require('mongoose')
const Pupil = require('./pupil')
const schema = mongoose.Schema

const userSchema = new schema(
  {
    pupil_id: {
      type: mongoose.Types.ObjectId,
      ref: Pupil,
    },

    plays_well_with_peers: {
      type: String,
      required: false,
    },
    follows_directions: {
      type: String,
      required: false,
    },
    handles_emotions: {
      type: String,
      required: false,
    },
    self_confident: {
      type: String,
      required: false,
    },
    plays_well_with_peers: {
      type: String,
      required: false,
    },
    doesnt_talk: {
      type: String,
      required: false,
    },
    physically_aggressive: {
      type: String,
      required: false,
    },
    steals: {
      type: String,
      required: false,
    },
    dishonest: {
      type: String,
      required: false,
    },
    acts_on_anger: {
      type: String,
      required: false,
    },
    destroys_property: {
      type: String,
      required: false,
    },
    nervous: {
      type: String,
      required: false,
    },
    difficulty_concentrating: {
      type: String,
      required: false,
    },
    withdrawn: {
      type: String,
      required: false,
    },
    sad: {
      type: String,
      required: false,
    },
    worried: {
      type: String,
      required: false,
    },
    does_not_talk: {
      type: String,
      required: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const BehaviorScreening = mongoose.model('BehaviorScreening', userSchema)
module.exports = BehaviorScreening
