const express = require('express');
const app = express();

app.get('/', loggingMiddleware, (req, res) => {
    res.send("<b>Welcome to the Logging Middleware Implementation Tutorial</b>")
})

/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
    // Your implementation here
    console.log(`Logger: {"Time": "${new Date(Date.now()).toLocaleString()}", "Method": "${req.method}", "URL": "${req.originalUrl}", "Headers": "`, req.headers, `", "Body": "${req.body}"}`);
    next();

}

const port = 3000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Listening at http://127.0.0.1:${port}`);
    }
})