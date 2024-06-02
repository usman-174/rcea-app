const mongoose = require('mongoose')
const schema = mongoose.Schema

const schoolSchema = new schema(
  {
    name: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: false,
    }
  },
  { timestamps: true,suppressReservedKeysWarning: true }
)

const School = mongoose.model('School', schoolSchema)
module.exports = School

// 64931fc98742ad64f10dbc85
//64931ff1ba0b8d84804c54a1