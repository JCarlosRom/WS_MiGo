"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postsp_CInterfaz36_notificaciones = postsp_CInterfaz36_notificaciones;
exports.postsp_cinterfaz101_CalificacionConductorPasajero = postsp_cinterfaz101_CalificacionConductorPasajero;
exports.postsp_cinterfaz104_VerCupones = postsp_cinterfaz104_VerCupones;
exports.postsp_cinterfaz132_RegistroFacturacion = postsp_cinterfaz132_RegistroFacturacion;
exports.postsp_cinterfaz195_CalificacionPasajeroConductor = postsp_cinterfaz195_CalificacionPasajeroConductor;
exports.postsp_cinterfaz204MostrarDestinosFavoritos = postsp_cinterfaz204MostrarDestinosFavoritos;
exports.postsp_cinterfaz207AgregarDestinosFavoritos = postsp_cinterfaz207AgregarDestinosFavoritos;
exports.postsp_cinterfaz111Usuarios = postsp_cinterfaz111Usuarios;
exports.postsp_cinterfaz164UsuarioCalculoPrecios = postsp_cinterfaz164UsuarioCalculoPrecios;

var _database = require("../database/database");

var _logs = require("../resources/logs");

var aes256 = require('aes256');

var key = "92AE31A79FEEB2A3";
var encrypt = false;

function postsp_CInterfaz36_notificaciones(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_chofer = request.body.id_chofer;
  valoresEntrada.id_chofer = id_chofer; // Query

  var query = "select sp_cinterfaz36_notificaciones('" + id_chofer + "')"; // Se reemplaza las comillas doble por simples para la consulta

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
          msg: "015, “ERROR DE COMPATIBILIDAD DE DATOS REVISA-POST O CONSULTA CON EL DBA”"
        });
      }
    }
  });
}
/*BASE CENTRAL */


function postsp_cinterfaz101_CalificacionConductorPasajero(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body = request.body,
      id_servicio = _request$body.id_servicio,
      calificacion = _request$body.calificacion,
      comentario_conductor = _request$body.comentario_conductor;
  valoresEntrada.id_servicio = id_servicio;
  valoresEntrada.calificacion = calificacion;
  valoresEntrada.comentario_conductor = comentario_conductor; // Query

  var query = "select interfaz101CalificacionConductor_Usuario(" + id_servicio + "," + calificacion + ",'" + comentario_conductor + "')"; // Se reemplaza las comillas doble por simples para la consulta

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
/*BASE CENTRAL */


function postsp_cinterfaz104_VerCupones(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz104MisCupones('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

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
/*BASE CENTRAL */


function postsp_cinterfaz132_RegistroFacturacion(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body2 = request.body,
      id_usuario = _request$body2.id_usuario,
      rfc = _request$body2.rfc,
      razon_social = _request$body2.razon_social,
      nombre_vialidad = _request$body2.nombre_vialidad,
      colonia = _request$body2.colonia,
      numero_interior = _request$body2.numero_interior,
      numero_exterior = _request$body2.numero_exterior,
      codigo_postal = _request$body2.codigo_postal,
      municipio = _request$body2.municipio,
      localidad = _request$body2.localidad,
      entidad_federativa = _request$body2.entidad_federativa;
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
  valoresEntrada.entidad_federativa = entidad_federativa; // Query

  var query = "select interfaz132Facturacion(" + id_usuario + ",'" + rfc + "','" + razon_social + "','" + nombre_vialidad + "','" + colonia + "','" + numero_interior + "','" + numero_exterior + "','" + codigo_postal + "','" + municipio + "','" + localidad + "','" + entidad_federativa + "')"; // Se reemplaza las comillas doble por simples para la consulta

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
/*BASE CENTRAL */


function postsp_cinterfaz195_CalificacionPasajeroConductor(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body3 = request.body,
      id_servicio = _request$body3.id_servicio,
      calificacion = _request$body3.calificacion,
      comentario_usuario = _request$body3.comentario_usuario,
      reconocimiento = _request$body3.reconocimiento;
  valoresEntrada.id_servicio = id_servicio;
  valoresEntrada.calificacion = calificacion;
  valoresEntrada.comentario_usuario = comentario_usuario;
  valoresEntrada.reconocimiento = reconocimiento; // Query

  var query = "select interfaz195CalificacionUsuario_Conductor(" + id_servicio + "," + calificacion + ",'" + comentario_usuario + "'," + reconocimiento + ")"; // Se reemplaza las comillas doble por simples para la consulta

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
/*BASE CENTRAL */


function postsp_cinterfaz204MostrarDestinosFavoritos(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_usuario = request.body.id_usuario;
  valoresEntrada.id_usuario = id_usuario; // Query

  var query = "select interfaz204MostrarDestinosFavoritos('" + id_usuario + "')"; // Se reemplaza las comillas doble por simples para la consulta

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
/*BASE CENTRAL */


function postsp_cinterfaz207AgregarDestinosFavoritos(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body4 = request.body,
      id_usuario = _request$body4.id_usuario,
      nombre_destino = _request$body4.nombre_destino,
      direccion_destino = _request$body4.direccion_destino,
      coordenadas = _request$body4.coordenadas;
  valoresEntrada.id_usuario = id_usuario;
  valoresEntrada.nombre_destino = nombre_destino;
  valoresEntrada.direccion_destino = direccion_destino;
  valoresEntrada.coordenadas = coordenadas; // Query

  var query = "select interfaz207AgregarDestinosFavoritos('" + id_usuario + "','" + nombre_destino + "','" + direccion_destino + "','" + coordenadas + "')"; // Se reemplaza las comillas doble por simples para la consulta

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
/*BASE CENTRAL */


function postsp_cinterfaz111Usuarios(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var id_servicio = request.body.id_servicio.id_servicio;
  valoresEntrada.id_servicio = id_servicio; // Query

  var query = "select interfaz111Usuario(" + id_servicio + ")"; // Se reemplaza las comillas doble por simples para la consulta

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

function postsp_cinterfaz164UsuarioCalculoPrecios(request, response) {
  var valoresEntrada = {};
  var resultado = {}; // Variables de entrada

  var _request$body5 = request.body,
      distancia_km = _request$body5.distancia_km,
      tiempo_min = _request$body5.tiempo_min;
  valoresEntrada.distancia_km = distancia_km;
  valoresEntrada.tiempo_min = tiempo_min; // Query

  var query = "select interfaz164Usuarios(" + distancia_km + "," + tiempo_min + ")"; // Se reemplaza las comillas doble por simples para la consulta

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