const mongoose = require('mongoose')
const Students = require('./students')
const schema = mongoose.Schema

const userSchema = new schema(
  {
    student_id: {
      type: mongoose.Types.ObjectId,
      ref: Students,
    },
    grade: {
      type: String,
      required: false,
    },
    section: {
      type: String,
      required: false,
    },
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const Enrollments = mongoose.model('Session_typeTable', userSchema)
module.exports = Enrollments
