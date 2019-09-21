import { pool } from '../database/database';
import { createLog, createLogerr } from '../resources/logs'
// Librería para encriptar peticiones
// En la encriptación de tipos INTEGER O DOUBLE PRECISION se hace conversión a string y se encripta
var aes256 = require('aes256');
var key = "92AE31A79FEEB2A3";
const encrypt=0;

//interfaz 41 home fleet
export function post_interfaz41_fleet_home(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz41fleethome('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt == 1) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
                            //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_inicio_fleet");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_inicio_fleet");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_inicio_fleet");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
            }

        }

    )
}

// interfaz 41 home fleet sin filtro
export function post_interfaz42_fleet_home(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz41FleetHome3('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt == 1) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
                            //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_inicio_fleet_1");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_inicio_fleet_1");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_inicio_fleet_1");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos”" });
            }

        }

    )
}

//interfaz 42 home fleet con filtro
export function post_interfaz42_fleet_home_filtro(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario, fecha_filtro } = request.body;
    valoresEntrada.id_usuario = id_usuario;
    valoresEntrada.fecha_filtro = fecha_filtro;

    // Query
    var query = "select interfaz41FleetHome3_Filtro('"+id_usuario+"','"+fecha_filtro+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt == 1) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
                            //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_inicio_fleet_2_filtro");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_inicio_fleet_2_filtro");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_inicio_fleet_2_filtro");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
            }

        }

    )
}

//interfaz 121 reporte tiempo real
export function post_interfaz121_tiempo_real(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select sp_cinterfaz121_FleetTiempo_real('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt == 1) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
                            //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_socio_conductor");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_socio_conductor");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_socio_conductor");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
            }

        }

    )
}

//interfaz 124 socio conductor
export function post_interfaz124_socio_conductor(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select sp_cinterfaz75_mibilletera('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt == 1) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
                            //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_socio_conductor");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_socio_conductor");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_socio_conductor");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
            }

        }

    )
}

//interfaz 126 socio conductor
export function post_interfaz126_socio_no_conductor(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz126fleethome2('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt == 1) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
                            //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_socio_no_conductor");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_socio_no_conductor");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_socio_no_conductor");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
            }

        }

    )
}


//Método para inicio fleet por semana