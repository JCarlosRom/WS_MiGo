"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postsp_cinterfaz112MejoresComentariosUsuarios = postsp_cinterfaz112MejoresComentariosUsuarios;
exports.postsp_cinterfaz112LogrosUsuarios = postsp_cinterfaz112LogrosUsuarios;
exports.postsp_cinterfaz112DatosUsuarios = postsp_cinterfaz112DatosUsuarios;

var _database = require("../database/database");

var _logs = require("../resources/logs");

var aes256 = require('aes256');

var key = "92AE31A79FEEB2A3";
var encrypt = false;
/*BASE CENTRAL-USUARIOS */

function postsp_cinterfaz112MejoresComentariosUsuarios(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_conductor = request.body.id_conductor;
  valoresEntrada.id_conductor = id_conductor; // Query

  var query = "select interfaz112_MejoresComentariosUsuario('" + id_conductor + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
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
/*BASE CENTRAL-USUARIOS */


function postsp_cinterfaz112LogrosUsuarios(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_conductor = request.body.id_conductor;
  valoresEntrada.id_conductor = id_conductor; // Query

  var query = "select interfaz112_logrosusuario('" + id_conductor + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
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
/*BASE CENTRAL-USUARIOS */


function postsp_cinterfaz112DatosUsuarios(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_conductor = request.body.id_conductor;
  valoresEntrada.id_conductor = id_conductor; // Query

  var query = "select interfaz112_DatosUsuario('" + id_conductor + "')"; // Se reemplaza las comillas doble por simples para la consulta

  query = query.replace(/["]+/g, '');

  _database.pool.query(query, function (error, results) {
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