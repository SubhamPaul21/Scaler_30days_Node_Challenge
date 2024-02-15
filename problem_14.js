const express = require('express');
const app = express();
const cache = require('memory-cache')

// Create cache map for storing request-response as key-value pairs
const cacheMap = {};

app.get('/', cachingMiddlewareWithPackage, (req, res) => {
    res.send(`<h2>Welcome to the Caching Middleware Implementation.</h2><br><br> <h4>The current time is <b>${new Date().toLocaleString()}</b>, which is cached for 20 seconds. After 20 seconds, you will see the updated time!</h4>`)
})

app.get('/random', customCachingMiddleware, (req, res) => {
    res.send(`Random Number: ${Math.floor(Math.random() * 10)}`)
})

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cachingMiddlewareWithPackage(req, res, next) {
    // Your implementation here
    const durationInSeconds = 20;
    const key = '__express__' + req.originalUrl || req.url;
    const cachedBody = cache.get(key);

    if (cachedBody) {
        return res.send(cachedBody);
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            cache.put(key, body, durationInSeconds * 1000);
            res.sendResponse(body);
        }

        next();
    }
}

function customCachingMiddleware(req, res, next) {
    const durationInSeconds = 5;
    const key = '__express__' + req.originalUrl || req.url;
    const cachedKey = cacheMap[key];

    if (cachedKey && new Date(Date.now()).valueOf() <= cachedKey["duration"]) {
        return res.send(cachedKey["body"]);
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            cacheMap[key] = {
                "body": body,
                "duration": new Date(Date.now()).getTime() + (durationInSeconds * 1000),
            }

            res.sendResponse(body);
        }

        next();
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