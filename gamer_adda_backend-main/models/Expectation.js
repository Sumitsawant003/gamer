const mongoose = require('mongoose')
const { Schema } = mongoose;

const ExpectationSchema = new Schema({
    userId: {
        type: String,
        require: true,
    },
    pdfUrl: {
        type: String,
        require: true,
    },
    summary: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Expectation = mongoose.model('expectation', ExpectationSchema);
Expectation.createIndexes();
module.exports = Expectation;