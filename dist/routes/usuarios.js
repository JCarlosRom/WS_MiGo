"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller.usuarios");

var router = (0, _express.Router)(); //CONSULTAR RAIZ CON METODO GET Central Usuarios/

router.get('/', function (req, res) {
  res.send("Web service ejecutandose: Usuarios\n");
}); // /usuarios/interfaz98/AgregarTarjeta

router.post('/interfaz98/AgregarTarjeta', _controller.postsp_cinterfaz98_AgregarTarjeta); // /usuarios/interfaz98/UpdateDeleteTarjeta

router.post('/interfaz98/UpdateDeleteTarjeta', _controller.postsp_cinterfaz98_UpdateDeleteTarjeta); // /usuarios/interfaz105/MetodoPagoVerTarjetas

router.post('/interfaz105/MetodoPagoVerTarjetas', _controller.postsp_cinterfaz105_MetodoPagoVerTarjetas); // /usuarios/interfaz108_109/Usuarios

router.post('/interfaz108_109/Usuarios', _controller.postsp_cinterfaz108_109Usuarios);
var _default = router;
exports["default"] = _default;