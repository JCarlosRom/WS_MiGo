import { pool } from '../database/database';
import { createLog, createLogerr } from '../resources/logs'
import {
    getCentavos,
    getRangeDate
} from '../resources/DataValues'
// Librería para encriptar peticiones
// En la encriptación de tipos INTEGER O DOUBLE PRECISION se hace conversión a string y se encripta
var aes256 = require('aes256');
var key = "92AE31A79FEEB2A3";
const encrypt = false;

// interfaz 41 home fleet sin filtro
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */
export function post_interfaz41_fleet_home(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select * from interfaz41FleetHome3('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function (element) {
                /*const sp_split = element.interfaz41fleethome3.replace('\"', '').replace('(', '').replace(')', '').split(',');

                element.id_chofer = sp_split[0];
                element.nombre = sp_split[1].replace('\"', '');
                element.ganancia_semanal = getCentavos(sp_split[2]);
                element.ganancia_actual = getCentavos(sp_split[3]);
                element.numero_viajes_actual = sp_split[4];
                element.rango_fechas = getRangeDate(sp_split[5]);

                delete element.interfaz41fleethome3;*/

                element.id_chofer = element.id_chofer.toString();
                element.ganancia_semanal = getCentavos(element.ganancia_semanal);
                element.ganancia_actual = getCentavos(element.ganancia_actual);
                element.numero_viajes_actual = element.numero_viajes_actual.toString();
                element.rango_fechas = getRangeDate(element.rango_fechas);
            });
            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_chofer != null ? element.id_chofer = aes256.encrypt(key, element.id_chofer.toString()) : element.id_chofer = element.id_chofer;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre.toString()) : element.nombre = element.nombre;
                            element.ganancia_semanal != null ? element.ganancia_semanal = aes256.encrypt(key, element.ganancia_semanal.toString()) : element.ganancia_semanal = element.ganancia_semanal;
                            element.ganancia_actual != null ? element.ganancia_actual = aes256.encrypt(key, element.ganancia_actual.toString()) : element.ganancia_actual = element.ganancia_actual;
                            element.numero_viajes_actual != null ? element.numero_viajes_actual = aes256.encrypt(key, element.numero_viajes_actual.toString()) : element.numero_viajes_actual = element.numero_viajes_actual;
                            element.rango_fechas != null ? element.rango_fechas = aes256.encrypt(key, element.rango_fechas.toString()) : element.rango_fechas = element.rango_fechas;
                            element.encrypt = true;
                        });
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_inicio_fleet_1");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        element.encrypt = false;
                    });
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
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */
export function post_interfaz42_fleet_home(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario, fecha_filtro } = request.body;
    valoresEntrada.id_usuario = id_usuario;
    valoresEntrada.fecha_filtro = fecha_filtro;

    // Query
    var query = "select * from interfaz41FleetHome3_Filtro('"+id_usuario+"','"+fecha_filtro+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {
            results.rows.forEach(function (element) {
                element.id_chofer = element.id_chofer.toString();
                element.ganancia_semanal = getCentavos(element.ganancia_semanal);
                element.ganancia_actual = getCentavos(element.ganancia_actual);
                element.numero_viajes_actual = element.numero_viajes_actual.toString();
                element.rango_fechas != null ? element.rango_fechas = getRangeDate(element.rango_fechas) : element.rango_fechas = 'Sin registro';
            });

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.id_chofer != null ? element.id_chofer = aes256.encrypt(key, element.id_chofer.toString()) : element.id_chofer = element.id_chofer;
                            element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre.toString()) : element.nombre = element.nombre;
                            element.ganancia_semanal != null ? element.ganancia_semanal = aes256.encrypt(key, element.ganancia_semanal.toString()) : element.ganancia_semanal = element.ganancia_semanal;
                            element.ganancia_actual != null ? element.ganancia_actual = aes256.encrypt(key, element.ganancia_actual.toString()) : element.ganancia_actual = element.ganancia_actual;
                            element.numero_viajes_actual != null ? element.numero_viajes_actual = aes256.encrypt(key, element.numero_viajes_actual.toString()) : element.numero_viajes_actual = element.numero_viajes_actual;
                            element.rango_fechas != null ? element.rango_fechas = aes256.encrypt(key, element.rango_fechas.toString()) : element.rango_fechas = element.rango_fechas;
                            element.encrypt = true;
                        });
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_inicio_fleet_2_filtro");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        element.encrypt = false;
                    });
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
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */
export function post_interfaz121_tiempo_real(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select * from sp_cinterfaz121_FleetTiempo_real('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function (element) {
                element.out_total = getCentavos(element.out_total);
                element.out_efectivo = getCentavos(element.out_efectivo);
                element.out_tarjeta = getCentavos(element.out_tarjeta);
                element.out_comision = getCentavos(element.out_comision);
                element.out_ganancia_final = getCentavos(element.out_ganancia_final);
            });

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
                            element.out_efectivo != null ? element.out_efectivo = aes256.encrypt(key, element.out_efectivo.toString()) : element.out_efectivo = element.out_efectivo;
                            element.out_tarjeta != null ? element.out_tarjeta = aes256.encrypt(key, element.out_tarjeta.toString()) : element.out_tarjeta = element.out_tarjeta;
                            element.out_comision != null ? element.out_comision = aes256.encrypt(key, element.out_comision.toString()) : element.out_comision = element.out_comision;
                            element.out_ganancia_final != null ? element.out_ganancia_final = aes256.encrypt(key, element.out_ganancia_final.toString()) : element.out_ganancia_final = element.out_ganancia_final;
                            element.encrypt = true;
                        });
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_tiempo_real");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        element.encrypt = false;
                    });
                    resultado.datos = results.rows;
                    response.status(200).json(resultado);
                    // Creación de log
                    createLog(resultado, valoresEntrada, "ws_consultar_tiempo_real");
                }
            } catch (error) {
                createLogerr(error, valoresEntrada,"ws_consultar_tiempo_real");
                response.status(404).json({ msg: "015, “No se estableció conexión con la base de datos de monedero”" });
            }

        }

    )
}

//interfaz 124 socio conductor
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */
export function post_interfaz124_socio_conductor(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select * from sp_cinterfaz75_mibilletera('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {
            results.rows.forEach(function(element){
                element.tarjeta_gan = getCentavos(element.tarjeta_gan);
                element.efectivo_gan = getCentavos(element.efectivo_gan);
                element.externo_gan = getCentavos(element.externo_gan);
                element.total_gan = getCentavos(element.total_gan);
                element.total_gan_dia = getCentavos(element.total_gan_dia);
                element.cuota_plat_r = getCentavos(element.cuota_plat_r);
                element.cuota_socio_r = getCentavos(element.cuota_socio_r);
                element.rango_fechas = getRangeDate(element.rango_fechas);
                element.cant_servicios = element.cant_servicios.toString();
                element.ganancia_final = getCentavos(element.ganancia_final);
                element.out_adeudo_plataforma_efec = getCentavos(element.out_adeudo_plataforma_efec);
                element.out_adeudo_socio_efec = getCentavos(element.out_adeudo_socio_efec);
            });
            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.tarjeta_gan != null ? element.tarjeta_gan = aes256.encrypt(key, element.tarjeta_gan.toString()) : element.tarjeta_gan = element.tarjeta_gan;
                            element.efectivo_gan != null ? element.efectivo_gan = aes256.encrypt(key, element.efectivo_gan.toString()) : element.efectivo_gan = element.efectivo_gan;
                            element.externo_gan != null ? element.externo_gan = aes256.encrypt(key, element.externo_gan.toString()) : element.externo_gan = element.externo_gan;
                            element.total_gan != null ? element.total_gan = aes256.encrypt(key, element.total_gan.toString()) : element.total_gan = element.total_gan;
                            element.total_gan_dia != null ? element.total_gan_dia = aes256.encrypt(key, element.total_gan_dia.toString()) : element.total_gan_dia = element.total_gan_dia;
                            element.cuota_plat_r != null ? element.cuota_plat_r = aes256.encrypt(key, element.cuota_plat_r.toString()) : element.cuota_plat_r = element.cuota_plat_r;
                            element.cuota_socio_r != null ? element.cuota_socio_r = aes256.encrypt(key, element.cuota_socio_r.toString()) : element.cuota_socio_r = element.cuota_socio_r;
                            element.rango_fechas != null ? element.rango_fechas = aes256.encrypt(key, element.rango_fechas) : element.rango_fechas = element.rango_fechas;
                            element.cant_servicios != null ? element.cant_servicios = aes256.encrypt(key, element.cant_servicios.toString()) : element.cant_servicios = element.cant_servicios;
                            element.ganancia_final != null ? element.ganancia_final = aes256.encrypt(key, element.ganancia_final.toString()) : element.ganancia_final = element.ganancia_final;
                            element.out_adeudo_plataforma_efec != null ? element.out_adeudo_plataforma_efec = aes256.encrypt(key, element.out_adeudo_plataforma_efec.toString()) : element.out_adeudo_plataforma_efec = element.out_adeudo_plataforma_efec;
                            element.out_adeudo_socio_efec != null ? element.out_adeudo_socio_efec = aes256.encrypt(key, element.out_adeudo_socio_efec.toString()) : element.out_adeudo_socio_efec = element.out_adeudo_socio_efec;
                            element.encrypt = true;
                        });
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_socio_conductor");
                    }, 100);
                } else {
                    results.rows.forEach(function (element){
                        element.encrypt = false;
                    });
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

//interfaz 126 socio no conductor
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */
export function post_interfaz126_socio_no_conductor(request, response) {

    const valoresEntrada={};
    const resultado={};
    // Variables de entrada
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select * from interfaz126fleethome2('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function(element){
                element.ganancia_propietario = getCentavos(element.ganancia_propietario);
            });

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.info_vehiculo != null ? element.info_vehiculo = aes256.encrypt(key, element.info_vehiculo.toString()) : element.info_vehiculo = element.info_vehiculo;
                            element.ganancia_propietario != null ? element.ganancia_propietario = aes256.encrypt(key, element.ganancia_propietario.toString()) : element.ganancia_propietario = element.ganancia_propietario;
                            element.encrypt = true;
                        });
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_socio_no_conductor");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        element.encrypt = false;
                    });
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