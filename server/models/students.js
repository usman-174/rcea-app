const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    role: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true,suppressReservedKeysWarning: true }
);

const Students = mongoose.model("Students", userSchema);
module.exports = Students;