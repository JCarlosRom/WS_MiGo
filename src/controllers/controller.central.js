import { pool } from '../database/database';
import { createLog, createLogerr } from '../resources/logs'

// Librería para encriptar peticiones
// En la encriptación de tipos INTEGER O DOUBLE PRECISION se hace conversión a string y se encripta
const aes256 = require('aes256');
var key = "92AE31A79FEEB2A3";
const encrypt = false;

export function postsp_CInterfaz36_notificaciones(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_chofer} = request.body;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select sp_cinterfaz36_notificaciones('"+id_chofer+"')";
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
                    response.status(404).json({ msg: "015, “ERROR DE COMPATIBILIDAD DE DATOS REVISA-POST O CONSULTA CON EL DBA”" });
                }
            }
        }
    )
}

/*BASE CENTRAL */
export function postsp_cinterfaz101_CalificacionConductorPasajero(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_servicio, calificacion, comentario_conductor} = request.body;
    valoresEntrada.id_servicio = id_servicio;
    valoresEntrada.calificacion = calificacion;
    valoresEntrada.comentario_conductor = comentario_conductor;

    // Query
    var query = "select interfaz101CalificacionConductor_Usuario("+id_servicio+","+calificacion+",'"+comentario_conductor+"')";
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

/*BASE CENTRAL */
export function postsp_cinterfaz104_VerCupones(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_usuario} = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz104MisCupones('"+id_usuario+"')";
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

/*BASE CENTRAL */
export function postsp_cinterfaz132_RegistroFacturacion (request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {
        id_usuario,
        rfc,
        razon_social,
        nombre_vialidad,
        colonia,
        numero_interior,
        numero_exterior,
        codigo_postal,
        municipio,
        localidad,
        entidad_federativa
    } = request.body;

    valoresEntrada.id_usuario = id_usuario;
    valoresEntrada.rfc = rfc;
    valoresEntrada.razon_social = razon_social;
    valoresEntrada.nombre_vialidad = nombre_vialidad;
    valoresEntrada.colonia = colonia;
    valoresEntrada.numero_interior = numero_interior;
    valoresEntrada.numero_exterior = numero_exterior;
    valoresEntrada.codigo_postal = codigo_postal;
    valoresEntrada.municipio = municipio;
    valoresEntrada.localidad = localidad;
    valoresEntrada.entidad_federativa = entidad_federativa;

    // Query
    var query = "select interfaz132Facturacion("+id_usuario+",'"+rfc+"','"+razon_social+"','"+nombre_vialidad+"','"+colonia+"','"+numero_interior+"','"+numero_exterior+"','"+codigo_postal+"','"+municipio+"','"+localidad+"','"+entidad_federativa+"')";
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

/*BASE CENTRAL */
export function postsp_cinterfaz195_CalificacionPasajeroConductor(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {
        id_servicio,
        calificacion,
        comentario_usuario,
        reconocimiento
    } = request.body;

    valoresEntrada.id_servicio = id_servicio;
    valoresEntrada.calificacion = calificacion;
    valoresEntrada.comentario_usuario = comentario_usuario;
    valoresEntrada.reconocimiento = reconocimiento;

    // Query
    var query = "select interfaz195CalificacionUsuario_Conductor("+id_servicio+","+calificacion+",'"+comentario_usuario+"',"+reconocimiento+")";
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

/*BASE CENTRAL */
export function postsp_cinterfaz204MostrarDestinosFavoritos(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_usuario} = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz204MostrarDestinosFavoritos('"+id_usuario+"')";
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

/*BASE CENTRAL */
export function postsp_cinterfaz207AgregarDestinosFavoritos(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {
        id_usuario,
        nombre_destino,
        direccion_destino,
        coordenadas
    } = request.body;

    valoresEntrada.id_usuario = id_usuario;
    valoresEntrada.nombre_destino = nombre_destino;
    valoresEntrada.direccion_destino = direccion_destino;
    valoresEntrada.coordenadas = coordenadas;

    // Query
    var query = "select interfaz207AgregarDestinosFavoritos('"+id_usuario+"','"+nombre_destino+"','"+direccion_destino+"','"+coordenadas+"')";
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

/*BASE CENTRAL */
export function postsp_cinterfaz111Usuarios(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {id_servicio} = request.body.id_servicio;
    valoresEntrada.id_servicio = id_servicio;

    // Query
    var query = "select interfaz111Usuario("+id_servicio+")";
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

export function postsp_cinterfaz164UsuarioCalculoPrecios(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const {distancia_km, tiempo_min} = request.body;
    valoresEntrada.distancia_km = distancia_km;
    valoresEntrada.tiempo_min = tiempo_min;

    // Query
    var query = "select interfaz164Usuarios("+distancia_km+","+tiempo_min+")";
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