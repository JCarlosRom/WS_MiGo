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

//interfaz 41 home fleet
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
    var query = "select interfaz41fleethome('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function(element){
                const sp_split = element.interfaz41fleethome.replace('\"', '').replace('(', '').replace(')', '').split(',');
                //element.out_id_tran = sp_split[0];
                element.out_nombre = sp_split[0].replace('\"', '');
                element.out_total_semanal = getCentavos(sp_split[1]);
                element.out_numero_viajes = sp_split[2];
                element.out_cuota_plat = getCentavos(sp_split[3]);
                element.out_cuota_socio = getCentavos(sp_split[4]);

                delete element.interfaz41fleethome;
            });

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.out_nombre != null ? element.out_nombre = aes256.encrypt(key, element.out_nombre.toString()) : element.out_nombre = element.out_nombre;
                            element.out_total_semanal != null ? element.out_total_semanal = aes256.encrypt(key, element.out_total_semanal.toString()) : element.out_total_semanal = element.out_total_semanal;
                            element.out_numero_viajes != null ? element.out_numero_viajes = aes256.encrypt(key, element.out_numero_viajes.toString()) : element.out_numero_viajes = element.out_numero_viajes;
                            element.out_cuota_plat != null ? element.out_cuota_plat = aes256.encrypt(key, element.out_cuota_plat.toString()) : element.out_cuota_plat = element.out_cuota_plat;
                            element.out_cuota_socio != null ? element.out_cuota_socio = aes256.encrypt(key, element.out_cuota_socio.toString()) : element.out_cuota_socio = element.out_cuota_socio;
                            element.encrypt = true;
                        })
                        resultado.data = results.rows;
                        response.status(200).json(resultado);
                        // Creación de log
                        createLog(resultado,valoresEntrada ,"ws_consultar_inicio_fleet");
                    }, 100);
                } else {
                    results.rows.forEach(function (element) {
                        element.encrypt = false;
                    })
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
    const { id_usuario } = request.body;
    valoresEntrada.id_usuario = id_usuario;

    // Query
    var query = "select interfaz41FleetHome3('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function (element) {
                const sp_split = element.interfaz41fleethome3.replace('\"', '').replace('(', '').replace(')', '').split(',');

                element.out_id_usuario = sp_split[0];
                element.out_nombre = sp_split[1].replace('\"', '');
                element.out_ganancia_semanal = getCentavos(sp_split[2]);
                element.out_ganancia_actual = getCentavos(sp_split[3]);
                element.out_numero_viajes = sp_split[4];
                element.out_rango_fechas = getRangeDate(sp_split[5]);

                delete element.interfaz41fleethome3;
            });
            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.out_id_usuario != null ? element.out_id_usuario = aes256.encrypt(key, element.out_id_usuario.toString()) : element.out_id_usuario = element.out_id_usuario;
                            element.out_nombre != null ? element.out_nombre = aes256.encrypt(key, element.out_nombre.toString()) : element.out_nombre = element.out_nombre;
                            element.out_ganancia_semanal != null ? element.out_ganancia_semanal = aes256.encrypt(key, element.out_ganancia_semanal.toString()) : element.out_ganancia_semanal = element.out_ganancia_semanal;
                            element.out_ganancia_actual != null ? element.out_ganancia_actual = aes256.encrypt(key, element.out_ganancia_actual.toString()) : element.out_ganancia_actual = element.out_ganancia_actual;
                            element.out_numero_viajes != null ? element.out_numero_viajes = aes256.encrypt(key, element.out_numero_viajes.toString()) : element.out_numero_viajes = element.out_numero_viajes;
                            element.out_rango_fechas != null ? element.out_rango_fechas = aes256.encrypt(key, element.out_rango_fechas.toString()) : element.out_rango_fechas = element.out_rango_fechas;
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

            /*results.rows.forEach(function (element) {
                const sp_split = element.interfaz41fleethome3_filtro.replace('\"', '').replace('(', '').replace(')', '').split(',');

                element.out_id_usuario = sp_split[0];
                element.out_nombre = sp_split[1].replace('\"', '');
                element.out_ganancia_semanal = getCentavos(sp_split[2]);
                element.out_ganancia_actual = getCentavos(sp_split[3]);
                element.out_numero_viajes = sp_split[4];
                element.out_rango_fechas = getRangeDate(sp_split[5]);

                delete element.interfaz41fleethome3_filtro;
            });*/

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            /*
                            element.out_id_usuario != null ? element.out_id_usuario = aes256.encrypt(key, element.out_id_usuario.toString()) : element.out_id_usuario = element.out_id_usuario;
                            element.out_nombre != null ? element.out_nombre = aes256.encrypt(key, element.out_nombre.toString()) : element.out_nombre = element.out_nombre;
                            element.out_ganancia_semanal != null ? element.out_ganancia_semanal = aes256.encrypt(key, element.out_ganancia_semanal.toString()) : element.out_ganancia_semanal = element.out_ganancia_semanal;
                            element.out_ganancia_actual != null ? element.out_ganancia_actual = aes256.encrypt(key, element.out_ganancia_actual.toString()) : element.out_ganancia_actual = element.out_ganancia_actual;
                            element.out_numero_viajes != null ? element.out_numero_viajes = aes256.encrypt(key, element.out_numero_viajes.toString()) : element.out_numero_viajes = element.out_numero_viajes;
                            element.out_rango_fechas != null ? element.out_rango_fechas = aes256.encrypt(key, element.out_rango_fechas.toString()) : element.out_rango_fechas = element.out_rango_fechas;
                            */
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
    var query = "select sp_cinterfaz121_FleetTiempo_real('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function (element) {
                const sp_split = element.sp_cinterfaz121_fleettiempo_real.replace('(', '').replace(')', '').split(',');

                element.out_total = getCentavos(sp_split[0]);
                element.out_efectivo = getCentavos(sp_split[1]);
                element.out_tarjeta = getCentavos(sp_split[2]);
                element.out_comision = getCentavos(sp_split[3]);
                element.out_ganancia_final = getCentavos(sp_split[4]);

                delete element.sp_cinterfaz121_fleettiempo_real;
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
    var query = "select sp_cinterfaz75_mibilletera('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {
            results.rows.forEach(function(element){
                const sp_split = element.sp_cinterfaz75_mibilletera.replace('(', '').replace(')', '').split(',');

                element.tarjeta_gan = getCentavos(sp_split[0]);
                element.efectivo_gan = getCentavos(sp_split[1]);
                element.externo_gan = getCentavos(sp_split[2]);
                element.total_gan = getCentavos(sp_split[3]);
                element.total_gan_dia = getCentavos(sp_split[4]);
                element.cuota_plat_r = getCentavos(sp_split[5]);
                element.cuota_socio_r = getCentavos(sp_split[6]);
                element.rango_fechas = getRangeDate(sp_split[7]);
                element.cant_servicios = sp_split[8];
                element.ganancia_final = getCentavos(sp_split[9]);
                element.out_adeudo_plataforma_efec = getCentavos(sp_split[10]);
                element.out_adeudo_socio_efec = getCentavos(sp_split[11]);

                delete element.sp_cinterfaz75_mibilletera;

                /*element.tarjeta_gan = getCentavos(element.tarjeta_gan);
                element.efectivo_gan = getCentavos(element.efectivo_gan);
                element.externo_gan = getCentavos(element.externo_gan);
                element.total_gan = getCentavos(element.total_gan);
                element.total_gan_dia = getCentavos(element.total_gan_dia);
                element.cuota_plat_r = getCentavos(element.cuota_plat_r);
                element.cuota_socio_r = getCentavos(element.cuota_socio_r);
                element.rango_fechas = getDate(element.rango_fechas);
                element.ganancia_final = getCentavos(element.ganancia_final);
                element.out_adeudo_plataforma_efec = getCentavos(element.out_adeudo_plataforma_efec);
                element.out_adeudo_socio_efec = getCentavos(element.out_adeudo_socio_efec);*/
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
    var query = "select interfaz126fleethome2('"+id_usuario+"')";
    // Se reemplaza las comillas doble por simples para la consulta
    query = query.replace(/["]+/g, '');

    pool.query(
        query, (error, results) => {

            results.rows.forEach(function(element){
                const sp_split = element.interfaz126fleethome2.replace('\"','').split(',');

                element.out_info_vehiculo = sp_split[0].replace('\"','').replace('(','');
                element.out_ganancia_propietario = getCentavos(sp_split[1].replace(')',''));

                delete element.interfaz126fleethome2;
            });

            try {
                // Call back pata encriptar cada elemento de la respuesta para envío1
                // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
                if (encrypt) {
                    setTimeout(function () {
                        results.rows.forEach(function (element) {
                            element.out_info_vehiculo != null ? element.out_info_vehiculo = aes256.encrypt(key, element.out_info_vehiculo.toString()) : element.out_info_vehiculo = element.out_info_vehiculo;
                            element.out_ganancia_propietario != null ? element.out_ganancia_propietario = aes256.encrypt(key, element.out_ganancia_propietario.toString()) : element.out_ganancia_propietario = element.out_ganancia_propietario;
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