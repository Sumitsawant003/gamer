const mongoose = require('mongoose')
const { Schema } = mongoose;

const AchievementSchema = new Schema({
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

const Achievement = mongoose.model('achievement', AchievementSchema);
Achievement.createIndexes();
module.exports = Achievement;