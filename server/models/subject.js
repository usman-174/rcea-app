const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    subject_name: {
        type: String,
        required: false
    },
    decription: {
        type: String,
        required: false,

    }
}, { timestamps: true,suppressReservedKeysWarning: true }
);

const Subjects = mongoose.model("Subjects", userSchema);
module.exports = Subjects

