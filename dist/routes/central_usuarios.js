"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller.central_usuarios");

var router = (0, _express.Router)(); //CONSULTAR RAIZ CON METODO GET Central Usuarios/

router.get('/', function (req, res) {
  res.send("Web service ejecutandose: Central Usuarios\n");
}); // /central_usuarios/interfaz112/MejoresComentariosUsuarios

router.post('/interfaz112/MejoresComentariosUsuarios', _controller.postsp_cinterfaz112MejoresComentariosUsuarios); // /central_usuarios/interfaz112/LogrosUsuarios

router.post('/interfaz112/LogrosUsuarios', _controller.postsp_cinterfaz112LogrosUsuarios); // /central_usuarios/interfaz112/DatosUsuarios

router.post('/interfaz112/DatosUsuarios', _controller.postsp_cinterfaz112DatosUsuarios);
var _default = router;
exports["default"] = _default;