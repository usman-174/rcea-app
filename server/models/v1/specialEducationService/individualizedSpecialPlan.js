const mongoose = require("mongoose");
const EducationServiceModel = require("./educaionService");

const individualizedSpecialPlan = new mongoose.Schema(
  {
    date_of_meeting: { type: Date, required: false },
    date_of_start_iep: { type: Date, required: false },
    date_of_end_iep: { type: Date, required: false },
    date_of_consent_iep: { type: Date, required: false },

    educationService_id: {
      type: mongoose.Types.ObjectId,
      ref: EducationServiceModel,
    },
    areasOfConcern: {
      type: String,
      required: false,
    },
    currentPerformance: {
      type: String,
      required: false,
    },
    annualGoal: {
      type: String,
      required: false,
    },
    progressMonitoring: {
      type: String,
      required: false,
    },
    frequencyOfReview: {
      type: String,
      required: false,
    },
    participationInMainstream: {
      type: String,
      required: false,
    },
    participationInAssessments: {
      type: String,
      required: false,
    },
    realtedService: {
      table: [
        {
          service: {
            type: String,
            required: false,
          },
          duration: {
            type: String,
            required: false,
          },
          frequency: {
            type: String,
            required: false,
          },
          place: {
            type: String,
            required: false,
          },
          provider: {
            type: String,
            required: false,
          },
        },
      ],
    },
    accomodation: {
      table: [
        {
          need: {
            type: String,
            required: false,
          },
          instructions: {
            type: String,
            required: false,
          },
          instruction_modification: {
            type: String,
            required: false,
          },
          assessment: {
            type: String,
            required: false,
          },
          assessment_modification: {
            type: String,
            required: false,
          },
        },
      ],
    },

    schemeOfWork: {
      subject: { type: String, required: false },
      grade: { type: String, required: false },
      prescribes_book: { type: String },
      number_of_period_per_week: { type: Number },
      scheme_data: [
        {
          week: { type: Number },
          THEME: { type: String },
          TOPICS: { type: String },
          PEDAGOGICAL_STRATEGIES: { type: String },
          EDUCATIONAL_RESOURCES: { type: String },
          ASSESSMENT_EVALUATION: { type: String },
          REMARKS: { type: String },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "individualizedSpecialPlan",
  individualizedSpecialPlan
);
