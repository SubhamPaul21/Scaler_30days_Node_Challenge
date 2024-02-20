const mongoose = require('mongoose');

// Initialize User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
    },
    email: {
        type: String,
        required: true,
    },
})

// Initialize User Schema with Validation
const userSchema_validated = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Email is required"],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (email) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
            },
            message: input => `${input.value} is not a valid email address!`
        }
    }
})

// Initialize User Schema with Age
const userWithAgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Name is required"],
    },
    age: {
        type: Number,
        required: [true, "User Age is required"],
    },
})

// Initialize User Model
// const User = mongoose.model('User', userSchema);
// const User_Validated = mongoose.model('User', userSchema_validated);
const UserWithAge = mongoose.model('User', userWithAgeSchema);

// exports.User = User;
// exports.User_Validated = User_Validated;
exports.UserWithAge = UserWithAge;