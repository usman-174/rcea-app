const mongoose = require('mongoose');
const Pupil = require('./pupil')
const Schema = new mongoose.Schema({
 pupil_id: {
      type: mongoose.Types.ObjectId,
      ref: Pupil,
    },
  subject: {
    type: String
  },
  marks: mongoose.Schema.Types.Mixed
});
Schema.index({ pupil_id: 1, subject: 1 }, { unique: true });
const EOTScheema = mongoose.model('EOTScheema', Schema)
module.exports = EOTScheema
