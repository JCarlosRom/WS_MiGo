"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _billetera = require("../controllers/billetera.controller");

var router = (0, _express.Router)(); //CONSULTAR RAIZ CON METODO GET

router.get('/', function (req, res) {
  res.send("Web service ejecutandose\n");
});
/*MIGO METODOS */

router.post('/interfaz36/notificaciones', _billetera.postsp_CInterfaz36_notificaciones);
router.post('/interfaz75/billetera', _billetera.postsp_CInterfaz75_MiBilletera);
router.post('/interfaz78_2/ganancias', _billetera.postsp_CInterfaz78_2_Ganancias);
router.post('/interfaz78/ganancias', _billetera.postsp_CInterfaz78_Ganancias);
router.post('/interfaz79/balance', _billetera.postsp_CInterfaz79_Balance);
router.post('/interfaz79_2/balance', _billetera.postsp_CInterfaz79_2_Balance);
router.post('/interfaz80/balance', _billetera.postsp_CInterfaz80_Balance);
router.post('/interfaz80_2/balance', _billetera.postsp_CInterfaz80_2_Balance);
router.post('/interfaz81/verviajes', _billetera.postsp_cinterfaz81_verViajes);
var _default = router;
exports["default"] = _default;