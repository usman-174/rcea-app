const mongoose = require("mongoose");
const EducationServiceModel = require("./educaionService");

const InnerOptionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  checked: {
    type: Boolean,
    required: false,
  },
});

const OptionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  checked: {
    type: Boolean,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  contentLabel: {
    type: String,
    required: false,
  },
  options2: [InnerOptionSchema],
});

const otherHealthImpairmentsSchema = new mongoose.Schema(
  {
    educationService_id: {
      type: mongoose.Types.ObjectId,
      ref: EducationServiceModel,
    },
    data: [
      {
        title: {
          type: String,
          required: false,
        },
        options: [OptionSchema],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "otherHealthImpairments",
  otherHealthImpairmentsSchema
);
