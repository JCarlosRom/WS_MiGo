"use strict";

var _app = _interopRequireDefault(require("./app"));

require("@babel/polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var hostname = _app["default"].get('SERVER_HOST'); //DIRECCION DEL SERVIDOR


var port = _app["default"].get('HTTP_PORT'); //PUERTO


_app["default"].listen(port, hostname, function () {
  console.log('Web service escuchando en http://' + hostname + ':' + port);
});