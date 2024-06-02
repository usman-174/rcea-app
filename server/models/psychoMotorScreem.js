const mongoose = require("mongoose");
const Pupil = require("./pupil");

const physchoMotor = new mongoose.Schema({
  pupil_id: {
    type: mongoose.Types.ObjectId,
    ref: Pupil,
  },
  language: String,
  Skill: String,
  Tasks: String,
  SubTasks: String,
  notAcquired: String,
  inProgress: String,
  acquired: String,
});

const PhyschoMotorModel = mongoose.model("psychomotor", physchoMotor);

module.exports = PhyschoMotorModel;
