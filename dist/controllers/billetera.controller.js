"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post_interfaz75_MiBilletera = post_interfaz75_MiBilletera;
exports.post_interfaz78_Ganancias = post_interfaz78_Ganancias;
exports.post_interfaz78_2_Ganancias = post_interfaz78_2_Ganancias;
exports.post_interfaz79_Tarjeta = post_interfaz79_Tarjeta;
exports.post_interfaz79_2_Tarjeta = post_interfaz79_2_Tarjeta;
exports.post_interfaz80_Tarjeta = post_interfaz80_Tarjeta;
exports.post_interfaz80_2_Tarjeta = post_interfaz80_2_Tarjeta;
exports.post_interfaz81_verViajes = post_interfaz81_verViajes;

var _database = require("../database/database");

var _logs = require("../resources/logs");

var _DataValues = require("../resources/DataValues");

var aes256 = require('aes256');

var key = "92AE31A79FEEB2A3";
var encrypt = false;
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */

function post_interfaz75_MiBilletera(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz75_MiBilletera('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      element.tarjeta_gan = (0, _DataValues.getCentavos)(element.tarjeta_gan);
      element.efectivo_gan = (0, _DataValues.getCentavos)(element.efectivo_gan);
      element.externo_gan = (0, _DataValues.getCentavos)(element.externo_gan);
      element.total_gan = (0, _DataValues.getCentavos)(element.total_gan);
      element.total_gan_dia = (0, _DataValues.getCentavos)(element.total_gan_dia);
      element.cuota_plat_r = (0, _DataValues.getCentavos)(element.cuota_plat_r);
      element.cuota_socio_r = (0, _DataValues.getCentavos)(element.cuota_socio_r);
      element.rango_fechas = (0, _DataValues.getRangeDate2)(element.rango_fechas);
      element.cant_servicios = element.cant_servicios.toString();
      element.ganancia_final = (0, _DataValues.getCentavos)(element.ganancia_final);
      element.out_adeudo_plataforma_efec = (0, _DataValues.getCentavos)(element.out_adeudo_plataforma_efec);
      element.out_adeudo_socio_efec = (0, _DataValues.getCentavos)(element.out_adeudo_socio_efec);
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
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_mi_billetera");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_mi_billetera");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_mi_billetera");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz78_Ganancias(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz78_Ganacias('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_id_tran = element.out_id_tran.toString();
      element.out_form_pago = element.out_form_pago.toString();
      element.out_id_serv = element.out_id_serv.toString();
      element.out_total = (0, _DataValues.getCentavos)(element.out_total);
      element.out_cuota_plat = (0, _DataValues.getCentavos)(element.out_cuota_plat);
      element.out_cuota_socio = (0, _DataValues.getCentavos)(element.out_cuota_socio);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_id_tran != null ? element.out_id_tran = aes256.encrypt(key, element.out_id_tran.toString()) : element.out_id_tran = element.out_id_tran;
            element.out_form_pago != null ? element.out_form_pago = aes256.encrypt(key, element.out_form_pago.toString()) : element.out_form_pago = element.out_form_pago;
            element.out_id_serv != null ? element.out_id_serv = aes256.encrypt(key, element.out_id_serv.toString()) : element.out_id_serv = element.out_id_serv;
            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
            element.out_cuota_plat != null ? element.out_cuota_plat = aes256.encrypt(key, element.out_cuota_plat.toString()) : element.out_cuota_plat = element.out_cuota_plat;
            element.out_cuota_socio != null ? element.out_cuota_socio = aes256.encrypt(key, element.out_cuota_socio.toString()) : element.out_cuota_socio = element.out_cuota_socio;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_ganancias_1");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_ganancias_1");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_ganancias_1");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz78_2_Ganancias(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz78_2_Ganancias('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_total = (0, _DataValues.getCentavos)(element.out_total);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_ganancias_2");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_ganancias_2");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_ganancias_2");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz79_Tarjeta(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz79_Balance('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_id_tran = element.out_id_tran.toString();
      element.out_form_pago = element.out_form_pago.toString();
      element.out_id_serv = element.out_id_serv.toString();
      element.out_total = (0, _DataValues.getCentavos)(element.out_total);
      element.out_cuota_plat = (0, _DataValues.getCentavos)(element.out_cuota_plat);
      element.out_cuota_socio = (0, _DataValues.getCentavos)(element.out_cuota_socio);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_id_tran != null ? element.out_id_tran = aes256.encrypt(key, element.out_id_tran.toString()) : element.out_id_tran = element.out_id_tran;
            element.out_form_pago != null ? element.out_form_pago = aes256.encrypt(key, element.out_form_pago.toString()) : element.out_form_pago = element.out_form_pago;
            element.out_id_serv != null ? element.out_id_serv = aes256.encrypt(key, element.out_id_serv.toString()) : element.out_id_serv = element.out_id_serv;
            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
            element.out_cuota_plat != null ? element.out_cuota_plat = aes256.encrypt(key, element.out_cuota_plat.toString()) : element.out_cuota_plat = element.out_cuota_plat;
            element.out_cuota_socio != null ? element.out_cuota_socio = aes256.encrypt(key, element.out_cuota_socio.toString()) : element.out_cuota_socio = element.out_cuota_socio;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_total_1");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_total_1");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_tarjeta_total_1");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz79_2_Tarjeta(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz79_2_Balance('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_total = (0, _DataValues.getCentavos)(element.out_total);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_total_2");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_total_2");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_tarjeta_total_2");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz80_Tarjeta(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz80_Balance('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_id_servicio = element.out_id_servicio.toString();
      element.out_ganancia = (0, _DataValues.getCentavos)(element.out_ganancia);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_id_serv != null ? element.out_id_serv = aes256.encrypt(key, element.out_id_serv.toString()) : element.out_id_serv = element.out_id_serv;
            element.out_ganancia != null ? element.out_ganancia = aes256.encrypt(key, element.out_ganancia.toString()) : element.out_ganancia = element.out_ganancia;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_ganancias_1");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_ganancias_1");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_tarjeta_ganancias_1");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz80_2_Tarjeta(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_CInterfaz80_2_Balance('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_total = (0, _DataValues.getCentavos)(element.out_total);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_ganancias_2");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tarjeta_ganancias_2");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_tarjeta_ganancias_2");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}
/**
 *
 *
 * @export
 * @param {*} request
 * @param {*} response
 */


function post_interfaz81_verViajes(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select * from sp_cinterfaz81_verViajes('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    results.rows.forEach(function (element) {
      element.id_transaccion = element.id_transaccion.toString();
      var fecha_hora = (0, _DataValues.getDateHourFullDate)(element.out_fecha);
      element.out_id_serv = element.out_id_serv.toString();
      element.out_fecha = fecha_hora[0];
      element.out_hora = fecha_hora[1];
      element.out_total = (0, _DataValues.getCentavos)(element.out_total);
      element.out_propina = (0, _DataValues.getCentavos)(element.out_propina);
    });

    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion;
            element.out_fecha != null ? element.out_fecha = aes256.encrypt(key, element.out_fecha.toString()) : element.out_fecha = element.out_fecha;
            element.out_hora != null ? element.out_hora = aes256.encrypt(key, element.out_hora.toString()) : element.out_hora = element.out_hora;
            element.out_id_serv != null ? element.out_id_serv = aes256.encrypt(key, element.out_id_serv.toString()) : element.out_id_serv = element.out_id_serv;
            element.out_origen != null ? element.out_origen = aes256.encrypt(key, element.out_origen.toString()) : element.out_origen = element.out_origen;
            element.out_destino != null ? element.out_destino = aes256.encrypt(key, element.out_destino.toString()) : element.out_destino = element.out_destino;
            element.out_total != null ? element.out_total = aes256.encrypt(key, element.out_total.toString()) : element.out_total = element.out_total;
            element.out_propina != null ? element.out_propina = aes256.encrypt(key, element.out_propina.toString()) : element.out_propina = element.out_propina;
            element.out_estado_servicio != null ? element.out_estado_servicio = aes256.encrypt(key, element.out_estado_servicio.toString()) : element.out_estado_servicio = element.out_estado_servicio;
            element.encrypt = true;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_ver_viajes");
        }, 100);
      } else {
        results.rows.forEach(function (element) {
          element.encrypt = false;
        });
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_ver_viajes");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_ver_viajes");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos”"
      });
    }
  });
}