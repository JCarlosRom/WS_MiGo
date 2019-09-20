import { pool } from '../database/database';
import { createLog, createLogerr } from '../resources/logs'
// Librería para encriptar peticiones
// En la encriptación de tipos INTEGER O DOUBLE PRECISION se hace conversión a string y se encripta
var aes256 = require('aes256');
var key = "92AE31A79FEEB2A3";
const encrypt=0;

export function postsp_CInterfaz36_notificaciones(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_chofer } = request.body;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select sp_CInterfaz80_Balance('"+id_chofer+"')";
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
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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

export function postsp_CInterfaz75_MiBilletera(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz75_MiBilletera('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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


export function postsp_CInterfaz78_2_Ganancias (request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz78_2_Ganancias('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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

export function postsp_CInterfaz78_Ganancias(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz78_Ganacias('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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

export function postsp_CInterfaz79_Balance(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz79_Balance('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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

export function postsp_CInterfaz79_2_Balance(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz79_2_Balance('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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


export function postsp_CInterfaz80_Balance(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz80_Balance('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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

export function postsp_CInterfaz80_2_Balance(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_CInterfaz80_2_Balance('"+id_chofer+"')";
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
                            element.msg = aes256.encrypt(key, element.msg);
                            resultado.msg = element.msg;
                            delete element.msg;
                            delete element.pass;
                            element.id_operador != null ? element.id_operador = aes256.encrypt(key, element.id_operador.toString()) : element.id_operador = element.id_operador;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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

export function postsp_cinterfaz81_verViajes (request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const id_chofer = request.body.id_chofer;
    valoresEntrada.id_chofer = id_chofer;

    // Query
    var query = "select * from  sp_cinterfaz81_verViajes('"+id_chofer+"')";
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
                            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
                            element.out_id_serv != null ? element.out_id_serv = aes256.encrypt(key, element.out_id_serv.toString()) : element.out_id_serv = element.out_id_serv;
                            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
                            element.out_origen != null ? element.out_origen = aes256.encrypt(key, element.out_origen.toString()) : element.out_origen = element.out_origen;
                            element.out_destino != null ? element.out_destino = aes256.encrypt(key, element.out_destino.toString()) : element.out_destino = element.out_destino;
                            element.out_estado_viaje != null ? element.out_estado_viaje = aes256.encrypt(key, element.out_estado_viaje.toString()) : element.out_fecha = element.out_estado_viaje;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_operadores");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        //resultado.msg = element.msg;
                        //delete element.msg;
                        //delete element.pass;
                    });
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