const { rateLimit } = require('express-rate-limit');

// Rate limit middleware
const rateLimitMiddleware = rateLimit({
    windowMs: 60 * 1000, // 1 minute limit
    max: 5, // 5 requests per window, here 1 minute
    message: "You have exceeded your 5 requests per minute limit.", // optional messages to be displayed
    headers: true, // add crucial HTTP headers to responses
});

module.exports = rateLimitMiddleware;