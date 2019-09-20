"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLog = createLog;
exports.createLogerr = createLogerr;

// Función para crear logs de errores
function createLog(results, valoresEntrada, module) {
  //
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;

  var fs = require('fs');

  var util = require('util');

  var dir = './logs';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  } // Nombre de los logs Instancia del sp + Fecha actual + Número de archivo (Para evitar sobrescribir)


  fs.readdir(dir, function (err, files) {
    var log = __dirname + '/../../logs/ws_db_central_' + today + '.log';

    if (!fs.existsSync(log)) {
      var log_file = fs.createWriteStream(__dirname + '/../../logs/ws_db_central_' + today + '.log', {
        flags: 'w'
      });
      log_file.write(util.format(module) + '\n');
      log_file.write(util.format("Valores de entrada") + '\n');
      log_file.write(util.format(valoresEntrada) + '\n');
      log_file.write(util.format("Valores de salida") + '\n');
      log_file.write(util.format(results) + '\n');
    } else {
      var valoresEntradaOW = util.format(module) + '\n' + util.format("Valores de entrada") + '\n' + util.format(valoresEntrada) + '\n' + util.format("Valores de salida") + '\n' + util.format(results) + '\n';
      fs.appendFile(log, valoresEntradaOW + '\n', function (err) {
        if (err) throw err;
      });
    }
  });
}

; // Función para crear logs de peticiones: createLog(resultado, modulo de petición)

function createLogerr(results, valoresEntrada, module) {
  //
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;

  var fs = require('fs');

  var util = require('util');

  var dir = './logserr';

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  } // Nombre de los logs Instancia del sp + Fecha actual + Número de archivo (Para evitar sobrescribir)


  fs.readdir(dir, function (err, files) {
    var log = __dirname + '/../../logserr/ws_db_central_' + today + '.log';

    if (!fs.existsSync(log)) {
      var log_file = fs.createWriteStream(__dirname + '/../../logserr/ws_db_central_' + today + '.log', {
        flags: 'w'
      });
      log_file.write(util.format(module) + '\n');
      log_file.write(util.format("Valores de entrada") + '\n');
      log_file.write(util.format(valoresEntrada) + '\n');
      log_file.write(util.format("Valores de salida") + '\n');
      log_file.write(util.format(results) + '\n');
    } else {
      var valoresEntradaOW = util.format(module) + '\n' + util.format("Valores de entrada") + '\n' + util.format(valoresEntrada) + '\n' + util.format("Valores de salida") + '\n' + util.format(results) + '\n';
      fs.appendFile(log, valoresEntradaOW + '\n', function (err) {
        if (err) throw err;
      });
    }
  });
}

;