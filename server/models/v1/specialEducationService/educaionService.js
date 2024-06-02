const mongoose = require("mongoose");
const Pupil = require("../../pupil");

const EducationService = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },

  date_of_referral: { type: Date, required: false },
  date_of_consent_evalutaion: { type: Date, required: false },
  date_of_eligibility: { type: Date, required: false },
  date_of_consent_iep: { type: Date, required: false },
});

const EducationServiceModel = mongoose.model("educationService", EducationService);

module.exports = EducationServiceModel;
