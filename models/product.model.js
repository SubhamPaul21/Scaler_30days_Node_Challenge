const mongoose = require('mongoose');

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

// Initialize Product Model
const Product = mongoose.model('Product', productSchema);

exports.Product = Product;