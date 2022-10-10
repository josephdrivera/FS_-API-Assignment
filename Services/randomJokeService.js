const axios = require('axios');

const randomJokeService = async () => {
    console.log('Random Joke Service  Service');
    return axios.get(`${process.env.jokeURL}`).then(result => result.data)
};

const randomJokeServiceByid = async (id) => {
    console.log('Random Joke Service By ID Service');
    return axios.get(`${process.env.jokeURL}${id}`).then(result => result.data)
};

module.exports = {
    randomJokeService,
    randomJokeServiceByid
}