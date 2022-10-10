const express = require('express');
const randomJokeRouter = express.Router();
const { randomJokeService, randomJokeServiceByid } = require('../Services/randomJokeService');
const app = express();

randomJokeRouter.get("/", (req, res, next) => {
    randomJokeService()
        .then(result => res.status(200).json(result.data))
        .catch(err => res.status(500).json({
            error: {
                message: err.message,
                status: err.status,
                method: err.method
            }
        }));
});


randomJokeRouter.get("/id:", (req, res, next) => {
    const id = req.params.id;
    randomJokeServiceByid(id)
        .then(result => res.status(200).json(result.data))
        .catch(err => res.status(500).json({
            error: {
                message: err.message,
                status: err.status,
                method: err.method
            }
        }));
});

module.exports = randomJokeRouter
