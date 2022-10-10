const axios = require('axios');

const boredService = async () => {
    console.log("Bored");
    return axios.get(`${process.env.boredURL}`).then(result => result.data)
};

const boredServiceByType = (type) => {
    console.log(" Bored By Type");
    return axios.get(`${process.env.boredURLtype}${type}`).then(result => result.data)
};

module.exports = {
    boredService,
    boredServiceByType
}