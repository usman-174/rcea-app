const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
   
    academic_year_name: {
        type: String,
        required: false,
    },
    end_date: {
        type: String,
        required: true,
    }
    ,
    start_date: {
        type: String,
        required: true,
    }
}, { timestamps: true,suppressReservedKeysWarning: true }
);

const Academic_Year = mongoose.model("Academic_Year", userSchema);
module.exports = Academic_Year;


