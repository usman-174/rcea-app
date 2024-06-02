const mongoose = require("mongoose");
const EducationServiceModel = require("./educaionService");

const specificLearningDisabilitySchema = new mongoose.Schema(
  {
    educationService_id: {
      type: mongoose.Types.ObjectId,
      ref: EducationServiceModel,
    },
    table1: [
      {
        title: {
          type: String,
          required: false,
        },
        check1: {
          type: Boolean,
          required: false,
        },
        check2: {
          type: Boolean,
          required: false,
        },
        check3: {
          type: Boolean,
          required: false,
        },
        check4: {
          type: Boolean,
          required: false,
        },
      },
    ],
    table2: [
      {
        title: {
          type: String,
          required: false,
        },
        title2: {
          type: String,
          required: false,
        },
        check2: {
          type: Boolean,
          required: false,
        },
        check1: {
          type: Boolean,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "specificLearningDisability",
  specificLearningDisabilitySchema
);
