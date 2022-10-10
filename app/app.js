const express = require('express');
const randomJokeRouter = require('../router/randomJokeRouter');


const app = express();

// localhost:3001/randomJoke
app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Random Joke Server is running' });
});

//routes middleware
app.use('/random_joke', randomJokeRouter);

// add middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    });
});

module.exports = app;
