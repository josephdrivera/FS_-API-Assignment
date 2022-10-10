const axios = require('axios');

const boredService = async () => {
    console.log('Bored Service');
    return axios.get(`${process.env.boredURL}`).then(result => result.data)
};

const boredServiceByType = async (type) => {
    console.log('Bored By Type Service');
    return axios.get(`${process.env.boredURLtype}${type}`).then(result => result.data)
};

module.exports = {
    boredService,
    boredServiceByType
}