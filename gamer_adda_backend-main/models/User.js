const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique:true
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    whois: {
        type: String,
        require: true
    },
    details: [],
    date: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model('users', UserSchema);
User.createIndexes();
module.exports = User;