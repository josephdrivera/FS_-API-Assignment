const axios = require('axios');
require('dotenv').config();

const randomJokeService = async () => {
    console.log('Random Joke Service  Service');
    return await axios.get(`${process.env.jokeURL}`);
};

const randomJokeServiceByid = async (id) => {
    console.log('Random Joke Service By ID Service');
    return await axios.get(`${process.env.jokeURL}${id}`);
};

module.exports = {
    randomJokeService,
    randomJokeServiceByid
}