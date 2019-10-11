const color = require('colors');

const argv = require('./config/yargs').argv;
// console.log(argv);

// instanciamos la funcion de lugar
const lugar = require('./lugar/lugar');

// instanciamos la funcion de clima
const clima = require('./clima/clima');


//argv.direccion
const getInfo = async(direc) => {

    try {
        const coords = await lugar.getLugarLatLng(direc);
        // console.log(coords)
        const temp = await clima.getClima(coords.lat, coords.lng);
        // console.log(temp)
        return `El clima de ${coords.direccion} es de ${temp.temp}º.`.bgBlue;

    } catch (e) {
        return ` No se ha podido tener informacion de ${direc} `.red;
    }

}

getInfo(argv.direccion)
    .then(resp => { console.log(resp) })
    .catch(console.log);