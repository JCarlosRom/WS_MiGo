"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller.central");

var router = (0, _express.Router)(); //CONSULTAR RAIZ CON METODO GET Central Usuarios/

router.get('/', function (req, res) {
  res.send("Web service ejecutandose: Central\n");
}); // /central/interfaz36/notificaciones

router.post('/interfaz36/notificaciones', _controller.postsp_CInterfaz36_notificaciones); // /central/interfaz101_CalificacionConductorPasajero

router.post('/interfaz101/CalificacionConductorPasajero', _controller.postsp_cinterfaz101_CalificacionConductorPasajero); // /central/interfaz104_VerCupones

router.post('/interfaz104/VerCupones', _controller.postsp_cinterfaz104_VerCupones); // /central/interfaz132/RegistroFacturacion

router.post('/interfaz132/RegistroFacturacion', _controller.postsp_cinterfaz132_RegistroFacturacion); // /central/interfaz195/CalificacionPasajeroConductor

router.post('/interfaz195/CalificacionPasajeroConductor', _controller.postsp_cinterfaz195_CalificacionPasajeroConductor); // /central/interfaz204/MostrarDestinosFavoritos

router.post('/interfaz204/MostrarDestinosFavoritos', _controller.postsp_cinterfaz204MostrarDestinosFavoritos); // /central/interfaz207/AgregarDestinosFavoritos

router.post('/interfaz207/AgregarDestinosFavoritos', _controller.postsp_cinterfaz207AgregarDestinosFavoritos); // /central/interfaz111/Usuarios

router.post('/interfaz111/Usuarios', _controller.postsp_cinterfaz111Usuarios); // /central/interfaz164/UsuarioCalculoPrecios

router.post('/interfaz164/UsuarioCalculoPrecios', _controller.postsp_cinterfaz164UsuarioCalculoPrecios);
var _default = router;
exports["default"] = _default;