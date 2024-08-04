const mongoose = require("mongoose");
const schema = mongoose.Schema;
const School = require("./school");

const userSchema = new schema(
  {
    address: {
      type: String,
      required: false,
    },
    school: {
      type: schema.Types.ObjectId,
      ref: "School",
      required: false,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    hire_date: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    postingYear: {
      type: String,
      required: true,
    },
    qualifications: [
      {
        value: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
        __isNew__: {
          type: Boolean,
          default: false,
        },
      },
    ],
    grade: {
      type: String,
      required: true,
    },
    nationalID: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: false,
    },
    remarks: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, suppressReservedKeysWarning: true }
);

const Teacher = mongoose.model("TeachersUpdated", userSchema);
module.exports = Teacher;
