const mongoose = require('mongoose');

const { Category } = require("./category.model");

// Initialize Product Schema with Validation
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is required"],
    },
    price: {
        type: Number,
        required: [true, "Product Price is required"],
        min: [1, "Price cannot be less than 1"]
    },
    quantity: {
        type: Number,
        required: [true, "Product Quantity is required"],
        min: [1, "Quantity cannot be less than 1"]
    },
})

// Initialize Product With Category Schema with Validation
const productWithCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product Name is required"],
    },
    price: {
        type: Number,
        required: [true, "Product Price is required"],
        min: [1, "Price cannot be less than 1"]
    },
    quantity: {
        type: Number,
        required: [true, "Product Quantity is required"],
        min: [1, "Quantity cannot be less than 1"]
    },
    // problem 23 code
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Product Category is required"],
    }
})

// Initialize Product Model
// const Product = mongoose.model('Product', productSchema);
const productWithCategory = mongoose.model('productWithCategory', productWithCategorySchema);

// exports.Product = Product;
exports.productWithCategory = productWithCategory;