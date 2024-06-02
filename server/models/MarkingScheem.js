const mongoose = require('mongoose');


const markingSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: false,
  },
  grade: {
    type: String,
    required: false,
  },
  student_section: {
    type: String,
    required: false,
  },
  rows: [{
    itemNumber: {
      type: String,
      required: true,
    },
    questionNumber: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    subTopic: {
      type: String,
      required: true,
    },
    numberOfMarks: {
      type: String,

      required: true,
    },
  }],
});
const MarkingScheema = mongoose.model('MarkingScheema', markingSchema)
module.exports = MarkingScheema
