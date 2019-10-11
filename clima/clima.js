const axios = require('axios');


const API_KEY = 'fa13bf0bb17417bb7cc0a8e5128b69ef';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const METRIC = 'metric';

const getClima = async(lat, lng) => {
    const URL = `${BASE_URL}&lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${METRIC}`;
    const resp = await axios.get(URL);

    return resp.data.main;
}


module.exports = {
    getClima,
}