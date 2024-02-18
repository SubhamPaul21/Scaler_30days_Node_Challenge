const mongoose = require('mongoose');

// Initialize User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
})

// Initialize User Model
const User = mongoose.model('User', userSchema);

exports.User = User;