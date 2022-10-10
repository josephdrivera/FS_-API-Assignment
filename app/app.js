const express = require('express');
const boredRouter = require('../router/boredRouter');


const app = express();

// localhost:3001/bored
app.get('/', (req, res) => {
    res.status(200).json({ message: 'bored Server is running  ' });
});

//routes middleware
app.use('/activity', boredRouter);

// add middleware
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    });
});

module.exports = app;
