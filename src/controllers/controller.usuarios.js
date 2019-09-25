import { pool2 } from '../database/database';
import { createLog, createLogerr } from '../resources/logs'

// Librería para encriptar peticiones
// En la encriptación de tipos INTEGER O DOUBLE PRECISION se hace conversión a string y se encripta
const aes256 = require('aes256');
var key = "92AE31A79FEEB2A3";
const encrypt = false;

/* BASE USUARIOS*/
export function postsp_cinterfaz98_AgregarTarjeta(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_usuario, numero_tarjeta, fecha_vigencia, ccv} = request.body;
    valoresEntrada.id_usuario = id_usuario;
    valoresEntrada.numero_tarjeta = numero_tarjeta;
    valoresEntrada.fecha_vigencia= fecha_vigencia;
    valoresEntrada.ccv =ccv;

    // Query
    var query = "select interfaz98AgregarTarjeta('"+id_usuario+"',"+numero_tarjeta+",'"+fecha_vigencia+"',"+ccv+")";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool2.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            /*element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;*/
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_operadores");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_operadores");
                if (error == "Contraseña incorrecta") {
                    response.status(404).json({ msg: '005, “Usuario y/o contraseña inválidos”' });
                } else {
                    response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
                }
            }
        }
    )
}

/*BASE USUARIOS */
export function postsp_cinterfaz98_UpdateDeleteTarjeta(request, response){

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_usuario, numero_tarjeta, fecha_vigencia, ccv, last4_digit, action} = request.body;
    valoresEntrada.id_usuario = id_usuario;
    valoresEntrada.numero_tarjeta = numero_tarjeta;
    valoresEntrada.fecha_vigencia= fecha_vigencia;
    valoresEntrada.ccv =ccv;
    valoresEntrada.last4_digit =last4_digit;
    valoresEntrada.action=action;//Action 0 update, Action 1 delete

    // Query
    var query = "select interfaz106ActualizaTarjeta("+id_usuario+","+numero_tarjeta+",'"+fecha_vigencia+"',"+ccv+",'"+last4_digit+"',"+action+")";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool2.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            /*element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;*/
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_operadores");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_operadores");
                if (error == "Contraseña incorrecta") {
                    response.status(404).json({ msg: '005, “Usuario y/o contraseña inválidos”' });
                } else {
                    response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
                }
            }
        }
    )
}

/*BASE USUARIOS */
export function postsp_cinterfaz105_MetodoPagoVerTarjetas(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_usuario} = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz105MetodoPago("+id_usuario+")";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool2.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            /*element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;*/
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_operadores");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_operadores");
                if (error == "Contraseña incorrecta") {
                    response.status(404).json({ msg: '005, “Usuario y/o contraseña inválidos”' });
                } else {
                    response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
                }
            }
        }
    )
}

/*BASE USUARIO */
export function postsp_cinterfaz108_109Usuarios(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_usuario} = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz108_109Usuario("+id_usuario+")";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            /*element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;*/
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_operadores");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_operadores");
                if (error == "Contraseña incorrecta") {
                    response.status(404).json({ msg: '005, “Usuario y/o contraseña inválidos”' });
                } else {
                    response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
                }
            }
        }
    )
}