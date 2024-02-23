const mongoose = require('mongoose');

// Initialize Category Schema with Validation
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category Name is required"],
    },
    type: {
        type: String,
        required: [true, "Category Type is required"],
    },
})

// Initialize Product Model
const Category = mongoose.model('Category', categorySchema);

exports.Category = Category;