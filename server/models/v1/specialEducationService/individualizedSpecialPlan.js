const mongoose = require("mongoose");
const EducationServiceModel = require("./educaionService");

const individualizedSpecialPlan = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "individualizedSpecialPlan",
  individualizedSpecialPlan
);
