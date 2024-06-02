const mongoose = require("mongoose");
const Teacher = require("../teacher");
const School = require("../school");

const LessonPlanSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: School,
    required: false,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Teacher,
    required: false,
  },
  term: { type: Number, required: false },
  grade: { type: Number, required: false },
  section: { type: String, required: false },
  subject: { type: String, required: false },
  period: { type: Number, required: false },
  year : { type: Number, required: false },
  start_date: { type: Date, required: false },
  end_date: { type: Date, required: false },
  duration: { type: String, required: false },
  roll: { type: Number, required: false },
  theme: { type: String, required: false },
  topic: { type: String, required: false },
  targets: { type: String }, //if any
  strands: { type: String, required: false },
  outcomes: { type: String, required: false },
  students_prior_knowledge: { type: String, required: false },
  teaching_strategies: { type: String, required: false },
  teaching_aid_and_resources: {
    general_resources_including_manipulatives: {
      type: String,
      required: false,
    },
    multisensory_strategies: { type: String, required: false },
  },
  classroom_setup: { type: String, required: false },
  behaviour_management_strategies: {
    reinforcement_strategy: { type: [String], required: false },
    examples_of_reinforcers: { type: [String], required: false },
    handling_disruptions: { type: [String], required: false },
    logical_consequences_for_simple_choice_strategies: {
      type: [String],
      required: false,
    },
  },
  engagement_activity: { type: String, required: false },
  expectations_for_learning: {
    expectations_for_listening_to_learn: { type: String, required: false },
    attention_signal: { type: String, required: false },
    conversation: { type: [String], required: false },
    help: { type: [String], required: false },
    activity: { type: [String], required: false },
    movement: { type: [String], required: false },
    participation: { type: [String], required: false },
    success: { type: [String], required: false },
  },
  procedures_GERERAL: { type: String, required: false },
  procedures_DIFFERENTIATION: { type: String, required: false },
  lesson_summarization: { type: String, required: false },
  evaluation: {
    type: [String],
  },
  classwork_to_be_completed: {
    general: { type: String, required: false },
    differentiated_activities: { type: String, required: false },
  },
  homework: { type: String }, //if any
  pupils_requiring_support: {
    targeted_support: { type: String, required: false },
    individualized_support: { type: String, required: false },
  },
});

const LessonPlanModel = mongoose.model("LessonPlan", LessonPlanSchema);
module.exports = LessonPlanModel;
