const mongoose = require("mongoose");
const Pupil = require("./pupil");

const { Schema } = mongoose;

const communicationScreeningSchema = new Schema(
  {
    pupil_id: {
      type: Schema.Types.ObjectId,
      ref: Pupil,
    },
    stuttering: {
      type: String,
      default: false,
    },
    articulation_difficulties: {
      type: String,
      default: false,
    },
    voice_problems: {
      type: String,
      default: false,
    },
    often_says_huh: {
      type: String,
      default: false,
    },
    needs_frequent_repetitions: {
      type: String,
      default: false,
    },
    can_only_follow_one_step_direction: {
      type: String,
      default: false,
    },
    cant_follow_conversations: {
      type: String,
      default: false,
    },
    does_not_respond_when_spoken_to: {
      type: String,
      default: false,
    },
    struggles_with_vocabulary: {
      type: String,
      default: false,
    },
    cant_put_words_together: {
      type: String,
      default: false,
    },
    poor_expression: {
      type: String,
      default: false,
    },
    tone_does_not_match_words: {
      type: String,
      default: false,
    },
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

const COM_SC_PORTL = mongoose.model(
  "CommunicationScreeningPortals",
  communicationScreeningSchema
);

module.exports = COM_SC_PORTL;
