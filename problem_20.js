const express = require('express');
const app = express();

const { connectToMongoDB } = require('./utils/connectToMongoDB')
const { UserWithAge } = require('./models/user.model');

app.get('/', (req, res) => {
    res.send("Welcome to the MongoDB Aggregation practice. Go to /average-age route to fetch the average age of all users in the database.");
})

app.get('/average-age', (req, res) => {
    averageAgeOfUsers(req, res);
})

/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function averageAgeOfUsers(req, res) {
    // Your implementation here
    try {
        const isConnectedToDatabase = await connectToMongoDB();
        if (isConnectedToDatabase) {
            const users = await UserWithAge.find({}).select("name age -_id");
            const userCount = users.length;
            const userAge_Sum = users.map(user => user.age).reduce((prev, current) => prev + current, 0)
            return res.status(200).send(`${users}</b><br><br><br><br>The average age of all users in the database is <b>${userAge_Sum / userCount}`);
        } else {
            return res.status(404).send("Could not connect to the Database to fetch User's Age!");
        }
    } catch (error) {
        console.log(error);
        return res.status(404).send("Error encountered while trying to fetch Users!");
    }
}

const port = 3000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Listening at http://127.0.0.1:${port}`);
    }
})