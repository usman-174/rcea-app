const mongoose = require("mongoose");

const EducationServiceModel = require("./educaionService");
const SpecialQafSchemeOfWork = new mongoose.Schema(
  {
    educationService_id: {
      type: mongoose.Types.ObjectId,
      ref: EducationServiceModel,
    },

    subject: { type: String, required: false },

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
  { timestamps: true, suppressReservedKeysWarning: true }
);
const SpecialQafSchemeOfWorkModel = mongoose.model(
  "Special-SchemeOfWork",
  SpecialQafSchemeOfWork
);

module.exports = SpecialQafSchemeOfWorkModel;
