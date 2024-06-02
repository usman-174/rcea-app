const mongoose = require('mongoose');
const Pupil = require('./pupil');

const { Schema } = mongoose;

const communicationScreeningSchema = new Schema(
  {
    pupil_id: {
      type: Schema.Types.ObjectId,
      ref: Pupil,
    },
    stuttering: {
      type: Boolean,
      default: false,
    },
    articulation_difficulties: {
      type: Boolean,
      default: false,
    },
    voice_problems: {
      type: Boolean,
      default: false,
    },
    often_says_huh: {
      type: Boolean,
      default: false,
    },
    needs_frequent_repetitions: {
      type: Boolean,
      default: false,
    },
    can_only_follow_one_step_direction: {
      type: Boolean,
      default: false,
    },
    cant_follow_conversations: {
      type: Boolean,
      default: false,
    },
    does_not_respond_when_spoken_to: {
      type: Boolean,
      default: false,
    },
    struggles_with_vocabulary: {
      type: Boolean,
      default: false,
    },
    cant_put_words_together: {
      type: Boolean,
      default: false,
    },
    poor_expression: {
      type: Boolean,
      default: false,
    },
    tone_does_not_match_words: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
);

const COM_SC_PORTL  = mongoose.model(
  'CommunicationScreeningPortals',
  communicationScreeningSchema
);

module.exports = COM_SC_PORTL;
