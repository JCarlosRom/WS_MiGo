"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post_interfaz41_fleet_home = post_interfaz41_fleet_home;
exports.post_interfaz42_fleet_home = post_interfaz42_fleet_home;
exports.post_interfaz42_fleet_home_filtro = post_interfaz42_fleet_home_filtro;
exports.post_interfaz121_tiempo_real = post_interfaz121_tiempo_real;
exports.post_interfaz124_socio_conductor = post_interfaz124_socio_conductor;
exports.post_interfaz126_socio_no_conductor = post_interfaz126_socio_no_conductor;

var _database = require("../database/database");

var _logs = require("../resources/logs");

var aes256 = require('aes256');

var key = "92AE31A79FEEB2A3";
var encrypt = 0; //interfaz 41 home fleet

function post_interfaz41_fleet_home(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz41fleethome('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt == 1) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion; //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_inicio_fleet");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_inicio_fleet");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_inicio_fleet");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
} // interfaz 41 home fleet sin filtro


function post_interfaz42_fleet_home(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz41FleetHome3('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt == 1) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion; //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_inicio_fleet_1");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_inicio_fleet_1");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_inicio_fleet_1");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos”"
      });
    }
  });
} //interfaz 42 home fleet con filtro


function post_interfaz42_fleet_home_filtro(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body = request.body,
      id_usuario = _request$body.id_usuario,
      fecha_filtro = _request$body.fecha_filtro;
  valoresEntrada.id_usuario = id_usuario;
  valoresEntrada.fecha_filtro = fecha_filtro; // Query

  var query = "select interfaz41FleetHome3_Filtro('" + id_usuario + "','" + fecha_filtro + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt == 1) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion; //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_inicio_fleet_2_filtro");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_inicio_fleet_2_filtro");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_inicio_fleet_2_filtro");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
} //interfaz 121 reporte tiempo real


function post_interfaz121_tiempo_real(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select sp_cinterfaz121_FleetTiempo_real('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt == 1) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion; //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tiempo_real");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_tiempo_real");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_tiempo_real");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
} //interfaz 124 socio conductor


function post_interfaz124_socio_conductor(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select sp_cinterfaz75_mibilletera('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt == 1) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion; //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_socio_conductor");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_socio_conductor");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_socio_conductor");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
} //interfaz 126 socio no conductor


function post_interfaz126_socio_no_conductor(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz126fleethome2('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
    try {
      // Call back pata encriptar cada elemento de la respuesta para envío1
      // El call back se utilizó para dar un tiempo en lo que se crea el log y se envía la información
      if (encrypt == 1) {
        setTimeout(function () {
          results.rows.forEach(function (element) {
            element.id_transaccion != null ? element.id_transaccion = aes256.encrypt(key, element.id_transaccion.toString()) : element.id_transaccion = element.id_transaccion; //element.nombre != null ? element.nombre = aes256.encrypt(key, element.nombre) : element.nombre = element.nombre;
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_socio_no_conductor");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_socio_no_conductor");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_socio_no_conductor");
      response.status(404).json({
        msg: "015, “No se estableció conexión con la base de datos de monedero”"
      });
    }
  });
}