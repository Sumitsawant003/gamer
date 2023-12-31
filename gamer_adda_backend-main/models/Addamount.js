const mongoose = require('mongoose')
const { Schema } = mongoose;

const AddamountSchema = new Schema({
    amount: {
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

const Amount = mongoose.model('amount', AddamountSchema);
Amount.createIndexes();
module.exports = Amount;