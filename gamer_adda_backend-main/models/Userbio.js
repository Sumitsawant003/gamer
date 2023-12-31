const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserbioSchema = new Schema({
    userBio: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Userbio = mongoose.model('userbio', UserbioSchema);
Userbio.createIndexes();
module.exports = Userbio;