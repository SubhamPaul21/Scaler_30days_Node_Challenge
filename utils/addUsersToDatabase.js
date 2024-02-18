const { connectToMongoDB } = require('./connectToMongoDB');
const { User } = require('../models/user.model');

/**
 * Adds a new user to the MongoDB database
 * @param {Object} user - User object with properties username and email
 */
async function addUserToDatabase(user) {
    // Your implementation here
    try {
        const isConnectedToDatabase = await connectToMongoDB();

        if (isConnectedToDatabase) {
            const newUser = new User(user);
            await newUser.save();
            console.log("User Added to Database");
        } else {
            console.log("Could not add User to Database because of some error!");
        }
    } catch (error) {
        console.log(error);
    }
}

const user = {
    name: "Jenny",
    email: "test.jenny@gmail.com",
}

exports.addUserToDatabase = addUserToDatabase;