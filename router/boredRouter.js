const express = require('express');
const boredRouter = express.Router();
const { boredService, boredServiceByType } = require('../Services/randomBored');
const app = express();

app.get("/", (req, res) => {
    boredService()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(50).json({
            error: {
                message: err.message,
                status: err.status,
                method: err.method
            }
        }));
});


app.get("activity/:type", (req, res) => {
    const type = req.params.type;
    boredServiceByType(type)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({
            error: {
                message: err.message,
                status: err.status,
                method: err.method
            }
        }));
});

module.exports = boredRouter
