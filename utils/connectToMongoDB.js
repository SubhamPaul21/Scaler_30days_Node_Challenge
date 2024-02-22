const mongoose = require('mongoose');

/**
 * Establishes a connection to MongoDB using Mongoose
 */
async function connectToMongoDB() {
    // Your implementation here
    try {
        mongoose.connection
            .on('error', (error) => {
                throw new Error(error);
            })
            .once('open', (error) => {
                if (error) {
                    throw new Error(error);
                }
                console.log("Connection is established and OPEN!");
            })
            .on('connecting', () => {
                console.log("Mongo DB Connecting! Please Wait...");
            })
            .on('connected', () => {
                console.log("Mongo DB Connected!");
            })
            .on('disconnected', () => {
                console.log("Mongo DB Disconnected!");
            })

        // await mongoose.connect('mongodb://127.0.0.1:27017/scalerDatabase');
        await mongoose.connect('mongodb://127.0.0.1:27017/userDatabase');
    } catch (error) {
        console.log(error);
        return false;
    }

    return true;
}

/**
 * Establishes a connection to Products MongoDB using Mongoose
 */
async function connectToProductDB() {
    // Your implementation here
    try {
        mongoose.connection
            .on('error', (error) => {
                throw new Error(error);
            })
            .once('open', (error) => {
                if (error) {
                    throw new Error(error);
                }
                console.log("Connection is established and OPEN!");
            })
            .on('connecting', () => {
                console.log("Mongo DB Connecting! Please Wait...");
            })
            .on('connected', () => {
                console.log("Mongo DB Connected!");
            })
            .on('disconnected', () => {
                console.log("Mongo DB Disconnected!");
            })

        // await mongoose.connect('mongodb://127.0.0.1:27017/scalerDatabase');
        await mongoose.connect('mongodb://127.0.0.1:27017/productDatabase');
    } catch (error) {
        console.log(error);
        return false;
    }

    return true;
}

exports.connectToMongoDB = connectToMongoDB;
exports.connectToProductDB = connectToProductDB;