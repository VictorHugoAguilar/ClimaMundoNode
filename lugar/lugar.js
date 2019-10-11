// instanciamos axios para hacer las consultas con promesas 
const axios = require("axios");

const getLugarLatLng = async(dir) => {

    // con esto tranformamos las cadenas a una cadena con valores especiales ejemplo
    /**
     * New York
     * => New%20York
     */
    const encodeURL = encodeURI(dir);
    // console.log(encodeURL)

    // creamos la configuracion para la llamada a la API
    const instance = axios.create({
        "baseURL": `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "06b6178818msh7ef5f0ac655002dp16fd90jsnbbde916a6d4b"
        }
    });

    // hacemos la llamada a la API, podemos obtener resultado positivo como negativo
    const respuesta = await instance.get();

    // comprobamos que exista registro
    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    // devolvemos los datos requeridos
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { direccion, lat, lng }

}

module.exports = {
    getLugarLatLng
}