const express = require('express');
const app = express();

// Express Middle wares
app.use(requestLoggerMiddleware);

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    console.log(`${new Date(Date.now()).toDateString()} - ${req.method} request received`);
    // pass the control to the next function
    next();
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening in http://127.0.0.1:${port}`);
})