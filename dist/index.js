"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

require("@babel/polyfill");

var _billetera = _interopRequireDefault(require("./routes/billetera"));

var _inicio_fleet = _interopRequireDefault(require("./routes/inicio_fleet"));

var _central = _interopRequireDefault(require("./routes/central"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios"));

var _central_usuarios = _interopRequireDefault(require("./routes/central_usuarios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*require('dotenv').config();
import app from './app';
import '@babel/polyfill';

const hostname = app.get('SERVER_HOST'); //DIRECCION DEL SERVIDOR
const port = app.get('HTTP_PORT'); //PUERTO

app.listen(port, hostname, function () {
    console.log(`Servidor ejecutandose en http://${hostname}:${port}`);
});*/
require('dotenv').config(); //import server from './app';


//Variable que contiene la aplicación del framework express
var app = (0, _express["default"])();
var port = 3000; // Configuración en las variables de entorno

app.set('SERVER_HOST', process.env.SERVER_HOST || '127.0.0.1');
app.set('HTTP_PORT', process.env.HTTP_PORT || 3001);
app.set('DB_USER_CENTRAL', process.env.DB_USER_CENTRAL);
app.set('DB_HOST_CENTRAL', process.env.DB_HOST_CENTRAL);
app.set('DB_CENTRAL', process.env.DB_CENTRAL);
app.set('DB_PASS_CENTRAL', process.env.DB_PASS_CENTRAL);
app.set('DB_PORT_CENTRAL', process.env.DB_PORT_CENTRAL);
app.set('DB_USER_USUARIOS', process.env.DB_USER_USUARIOS);
app.set('DB_HOST_USUARIOS', process.env.DB_HOST_USUARIOS);
app.set('DB_USUARIOS', process.env.DB_USUARIOS);
app.set('DB_PASS_USUARIOS', process.env.DB_PASS_USUARIOS);
app.set('DB_PORT_USUARIOS', process.env.DB_PORT_USUARIOS); //importación de las rutas

//middlewares
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //rutas raíz

app.use('/billetera', _billetera["default"]);
app.use('/inicio_fleet', _inicio_fleet["default"]);
app.use('/central', _central["default"]);
app.use('/usuarios', _usuarios["default"]);
app.use('/central_usuarios', _central_usuarios["default"]);
app.get('/download', function (req, res) {
  res.sendFile('public/WS_Central_Jimmy.zip', {
    root: __dirname
  }); //console.log(res);
});
app.listen(port, function () {
  return console.log("Web service escuchando por puerto ".concat(port));
});
var _default = app;
exports["default"] = _default;