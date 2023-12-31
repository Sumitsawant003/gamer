const mongoose = require('mongoose')
const { Schema } = mongoose;

const EventSchema = new Schema({
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

const Event = mongoose.model('event', EventSchema);
Event.createIndexes();
module.exports = Event;