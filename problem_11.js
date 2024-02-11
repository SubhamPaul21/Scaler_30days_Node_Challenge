const express = require('express');
const app = express();
const { generateAccessToken, verifyAccessToken } = require('./utils/accessTokens')

app.use(express.json());

app.get('/', (req, res) => {
    // req.headers.authorization
    res.send("Welcome to JSON Web Token authorization")
})

// Just for testing, follow the login page approach
app.post('/generateAccessToken', (req, res) => {
    const user = req.body;
    console.log(user);
    res.send(generateAccessToken(user));
})

app.get('/:anyPath', authenticationMiddleware, (req, res) => {
    res.json({ message: `Welcome to the ${req.params.anyPath} route!`, user: req.user });
})

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
    // Your implementation here
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    // Token Not Found
    if (!token) {
        return res.sendStatus(401);
    }

    const result = verifyAccessToken(token);

    // Invalid Token
    if (!result.success) {
        return res.status(403).json({ error: result.error });
    }

    req.user = result.data;
    next();
}

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening at http:127.0.0.1:${port}`);
    }
})