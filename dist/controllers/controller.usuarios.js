"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postsp_cinterfaz98_AgregarTarjeta = postsp_cinterfaz98_AgregarTarjeta;
exports.postsp_cinterfaz98_UpdateDeleteTarjeta = postsp_cinterfaz98_UpdateDeleteTarjeta;
exports.postsp_cinterfaz105_MetodoPagoVerTarjetas = postsp_cinterfaz105_MetodoPagoVerTarjetas;
exports.postsp_cinterfaz108_109Usuarios = postsp_cinterfaz108_109Usuarios;

var _database = require("../database/database");

var _logs = require("../resources/logs");

var aes256 = require('aes256');

var key = "92AE31A79FEEB2A3";
var encrypt = false;
/* BASE USUARIOS*/

function postsp_cinterfaz98_AgregarTarjeta(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body = request.body,
      id_usuario = _request$body.id_usuario,
      numero_tarjeta = _request$body.numero_tarjeta,
      fecha_vigencia = _request$body.fecha_vigencia,
      ccv = _request$body.ccv;
  valoresEntrada.id_usuario = id_usuario;
  valoresEntrada.numero_tarjeta = numero_tarjeta;
  valoresEntrada.fecha_vigencia = fecha_vigencia;
  valoresEntrada.ccv = ccv; // Query

  var query = "select interfaz98AgregarTarjeta('" + id_usuario + "'," + numero_tarjeta + ",'" + fecha_vigencia + "'," + ccv + ")"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool2.query(query, function (error, results) {
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
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_operadores");

      if (error == "Contraseña incorrecta") {
        response.status(404).json({
          msg: '005, “Usuario y/o contraseña inválidos”'
        });
      } else {
        response.status(404).json({
          msg: "015, “No se estableció conexión con la base de datos de monedero”"
        });
      }
    }
  });
}
/*BASE USUARIOS */


function postsp_cinterfaz98_UpdateDeleteTarjeta(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body2 = request.body,
      id_usuario = _request$body2.id_usuario,
      numero_tarjeta = _request$body2.numero_tarjeta,
      fecha_vigencia = _request$body2.fecha_vigencia,
      ccv = _request$body2.ccv,
      last4_digit = _request$body2.last4_digit,
      action = _request$body2.action;
  valoresEntrada.id_usuario = id_usuario;
  valoresEntrada.numero_tarjeta = numero_tarjeta;
  valoresEntrada.fecha_vigencia = fecha_vigencia;
  valoresEntrada.ccv = ccv;
  valoresEntrada.last4_digit = last4_digit;
  valoresEntrada.action = action; //Action 0 update, Action 1 delete
  // Query

  var query = "select interfaz106ActualizaTarjeta(" + id_usuario + "," + numero_tarjeta + ",'" + fecha_vigencia + "'," + ccv + ",'" + last4_digit + "'," + action + ")"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool2.query(query, function (error, results) {
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
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_operadores");

      if (error == "Contraseña incorrecta") {
        response.status(404).json({
          msg: '005, “Usuario y/o contraseña inválidos”'
        });
      } else {
        response.status(404).json({
          msg: "015, “No se estableció conexión con la base de datos de monedero”"
        });
      }
    }
  });
}
/*BASE USUARIOS */


function postsp_cinterfaz105_MetodoPagoVerTarjetas(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz105MetodoPago(" + id_usuario + ")"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool2.query(query, function (error, results) {
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
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_operadores");

      if (error == "Contraseña incorrecta") {
        response.status(404).json({
          msg: '005, “Usuario y/o contraseña inválidos”'
        });
      } else {
        response.status(404).json({
          msg: "015, “No se estableció conexión con la base de datos de monedero”"
        });
      }
    }
  });
}
/*BASE USUARIO */


function postsp_cinterfaz108_109Usuarios(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz108_109Usuario(" + id_usuario + ")"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');
  pool.query(query, function (error, results) {
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
          });
          resultado.data = results.rows;
          response.status(200).json(resultado); // Creación de log

          (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
        }, 100);
      } else {
        resultado.datos = results.rows;
        response.status(200).json(resultado); // Creación de log

        (0, _logs.createLog)(resultado, valoresEntrada, "ws_consultar_operadores");
      }
    } catch (error) {
      (0, _logs.createLogerr)(error, valoresEntrada, "ws_consultar_operadores");

      if (error == "Contraseña incorrecta") {
        response.status(404).json({
          msg: '005, “Usuario y/o contraseña inválidos”'
        });
      } else {
        response.status(404).json({
          msg: "015, “No se estableció conexión con la base de datos de monedero”"
        });
      }
    }
  });
}